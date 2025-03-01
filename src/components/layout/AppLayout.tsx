
import { cn } from "@/lib/utils";
import { Logo } from "../ui-components/Logo";
import { Button } from "@/components/ui/button";
import { LogOut, Settings, User } from "lucide-react";
import { PageTransition } from "../ui-components/PageTransition";

interface AppLayoutProps {
  children: React.ReactNode;
  className?: string;
}

export function AppLayout({ children, className }: AppLayoutProps) {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="border-b border-border/40 backdrop-blur-sm bg-background/80 sticky top-0 z-50">
        <div className="container flex h-16 items-center justify-between">
          <Logo />
          
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon">
              <Settings className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="icon">
              <User className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="icon">
              <LogOut className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </header>
      
      <main className={cn("flex-1 container py-8", className)}>
        <PageTransition>{children}</PageTransition>
      </main>
      
      <footer className="border-t border-border/40 py-6 bg-background">
        <div className="container text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} CommentSense. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
