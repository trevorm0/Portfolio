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

    
thumbnail: {
  type: 'image',
  src: `${import.meta.env.BASE_URL}Certsverify/Certsverify homepage.jpeg`,
  alt: 'CertVerify homepage'
},

gallery: [
  {
    type: 'image',
    src: `${import.meta.env.BASE_URL}Certsverify/Registrar dashboard.jpeg`,
    alt: 'Registrar dashboard',
    caption: 'Registrar Dashboard'
  },
  {
    type: 'image',
    src: `${import.meta.env.BASE_URL}Certsverify/Verification page.jpeg`,
    alt: 'Certificate verification page',
    caption: 'Certificate Verification'
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


  

  {
    id: 'mediconnect',
    title: 'MediConnect',

    summary:
      'A responsive online medical centre platform designed to simplify access to healthcare services through appointment booking, doctor profiles and health information.',

    category: 'Web Development',

    technologies: ['HTML', 'CSS', 'JavaScript'],

    status: 'Completed',
    featured: false,
    order: 2,
    date: '2026',

    thumbnail: {
      type: 'image',
      src: `${import.meta.env.BASE_URL}MediConnect/homepage.png`,
      alt: 'MediConnect homepage'
    },

    gallery: [
      {
        type: 'image',
        src: `${import.meta.env.BASE_URL}MediConnect/appointment-booking.png`,
        alt: 'MediConnect appointment booking form',
        caption: 'Appointment Booking'
      },
      {
        type: 'image',
        src: `${import.meta.env.BASE_URL}MediConnect/login.png`,
        alt: 'MediConnect user login page',
        caption: 'User Authentication'
      },
      {
        type: 'image',
        src: `${import.meta.env.BASE_URL}MediConnect/admin-dashboard.png`,
        alt: 'MediConnect administrative dashboard',
        caption: 'Administrative Dashboard'
      }
    ],

    problem:
      'Accessing healthcare services can be challenging when patients have to rely on manual appointment arrangements and separate sources of medical information.',

    solution:
      'Developed a responsive online medical centre platform that brings appointment booking, doctor information, user authentication and health information together in one place.',

    features: [
      'Online appointment booking',
      'Doctor profiles and information',
      'User authentication',
      'Health information articles',
      'Administrative dashboard',
      'Responsive user interface'
    ],

    contributions: [
      'Developed the responsive user interface using HTML and CSS.',
      'Implemented interactive functionality using JavaScript.',
      'Developed the appointment booking interface.',
      'Created doctor profile and health information sections.',
      'Implemented user authentication interfaces and administrative dashboard functionality.'
    ]
  },


  

  {
    id: 'fitlife',
    title: 'FitLife',

    summary:
      'A native Android wellness application designed to help users manage their fitness and health through workout tracking, nutrition logging, health monitoring and reminders.',

    category: 'Android Development',

    technologies: [
      'Kotlin',
      'Jetpack Compose',
      'Room',
      'CameraX',
      'Firebase'
    ],

    status: 'Completed',
    featured: false,
    order: 3,
    date: '2026',

    thumbnail: {
      type: 'image',
      src: `${import.meta.env.BASE_URL}FitLife/home-dashboard.jpeg`,
      alt: 'FitLife application home dashboard'
    },

    gallery: [
      {
        type: 'image',
        src: `${import.meta.env.BASE_URL}FitLife/login.jpeg`,
        alt: 'FitLife login screen',
        caption: 'User Authentication'
      },
      {
        type: 'image',
        src: `${import.meta.env.BASE_URL}FitLife/workouts.jpeg`,
        alt: 'FitLife workout selection screen',
        caption: 'Workout Tracking'
      },
      {
        type: 'image',
        src: `${import.meta.env.BASE_URL}FitLife/nutrition.jpeg`,
        alt: 'FitLife nutrition tracking screen',
        caption: 'Nutrition Tracking'
      },
      {
        type: 'image',
        src: `${import.meta.env.BASE_URL}FitLife/health-dashboard.jpeg`,
        alt: 'FitLife health monitoring dashboard',
        caption: 'Health Monitoring'
      },
      {
        type: 'image',
        src: `${import.meta.env.BASE_URL}FitLife/navigation-menu.jpeg`,
        alt: 'FitLife navigation menu',
        caption: 'Application Navigation'
      }
    ],

    problem:
      'Managing fitness activities, nutrition and general wellness using separate applications can make it difficult for users to keep track of their health routines.',

    solution:
      'Developed a native Android wellness application that combines workout tracking, nutrition logging, health monitoring and reminders into one platform.',

    features: [
      'Workout tracking and exercise management',
      'Nutrition and food logging',
      'Medication reminders',
      'Appointment reminders',
      'Step counting',
      'Camera-based pulse estimation',
      'Local health and fitness data management'
    ],

    contributions: [
      'Developed the native Android application using Kotlin and Jetpack Compose.',
      'Applied MVVM architecture to organise application functionality.',
      'Implemented local data management using Room and DataStore.',
      'Worked with Room database migrations.',
      'Integrated CameraX for camera-based pulse estimation.',
      'Implemented fitness tracking, nutrition logging and reminder functionality.',
      'Integrated Firebase into the application.'
    ]
  },

];


