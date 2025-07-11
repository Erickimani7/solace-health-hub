
import { Card, CardContent } from "@/components/ui/card";
import { Users, Heart, MessageCircle } from "lucide-react";

const TeamSlide = () => {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="wellness-card text-center">
          <CardContent className="p-6">
            <div className="w-16 h-16 bg-wellness-primary rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="w-8 h-8 text-white" />
            </div>
            <h3 className="font-semibold mb-1 text-black">Sarah Johnson</h3>
            <p className="text-sm text-wellness-primary mb-2">CEO & Co-founder</p>
            <p className="text-xs text-black">
              Former VP of Product at leading healthtech company. 
              15+ years in healthcare innovation.
            </p>
          </CardContent>
        </Card>
        
        <Card className="wellness-card text-center">
          <CardContent className="p-6">
            <div className="w-16 h-16 bg-wellness-secondary rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="w-8 h-8 text-white" />
            </div>
            <h3 className="font-semibold mb-1 text-black">Dr. Michael Chen</h3>
            <p className="text-sm text-wellness-secondary mb-2">CTO & Co-founder</p>
            <p className="text-xs text-black">
              PhD in Computer Science, AI specialist. 
              Former senior engineer at major tech companies.
            </p>
          </CardContent>
        </Card>
        
        <Card className="wellness-card text-center">
          <CardContent className="p-6">
            <div className="w-16 h-16 bg-wellness-accent rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="w-8 h-8 text-white" />
            </div>
            <h3 className="font-semibold mb-1 text-black">Dr. Emily Rodriguez</h3>
            <p className="text-sm text-wellness-accent mb-2">Chief Medical Officer</p>
            <p className="text-xs text-black">
              Board-certified physician and mental health advocate. 
              20+ years in clinical practice.
            </p>
          </CardContent>
        </Card>
      </div>
      
      <div className="bg-wellness-soft rounded-lg p-6">
        <h3 className="text-lg font-semibold mb-4 text-black">Advisory Board</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
              <Heart className="w-5 h-5 text-green-600" />
            </div>
            <div>
              <p className="font-medium text-black">Dr. James Wilson</p>
              <p className="text-sm text-black">Former Chief of Cardiology, Mayo Clinic</p>
            </div>
          </div>
          
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
              <MessageCircle className="w-5 h-5 text-blue-600" />
            </div>
            <div>
              <p className="font-medium text-black">Lisa Thompson</p>
              <p className="text-sm text-black">Mental Health Advocate & Researcher</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamSlide;
