
import { AppLayout } from "@/components/layout/AppLayout";
import { GlassCard } from "@/components/ui-components/GlassCard";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Search } from "lucide-react";
import { useState } from "react";

// Mock data for videos
const mockVideos = [
  {
    id: "1",
    title: "How I Built a Successful YouTube Channel",
    thumbnail: "https://i.ytimg.com/vi/dQw4w9WgXcQ/mqdefault.jpg",
    views: 124532,
    uploadDate: "2023-05-15",
    duration: "15:42",
    commentCount: 342,
  },
  {
    id: "2",
    title: "10 Tips for Growing Your Audience in 2023",
    thumbnail: "https://i.ytimg.com/vi/dQw4w9WgXcQ/mqdefault.jpg",
    views: 89763,
    uploadDate: "2023-06-22",
    duration: "10:15",
    commentCount: 256,
  },
  {
    id: "3",
    title: "The Ultimate Guide to YouTube Analytics",
    thumbnail: "https://i.ytimg.com/vi/dQw4w9WgXcQ/mqdefault.jpg",
    views: 54321,
    uploadDate: "2023-07-10",
    duration: "18:30",
    commentCount: 189,
  },
  {
    id: "4",
    title: "Creating Viral Content: My Secret Formula",
    thumbnail: "https://i.ytimg.com/vi/dQw4w9WgXcQ/mqdefault.jpg",
    views: 213456,
    uploadDate: "2023-08-05",
    duration: "12:18",
    commentCount: 567,
  },
  {
    id: "5",
    title: "Behind the Scenes: A Day in the Life of a YouTuber",
    thumbnail: "https://i.ytimg.com/vi/dQw4w9WgXcQ/mqdefault.jpg",
    views: 43210,
    uploadDate: "2023-09-12",
    duration: "22:45",
    commentCount: 124,
  },
];

const VideoList = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredVideos = mockVideos.filter((video) =>
    video.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

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
        <div className="flex flex-col space-y-2">
          <h1 className="text-3xl font-bold tracking-tight">Your Videos</h1>
          <p className="text-muted-foreground">
            Select a video to analyze its comments.
          </p>
        </div>

        <div className="flex items-center space-x-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              placeholder="Search videos..."
              className="pl-10"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <Button variant="outline">Filter</Button>
          <Button variant="outline">Sort</Button>
        </div>

        <div className="grid grid-cols-1 gap-4">
          {filteredVideos.map((video) => (
            <GlassCard 
              key={video.id} 
              className="hover-scale cursor-pointer p-4"
              elevation="low"
            >
              <div className="flex flex-col md:flex-row gap-4">
                <div className="relative aspect-video h-28 overflow-hidden rounded-lg flex-shrink-0">
                  <img
                    src={video.thumbnail}
                    alt={video.title}
                    className="object-cover w-full h-full"
                  />
                  <div className="absolute bottom-2 right-2 bg-black/70 text-white text-xs px-1 rounded">
                    {video.duration}
                  </div>
                </div>
                <div className="flex-1">
                  <div className="flex justify-between items-start">
                    <h3 className="font-medium text-lg">{video.title}</h3>
                    <Badge variant="outline" className="ml-2 whitespace-nowrap">
                      {video.commentCount} comments
                    </Badge>
                  </div>
                  <div className="mt-2 text-sm text-muted-foreground">
                    {formatViews(video.views)} views • {new Date(video.uploadDate).toLocaleDateString()}
                  </div>
                  <div className="mt-4 flex space-x-2">
                    <Button size="sm" variant="secondary">
                      View Video
                    </Button>
                    <Button size="sm">Analyze Comments</Button>
                  </div>
                </div>
              </div>
            </GlassCard>
          ))}
        </div>
      </div>
    </AppLayout>
  );
};

export default VideoList;
