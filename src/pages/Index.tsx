
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Heart, MessageCircle, MapPin, Plus, Calendar, Pill, Activity } from "lucide-react";
import WellnessDiary from "@/components/WellnessDiary";
import MentalHealthChatbot from "@/components/MentalHealthChatbot";
import ClinicFinder from "@/components/ClinicFinder";

const Index = () => {
  const [activeTab, setActiveTab] = useState("diary");

  return (
    <div className="min-h-screen bg-gradient-to-br from-wellness-calm/20 via-background to-wellness-warm/20">
      {/* Header */}
      <div className="bg-white/80 backdrop-blur-sm border-b border-wellness-primary/10 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-wellness-primary to-wellness-secondary rounded-full flex items-center justify-center animate-pulse-wellness">
                <Heart className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold bg-gradient-to-r from-wellness-primary to-wellness-secondary bg-clip-text text-transparent">
                  WellnessConnect
                </h1>
                <p className="text-sm text-muted-foreground">Your health companion</p>
              </div>
            </div>
            <div className="text-right">
              <p className="text-sm font-medium">Welcome back!</p>
              <p className="text-xs text-muted-foreground">Stay healthy today</p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-6">
        {/* Quick Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <Card className="wellness-card border-wellness-primary/20 animate-slide-up">
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-black">Today's Mood</p>
                  <p className="text-2xl font-bold">😊</p>
                </div>
                <Activity className="w-8 h-8 text-wellness-primary animate-float" />
              </div>
            </CardContent>
          </Card>
          
          <Card className="wellness-card border-wellness-secondary/20 animate-slide-up" style={{animationDelay: '0.1s'}}>
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-black">Medications</p>
                  <p className="text-2xl font-bold">2/3</p>
                </div>
                <Pill className="w-8 h-8 text-wellness-secondary animate-float" />
              </div>
            </CardContent>
          </Card>
          
          <Card className="wellness-card border-wellness-accent/20 animate-slide-up" style={{animationDelay: '0.2s'}}>
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-black">Entries</p>
                  <p className="text-2xl font-bold">12</p>
                </div>
                <Calendar className="w-8 h-8 text-wellness-accent animate-float" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Main Tabs */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsList className="grid w-full grid-cols-3 bg-white/50 backdrop-blur-sm border border-wellness-primary/20">
            <TabsTrigger value="diary" className="flex items-center space-x-2 data-[state=active]:bg-wellness-primary data-[state=active]:text-white text-black">
              <Heart className="w-4 h-4" />
              <span className="hidden sm:inline">Wellness Diary</span>
              <span className="sm:hidden">Diary</span>
            </TabsTrigger>
            <TabsTrigger value="chatbot" className="flex items-center space-x-2 data-[state=active]:bg-wellness-secondary data-[state=active]:text-white text-black">
              <MessageCircle className="w-4 h-4" />
              <span className="hidden sm:inline">Mental Health</span>
              <span className="sm:hidden">Chat</span>
            </TabsTrigger>
            <TabsTrigger value="clinics" className="flex items-center space-x-2 data-[state=active]:bg-wellness-accent data-[state=active]:text-white text-black">
              <MapPin className="w-4 h-4" />
              <span className="hidden sm:inline">Clinic Finder</span>
              <span className="sm:hidden">Clinics</span>
            </TabsTrigger>
          </TabsList>

          <TabsContent value="diary" className="space-y-6">
            <WellnessDiary />
          </TabsContent>

          <TabsContent value="chatbot" className="space-y-6">
            <MentalHealthChatbot />
          </TabsContent>

          <TabsContent value="clinics" className="space-y-6">
            <ClinicFinder />
          </TabsContent>
        </Tabs>
      </div>

      {/* Floating Action Button */}
      <div className="fixed bottom-6 right-6">
        <Button
          size="lg"
          className="rounded-full w-14 h-14 wellness-gradient shadow-lg hover:shadow-2xl transition-all duration-300 animate-pulse-wellness"
          onClick={() => {
            // Quick action based on active tab
            if (activeTab === "diary") {
              // Add new diary entry
            } else if (activeTab === "chatbot") {
              // Start new conversation
            } else {
              // Search nearby clinics
            }
          }}
        >
          <Plus className="w-6 h-6" />
        </Button>
      </div>
    </div>
  );
};

export default Index;
