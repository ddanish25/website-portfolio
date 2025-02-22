// Header section - Defines basic website information
const header = {
  homepage: 'http://localhost:5173/', // URL for the homepage
  title: 'GDSC', // Title shown in the navigation bar
}

// About section - Provides an introduction to GDSC UTD
const about = {
  name: 'GDSC', // Club name
  role: 'Student Club', // Club type
  description:
    'Google Developer Student Club at UT Dallas (GDSC UTD) is a student-led tech community dedicated to helping students learn, grow, and build innovative projects. We host hands-on workshops, hackathons, and networking events covering topics like web development, AI/ML, cloud computing, and more. Whether you\'re a beginner or an experienced developer, GDSC UTD provides a collaborative space to enhance your skills, connect with industry professionals, and work on real-world projects. Join us to explore technology, gain practical experience, and be part of a vibrant developer community! 🚀',
  resume: 'https://www.overleaf.com/latex/templates/jakes-resume/syzfjbzwjncs', // Link to resume (optional)
  social: {
    linkedin: 'https://linkedin.com', // LinkedIn profile link
    github: 'https://github.com', // GitHub profile link
  },
}

// Projects section - List of events/workshops organized by GDSC
const projects = [
  {
    name: 'Code your Love', // Event name
    description:
      'Hearts & HTML: A hands-on coding workshop where you\'ll create a beautiful interactive Valentine\'s card using HTML & CSS! No prior experience needed—just bring your creativity and get ready to code some love! 💖💻 Feb 12th | 7:00 - 8:00 PM | HH 2.402',
    stack: ['HTML', 'CSS', 'JS'], // Technologies used
    sourceCode: 'https://github.com/gdscutd/valentinesCard', // GitHub repository link
    livePreview: 'https://gdg.community.dev/events/details/google-gdg-on-campus-the-university-of-texas-at-dallas-richardson-united-states-presents-hearts-amp-html-code-a-valentines-card-that-pops', // Event page link
    image: './img/val.png', // Image path
  },
  {
    name: 'Firebase Authentication',
    description:
      'Join us for a hands-on workshop where you’ll build a sleek login page using React, Tailwind, and Firebase Authentication! Learn how to sign up and log in with email & password, as well as authenticate with Google—all in a modern, responsive UI. Perfect for beginners and those looking to integrate Firebase Auth into their projects. 🚀 Feb. 18th | 7:00 to 8:00 PM | ECSS 2.415',
    stack: ['Firebase', 'React'],
    sourceCode: 'https://github.com/gdscutd/react-firebase-auth', // GitHub repository link
    image: '/img/firebase.png',
  },
  {
    name: 'Portfolio',
    description:
      'Join us for a Personal Portfolio Workshop using React.js and Tailwind CSS. This beginner-friendly session provides a code template to help you get started, offering hands-on learning to build your personal portfolio step by step. Learn modern web development tools to create a sleek, responsive website that enhances your resume. The workshop includes a Q&A session and live debugging support from peers and mentors. February 24th | 7:00 PM to 8:30 PM | ECSS 2.415.',
    stack: ['React', 'Vite', 'Tailwind'], // Technologies used
    livePreview: 'https://gdg.community.dev/events/details/google-gdg-on-campus-the-university-of-texas-at-dallas-richardson-united-states-presents-design-your-own-personal-website/', // Event page link
    image: '/img/portfolio.png',
  },
]

// Skills section - Lists technical skills
const skills = [
  'HTML',
  'CSS',
  'JavaScript',
  'TypeScript',
  'React',
  'Redux',
  'SASS',
  'Material UI',
  'Git',
  'CI/CD',
  'Jest',
  'Enzyme',
]

// Experience section - Work experience and involvement
const experience = [
  {
    title: 'Software Engineer', // Job title
    company: 'Google', // Company name
    location: 'Mountain View, CA', // Location
    date: '2023 - Present', // Duration
    description:
      'Developed scalable web applications, optimized frontend performance, and collaborated on cross-functional teams.',
    iconColor: 'rgb(33, 150, 243)', // Color for UI icon representation
  },
  {
    title: 'Member',
    company: 'Google Developer Student Clubs (GDSC)',
    location: 'University of Texas at Dallas',
    date: '2022 - Present',
    description:
      'Contributed to open-source projects, led frontend development for team projects, and mentored students in web development.',
    iconColor: 'rgb(33, 150, 243)',
  },
]

// Education section - Academic background
const education = [
  {
    degree: 'Bachelor of Science in Computer Science', // Degree name
    school: 'University of Texas at Dallas', // School name
    location: 'Dallas, TX', // Location
    date: 'May 2028', // Graduation date
    description: 'Coursework in software engineering, data structures, and full-stack development.', // Additional details
    iconColor: 'rgb(233, 30, 99)', // UI icon color
  },
]

// Contact section - Email for inquiries
const contact = {
  email: 'dscutd@gmail.com', // Contact email (optional)
}

// Export all sections so they can be used in other files
export { header, about, projects, skills, experience, education, contact }
