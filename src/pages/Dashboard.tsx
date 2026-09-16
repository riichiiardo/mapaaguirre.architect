import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useAuth } from "@/hooks/use-auth";
import { LayoutDashboard, LogOut, ExternalLink } from "lucide-react";
import { Link, useNavigate } from "react-router";

export default function Dashboard() {
  const { user, signOut } = useAuth();
  const navigate = useNavigate();

  const handleSignOut = async () => {
    await signOut();
    navigate("/");
  };

  return (
    <main className="min-h-screen bg-background px-6 py-10 text-foreground">
      <div className="mx-auto flex w-full max-w-5xl flex-col gap-8">
        <header className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-sm font-medium text-muted-foreground">
              Panel de Administración
            </p>
            <h1 className="mt-1 text-3xl font-bold tracking-tight font-serif">
              Bienvenido{user?.name ? `, ${user.name}` : ""}
            </h1>
          </div>
          <div className="flex gap-3">
            <Link
              to="/"
              className="inline-flex items-center gap-2 px-4 py-2 text-[12px] uppercase tracking-[0.12em] font-medium border border-border rounded hover:bg-secondary transition-colors"
            >
              <ExternalLink className="size-3.5" />
              Ver Sitio
            </Link>
            <Button
              type="button"
              variant="outline"
              className="cursor-pointer gap-2 self-start"
              onClick={handleSignOut}
            >
              <LogOut className="size-4" />
              Cerrar Sesión
            </Button>
          </div>
        </header>

        <Card className="border-border/70 shadow-none">
          <CardHeader>
            <div className="mb-3 flex size-10 items-center justify-center rounded-lg bg-accent/10 text-accent">
              <LayoutDashboard className="size-5" />
            </div>
            <CardTitle className="font-serif">Tu panel está listo</CardTitle>
          </CardHeader>
          <CardContent className="text-sm leading-6 text-muted-foreground">
            Desde aquí podrás gestionar los mensajes de contacto recibidos
            a través del formulario del sitio web. Los mensajes se almacenan
            automáticamente en la base de datos de Convex.
          </CardContent>
        </Card>
      </div>
    </main>
  );
}
