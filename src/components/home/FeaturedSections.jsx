import { Link } from "react-router-dom";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

const leftSection = {
  title: "New Live-In Sets",
  description: "Laid-back style that moves with you.",
  cta: "Shop Cozy Fits",
  image: "/images/live-in-sets.jpg",
  link: "/collections/live-in-sets",
};

const rightSection = {
  title: "The Waffle Shop",
  description: "One-of-a-kind pieces. Remade, renewed, reimagined for now.",
  cta: "Shop Now",
  link: "/collections/waffle-shop",
};

const rightCarouselImages = [
  "/images/waffle-shop-1.jpg",
  "/images/waffle-shop-2.jpg",
  "/images/waffle-shop-3.jpg",
];

export function FeaturedSections({ rightCarouselImages, rightSection, leftSection }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-1">
      {/* Left Section */}
      <Link
        to={leftSection.link}
        className="relative group overflow-hidden block"
      >
        <img
          src={leftSection.image}
          alt={leftSection.title}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors" />
        <div className="absolute bottom-6 left-6 text-white">
          <h3 className="text-2xl font-bold mb-2">{leftSection.title}</h3>
          <p className="text-sm mb-3 max-w-md">{leftSection.description}</p>
          <span className="text-sm underline hover:no-underline">
            {leftSection.cta}
          </span>
        </div>
      </Link>

      {/* Right Carousel */}
      <div className="relative">
        <Carousel
          opts={{
            loop: true,
          }}
          plugins={[
            Autoplay({
              delay: 4000,
            }),
          ]}
          className="w-full h-full"
        >
          <CarouselContent className="h-full">
            {rightCarouselImages.map((image, index) => (
              <CarouselItem key={index} className="h-full">
                <div className="relative group overflow-hidden h-full">
                  <img
                    src={image}
                    alt={rightSection.title}
                    className="w-full h-full object-cover transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors" />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>

        </Carousel>
        
        {/* Texto fijo sobre el carousel */}
        <Link
          to={rightSection.link}
          className="absolute bottom-6 left-6 text-white z-10 pointer-events-auto"
        >
          <h3 className="text-2xl font-bold mb-2">{rightSection.title}</h3>
          <p className="text-sm mb-3 max-w-md">{rightSection.description}</p>
          <span className="text-sm underline hover:no-underline">
            {rightSection.cta}
          </span>
        </Link>
      </div>
    </div>
  );
}
