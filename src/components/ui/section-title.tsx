import React from "react";

type SectionTitleProps = {
  title: string;
  gradientFrom?: string;
  gradientVia?: string;
  gradientTo?: string;
  
  // To allow customizing the decorative dots and lines
  lineColorFrom?: string;
  lineColorTo?: string;
  dotColor1?: string;
  dotColor2?: string;
  dotColor3?: string;
};

export const SectionTitle = ({
  title,
  gradientFrom = "from-imperial-red",
  gradientVia = "via-folly",
  gradientTo = "to-imperial-red",
  
  lineColorFrom = "from-transparent",
  lineColorTo = "to-imperial-red/50",
  
  dotColor1 = "bg-imperial-red/60",
  dotColor2 = "bg-folly/60",
  dotColor3 = "bg-tangelo/60",
}: SectionTitleProps) => {
  return (
    <div className="text-center mb-4 relative">
      <h2 className={`text-4xl md:text-5xl lg:text-6xl font-bold mb-4 bg-gradient-to-r ${gradientFrom} ${gradientVia} ${gradientTo} bg-clip-text text-transparent`}>
        {title}
      </h2>

      <div className="flex items-center justify-center mt-8 gap-4">
        <div className={`h-px w-16 bg-gradient-to-r ${lineColorFrom} ${lineColorTo}`}></div>
        <div className="flex gap-1">
          <div className={`w-2 h-2 rounded-full ${dotColor1}`}></div>
          <div className={`w-2 h-2 rounded-full ${dotColor2}`}></div>
          <div className={`w-2 h-2 rounded-full ${dotColor3}`}></div>
        </div>
        <div className={`h-px w-16 bg-gradient-to-l ${lineColorFrom} ${lineColorTo}`}></div>
      </div>
    </div>
  );
};
