// Convex client used at the app root.
//
// On static hosting (GitHub Pages) the build runs without VITE_CONVEX_URL.
// ConvexReactClient requires a valid URL, so we fall back to a placeholder:
// all queries/mutations fail gracefully, but the app still renders.
import { ConvexReactClient } from "convex/react";

const url =
  (import.meta.env.VITE_CONVEX_URL as string | undefined) ||
  "https://placeholder.convex.cloud";

export const convex = new ConvexReactClient(url);
