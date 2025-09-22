import React, { useRef, useState, useEffect } from "react";
import { motion } from "motion/react";

interface HorizontalFeaturedListProps {
  items: string[];
  onItemSelect?: (item: string, index: number) => void;
  className?: string;
  itemClassName?: string;
  initialSelectedIndex?: number;
  allowToggle?: boolean; // allow re-click to de-select
}

const HorizontalFeaturedList: React.FC<HorizontalFeaturedListProps> = ({
  items,
  onItemSelect,
  className = "",
  itemClassName = "",
  initialSelectedIndex = 0,
  allowToggle = true,
}) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [selectedIndex, setSelectedIndex] = useState(initialSelectedIndex);

  // Auto-scroll effect
  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    const scroll = () => {
      if (
        scrollContainer.scrollLeft >=
        scrollContainer.scrollWidth - scrollContainer.clientWidth
      ) {
        scrollContainer.scrollLeft = 0;
      } else {
        scrollContainer.scrollLeft += 0.5;
      }
    };

    const interval = setInterval(scroll, 20);
    return () => clearInterval(interval);
  }, []);

  const handleItemClick = (item: string, index: number) => {
    // toggle off selection when clicking same item
    if (allowToggle && selectedIndex === index) {
      setSelectedIndex(-1);
      if (onItemSelect) onItemSelect(item, index);
      return;
    }
    setSelectedIndex(index);
    if (onItemSelect) onItemSelect(item, index);
  };

  return (
    <div className={`relative ${className}`}>
      <div
        ref={scrollRef}
        className="flex gap-4 overflow-x-auto scrollbar-hide py-2"
        style={{
          scrollbarWidth: "none",
          msOverflowStyle: "none",
        }}
      >
        {/* Duplicate items for seamless infinite scroll */}
        {[...items, ...items, ...items].map((item, index) => {
          const originalIndex = index % items.length;
          return (
            <motion.button
              key={`${item}-${index}`}
              onClick={() => handleItemClick(item, originalIndex)}
              className={`flex-shrink-0 px-6 py-3 rounded-full border transition-all duration-300 ${
                selectedIndex === originalIndex
                  ? "bg-primary/20 border-primary text-primary"
                  : "bg-white/5 border-white/20 text-white/80 hover:bg-white/10 hover:border-white/30"
              } ${itemClassName}`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span
                className={`text-sm whitespace-nowrap ${
                  selectedIndex === originalIndex ? "font-bold" : "font-medium"
                }`}
              >
                {item}
              </span>
            </motion.button>
          );
        })}
      </div>
    </div>
  );
};

export default HorizontalFeaturedList;
