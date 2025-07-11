
import { Heart } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const TitleSlide = () => {
  return (
    <div className="text-center space-y-8">
      <div className="w-24 h-24 bg-gradient-to-br from-wellness-primary to-wellness-secondary rounded-full flex items-center justify-center mx-auto animate-pulse-wellness">
        <Heart className="w-12 h-12 text-white" />
      </div>
      <div className="space-y-4">
        <h1 className="text-5xl font-bold text-black">
          WellnessConnect
        </h1>
        <p className="text-xl text-black">
          Empowering individuals to take control of their health journey
        </p>
        <Badge className="wellness-gradient text-white px-6 py-2 text-lg">
          Healthcare Technology
        </Badge>
      </div>
    </div>
  );
};

export default TitleSlide;
