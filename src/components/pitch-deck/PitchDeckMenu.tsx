
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Slide } from "./data/slideData";

interface PitchDeckMenuProps {
  slides: Slide[];
  currentSlide: number;
  onGoToSlide: (index: number) => void;
}

const PitchDeckMenu = ({ slides, currentSlide, onGoToSlide }: PitchDeckMenuProps) => {
  return (
    <Card className="wellness-card mt-6">
      <CardContent className="p-4">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-2">
          {slides.map((slide, index) => (
            <Button
              key={slide.id}
              variant={index === currentSlide ? "default" : "ghost"}
              size="sm"
              onClick={() => onGoToSlide(index)}
              className={`text-xs ${
                index === currentSlide ? "wellness-gradient text-white" : "text-black"
              }`}
            >
              {slide.title}
            </Button>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default PitchDeckMenu;
