
import { AppLayout } from "@/components/layout/AppLayout";
import { Button } from "@/components/ui/button";
import { GlassCard } from "@/components/ui-components/GlassCard";
import { ArrowRight, Link, Play, Youtube } from "lucide-react";

const Dashboard = () => {
  // Simulating that no YouTube account is linked yet
  const isYouTubeLinked = false;

  return (
    <AppLayout>
      <div className="space-y-6">
        <div className="flex flex-col space-y-2">
          <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
          <p className="text-muted-foreground">
            Welcome to CommentSense. Connect your YouTube channel to get started.
          </p>
        </div>

        {!isYouTubeLinked ? (
          <GlassCard className="flex flex-col items-center p-12 text-center animate-fade-in">
            <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mb-6">
              <Youtube className="h-8 w-8 text-primary" />
            </div>
            <h2 className="text-2xl font-semibold mb-2">Connect Your YouTube Channel</h2>
            <p className="text-muted-foreground mb-8 max-w-md">
              Link your YouTube account to start analyzing comments and gaining valuable insights about your audience.
            </p>
            <Button className="group">
              <Link className="mr-2 h-4 w-4 transition-transform group-hover:rotate-45" />
              Link YouTube Account
            </Button>
          </GlassCard>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Channel Info Card would go here */}
            {/* Recent Videos would go here */}
            {/* Stats Overview would go here */}
          </div>
        )}
      </div>
    </AppLayout>
  );
};

export default Dashboard;
