
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface PitchDeckNavigationProps {
  currentSlide: number;
  totalSlides: number;
  onNext: () => void;
  onPrev: () => void;
  onGoToSlide: (index: number) => void;
}

const PitchDeckNavigation = ({ 
  currentSlide, 
  totalSlides, 
  onNext, 
  onPrev, 
  onGoToSlide 
}: PitchDeckNavigationProps) => {
  return (
    <div className="flex items-center justify-between mt-8">
      <Button
        onClick={onPrev}
        variant="outline"
        disabled={currentSlide === 0}
        className="flex items-center space-x-2"
      >
        <ChevronLeft className="w-4 h-4" />
        <span>Previous</span>
      </Button>

      {/* Slide Indicators */}
      <div className="flex space-x-2">
        {Array.from({ length: totalSlides }).map((_, index) => (
          <button
            key={index}
            onClick={() => onGoToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              index === currentSlide
                ? "wellness-gradient"
                : "bg-gray-300 hover:bg-gray-400"
            }`}
          />
        ))}
      </div>

      <Button
        onClick={onNext}
        variant="outline"
        disabled={currentSlide === totalSlides - 1}
        className="flex items-center space-x-2"
      >
        <span>Next</span>
        <ChevronRight className="w-4 h-4" />
      </Button>
    </div>
  );
};

export default PitchDeckNavigation;
