
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import PitchDeckHeader from "./pitch-deck/PitchDeckHeader";
import PitchDeckNavigation from "./pitch-deck/PitchDeckNavigation";
import PitchDeckMenu from "./pitch-deck/PitchDeckMenu";
import { slides } from "./pitch-deck/data/slideData";

const PitchDeck = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const CurrentSlideComponent = slides[currentSlide].component;

  return (
    <div className="min-h-screen bg-gradient-to-br from-wellness-calm/20 via-background to-wellness-warm/20">
      <PitchDeckHeader currentSlide={currentSlide} totalSlides={slides.length} />

      <div className="container mx-auto px-4 py-8">
        <Card className="wellness-card min-h-[600px]">
          <CardHeader className="text-center">
            <CardTitle className="text-3xl font-bold text-black">
              {slides[currentSlide].title}
            </CardTitle>
            <CardDescription className="text-lg text-black">
              {slides[currentSlide].subtitle}
            </CardDescription>
          </CardHeader>
          <CardContent className="p-8">
            <CurrentSlideComponent />
          </CardContent>
        </Card>

        <PitchDeckNavigation
          currentSlide={currentSlide}
          totalSlides={slides.length}
          onNext={nextSlide}
          onPrev={prevSlide}
          onGoToSlide={goToSlide}
        />

        <PitchDeckMenu
          slides={slides}
          currentSlide={currentSlide}
          onGoToSlide={goToSlide}
        />
      </div>
    </div>
  );
};

export default PitchDeck;
