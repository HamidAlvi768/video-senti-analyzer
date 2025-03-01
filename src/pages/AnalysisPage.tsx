
import { AppLayout } from "@/components/layout/AppLayout";
import { GlassCard } from "@/components/ui-components/GlassCard";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import { ArrowLeft, BarChart3, Download, Heart, HelpCircle, MessageSquare, ThumbsDown, ThumbsUp } from "lucide-react";
import { useState } from "react";
import { PieChart, Pie, Cell, BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Legend } from 'recharts';

// Mock data
const video = {
  id: "1",
  title: "How I Built a Successful YouTube Channel",
  thumbnail: "https://i.ytimg.com/vi/dQw4w9WgXcQ/mqdefault.jpg",
};

const sentimentData = [
  { name: 'Positive', value: 65, color: '#4ade80' },
  { name: 'Neutral', value: 25, color: '#94a3b8' },
  { name: 'Negative', value: 10, color: '#f87171' },
];

const keywordsData = [
  { name: 'Helpful', value: 42 },
  { name: 'Amazing', value: 38 },
  { name: 'Tutorial', value: 34 },
  { name: 'Thanks', value: 27 },
  { name: 'Content', value: 21 },
  { name: 'Quality', value: 16 },
  { name: 'Strategy', value: 13 },
];

const sampleQuestions = [
  "What's the overall sentiment of these comments?",
  "What topics do viewers mention most?",
  "What content do viewers want to see next?",
  "What parts of the video did viewers enjoy the most?",
  "Summarize the main feedback points from these comments"
];

