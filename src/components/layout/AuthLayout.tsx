
import { cn } from "@/lib/utils";
import { Logo } from "../ui-components/Logo";
import { PageTransition } from "../ui-components/PageTransition";

interface AuthLayoutProps {
  children: React.ReactNode;
  className?: string;
}

export function AuthLayout({ children, className }: AuthLayoutProps) {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-accent/30 p-4">
      <div className="w-full max-w-md">
        <div className="mb-8 text-center">
          <Logo size="lg" />
        </div>
        
        <PageTransition>
          <div className={cn("w-full", className)}>
            {children}
          </div>
        </PageTransition>
        
        <div className="mt-8 text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} CommentSense. All rights reserved.
        </div>
      </div>
    </div>
  );
}
