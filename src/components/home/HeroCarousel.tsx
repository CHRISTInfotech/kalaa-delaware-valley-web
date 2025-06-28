
import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const carouselData = [
  {
    image: "https://images.unsplash.com/photo-1518495973542-4542c06a5843?w=1200&h=600&fit=crop",
    quote: "Celebrating the rich heritage and vibrant culture of Kerala",
    description: "Join us in preserving our traditions for future generations"
  },
  {
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=1200&h=600&fit=crop",
    quote: "Unity in diversity, strength in community",
    description: "Building bridges and fostering connections across Delaware Valley"
  },
  {
    image: "https://images.unsplash.com/photo-1500673922987-e212871fec22?w=1200&h=600&fit=crop",
    quote: "Where tradition meets modernity",
    description: "Embracing our roots while growing together in America"
  },
  {
    image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=1200&h=600&fit=crop",
    quote: "കേരളത്തിന്റെ സംസ്കാരം, അമേരിക്കയിൽ",
    description: "Keeping the spirit of Kerala alive, away from home"
  }
];

export const HeroCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselData.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % carouselData.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + carouselData.length) % carouselData.length);
  };

  return (
    <div className="relative h-[70vh] overflow-hidden">
      {/* Carousel Images */}
      {carouselData.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <img
            src={slide.image}
            alt={`Slide ${index + 1}`}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-40" />
        </div>
      ))}

      {/* Content Overlay */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center text-white max-w-4xl px-4">
          <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6 animate-fade-in">
            {carouselData[currentSlide].quote}
          </h1>
          <p className="text-xl md:text-2xl mb-8 animate-fade-in">
            {carouselData[currentSlide].description}
          </p>
          <Button 
            size="lg" 
            className="bg-kerala-gold hover:bg-kerala-gold/90 text-white px-8 py-3 animate-fade-in"
          >
            Join Our Community
          </Button>
        </div>
      </div>

      {/* Navigation Arrows */}
      <Button
        variant="ghost"
        size="icon"
        className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white hover:bg-white/20"
        onClick={prevSlide}
      >
        <ChevronLeft className="h-6 w-6" />
      </Button>
      <Button
        variant="ghost"
        size="icon"
        className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:bg-white/20"
        onClick={nextSlide}
      >
        <ChevronRight className="h-6 w-6" />
      </Button>

      {/* Slide Indicators */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {carouselData.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full transition-all ${
              index === currentSlide ? 'bg-kerala-gold' : 'bg-white/50'
            }`}
            onClick={() => goToSlide(index)}
          />
        ))}
      </div>
    </div>
  );
};
