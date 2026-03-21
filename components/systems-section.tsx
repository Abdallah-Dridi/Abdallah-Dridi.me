import { Reveal } from "@/components/reveal";
import { SectionShell } from "@/components/section-shell";
import { projects, type Project } from "@/lib/site-data";

export function SystemsSection() {
  const primaryProjects = projects.slice(0, 3);
  const secondaryProjects = projects.slice(3);

  return (
    <SectionShell
      id="systems"
      index="03"
      kicker="Selected Work / Systems Built And Studied"
      title="The Work"
      theme="paper"
    >
      <div className="space-y-6">
        {primaryProjects.map((project, index) => (
          <Reveal key={project.title} delay={index * 0.08}>
            <ProjectCard project={project} />
          </Reveal>
        ))}

        <div className="grid gap-6 lg:grid-cols-2">
          {secondaryProjects.map((project, index) => (
            <Reveal key={project.title} delay={(index + primaryProjects.length) * 0.08}>
              <ProjectCard project={project} compact />
            </Reveal>
          ))}
        </div>
      </div>
    </SectionShell>
  );
}

function ProjectCard({
  project,
  compact = false
}: {
  project: Project;
  compact?: boolean;
}) {
  const cardClasses = `project-card ${project.interactive ? "project-card-link" : "project-card-static"} ${
    compact ? "project-card-compact" : ""
  }`;

  const content = (
    <div className="relative flex h-full min-w-0 gap-4 sm:gap-6">
      <div aria-hidden="true" className="project-rail" />
      <div className="flex min-w-0 flex-1 flex-col">
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div className="min-w-0 space-y-3">
            <div className="flex flex-wrap items-center gap-3">
              <span className="mono-label text-paper/35">{project.index}</span>
              {project.status ? <span className="project-status">{project.status}</span> : null}
            </div>
            <h3 className={`project-title ${compact ? "project-title-compact" : ""}`}>
              {project.title}
            </h3>
          </div>
          <div className="flex flex-col items-start gap-2 text-left sm:items-end sm:text-right">
            {project.meta ? <span className="project-meta">{project.meta}</span> : null}
            <span className="mono-label text-paper/28">
              {project.interactive ? "Open" : "Featured"}
            </span>
          </div>
        </div>

        <p
          data-cursor="text"
          className={`mt-6 max-w-[56rem] font-serif italic leading-[1.62] text-paper/86 ${
            compact ? "text-[1.15rem]" : "text-[1.28rem]"
          }`}
        >
          {project.summary}
        </p>

        <p
          data-cursor="text"
          className={`mt-3 max-w-[62rem] font-serif leading-[1.72] text-paper/62 ${
            compact ? "text-[0.98rem]" : "text-[1.03rem]"
          }`}
        >
          {project.detail}
        </p>

        <div className="mt-6 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span key={tag} className="stack-tag">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );

  if (project.interactive && project.href) {
    return (
      <a
        href={project.href}
        target={project.isExternal ? "_blank" : undefined}
        rel={project.isExternal ? "noreferrer" : undefined}
        data-cursor="link"
        className={cardClasses}
      >
        {content}
      </a>
    );
  }

  return <div className={cardClasses}>{content}</div>;
}
