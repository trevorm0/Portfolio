import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ExternalLink, X } from 'lucide-react';
import { GithubIcon } from './BrandIcons';
import { projects, projectById, projectCategories } from '../content';
import { openProject, closeProject } from '../lib/hooks';
import type { Project } from '../content';

function ProjectCard({ project }: { project: Project }) {
  return (
    <article className={`project-card ${project.featured ? 'featured' : ''}`}>
      <button className="project-card-hit" onClick={() => openProject(project.id)} aria-label={`Open ${project.title}`}>
        <div className="project-thumb">
          {project.thumbnail?.type === 'image' && project.thumbnail.src ? (
            <img src={project.thumbnail.src} alt={project.thumbnail.alt || project.title} loading="lazy" />
          ) : (
            <div className="project-thumb-fallback">{project.title.slice(0, 2)}</div>
          )}
          {project.featured && <span className="badge">Featured</span>}
        </div>
        <div className="project-meta">
          <h3>{project.title}</h3>
          <p>{project.summary}</p>
          <div className="tech-row">
            {project.technologies.slice(0, 4).map((t) => (
              <span key={t} className="chip chip-sm">
                {t}
              </span>
            ))}
          </div>
        </div>
      </button>
    </article>
  );
}

function CaseStudy({ project, onClose }: { project: Project; onClose: () => void }) {
  return (
    <motion.div
      className="case-study"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      role="dialog"
      aria-modal="true"
      aria-labelledby="case-title"
    >
      <div className="case-backdrop" onClick={onClose} />
      <motion.div
        className="case-panel"
        initial={{ y: 40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 24, opacity: 0 }}
        transition={{ type: 'spring', damping: 28, stiffness: 320 }}
      >
        <header className="case-head">
          <div>
            <p className="eyebrow">{project.category}</p>
            <h2 id="case-title">{project.title}</h2>
          </div>
          <button className="icon-btn" onClick={onClose} aria-label="Close">
            <X size={22} />
          </button>
        </header>

        <p className="case-summary">{project.summary}</p>

        <div className="tech-row">
          {project.technologies.map((t) => (
            <span key={t} className="chip">
              {t}
            </span>
          ))}
        </div>

        {project.links && (
          <div className="case-links">
            {project.links.demo && (
              <a className="btn btn-primary" href={project.links.demo} target="_blank" rel="noreferrer">
                <ExternalLink size={16} /> Live
              </a>
            )}
            {project.links.github && (
              <a className="btn btn-ghost" href={project.links.github} target="_blank" rel="noreferrer">
                <GithubIcon size={16} /> Code
              </a>
            )}
          </div>
        )}

        {project.problem && (
          <div className="case-block">
            <h3>Problem</h3>
            <p>{project.problem}</p>
          </div>
        )}
        {project.solution && (
          <div className="case-block">
            <h3>Solution</h3>
            <p>{project.solution}</p>
          </div>
        )}

{/* Project features */}
{project.features && project.features.length > 0 && (
  <div className="case-block">
    <h3>Key Features</h3>
    <ul>
      {project.features.map((feature, index) => (
        <li key={index}>{feature}</li>
      ))}
    </ul>
  </div>
)}

{/* Personal contributions */}
{project.contributions && project.contributions.length > 0 && (
  <div className="case-block">
    <h3>My Contributions</h3>
    <ul>
      {project.contributions.map((contribution, index) => (
        <li key={index}>{contribution}</li>
      ))}
    </ul>
  </div>
)}

{/* Additional screenshots */}
{project.gallery && project.gallery.length > 0 && (
  <div className="case-block">
    <h3>Project Screenshots</h3>

    <div className="case-gallery">
      {project.gallery.map((media, index) => (
        <figure key={`${media.src}-${index}`}>
          {media.type === 'image' ? (
            <img
              src={media.src}
              alt={media.alt}
              loading="lazy"
            />
          ) : (
            <video
              src={media.src}
              controls
              preload="metadata"
            />
          )}

          {media.caption && (
            <figcaption>{media.caption}</figcaption>
          )}
        </figure>
      ))}
    </div>
  </div>
)}

        
      </motion.div>
    </motion.div>
  );
}

export default function ProjectGallery() {
  const [filter, setFilter] = useState<string>('all');
  const [activeId, setActiveId] = useState<string | null>(null);

  useEffect(() => {
    const sync = () => {
      const hash = location.hash;
      if (hash.startsWith('#project-')) {
        const id = hash.slice('#project-'.length);
        setActiveId(id);
      } else {
        setActiveId(null);
      }
    };
    sync();
    window.addEventListener('hashchange', sync);
    return () => window.removeEventListener('hashchange', sync);
  }, []);

  const filtered =
    filter === 'all' ? projects : projects.filter((p) => p.category === filter);

  const active = activeId ? projectById(activeId) : null;

  return (
    <section id="projects" className="section">
      <div className="container">
        <header className="section-head">
          <p className="eyebrow">Work</p>
          <h2>Selected projects</h2>
        </header>

        {projectCategories.length > 1 && (
          <div className="filter-row" role="tablist" aria-label="Filter projects">
            <button
              className={filter === 'all' ? 'active' : ''}
              onClick={() => setFilter('all')}
              role="tab"
              aria-selected={filter === 'all'}
            >
              All
            </button>
            {projectCategories.map((c) => (
              <button
                key={c}
                className={filter === c ? 'active' : ''}
                onClick={() => setFilter(c)}
                role="tab"
                aria-selected={filter === c}
              >
                {c}
              </button>
            ))}
          </div>
        )}

        <div className="project-grid">
          {filtered.length === 0 ? (
            <p className="muted">No projects yet. Add some in <code>src/content/projects.ts</code>.</p>
          ) : (
            filtered.map((p) => <ProjectCard key={p.id} project={p} />)
          )}
        </div>
      </div>

      <AnimatePresence>
        {active && <CaseStudy project={active} onClose={closeProject} />}
      </AnimatePresence>
    </section>
  );
}
