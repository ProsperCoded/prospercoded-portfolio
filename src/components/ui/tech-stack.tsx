// TechStack Component
import { technologies } from "@/data/TechnologiesData";
export default function TechStack({
  techStack,
  limit,
}: {
  techStack: (typeof technologies)[keyof typeof technologies][];
  limit?: number;
}) {
  // Apply limit if specified
  const displayTechs = limit ? techStack.slice(0, limit) : techStack;
  const remainingCount =
    limit && techStack.length > limit ? techStack.length - limit : 0;

  return (
    <div className="mt-4">
      <h4 className="text-sm font-medium text-white/80 mb-2">Tech Stack</h4>
      <div className="flex flex-wrap gap-2">
        {displayTechs.map((tech, index) => {
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
        {remainingCount > 0 && (
          <span className="inline-block px-2 py-1 bg-foreground/10 text-foreground/60 text-xs rounded-full">
            +{remainingCount} more
          </span>
        )}
      </div>
    </div>
  );
}
