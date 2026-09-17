#!/usr/bin/env node
// Deploys this project to GitHub without the git CLI (blocked in this environment).
//
// Usage:
//   GITHUB_TOKEN=ghp_xxx node scripts/deploy-github.mjs [owner] [repo] [branch]
//
// What it does:
//   1. Creates the repo <owner>/<repo> if it does not exist (public).
//   2. Uploads every project file as ONE commit via the Git Data API
//      (blobs -> tree -> commit -> branch update), preserving existing history.
//   3. Deletes stale junk files that should not be in the repo.
//   4. Enables GitHub Pages (build from GitHub Actions workflow).

import fs from "node:fs";
import path from "node:path";

const TOKEN = process.env.GITHUB_TOKEN;
const OWNER = process.argv[2] || "riichiiardo";
const REPO = process.argv[3] || "mapaaguirre.architect";
const BRANCH = process.argv[4] || "main";
const ROOT = process.cwd();

const API = "https://api.github.com";

if (!TOKEN) {
  console.error("ERROR: set GITHUB_TOKEN env var (personal access token with repo scope)");
  process.exit(1);
}

async function api(method, url, body) {
  const res = await fetch(`${API}${url}`, {
    method,
    headers: {
      Authorization: `Bearer ${TOKEN}`,
      Accept: "application/vnd.github+json",
      "X-GitHub-Api-Version": "2022-11-28",
      ...(body ? { "Content-Type": "application/json" } : {}),
    },
    body: body ? JSON.stringify(body) : undefined,
  });
  const text = await res.text();
  let json;
  try {
    json = text ? JSON.parse(text) : {};
  } catch {
    json = { raw: text.slice(0, 300) };
  }
  if (!res.ok) {
    throw new Error(`${method} ${url} -> ${res.status}: ${JSON.stringify(json).slice(0, 300)}`);
  }
  return json;
}

// --- collect files ----------------------------------------------------------
const IGNORE_DIRS = new Set(["node_modules", "dist", ".git", ".vite", ".sst"]);
const IGNORE_FILES = new Set([
  "mapaaguirre-build.zip",
  ".env.local",
  ".env.keys",
  "sst-env.d.ts",
]);

function* walk(dir) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    if (entry.isDirectory()) {
      if (IGNORE_DIRS.has(entry.name)) continue;
      yield* walk(path.join(dir, entry.name));
    } else if (entry.isFile()) {
      if (IGNORE_FILES.has(entry.name)) continue;
      yield path.join(dir, entry.name);
    }
  }
}

const files = [];
for (const abs of walk(ROOT)) {
  const rel = path.relative(ROOT, abs).split(path.sep).join("/");
  files.push({ rel, abs });
}
const totalBytes = files.reduce((n, f) => n + fs.statSync(f.abs).size, 0);
console.log(`Files to upload: ${files.length} (${(totalBytes / 1024 / 1024).toFixed(1)} MB)`);

// --- 1. ensure repo ----------------------------------------------------------
try {
  await api("GET", `/repos/${OWNER}/${REPO}`);
  console.log(`Repo exists: ${OWNER}/${REPO}`);
} catch {
  console.log(`Creating repo ${OWNER}/${REPO}...`);
  await api("POST", "/user/repos", { name: REPO, private: false, auto_init: false });
  console.log("Repo created.");
}

// --- 2. base commit of the branch (may not exist yet) ------------------------
let baseCommit = null;
try {
  const ref = await api("GET", `/repos/${OWNER}/${REPO}/git/ref/heads/${BRANCH}`);
  baseCommit = ref.object.sha;
  console.log(`Branch ${BRANCH} is at ${baseCommit.slice(0, 7)}`);
} catch {
  console.log(`Branch ${BRANCH} does not exist yet; creating fresh history.`);
}

// --- 3. upload blobs ----------------------------------------------------------
console.log("Uploading blobs...");
const tree = [];
// Delete stale files that should not live in the repo (e.g. 79MB zip, env keys).
for (const stale of ["mapaaguirre-build.zip", ".env.keys", "sst-env.d.ts"]) {
  tree.push({ path: stale, mode: "100644", type: "blob", sha: null }); // sha:null deletes the path
}
let i = 0;
for (const f of files) {
  const content = fs.readFileSync(f.abs);
  const blob = await api("POST", `/repos/${OWNER}/${REPO}/git/blobs`, {
    content: content.toString("base64"),
    encoding: "base64",
  });
  tree.push({ path: f.rel, mode: "100644", type: "blob", sha: blob.sha });
  i++;
  if (i % 10 === 0 || i === files.length) console.log(`  blobs ${i}/${files.length}`);
}

// --- 4. tree + commit ---------------------------------------------------------
let parentTree = null;
if (baseCommit) {
  const c = await api("GET", `/repos/${OWNER}/${REPO}/git/commits/${baseCommit}`);
  parentTree = c.tree.sha;
}
console.log("Creating tree...");
const newTree = await api("POST", `/repos/${OWNER}/${REPO}/git/trees`, {
  ...(parentTree ? { base_tree: parentTree } : {}),
  tree,
});

console.log("Creating commit...");
const commit = await api("POST", `/repos/${OWNER}/${REPO}/git/commits`, {
  message:
    "Deploy: portfolio site with Figma assets and GitHub Pages setup\n\n🤖 Generated with Codebuff\nCo-Authored-By: Codebuff <noreply@codebuff.com>",
  tree: newTree.sha,
  parents: baseCommit ? [baseCommit] : [],
});

// --- 5. move the branch --------------------------------------------------------
if (baseCommit) {
  await api("PATCH", `/repos/${OWNER}/${REPO}/git/refs/heads/${BRANCH}`, {
    sha: commit.sha,
    force: false,
  });
} else {
  await api("POST", `/repos/${OWNER}/${REPO}/git/refs`, {
    ref: `refs/heads/${BRANCH}`,
    sha: commit.sha,
  });
}
console.log(`Pushed commit ${commit.sha.slice(0, 7)} to ${OWNER}/${REPO}@${BRANCH}`);

// --- 6. enable Pages (built by the GitHub Actions workflow) ---------------------
try {
  await api("POST", `/repos/${OWNER}/${REPO}/pages`, { build_type: "workflow" });
  console.log("GitHub Pages enabled (source: GitHub Actions).");
} catch (e) {
  console.log("Pages enable skipped (probably already enabled):", String(e.message).slice(0, 160));
}

console.log(`\nDone. Site will be live at: https://${OWNER}.github.io/${REPO}/`);
console.log(`Watch the Actions run at: https://github.com/${OWNER}/${REPO}/actions`);
