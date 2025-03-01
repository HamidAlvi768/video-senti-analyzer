
import { cn } from "@/lib/utils";
import React from "react";

interface GlassCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  elevation?: "low" | "medium" | "high";
}

export function GlassCard({
  children,
  className,
  elevation = "medium",
  ...props
}: GlassCardProps) {
  const elevationClasses = {
    low: "shadow-subtle",
    medium: "shadow-glass",
    high: "shadow-elevated",
  };

  return (
    <div
      className={cn(
        "glass-morphism rounded-2xl p-6 transition-all duration-300",
        elevationClasses[elevation],
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
