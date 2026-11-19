import type { SiteContent } from './types.ts';

/**
 * ✏️  YOUR PERSONAL DETAILS
 *
 * Everything here is plain text. Change it and the whole site updates —
 * no component edits needed. Anything in [square brackets] is a placeholder
 * waiting for your real information.
 */
export const site: SiteContent = {
  name: 'Trevor Mbugua',
  title: 'IT enthusiast',
  tagline:
    'Software development student building full-stack web applications, ' +
    'thinking carefully about data, and learning how solid systems are put together.',
  location: 'Nairobi, Kenya',
  availability: 'Currently seeking attachment opportunities',

  email: 'trevormungai20@gmail.com', 
  social: {
    github: 'https://github.com/trevorm0', 
    linkedin: 'https://www.linkedin.com/in/trevor-mungai-b80368318', 
  },

  // Put your CV in /public (e.g. public/cv.pdf) and set this to '/cv.pdf'.
  cvPath: '',

  // Used for canonical/OG tags and the sitemap. Update after you deploy.
  siteUrl: 'https://example.com',

  about: {
    headline: 'Curious about how software works — all the way down.',
    intro: [
      "I'm a software development student and aspiring software engineer. I enjoy " +
        'taking an idea from a blank editor to something people can actually use, and ' +
        'I care about the parts users never see: the data model, the API boundaries, ' +
        'and the decisions that keep a codebase easy to change.',
      
    ],
    interests: [
      'Software engineering',
      'Full-stack development',
      'Cybersecurity',
      'Databases',
      'System architecture',
      'Emerging technologies',
    ],
    education: [
      {
        institution: 'Strathmore University',
        qualification: 'Bachelor of Business Information Technology (BBIT)',
        period: '2024 – 2028',
        
      },
    ],
    goals:
      'I want to grow into an engineer who can own a feature end to end — from schema ' +
      'design to deployment — and work on a team where code review and good engineering ' +
      'practice are taken seriously.',
    currentlyLearning: ['[Something you are learning now]', '[Another topic]'],
    approach: [
      {
        title: 'Understand first',
        text: 'Restate the problem, find the constraints, and sketch the data before writing code.',
      },
      {
        title: 'Build small, verify often',
        text: 'Work in thin vertical slices that run end to end, then improve them.',
      },
      {
        title: 'Leave it clearer',
        text: 'Readable names, honest commit messages, and docs the next person can follow.',
      },
    ],
  },

  /** Floating markers in the 3D hero. Each one jumps to a section. */
  heroHotspots: [
    {
      label: 'Full-stack',
      text: 'Interfaces, APIs and the glue between them.',
      target: 'projects',
    },
    {
      label: 'Databases',
      text: 'Modelling data so the rest of the system stays simple.',
      target: 'skills',
    },
    {
      label: 'Security',
      text: 'Learning to think like an attacker to build safer software.',
      target: 'about',
    },
    {
      label: 'Playground',
      text: 'A small interactive terminal built into this site.',
      target: 'playground',
    },
  ],
};
