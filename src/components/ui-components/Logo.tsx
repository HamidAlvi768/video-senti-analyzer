
import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  size?: "sm" | "md" | "lg";
}

export function Logo({ className, size = "md" }: LogoProps) {
  const sizeClasses = {
    sm: "h-6",
    md: "h-8",
    lg: "h-10",
  };

  return (
    <div className={cn("flex items-center gap-2", className)}>
      <div className="relative overflow-hidden">
        <div className={cn("text-primary font-bold flex items-center", sizeClasses[size])}>
          <svg
            viewBox="0 0 24 24"
            className={cn(sizeClasses[size], "fill-primary")}
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0C.488 3.45.029 5.804 0 12c.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0C23.512 20.55 23.971 18.196 24 12c-.029-6.185-.484-8.549-4.385-8.816zM9 16V8l8 3.993L9 16z" />
          </svg>
          <span className="ml-2 font-sans tracking-tight">CommentSense</span>
        </div>
      </div>
    </div>
  );
}
