"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";
import { CourseItem } from "@/data/CoursesData";
import { useState } from "react";

type CourseCardProps = {
  course: CourseItem;
  defaultTruncateWords?: number;
};

export const CourseCard = ({ course, defaultTruncateWords = 20 }: CourseCardProps) => {
  const [isExpanded, setIsExpanded] = useState(false);
  
  const words = course.description.split(" ");
  const isTruncated = !isExpanded && words.length > defaultTruncateWords;
  const displayWords = isTruncated ? words.slice(0, defaultTruncateWords) : words;

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -5 }}
      className="group relative bg-card/50 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden hover:border-primary/30 transition-all duration-300 shadow-lg hover:shadow-primary/10 flex flex-col h-full"
    >
      {/* Image Thumbnail */}
      <div className="relative w-full aspect-[16/9] bg-black/40 overflow-hidden border-b border-white/10">
        <Image 
          src={course.image}
          alt={course.name}
          fill
          className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60"></div>
      </div>
      
      {/* Content */}
      <div className="p-6 flex flex-col flex-grow">
        <p className="text-primary/80 text-xs font-semibold uppercase tracking-wider mb-2">
          {course.issuer} • {course.date}
        </p>
        <h3 className="text-xl font-bold text-white mb-3 leading-tight group-hover:text-primary transition-colors">
          {course.name}
        </h3>
        
        <div className="text-white/60 text-sm leading-relaxed mb-6 flex-grow">
          {displayWords.join(" ")}
          {isTruncated && (
            <span>
              ...{" "}
              <button 
                onClick={(e) => {
                  e.preventDefault();
                  setIsExpanded(true);
                }}
                className="text-primary font-medium hover:underline ml-1"
              >
                more
              </button>
            </span>
          )}
          {isExpanded && words.length > defaultTruncateWords && (
            <span>
              {" "}
              <button 
                onClick={(e) => {
                  e.preventDefault();
                  setIsExpanded(false);
                }}
                className="text-primary font-medium hover:underline ml-1"
              >
                less
              </button>
            </span>
          )}
        </div>
        
        {course.url && course.url !== "#" && (
          <div className="mt-auto pt-4 border-t border-white/10">
            <a 
              href={course.url} 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-medium text-white/80 hover:text-white transition-colors"
            >
              View Certificate
              <FontAwesomeIcon icon={faExternalLinkAlt} className="w-3.5 h-3.5" />
            </a>
          </div>
        )}
      </div>
    </motion.div>
  );
};
