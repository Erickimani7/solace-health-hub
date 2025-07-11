
import { Card, CardContent } from "@/components/ui/card";
import { Heart, MessageCircle, MapPin } from "lucide-react";

const SolutionSlide = () => {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="wellness-card border-wellness-primary/30">
          <CardContent className="p-6 text-center">
            <Heart className="w-12 h-12 text-wellness-primary mx-auto mb-4" />
            <h3 className="font-semibold mb-2 text-black">Wellness Diary</h3>
            <p className="text-sm text-black">
              Track mood, vitals, medications, and daily health metrics in one integrated platform
            </p>
          </CardContent>
        </Card>
        
        <Card className="wellness-card border-wellness-secondary/30">
          <CardContent className="p-6 text-center">
            <MessageCircle className="w-12 h-12 text-wellness-secondary mx-auto mb-4" />
            <h3 className="font-semibold mb-2 text-black">Mental Health Support</h3>
            <p className="text-sm text-black">
              AI-powered chatbot providing 24/7 emotional support and crisis resources
            </p>
          </CardContent>
        </Card>
        
        <Card className="wellness-card border-wellness-accent/30">
          <CardContent className="p-6 text-center">
            <MapPin className="w-12 h-12 text-wellness-accent mx-auto mb-4" />
            <h3 className="font-semibold mb-2 text-black">Clinic Finder</h3>
            <p className="text-sm text-black">
              Locate affordable and free healthcare options in your local area
            </p>
          </CardContent>
        </Card>
      </div>
      
      <div className="bg-wellness-soft rounded-lg p-6 text-center">
        <h3 className="text-lg font-semibold mb-2 text-black">All-in-One Health Companion</h3>
        <p className="text-black">
          WellnessConnect combines health tracking, mental wellness support, and healthcare access 
          into a single, user-friendly platform designed for everyone.
        </p>
      </div>
    </div>
  );
};

export default SolutionSlide;
