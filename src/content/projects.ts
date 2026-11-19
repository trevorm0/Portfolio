import type { Project } from './types';

export const projects: Project[] = [
  {
    id: 'certverify',
    title: 'CertVerify',
    summary:
      'An academic certificate verification system designed to help employers and institutions authenticate academic qualifications using QR codes.',
    category: 'Full-Stack Development',
    technologies: ['PHP', 'MySQL', 'QR Codes', 'JavaScript'],
    status: 'Completed',
    featured: true,
    order: 1,
    date: '2026',

     // Main screenshot displayed on the project card
    thumbnail: {
      type: 'image',
      src: '/public/Certsverify/Registrar dashboard.jpeg',
      alt: 'CertVerify dashboard'
    },

    // Additional screenshots displayed inside the project details
    gallery: [
      {
        type: 'image',
        src: '/public/Certsverify/Verifivation page.jpeg',
        alt: 'Certificate verification interface',
        caption: 'Certificate Verification'
      },
      {
        type: 'image',
        src: '/public/Certsverify/Certsverify homepage.jpeg',
        alt: 'CertVerify system homepage',
        caption: 'System Homepage'
      }
    ],

    problem:
      'Manual academic certificate verification can be time-consuming and makes it difficult for employers to establish the authenticity of academic qualifications.',

    solution:
      'Developing a web-based verification platform that allows graduates to submit academic certificates and employers to verify their authenticity using QR codes.',

    features: [
      'User authentication and role-based access',
      'QR code generation for uploaded certificates',
      'Certificate verification',
      'University and certificate management',
      'Activity logging'
    ],

    contributions: [
      'Designed and implemented certificate management functionality.',
      'Worked on the PHP and MySQL backend.',
      'Implemented QR code-based certificate verification.',
      'Worked on user authentication and access control.'
    ]
  },

];
