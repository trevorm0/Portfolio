/**
 * Single entry point for content. Components import from here, never from
 * the individual data files, so the data files stay plain lists.
 */
import { site } from './site';
import { projects as rawProjects } from './projects';
import { skillCategories as rawSkills } from './skills';
import { milestones as rawMilestones } from './journey';
import type { Project } from './types';

export * from './types';
export { site };

const DEV = import.meta.env.DEV;

/** Text wrapped in [square brackets] is a placeholder. */
export const isPlaceholder = (s?: string) => !!s && /^\s*\[.*\]\s*$/s.test(s);

/**
 * In production, placeholder strings are dropped so they never go live.
 * In dev they're kept so you can see what still needs filling in.
 */
export const real = (s?: string) => (s && (DEV || !isPlaceholder(s)) ? s : '');
export const realList = (list: string[] = []) => list.filter((s) => real(s));

// #region snippet:project-order
/* Projects: sorted featured → order → original position. */
export const projects: Project[] = rawProjects
  .map((p, i) => ({ p, i }))
  .sort((a, b) => {
    const f = Number(!!b.p.featured) - Number(!!a.p.featured);
    if (f) return f;
    const oa = a.p.order ?? Infinity;
    const ob = b.p.order ?? Infinity;
    if (oa !== ob) return oa - ob;
    return a.i - b.i;
  })
  .map(({ p }) => p);
// #endregion snippet:project-order

export const projectById = (id: string) => projects.find((p) => p.id === id);

export const projectCategories = Array.from(new Set(projects.map((p) => p.category))).sort();

/* Skills: hide empty categories in production. */
export const skillCategories = rawSkills.filter((c) => DEV || c.skills.length > 0);

/** Two-way relation lookup: skill name → related skill names. */
export const skillRelations = (() => {
  const map = new Map<string, Set<string>>();
  const add = (a: string, b: string) => {
    if (!map.has(a)) map.set(a, new Set());
    map.get(a)!.add(b);
  };
  for (const c of skillCategories)
    for (const s of c.skills)
      for (const r of s.related ?? []) {
        add(s.name, r);
        add(r, s.name);
      }
  return map;
})();

/* Journey: placeholders only in dev. */
export const milestones = rawMilestones.filter((m) => DEV || !m.placeholder);

export const education = site.about.education.filter(
  (e) => DEV || !(isPlaceholder(e.institution) && isPlaceholder(e.qualification)),
);

/* ------------------------------------------------------------------ */
/* Dev-time sanity checks — printed to the browser console.           */
/* ------------------------------------------------------------------ */
if (DEV) {
  const problems: string[] = [];
  const ids = new Set<string>();
  for (const p of rawProjects) {
    if (ids.has(p.id)) problems.push(`Duplicate project id "${p.id}"`);
    ids.add(p.id);
    if (!/^[a-z0-9-]+$/.test(p.id)) problems.push(`Project id "${p.id}" should be lowercase-with-dashes`);
    for (const m of [p.thumbnail, ...(p.gallery ?? [])])
      if (m && m.type === 'image' && !m.alt) problems.push(`Image in "${p.id}" is missing alt text`);
  }
  const checkRefs = (where: string, refs: string[] = []) =>
    refs.forEach((r) => !ids.has(r) && problems.push(`${where} references unknown project "${r}"`));
  rawSkills.forEach((c) => c.skills.forEach((s) => checkRefs(`Skill "${s.name}"`, s.projectIds)));
  rawMilestones.forEach((m) => checkRefs(`Milestone "${m.id}"`, m.projectIds));

  if (problems.length) console.warn('[portfolio content]\n- ' + problems.join('\n- '));
  const pending = rawMilestones.filter((m) => m.placeholder).length;
  if (pending) console.info(`[portfolio content] ${pending} journey placeholder(s) are hidden in production.`);
}
