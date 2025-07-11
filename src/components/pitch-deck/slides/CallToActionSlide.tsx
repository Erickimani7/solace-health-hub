
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Target, Heart, Users } from "lucide-react";

const CallToActionSlide = () => {
  return (
    <div className="text-center space-y-8">
      <div className="space-y-4">
        <h2 className="text-3xl font-bold text-black">Ready to Make a Difference?</h2>
        <p className="text-lg text-black max-w-2xl mx-auto">
          WellnessConnect is more than an app – it's a movement to democratize healthcare 
          and make wellness accessible to everyone, everywhere.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
        <Card className="wellness-card border-wellness-primary/30">
          <CardContent className="p-6 text-center">
            <Target className="w-12 h-12 text-wellness-primary mx-auto mb-4" />
            <h3 className="font-semibold mb-2 text-black">Our Vision</h3>
            <p className="text-sm text-black">
              A world where quality healthcare and mental wellness support 
              are accessible to all, regardless of economic status.
            </p>
          </CardContent>
        </Card>
        
        <Card className="wellness-card border-wellness-secondary/30">
          <CardContent className="p-6 text-center">
            <Heart className="w-12 h-12 text-wellness-secondary mx-auto mb-4" />
            <h3 className="font-semibold mb-2 text-black">Our Impact</h3>
            <p className="text-sm text-black">
              Empowering individuals to take control of their health journey 
              with comprehensive, integrated wellness tools.
            </p>
          </CardContent>
        </Card>
        
        <Card className="wellness-card border-wellness-accent/30">
          <CardContent className="p-6 text-center">
            <Users className="w-12 h-12 text-wellness-accent mx-auto mb-4" />
            <h3 className="font-semibold mb-2 text-black">Our Community</h3>
            <p className="text-sm text-black">
              Building a supportive ecosystem where health and wellness 
              are shared values and collective goals.
            </p>
          </CardContent>
        </Card>
      </div>
      
      <div className="space-y-4">
        <p className="text-lg font-semibold text-black">Contact Us</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <p className="text-black">hello@wellnessconnect.com</p>
          <Badge className="wellness-gradient text-white">
            +1 (555) 123-WELLNESS
          </Badge>
        </div>
      </div>
    </div>
  );
};

export default CallToActionSlide;
