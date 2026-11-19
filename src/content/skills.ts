import type { SkillCategory } from './types';

/**
 * ✏️  YOUR SKILLS
 *
 * Only list things you have genuinely used. There are deliberately no
 * proficiency percentages — use the optional `note` to say, honestly, what
 * you've done with a tool. Link skills to projects with `projectIds`.
 *
 * Use `related` to connect skills that genuinely work together; the 3D lab
 * draws those links.
 *
 * Categories with no skills are hidden on the live site (and shown with an
 * "add skills" hint while you run `npm run dev`).
 *
 * The entries below are the ones named in your brief — confirm, edit or
 * remove them.
 */
export const skillCategories: SkillCategory[] = [
  {
    id: 'languages',
    title: 'Programming Languages',
    description: 'Languages and programming fundamentals.',
    skills: [
 { name: 'PHP', note: 'Backend development and server-side applications' },
{ name: 'Python', note: 'Scripting, automation and data processing' },
{ name: 'JavaScript', note: 'Interactive web development' },
{ name: 'HTML', note: 'Semantic web structure' },
{ name: 'CSS', note: 'Responsive web design and styling' },
{ name: 'SQL', note: 'Database design, queries and management' },
{ name: 'Kotlin', note: 'Android application development' },
    ],
  },
  {
    id: 'frontend',
    title: 'Frontend Development',
    description: 'Building the parts of an application people see and use.',
    skills: [
      { name: 'HTML', note: 'Semantic, accessible page structure.', related: ['CSS', 'JavaScript'] },
      { name: 'CSS', note: 'Responsive layouts and design systems.', related: ['JavaScript'] },
      { name: 'JavaScript', note: 'Interactive behaviour in the browser.' },
    ],
  },
  {
    id: 'backend',
    title: 'Backend Development',
    description: 'Server-side languages, frameworks and API development.',
    skills: [
      { name: 'Node.js', note: 'Backend development, REST API design and server-side JavaScript' },
    ],
  },
  {
    id: 'databases',
    title: 'Databases',
    description: 'Relational databases, SQL and data modelling.',
    skills: [{ name: 'SQL', note: 'Querying and designing relational schemas.' }],
  },
  {
    id: 'tools',
    title: 'Development Tools',
    description: 'Version control, editors and environments.',
    skills: [
      { name: 'Git', note: 'Branching, commits and history.', related: ['GitHub'] },
      { name: 'GitHub', note: 'Hosting repositories and collaborating.' },
    ],
  },
  {
    id: 'emerging',
    title: 'Exploring',
    description: 'Areas I am actively learning about — interests, not claims of expertise.',
    skills: [
      { name: 'AI integration' },
      { name: 'Cybersecurity' },
      { name: 'Cloud computing' },
      { name: 'Data engineering' },
    ],
  },
];
