import type { Milestone } from './types';

/**
 * ✏️  YOUR JOURNEY
 *
 * Education, project milestones, learning, hackathons, work. Newest first
 * is a good default, but entries display in the order you write them.
 *
 * Entries marked `placeholder: true` are only visible while you run
 * `npm run dev` (with a "Placeholder" tag) and are NEVER shown on the
 * production build — so nothing invented ever goes live. Replace the text
 * and delete the flag to publish an entry.
 */
export const milestones: Milestone[] = [
  {
    id: 'education-start',
    placeholder: true,
    kind: 'education',
    title: '[Started your programme]',
    date: '[April/ 2024]',
    description: '[Curretly a student at Strathmore univesity pursuing a degree in Bachelor of Business Information Technology  (BBIT)]',
    skills: [],
  },
  {
    id: 'first-project',
    placeholder: true,
    kind: 'project',
    title: '[A project milestone]',
    date: '[November/2026]',
    description: 'A fitness/wellness application that allows users to track their workouts, set goals, and monitor progress over time. The app includes features such as personalized workout plans, nutrition tracking, and social sharing to encourage community engagement.',
    projectIds: [],
  },
  
];
