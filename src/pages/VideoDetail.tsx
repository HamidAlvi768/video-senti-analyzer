
import { AppLayout } from "@/components/layout/AppLayout";
import { GlassCard } from "@/components/ui-components/GlassCard";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Separator } from "@/components/ui/separator";
import { ArrowLeft, ChevronRight, MessageSquare, Play, ThumbsUp } from "lucide-react";
import { useState } from "react";

// Mock video data
const videoData = {
  id: "1",
  title: "How I Built a Successful YouTube Channel",
  thumbnail: "https://i.ytimg.com/vi/dQw4w9WgXcQ/hqdefault.jpg",
  views: 124532,
  likes: 8976,
  uploadDate: "2023-05-15",
  duration: "15:42",
  commentCount: 342,
  description: "In this video, I share my journey of building a successful YouTube channel and the strategies that helped me grow from 0 to 100K subscribers. Learn about content planning, audience engagement, and the tools I use for creating high-quality videos."
};

const VideoDetail = () => {
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [progress, setProgress] = useState(0);
  const [commentsFetched, setCommentsFetched] = useState(0);
  const [analysisComplete, setAnalysisComplete] = useState(false);

  const startAnalysis = () => {
    setIsAnalyzing(true);
    setProgress(0);
    setCommentsFetched(0);
    setAnalysisComplete(false);

    // Simulate progress
    const totalComments = videoData.commentCount;
    const intervalTime = 100;
    const commentsPerInterval = Math.max(1, Math.floor(totalComments / 50));
    
    const interval = setInterval(() => {
      setProgress((prev) => {
        const newProgress = Math.min(prev + 2, 100);
        
        if (newProgress >= 100) {
          clearInterval(interval);
          setAnalysisComplete(true);
        }
        
        return newProgress;
      });
      
      setCommentsFetched((prev) => {
        const newCount = Math.min(prev + commentsPerInterval, totalComments);
        return newCount;
      });
    }, intervalTime);
  };
  
  const formatViews = (views: number) => {
    if (views >= 1000000) {
      return `${(views / 1000000).toFixed(1)}M`;
    } else if (views >= 1000) {
      return `${(views / 1000).toFixed(1)}K`;
    }
    return views.toString();
  };

  return (
    <AppLayout>
      <div className="space-y-6">
        <Button variant="ghost" className="group mb-4" asChild>
          <a href="/videos">
            <ArrowLeft className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1" />
            Back to Videos
          </a>
        </Button>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="md:col-span-2">
            <GlassCard>
              <div className="aspect-video w-full overflow-hidden rounded-lg mb-4">
                <img
                  src={videoData.thumbnail}
                  alt={videoData.title}
                  className="object-cover w-full h-full"
                />
              </div>
              
              <h1 className="text-2xl font-bold tracking-tight mb-2">
                {videoData.title}
              </h1>
              
              <div className="flex flex-wrap gap-2 mb-4">
                <Badge variant="secondary">{formatViews(videoData.views)} views</Badge>
                <Badge variant="secondary">
                  <ThumbsUp className="h-3 w-3 mr-1" />
                  {formatViews(videoData.likes)}
                </Badge>
                <Badge variant="secondary">
                  <MessageSquare className="h-3 w-3 mr-1" />
                  {videoData.commentCount}
                </Badge>
                <Badge variant="secondary">
                  {new Date(videoData.uploadDate).toLocaleDateString()}
                </Badge>
              </div>
              
              <Separator className="my-4" />
              
              <p className="text-muted-foreground">{videoData.description}</p>
              
              <div className="mt-6">
                <Button className="flex items-center" asChild>
                  <a href={`https://www.youtube.com/watch?v=${videoData.id}`} target="_blank" rel="noopener noreferrer">
                    <Play className="mr-2 h-4 w-4" />
                    Watch on YouTube
                  </a>
                </Button>
              </div>
            </GlassCard>
          </div>

          <div className="md:col-span-1">
            <GlassCard className="animate-fade-in">
              <h2 className="text-xl font-semibold mb-4">Comment Analysis</h2>
              
              {!isAnalyzing && !analysisComplete ? (
                <div className="text-center py-6">
                  <MessageSquare className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
                  <p className="text-muted-foreground mb-6">
                    Analyze {videoData.commentCount} comments to discover patterns and insights.
                  </p>
                  <Button onClick={startAnalysis} className="w-full">
                    Start Analysis
                  </Button>
                </div>
              ) : isAnalyzing && !analysisComplete ? (
                <div className="animate-fade-in">
                  <div className="space-y-4">
                    <div className="flex justify-between text-sm">
                      <span>Processing...</span>
                      <span>{progress}%</span>
                    </div>
                    <Progress value={progress} className="w-full" />
                    <p className="text-sm text-muted-foreground">
                      Fetched {commentsFetched} of {videoData.commentCount} comments
                    </p>
                    <div className="animate-pulse-subtle text-center py-4">
                      <p className="text-sm">This may take a few moments</p>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="animate-fade-in text-center">
                  <div className="bg-green-50 text-green-700 rounded-lg p-4 mb-6">
                    Analysis Complete! 
                  </div>
                  <Button className="w-full group">
                    View Results
                    <ChevronRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </div>
              )}
            </GlassCard>
          </div>
        </div>
      </div>
    </AppLayout>
  );
};

export default VideoDetail;
