import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { ArrowUpRight, CirclePlay, Pause, Play } from "lucide-react";
import { Link } from "react-router-dom";
import Autoplay from "embla-carousel-autoplay";
import React, { useState, useRef } from "react";

export function HeroCarousel({ slides }) {
  const autoplay = useRef(
    Autoplay({
      delay: 3000,
      stopOnInteraction: false,
    })
  );

  const [isPlaying, setIsPlaying] = React.useState(true);

  const handleTogglePlay = () => {
    if (isPlaying) {
      autoplay.current.stop();
      setIsPlaying(false);
    } else {
      autoplay.current.play();
      setIsPlaying(true);
    }
  };

  return (
    <Carousel
      opts={{ loop: true }}
      plugins={[autoplay.current]}
      className="w-full"
    >
      <CarouselContent className="ml-0">
        {slides.map((slide, index) => {
          const backgroundImage = slide.mobileImage
            ? `url(${slide.mobileImage})`
            : `url(${slide.image})`;

          return (
            <CarouselItem key={index} className="pl-0">
              <div className="min-h-screen w-[500px]  md:w-full transition-all flex items-end px-4 sm:px-6 pb-6 sm:pb-10 md:pb-16 relative">
                {/* Desktop Image */}
                <div
                  className="hidden md:block absolute inset-0 bg-cover bg-center bg-no-repeat"
                  style={{ backgroundImage: `url(${slide.image})` }}
                />
                {/* Mobile Image */}
                <div
                  className="md:hidden absolute inset-0 bg-cover bg-center bg-no-repeat"
                  style={{ backgroundImage }}
                />
                <div className="absolute inset-0 bg-black/40 md:bg-black/50" />
                <div className="text-left max-w-3xl relative z-10 text-white w-full">
                  {slide.badge && (
                    <Badge
                      variant="secondary"
                      className="rounded-full py-0.5 px-2.5 md:py-1 md:px-3 border-border mb-2 md:mb-4 text-[10px] md:text-sm inline-flex items-center"
                      asChild
                    >
                      <Link to={slide.badgeLink || "#"}>
                        <span className="truncate">{slide.badge}</span> <ArrowUpRight className="ml-1 size-3 md:size-4 shrink-0" />
                      </Link>
                    </Badge>
                  )}
                  <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl xl:text-7xl leading-tight md:leading-[1.2] font-semibold tracking-tighter">
                    {slide.title}
                  </h1>
                  <p className="mt-2 md:mt-4 text-xs sm:text-sm md:text-lg text-white/90 max-w-2xl line-clamp-2 md:line-clamp-none">
                    {slide.description}
                  </p>
                  <div className="mt-3 md:mt-6 flex flex-col sm:flex-row items-stretch sm:items-center gap-2 md:gap-4">
                    <Button size="default" className="rounded-full text-xs sm:text-sm md:text-base w-full sm:w-auto h-9 md:h-11">
                      {slide.primaryButton || "Get Started"} <ArrowUpRight className="size-3 sm:size-4 md:size-5" />
                    </Button>
                    <Button
                      variant="outline"
                      size="default"
                      className="rounded-full shadow-none text-black dark:text-white text-xs sm:text-sm md:text-base w-full sm:w-auto h-9 md:h-11"
                    >
                      <CirclePlay className="size-3 sm:size-4 md:size-5" /> {slide.secondaryButton || "Watch Demo"}
                    </Button>
                  </div>
                </div>
              </div>
            </CarouselItem>
          );
        })}
      </CarouselContent>
      <CarouselPrevious className="left-2 sm:left-4 md:left-8 size-8 md:size-10" />
      <CarouselNext className="absolute right-2 sm:right-4 md:right-8 size-8 md:size-10" />
      <Button
        onClick={handleTogglePlay}
        size="icon"
        variant="secondary"
        className="absolute bottom-4 right-4 z-20 rounded-full shadow-md bg-black/50 hover:bg-black/70 text-white backdrop-blur-sm"
        aria-label={isPlaying ? "Pausar autoplay" : "Reanudar autoplay"}
      >
        {isPlaying ? (
          <Pause className="size-5" />
        ) : (
          <Play className="size-5" />
        )}
      </Button>
    </Carousel>
  );
}
