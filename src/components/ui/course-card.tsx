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
      className="group relative bg-card/50 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden hover:border-teal-500/30 transition-all duration-300 shadow-lg hover:shadow-teal-500/10 flex flex-col h-full"
    >
      {/* Image Thumbnail */}
      <div className="relative w-full aspect-[16/9] bg-black/40 overflow-hidden border-b border-white/10">
        <Image 
          src={course.image}
          alt={course.name}
          fill
          loading="lazy"
          className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60"></div>
      </div>
      
      {/* Content */}
      <div className="p-6 flex flex-col flex-grow">
        <p className="text-teal-400/80 text-xs font-semibold uppercase tracking-wider mb-2">
          {course.issuer} • {course.date}
        </p>
        <h3 className="text-xl font-bold text-white mb-3 leading-tight group-hover:text-teal-400 transition-colors">
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
                className="text-teal-400 font-medium hover:underline ml-1"
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
                className="text-teal-400 font-medium hover:underline ml-1"
              >
                less
              </button>
            </span>
          )}
        </div>
        
        {course.categories && course.categories.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-4">
            {course.categories.map((category) => (
              <span 
                key={category} 
                className="px-2.5 py-1 text-[10px] font-semibold tracking-wider uppercase text-emerald-400 bg-emerald-400/10 border border-emerald-400/20 rounded-full"
              >
                {category}
              </span>
            ))}
          </div>
        )}
        
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
