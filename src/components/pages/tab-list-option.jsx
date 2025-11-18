import { TabsList, TabsTrigger } from "../ui/tabs";
import React, { useEffect, useRef } from "react";

export function TabListOption({ options, sizeTab }) {
  const underlineRef = useRef(null);
  const triggerRefs = useRef({});

  useEffect(() => {
    const activeTrigger = triggerRefs.current[sizeTab];
    if (activeTrigger && underlineRef.current) {
      underlineRef.current.style.width = `${activeTrigger.offsetWidth}px`;
      underlineRef.current.style.transform = `translateX(${activeTrigger.offsetLeft}px)`;
    }
  }, [sizeTab]);

  return (
    <div className="relative border-b">
      <TabsList className="relative bg-transparent border-none rounded-none h-auto p-0 flex items-end">
        {options.map((option) => {
          return (
            <TabsTrigger
              className="relative bg-transparent border-none rounded-none px-4 pb-3 pt-2 font-semibold text-foreground data-[state=active]:bg-transparent data-[state=active]:text-foreground data-[state=active]:shadow-none focus-visible:ring-0 focus-visible:ring-offset-0"
              value={option.value}
              key={option.value}
              ref={(el) => {
                if (el) {
                  triggerRefs.current[option.value] = el;
                }
              }}
            >
              {option.title}
            </TabsTrigger>
          );
        })}
        <span
          ref={underlineRef}
          className="absolute bottom-0 left-0 h-0.5 bg-foreground transition-all duration-300 ease-out"
          style={{ width: 0, transform: "translateX(0)" }}
        />
      </TabsList>
    </div>
  );
}
