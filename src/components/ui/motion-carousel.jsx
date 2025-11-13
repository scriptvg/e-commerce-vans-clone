"use client";

import * as React from "react";
import { motion, useAnimation } from "framer-motion";
import { cn } from "@/lib/utils";

/* Contexto principal */
const MotionCarouselContext = React.createContext(null);

export function MotionCarousel({
  children,
  autoPlay = false,
  autoPlayInterval = 3000,
  itemsToShow = 1,
  gap = 8,
  showPartialNext = 0,
  className,
}) {
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const [totalItems, setTotalItems] = React.useState(0);
  const controls = useAnimation();

  // Funciones para moverse
  const scrollNext = React.useCallback(() => {
    setCurrentIndex((prev) => {
      const maxIndex = Math.max(0, totalItems - Math.floor(itemsToShow));
      if (prev >= maxIndex) {
        return 0; // Volver al inicio
      }
      return prev + 1;
    });
  }, [totalItems, itemsToShow]);

  const scrollPrev = React.useCallback(() => {
    setCurrentIndex((prev) => {
      const maxIndex = Math.max(0, totalItems - Math.floor(itemsToShow));
      if (prev <= 0) {
        return maxIndex; // Ir al final
      }
      return prev - 1;
    });
  }, [totalItems, itemsToShow]);

  // AutoPlay
  React.useEffect(() => {
    if (!autoPlay) return;
    const interval = setInterval(scrollNext, autoPlayInterval);
    return () => clearInterval(interval);
  }, [autoPlay, autoPlayInterval, scrollNext]);

  return (
    <MotionCarouselContext.Provider
      value={{
        currentIndex,
        setCurrentIndex,
        totalItems,
        setTotalItems,
        itemsToShow,
        gap,
        showPartialNext,
        scrollNext,
        scrollPrev,
        controls,
      }}
    >
      <div className={cn("relative w-full overflow-hidden", className)}>
        {children}
      </div>
    </MotionCarouselContext.Provider>
  );
}

/* Hook para usar el contexto */
export function useMotionCarousel() {
  const context = React.useContext(MotionCarouselContext);
  if (!context)
    throw new Error("useMotionCarousel debe usarse dentro de <MotionCarousel>");
  return context;
}

/* Contenedor con animación */
export function MotionCarouselContent({ children, className }) {
  const {
    currentIndex,
    itemsToShow,
    gap,
    setTotalItems,
    scrollNext,
    scrollPrev,
    showPartialNext,
  } = useMotionCarousel();

  const childrenArray = React.Children.toArray(children);
  const containerRef = React.useRef(null);
  const [itemWidth, setItemWidth] = React.useState(0);

  React.useEffect(() => {
    setTotalItems(childrenArray.length);
  }, [childrenArray.length, setTotalItems]);

  React.useEffect(() => {
    if (!containerRef.current) return;
    const firstChild = containerRef.current.querySelector("[data-carousel-item]");
    if (firstChild) setItemWidth(firstChild.offsetWidth + gap);

    const handleResize = () => {
      if (firstChild) setItemWidth(firstChild.offsetWidth + gap);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [gap, childrenArray.length]);

  const handleDragEnd = (event, info) => {
    const threshold = itemWidth / 4;
    if (info.offset.x < -threshold) scrollNext();
    else if (info.offset.x > threshold) scrollPrev();
  };

  // Cálculo del desplazamiento
  const computedX = itemWidth ? -currentIndex * itemWidth : 0;

  return (
    <div
      className={cn("overflow-hidden", className)}
      style={{
        paddingRight: showPartialNext ? `${showPartialNext}px` : undefined,
      }}
    >
      <motion.div
        ref={containerRef}
        className="flex cursor-grab active:cursor-grabbing"
        style={{ gap: `${gap}px` }}
        animate={{ x: computedX }}
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 30,
        }}
        drag="x"
        dragConstraints={{ left: 0, right: 0 }}
        dragElastic={0.15}
        onDragEnd={handleDragEnd}
      >
        {childrenArray}
      </motion.div>
    </div>
  );
}

/* Ítem individual */
export function MotionCarouselItem({ children, className, ...props }) {
  const { itemsToShow, gap } = useMotionCarousel();
  
  return (
    <div
      data-carousel-item
      className={cn("shrink-0", className)}
      style={{
        width: `calc(${100 / itemsToShow}% - ${gap * (itemsToShow - 1) / itemsToShow}px)`,
      }}
      {...props}
    >
      {children}
    </div>
  );
}

/* Botones y Dots */
export function MotionCarouselNext({ className }) {
  const { scrollNext } = useMotionCarousel();
  return (
    <button
      onClick={scrollNext}
      className={cn(
        "absolute right-2 top-1/2 -translate-y-1/2 bg-white/60 rounded-full p-2 backdrop-blur-sm hover:bg-white transition",
        className
      )}
    >
      ➜
    </button>
  );
}

export function MotionCarouselPrevious({ className }) {
  const { scrollPrev } = useMotionCarousel();
  return (
    <button
      onClick={scrollPrev}
      className={cn(
        "absolute left-2 top-1/2 -translate-y-1/2 bg-white/60 rounded-full p-2 backdrop-blur-sm hover:bg-white transition",
        className
      )}
    >
      ←
    </button>
  );
}

export function MotionCarouselDots({ className }) {
  const { currentIndex, totalItems, setCurrentIndex } = useMotionCarousel();
  return (
    <div
      className={cn(
        "flex justify-center mt-4 space-x-2 absolute bottom-2 left-1/2 -translate-x-1/2",
        className
      )}
    >
      {Array.from({ length: totalItems }).map((_, i) => (
        <button
          key={i}
          onClick={() => setCurrentIndex(i)}
          className={cn(
            "w-2.5 h-2.5 rounded-full transition-all",
            i === currentIndex ? "bg-white" : "bg-white/50 hover:bg-white/70"
          )}
        />
      ))}
    </div>
  );
}
