
import { Card, CardContent } from "@/components/ui/card";
import { Shield, Heart, Lightbulb, Users } from "lucide-react";

const CompetitiveAdvantageSlide = () => {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className="wellness-card border-wellness-primary/30">
          <CardContent className="p-6">
            <div className="flex items-center space-x-3 mb-4">
              <Shield className="w-8 h-8 text-wellness-primary" />
              <h3 className="font-semibold text-black">Holistic Approach</h3>
            </div>
            <p className="text-sm text-black">
              Unlike competitors who focus on single aspects, we integrate physical health, 
              mental wellness, and healthcare access in one platform.
            </p>
          </CardContent>
        </Card>
        
        <Card className="wellness-card border-wellness-secondary/30">
          <CardContent className="p-6">
            <div className="flex items-center space-x-3 mb-4">
              <Heart className="w-8 h-8 text-wellness-secondary" />
              <h3 className="font-semibold text-black">Accessibility Focus</h3>
            </div>
            <p className="text-sm text-black">
              Designed specifically for underserved communities with emphasis on 
              free and low-cost healthcare options.
            </p>
          </CardContent>
        </Card>
        
        <Card className="wellness-card border-wellness-accent/30">
          <CardContent className="p-6">
            <div className="flex items-center space-x-3 mb-4">
              <Lightbulb className="w-8 h-8 text-wellness-accent" />
              <h3 className="font-semibold text-black">AI-Powered Support</h3>
            </div>
            <p className="text-sm text-black">
              Advanced mental health chatbot providing immediate support and 
              crisis intervention when needed.
            </p>
          </CardContent>
        </Card>
        
        <Card className="wellness-card border-green-500/30">
          <CardContent className="p-6">
            <div className="flex items-center space-x-3 mb-4">
              <Users className="w-8 h-8 text-green-500" />
              <h3 className="font-semibold text-black">Community-Driven</h3>
            </div>
            <p className="text-sm text-black">
              Built with input from healthcare professionals, patients, and 
              community health organizations.
            </p>
          </CardContent>
        </Card>
      </div>
      
      <div className="bg-gradient-to-r from-wellness-primary/10 to-wellness-secondary/10 rounded-lg p-6">
        <h3 className="text-lg font-semibold mb-3 text-black">Key Differentiators</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="text-center">
            <div className="w-12 h-12 wellness-gradient rounded-full flex items-center justify-center mx-auto mb-2">
              <span className="text-white font-bold">3-in-1</span>
            </div>
            <p className="text-sm font-medium text-black">Integrated Platform</p>
          </div>
          <div className="text-center">
            <div className="w-12 h-12 wellness-gradient rounded-full flex items-center justify-center mx-auto mb-2">
              <span className="text-white font-bold">24/7</span>
            </div>
            <p className="text-sm font-medium text-black">Always Available</p>
          </div>
          <div className="text-center">
            <div className="w-12 h-12 wellness-gradient rounded-full flex items-center justify-center mx-auto mb-2">
              <span className="text-white font-bold">$0</span>
            </div>
            <p className="text-sm font-medium text-black">Free Core Features</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompetitiveAdvantageSlide;
