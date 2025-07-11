
import { Heart } from "lucide-react";

interface PitchDeckHeaderProps {
  currentSlide: number;
  totalSlides: number;
}

const PitchDeckHeader = ({ currentSlide, totalSlides }: PitchDeckHeaderProps) => {
  return (
    <div className="bg-white/80 backdrop-blur-sm border-b border-wellness-primary/10 sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-gradient-to-br from-wellness-primary to-wellness-secondary rounded-full flex items-center justify-center">
              <Heart className="w-5 h-5 text-white" />
            </div>
            <h1 className="text-xl font-bold text-black">
              WellnessConnect Pitch Deck
            </h1>
          </div>
          <div className="text-sm">
            <span className="text-black">Slide </span>
            <span className="font-semibold text-black">{currentSlide + 1}</span>
            <span className="text-black"> of {totalSlides}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PitchDeckHeader;