const AnalysisPage = () => {
  const [promptInput, setPromptInput] = useState("");
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  
  const handlePromptSubmit = () => {
    if (!promptInput.trim()) return;
    setIsAnalyzing(true);
    
    // Simulate analysis
    setTimeout(() => {
      setIsAnalyzing(false);
    }, 2000);
  };

  const handleSampleQuestion = (question: string) => {
    setPromptInput(question);
  };

  return (
    <AppLayout>
      <div className="space-y-6">
        <Button variant="ghost" className="group mb-4" asChild>
          <a href="/video/1">
            <ArrowLeft className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1" />
            Back to Video
          </a>
        </Button>

        <div className="flex flex-col space-y-2">
          <div className="flex items-center">
            <h1 className="text-3xl font-bold tracking-tight">Comment Analysis</h1>
            <Badge className="ml-3 text-xs">342 comments</Badge>
          </div>
          <p className="text-muted-foreground">
            Analysis results for "{video.title}"
          </p>
        </div>

        <Tabs defaultValue="overview" className="w-full">
          <TabsList className="w-full max-w-md mx-auto mb-6">
            <TabsTrigger value="overview" className="flex-1">Overview</TabsTrigger>
            <TabsTrigger value="sentiment" className="flex-1">Sentiment</TabsTrigger>
            <TabsTrigger value="keywords" className="flex-1">Keywords</TabsTrigger>
            <TabsTrigger value="custom" className="flex-1">Custom Insights</TabsTrigger>
          </TabsList>
          
          <TabsContent value="overview" className="animate-fade-in">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <GlassCard className="md:col-span-2">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-xl font-semibold">Comment Overview</h2>
                  <Button variant="outline" size="sm">
                    <Download className="h-4 w-4 mr-2" />
                    Export
                  </Button>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <Card>
                    <CardHeader className="pb-2">
                      <CardDescription>Sentiment</CardDescription>
                      <CardTitle className="flex items-center text-green-500">
                        <ThumbsUp className="h-4 w-4 mr-2" />
                        65% Positive
                      </CardTitle>
                    </CardHeader>
                  </Card>
                  
                  <Card>
                    <CardHeader className="pb-2">
                      <CardDescription>Engagement Rate</CardDescription>
                      <CardTitle>4.8%</CardTitle>
                    </CardHeader>
                  </Card>
                  
                  <Card>
                    <CardHeader className="pb-2">
                      <CardDescription>Top Topics</CardDescription>
                      <CardTitle className="text-base font-medium">
                        Strategy, Content, Quality
                      </CardTitle>
                    </CardHeader>
                  </Card>
                </div>
              </GlassCard>
              
              <GlassCard>
                <h3 className="text-lg font-medium mb-4">Sentiment Analysis</h3>
                <div className="h-64">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={sentimentData}
                        cx="50%"
                        cy="50%"
                        innerRadius={60}
                        outerRadius={80}
                        paddingAngle={2}
                        dataKey="value"
                      >
                        {sentimentData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                      </Pie>
                      <Tooltip />
                      <Legend />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
              </GlassCard>
              
              <GlassCard>
                <h3 className="text-lg font-medium mb-4">Top Keywords</h3>
                <div className="h-64">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart
                      data={keywordsData}
                      layout="vertical"
                      margin={{ top: 5, right: 30, left: 50, bottom: 5 }}
                    >
                      <XAxis type="number" />
                      <YAxis type="category" dataKey="name" width={80} />
                      <Tooltip />
                      <Bar dataKey="value" fill="#3b82f6" radius={[0, 4, 4, 0]} />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </GlassCard>
            </div>
          </TabsContent>
          
          <TabsContent value="sentiment" className="animate-fade-in">
            <GlassCard>
              <h2 className="text-xl font-semibold mb-6">Sentiment Breakdown</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="flex flex-col items-center">
                  <div className="relative w-32 h-32 mb-4">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <ThumbsUp className="h-8 w-8 text-green-500" />
                    </div>
                    <svg className="w-32 h-32" viewBox="0 0 100 100">
                      <circle 
                        cx="50" cy="50" r="45" 
                        fill="none" stroke="#e2e8f0" strokeWidth="10" 
                      />
                      <circle 
                        cx="50" cy="50" r="45" 
                        fill="none" stroke="#4ade80" strokeWidth="10" 
                        strokeDasharray="282.7" strokeDashoffset={282.7 * (1 - 0.65)}
                        transform="rotate(-90 50 50)"
                      />
                    </svg>
                    <div className="absolute inset-0 flex items-center justify-center text-2xl font-bold">
                      65%
                    </div>
                  </div>
                  <h3 className="text-lg font-medium">Positive</h3>
                  <p className="text-sm text-muted-foreground text-center mt-2">
                    Viewers showing appreciation and enthusiasm
                  </p>
                </div>
                
                <div className="flex flex-col items-center">
                  <div className="relative w-32 h-32 mb-4">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="h-8 w-8 text-slate-400">—</div>
                    </div>
                    <svg className="w-32 h-32" viewBox="0 0 100 100">
                      <circle 
                        cx="50" cy="50" r="45" 
                        fill="none" stroke="#e2e8f0" strokeWidth="10" 
                      />
                      <circle 
                        cx="50" cy="50" r="45" 
                        fill="none" stroke="#94a3b8" strokeWidth="10" 
                        strokeDasharray="282.7" strokeDashoffset={282.7 * (1 - 0.25)}
                        transform="rotate(-90 50 50)"
                      />
                    </svg>
                    <div className="absolute inset-0 flex items-center justify-center text-2xl font-bold">
                      25%
                    </div>
                  </div>
                  <h3 className="text-lg font-medium">Neutral</h3>
                  <p className="text-sm text-muted-foreground text-center mt-2">
                    General comments and questions
                  </p>
                </div>
                
                <div className="flex flex-col items-center">
                  <div className="relative w-32 h-32 mb-4">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <ThumbsDown className="h-8 w-8 text-red-400" />
                    </div>
                    <svg className="w-32 h-32" viewBox="0 0 100 100">
                      <circle 
                        cx="50" cy="50" r="45" 
                        fill="none" stroke="#e2e8f0" strokeWidth="10" 
                      />
                      <circle 
                        cx="50" cy="50" r="45" 
                        fill="none" stroke="#f87171" strokeWidth="10" 
                        strokeDasharray="282.7" strokeDashoffset={282.7 * (1 - 0.10)}
                        transform="rotate(-90 50 50)"
                      />
                    </svg>
                    <div className="absolute inset-0 flex items-center justify-center text-2xl font-bold">
                      10%
                    </div>
                  </div>
                  <h3 className="text-lg font-medium">Negative</h3>
                  <p className="text-sm text-muted-foreground text-center mt-2">
                    Critical feedback and concerns
                  </p>
                </div>
              </div>
              
              <Separator className="my-8" />
              
              <div className="space-y-6">
                <h3 className="text-lg font-medium">Sample Comments</h3>
                
                <div className="space-y-4">
                  <Card className="border-l-4 border-l-green-500">
                    <CardContent className="p-4">
                      <p className="text-sm">"This video was incredibly helpful! I've been struggling with growing my channel and your strategies make so much sense. Already implementing some of your tips!"</p>
                      <div className="flex items-center mt-2 text-xs text-muted-foreground">
                        <ThumbsUp className="h-3 w-3 mr-1 text-green-500" />
                        <span>Positive</span>
                        <span className="mx-2">•</span>
                        <Heart className="h-3 w-3 mr-1" />
                        <span>12 likes</span>
                      </div>
                    </CardContent>
                  </Card>
                  
                  <Card className="border-l-4 border-l-slate-400">
                    <CardContent className="p-4">
                      <p className="text-sm">"What camera do you use for your videos? The quality looks great."</p>
                      <div className="flex items-center mt-2 text-xs text-muted-foreground">
                        <div className="h-3 w-3 mr-1 text-slate-400">—</div>
                        <span>Neutral</span>
                        <span className="mx-2">•</span>
                        <Heart className="h-3 w-3 mr-1" />
                        <span>3 likes</span>
                      </div>
                    </CardContent>
                  </Card>
                  
                  <Card className="border-l-4 border-l-red-400">
                    <CardContent className="p-4">
                      <p className="text-sm">"You skipped over the monetization strategies too quickly. Would have been nice to get more details on that part."</p>
                      <div className="flex items-center mt-2 text-xs text-muted-foreground">
                        <ThumbsDown className="h-3 w-3 mr-1 text-red-400" />
                        <span>Negative</span>
                        <span className="mx-2">•</span>
                        <Heart className="h-3 w-3 mr-1" />
                        <span>5 likes</span>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </GlassCard>
          </TabsContent>
          
          <TabsContent value="keywords" className="animate-fade-in">
            <GlassCard>
              <h2 className="text-xl font-semibold mb-6">Keyword Analysis</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="h-80">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart
                      data={keywordsData}
                      margin={{ top: 5, right: 30, left: 50, bottom: 5 }}
                    >
                      <XAxis dataKey="name" />
                      <YAxis />
                      <Tooltip />
                      <Bar dataKey="value" fill="#3b82f6" radius={[4, 4, 0, 0]} />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
                
                <div className="space-y-4">
                  <h3 className="text-lg font-medium">Key Insights</h3>
                  
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start">
                      <div className="h-5 w-5 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center mr-2 flex-shrink-0 mt-0.5">
                        1
                      </div>
                      <span>
                        <strong>Helpful</strong> is the most common keyword, suggesting your content is providing value to viewers.
                      </span>
                    </li>
                    <li className="flex items-start">
                      <div className="h-5 w-5 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center mr-2 flex-shrink-0 mt-0.5">
                        2
                      </div>
                      <span>
                        <strong>Amazing</strong> and <strong>Thanks</strong> indicate high audience satisfaction with your content.
                      </span>
                    </li>
                    <li className="flex items-start">
                      <div className="h-5 w-5 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center mr-2 flex-shrink-0 mt-0.5">
                        3
                      </div>
                      <span>
                        <strong>Tutorial</strong> suggests viewers see your content as educational and instructional.
                      </span>
                    </li>
                    <li className="flex items-start">
                      <div className="h-5 w-5 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center mr-2 flex-shrink-0 mt-0.5">
                        4
                      </div>
                      <span>
                        <strong>Strategy</strong> being mentioned indicates viewers are interested in practical advice they can implement.
                      </span>
                    </li>
                  </ul>
                  
                  <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                    <h4 className="text-sm font-medium text-blue-700 mb-2">Recommendation</h4>
                    <p className="text-sm text-blue-600">
                      Consider creating more tutorial-style content focused on specific strategies, as these keywords suggest your audience values practical, actionable advice.
                    </p>
                  </div>
                </div>
              </div>
              
              <Separator className="my-8" />
              
              <div>
                <h3 className="text-lg font-medium mb-4">Keyword Clusters</h3>
                <div className="flex flex-wrap gap-3">
                  <div className="px-4 py-2 bg-blue-100 text-blue-700 rounded-full font-medium text-sm">
                    Content Quality
                  </div>
                  <div className="px-4 py-2 bg-green-100 text-green-700 rounded-full font-medium text-sm">
                    Growth Strategies
                  </div>
                  <div className="px-4 py-2 bg-amber-100 text-amber-700 rounded-full font-medium text-sm">
                    Production Value
                  </div>
                  <div className="px-4 py-2 bg-purple-100 text-purple-700 rounded-full font-medium text-sm">
                    Subscriber Engagement
                  </div>
                  <div className="px-4 py-2 bg-rose-100 text-rose-700 rounded-full font-medium text-sm">
                    Monetization
                  </div>
                </div>
              </div>
            </GlassCard>
          </TabsContent>
          
          <TabsContent value="custom" className="animate-fade-in">
            <GlassCard>
              <h2 className="text-xl font-semibold mb-6">Custom Insights</h2>
              
              <div className="space-y-6">
                <div className="space-y-4">
                  <h3 className="text-lg font-medium">Ask the AI</h3>
                  <p className="text-muted-foreground">
                    Get specific insights by asking questions about your video comments.
                  </p>
                  
                  <div className="flex flex-col gap-3">
                    <Textarea 
                      placeholder="What would you like to know about these comments?"
                      value={promptInput}
                      onChange={(e) => setPromptInput(e.target.value)}
                      className="min-h-[100px]"
                    />
                    
                    <div className="flex justify-end">
                      <Button 
                        onClick={handlePromptSubmit}
                        disabled={!promptInput.trim() || isAnalyzing}
                      >
                        {isAnalyzing ? "Analyzing..." : "Get Insights"}
                      </Button>
                    </div>
                  </div>
                </div>
                
                <div className="bg-blue-50 rounded-lg p-4 flex">
                  <HelpCircle className="h-5 w-5 text-blue-500 mr-2 flex-shrink-0 mt-0.5" />
                  <div className="text-sm text-blue-700">
                    <p className="font-medium mb-2">Sample questions you can ask:</p>
                    <ul className="space-y-2">
                      {sampleQuestions.map((question, index) => (
                        <li key={index} className="cursor-pointer hover:underline" onClick={() => handleSampleQuestion(question)}>
                          • {question}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                
                <Separator className="my-4" />
                
                <div className="space-y-4">
                  <h3 className="text-lg font-medium">AI Response</h3>
                  
                  {promptInput ? (
                    isAnalyzing ? (
                      <div className="animate-pulse-subtle p-6 text-center">
                        <BarChart3 className="h-8 w-8 mx-auto text-muted-foreground mb-4" />
                        <p className="text-muted-foreground">Analyzing comments...</p>
                      </div>
                    ) : (
                      <div className="animate-fade-in space-y-4">
                        <Card className="border-l-4 border-l-primary">
                          <CardContent className="p-4">
                            <p className="text-sm leading-relaxed">
                              The overall sentiment in these comments is predominantly positive (65%). Viewers frequently express appreciation for the practical strategies shared, with many mentioning they've already started implementing your advice.
                              <br /><br />
                              Key topics mentioned include:<br />
                              • Your content creation workflow<br />
                              • Camera equipment and video quality<br />
                              • Growth strategies that worked for your channel<br />
                              • Consistency and publishing schedule
                              <br /><br />
                              Several viewers have requested more in-depth tutorials on monetization strategies and editing techniques. Many comments also ask about how you handle the analytics side of your channel.
                            </p>
                          </CardContent>
                        </Card>
                        
                        <div className="flex justify-end">
                          <Button variant="outline" size="sm">
                            <Download className="h-4 w-4 mr-2" />
                            Export Analysis
                          </Button>
                        </div>
                      </div>
                    )
                  ) : (
                    <div className="text-center p-6">
                      <MessageSquare className="h-8 w-8 mx-auto text-muted-foreground mb-4" />
                      <p className="text-muted-foreground">
                        Ask a question above to get custom insights from your video comments.
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </GlassCard>
          </TabsContent>
        </Tabs>
      </div>
    </AppLayout>
  );
};

export default AnalysisPage;
