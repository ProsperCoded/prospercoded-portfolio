// TechStack Component
import { technologies } from "@/data/TechnologiesData";
export default function TechStack({
  techStack,
}: {
  techStack: (typeof technologies)[keyof typeof technologies][];
}) {
  return (
    <div className="mt-4">
      <h4 className="text-sm font-medium text-white/80 mb-2">Tech Stack</h4>
      <div className="flex flex-wrap gap-2">
        {techStack.map((tech, index) => {
          return (
            <div
              key={index}
              className="flex items-center gap-1.5 px-2.5 py-1 bg-white/5 backdrop-blur-sm rounded-md border border-white/10 hover:bg-white/10 transition-colors"
            >
              {tech && "icon" in tech && tech.icon ? (
                <img
                  src={tech.icon}
                  alt={tech.name}
                  className="w-4 h-4 object-contain"
                />
              ) : (
                <div
                  className={`w-3 h-3 rounded-sm ${
                    tech?.color || "bg-gray-400"
                  }`}
                />
              )}
              <span
                className={`text-xs font-medium ${tech?.color || "text-white"}`}
              >
                {tech.name}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
