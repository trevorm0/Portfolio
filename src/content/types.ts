/**
 * Content types for the portfolio.
 *
 * Every piece of personal content on the site is described by one of these
 * types. Edit the data files next to this one (site.ts, projects.ts, skills.ts,
 * journey.ts) — TypeScript will flag any entry that doesn't match.
 */

/* ------------------------------------------------------------------ */
/* Personal / site details                                             */
/* ------------------------------------------------------------------ */

export interface SocialLinks {
  /** Full URL, e.g. "https://github.com/your-handle". Leave empty ("") to hide. */
  github: string;
  /** Full URL, e.g. "https://www.linkedin.com/in/your-handle". Leave empty to hide. */
  linkedin: string;
}

export interface EducationEntry {
  institution: string;
  qualification: string;
  /** Free text, e.g. "2024 – present" */
  period: string;
  details?: string;
}

export interface HeroHotspot {
  /** Short label shown on the 3D marker */
  label: string;
  /** One or two sentences revealed when the hotspot is opened */
  text: string;
  /** Section id to jump to, e.g. "projects" */
  target: SectionId;
}

export interface SiteContent {
  name: string;
  /** Initials or short mark used in the nav logo */
  monogram: string;
  title: string;
  /** One-sentence hero description */
  tagline: string;
  /** Where you're based (optional — leave "" to hide) */
  location: string;
  /** Shown in "available for…" line in hero/contact. Leave "" to hide. */
  availability: string;
  email: string;
  social: SocialLinks;
  /**
   * Path to your CV inside /public, e.g. "/cv.pdf".
   * Leave "" until you add the file — the download button hides itself.
   */
  cvPath: string;
  /** Public URL of the deployed site — used for SEO/sitemap. */
  siteUrl: string;

  about: {
    headline: string;
    intro: string[];
    interests: string[];
    education: EducationEntry[];
    goals: string;
    currentlyLearning: string[];
    approach: { title: string; text: string }[];
  };

  heroHotspots: HeroHotspot[];
}

export type SectionId =
  | 'home'
  | 'about'
  | 'projects'
  | 'skills'
  | 'journey'
  | 'playground'
  | 'contact';

/* ------------------------------------------------------------------ */
/* Projects                                                            */
/* ------------------------------------------------------------------ */

export type ProjectStatus = 'Completed' | 'In Progress' | 'Prototype';

export interface ProjectMedia {
  type: 'image' | 'video';
  /** Path inside /public (e.g. "/projects/my-app/home.webp") or a full URL */
  src: string;
  /** Required for images: describe what the screenshot shows */
  alt: string;
  caption?: string;
}

export interface CaseStudySection {
  heading: string;
  /** Paragraphs of text */
  body: string[];
  /** Optional diagram, schema or screenshot illustrating this section */
  media?: ProjectMedia;
}

export interface Project {
  /** Unique, URL-safe id, e.g. "inventory-api". Used for #project/<id> links. */
  id: string;
  title: string;
  /** One or two sentences shown on the card */
  summary: string;
  /** Free text, e.g. "Full-Stack", "Database", "Tooling". Drives the filter chips. */
  category: string;
  technologies: string[];
  status: ProjectStatus;
  /** Featured projects get a larger card and appear first by default */
  featured?: boolean;
  /** Lower numbers appear first. Projects without one are ordered after. */
  order?: number;
  /** Free text, e.g. "2026" or "Mar 2026" */
  date?: string;

  thumbnail?: ProjectMedia;
  gallery?: ProjectMedia[];

  problem?: string;
  solution?: string;
  features?: string[];
  /** What *you* specifically built or decided */
  contributions?: string[];
  /** Extra case-study chapters: architecture, schema, challenges, outcomes… */
  caseStudy?: CaseStudySection[];

  links?: {
    github?: string;
    demo?: string;
    docs?: string;
  };
}

/* ------------------------------------------------------------------ */
/* Skills                                                              */
/* ------------------------------------------------------------------ */

export interface Skill {
  name: string;
  /** One honest sentence: what you've used it for */
  note?: string;
  /** Project ids (from projects.ts) where you used this skill */
  projectIds?: string[];
  /**
   * Names of other skills this one genuinely works with (e.g. HTML ↔ CSS).
   * Drawn as connections in the skills lab. Links are two-way automatically.
   */
  related?: string[];
}

export interface SkillCategory {
  id: string;
  title: string;
  description: string;
  skills: Skill[];
}

/* ------------------------------------------------------------------ */
/* Journey / timeline                                                  */
/* ------------------------------------------------------------------ */

export type MilestoneKind = 'education' | 'project' | 'learning' | 'event' | 'work';

export interface Milestone {
  id: string;
  title: string;
  /** Free text, e.g. "Sep 2024" or "2025 – present" */
  date: string;
  kind: MilestoneKind;
  description: string;
  skills?: string[];
  /** Project ids from projects.ts */
  projectIds?: string[];
  links?: { label: string; url: string }[];
  /**
   * Set to true while an entry is still a template. Placeholder entries are
   * shown with a visible "Placeholder" tag so they are never mistaken for
   * real achievements. Remove the flag once you've filled in real details.
   */
  placeholder?: boolean;
}
