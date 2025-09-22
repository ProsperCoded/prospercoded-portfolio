import { notFound } from "next/navigation";
import { Metadata } from "next";
import { getProjectBySlug, getAllProjectSlugs } from "@/data/ProjectsData";
import ProjectLayout from "@/components/projects/ProjectLayout";
import ProjectSection from "@/components/projects/ProjectSection";
import ProjectTextBlock from "@/components/projects/ProjectTextBlock";
import ProjectImage from "@/components/projects/ProjectImage";
import ProjectChallenges from "@/components/projects/ProjectChallenges";

interface ProjectPageProps {
  params: Promise<{
    slug: string;
  }>;
}

// Generate static params for all projects
export async function generateStaticParams() {
  const slugs = getAllProjectSlugs();
  return slugs.map((slug) => ({
    slug,
  }));
}

// Generate metadata for SEO
export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return {
      title: "Project Not Found",
    };
  }

  return {
    title: `${project.name} - ${project.designation} | Prosper Enwerem Tochukwu`,
    description: project.quote,
    openGraph: {
      title: `${project.name} - ${project.designation}`,
      description: project.quote,
      images: project.images.map((img) => img.src),
    },
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return (
    <ProjectLayout project={project}>
      {/* Brief Section */}
      {project.brief && (
        <ProjectSection
          id="brief"
          title="Brief"
          icon="https://img.icons8.com/dusk/64/brief.png"
        >
          <ProjectTextBlock
            title="Motivation"
            content={project.brief.motivation}
            variant="highlight"
            size="large"
          />

          <div className="grid md:grid-cols-2 gap-8">
            <ProjectTextBlock
              title="Challenges"
              content={project.brief.challenges}
              variant="default"
            />
            <ProjectTextBlock
              title="Solutions"
              content={project.brief.solutions}
              variant="default"
            />
          </div>

          <ProjectTextBlock
            title="Impact"
            content={project.brief.impact}
            variant="quote"
            size="large"
          />
        </ProjectSection>
      )}

      {/* Architecture Section */}
      {project.architecture && (
        <ProjectSection
          id="architecture"
          title="Architecture"
          icon="https://img.icons8.com/color/96/data-configuration.png"
        >
          <ProjectTextBlock
            title="System Overview"
            content={project.architecture.overview}
            size="large"
          />

          <ProjectTextBlock
            title="System Flow"
            content={project.architecture.systemFlow}
            variant="highlight"
          />

          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-foreground">
              Technology Choices
            </h3>
            {Object.entries(project.architecture.techChoices).map(
              ([category, techs]) => (
                <div key={category} className="space-y-4">
                  <h4 className="text-lg font-semibold text-foreground">
                    {category}
                  </h4>
                  <div className="grid md:grid-cols-2 gap-4">
                    {techs.map((tech, index) => (
                      <div
                        key={index}
                        className="bg-card/50 p-4 rounded-lg border border-border/50"
                      >
                        <div className="flex items-center gap-3 mb-3">
                          {"icon" in tech.tech && tech.tech.icon && (
                            <img
                              src={tech.tech.icon}
                              alt={tech.tech.name}
                              className="w-8 h-8 object-contain"
                            />
                          )}
                          <span className="text-lg font-semibold text-foreground">
                            {tech.tech.name}
                          </span>
                        </div>
                        {tech.reason && (
                          <p className="text-foreground/80 text-sm leading-relaxed">
                            {tech.reason}
                          </p>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )
            )}
          </div>

          <ProjectTextBlock
            title="Key Features"
            content={project.architecture.keyFeatures}
            variant="default"
          />
        </ProjectSection>
      )}

      {/* UML Diagram Section */}
      {project.uml && (
        <ProjectSection
          id="uml"
          title="UML Diagram"
          icon="https://img.icons8.com/external-kiranshastry-lineal-color-kiranshastry/64/external-flow-interface-kiranshastry-lineal-color-kiranshastry.png"
        >
          <ProjectTextBlock
            title="System Architecture"
            content={project.uml.description}
            size="large"
          />

          <ProjectImage
            src={project.uml.imageUrl}
            alt={`${project.name} UML Diagram`}
            size="full"
            caption="Complete system architecture and data flow diagram"
          />

          <ProjectTextBlock
            title="Flow Explanation"
            content={project.uml.flowExplanation}
            variant="highlight"
          />

          <ProjectTextBlock
            title="System Components"
            content={project.uml.components}
            variant="default"
          />
        </ProjectSection>
      )}

      {/* Database Design Section */}
      {project.database && (
        <ProjectSection
          id="database"
          title="Database Design"
          icon="https://img.icons8.com/liquid-glass/48/stacked-organizational-chart.png"
        >
          <ProjectTextBlock
            title="Database Overview"
            content={project.database.overview}
            size="large"
          />

          <ProjectImage
            src={project.database.schema.imageUrl}
            alt={`${project.name} Database Schema`}
            size="full"
            caption={project.database.schema.description}
          />

          <ProjectTextBlock
            title="Design Decisions"
            content={project.database.designDecisions}
            variant="highlight"
          />

          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-foreground">
              Database Tables
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              {project.database.tables.map((table, index) => (
                <div
                  key={index}
                  className="bg-card/50 p-4 rounded-lg border border-border/50"
                >
                  <h4 className="font-semibold text-foreground mb-2">
                    {table.name}
                  </h4>
                  <p className="text-foreground/80 text-sm">{table.purpose}</p>
                </div>
              ))}
            </div>
          </div>
        </ProjectSection>
      )}

      {/* Challenges & Solutions Section */}
      {project.challenges && (
        <ProjectSection
          id="challenges"
          title="Challenges & Solutions"
          icon="https://img.icons8.com/external-flaticons-lineal-color-flat-icons/64/external-challenges-sales-flaticons-lineal-color-flat-icons-3.png"
        >
          <ProjectChallenges
            overview={project.challenges.overview}
            challenges={project.challenges.challenges}
            summary={project.challenges.summary}
          />
        </ProjectSection>
      )}
    </ProjectLayout>
  );
}
