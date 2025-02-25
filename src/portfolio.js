// SYNTAX AND CAPITALIZATION MATTERS!!!

// Header section - Defines basic website information
const header = {
  homepage: 'https://gdscutd.github.io/web-portfolio/', // URL for the homepage - !!! IMPORTANT: UPDATE THIS TO YOUR OFFICIAL WEBSITE LINK BEFORE DEPLOYING!!!!
  title: 'GDSC', // Title shown in left of the navigation bar
}

// About section
const about = {
  name: 'GDSC',
  role: 'Student Club',
  description:
    'Google Developer Student Club at UT Dallas (GDSC UTD) is a student-led tech community dedicated to helping students learn, grow, and build innovative projects. We host hands-on workshops, hackathons, and networking events covering topics like web development, AI/ML, cloud computing, and more. Whether you\'re a beginner or an experienced developer, GDSC UTD provides a collaborative space to enhance your skills, connect with industry professionals, and work on real-world projects. Join us to explore technology, gain practical experience, and be part of a vibrant developer community! 🚀',
  resume: 'https://www.overleaf.com/latex/templates/jakes-resume/syzfjbzwjncs',
  social: {
    linkedin: 'https://linkedin.com', // LinkedIn profile link
    github: 'https://github.com', // GitHub profile link
  },
}

// Projects section - keep same format per project [sourceCode: github, livePreivew: any link] [Uploading Images: /public/img - using it here follow format ( "./img/<img file>" ) ]
const projects = [
  {
    name: 'Code your Love',
    description:
      'Hearts & HTML: A hands-on coding workshop where you\'ll create a beautiful interactive Valentine\'s card using HTML & CSS! No prior experience needed—just bring your creativity and get ready to code some love! 💖💻 Feb 12th | 7:00 - 8:00 PM | HH 2.402',
    stack: ['HTML', 'CSS', 'JS'],
    sourceCode: 'https://github.com/gdscutd/valentinesCard',
    livePreview: 'https://gdg.community.dev/events/details/google-gdg-on-campus-the-university-of-texas-at-dallas-richardson-united-states-presents-hearts-amp-html-code-a-valentines-card-that-pops',
    image: './img/val.png',
  },
  {
    name: 'Firebase Authentication',
    description:
      'Join us for a hands-on workshop where you’ll build a sleek login page using React, Tailwind, and Firebase Authentication! Learn how to sign up and log in with email & password, as well as authenticate with Google—all in a modern, responsive UI. Perfect for beginners and those looking to integrate Firebase Auth into their projects. 🚀 Feb. 18th | 7:00 to 8:00 PM | ECSS 2.415',
    stack: ['Firebase', 'React'],
    sourceCode: 'https://github.com/gdscutd/react-firebase-auth',
    image: './img/firebase.png',
  },
  {
    name: 'Portfolio',
    description:
      'Join us for a Personal Portfolio Workshop using React.js and Tailwind CSS. This beginner-friendly session provides a code template to help you get started, offering hands-on learning to build your personal portfolio step by step. Learn modern web development tools to create a sleek, responsive website that enhances your resume. The workshop includes a Q&A session and live debugging support from peers and mentors. February 24th | 7:00 PM to 8:30 PM | ECSS 2.415.',
    stack: ['React', 'Vite', 'Tailwind'],
    livePreview: 'https://gdg.community.dev/events/details/google-gdg-on-campus-the-university-of-texas-at-dallas-richardson-united-states-presents-design-your-own-personal-website/',
    image: './img/portfolio.png',
  },
]

// Skills section
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

// Experience section - Work and Volunteering
const experience = [
  {
    title: 'Software Engineer', // position
    company: 'Google', // company
    location: 'Mountain View, CA',
    date: '2023 - Present',
    description:
      'Developed scalable web applications, optimized frontend performance, and collaborated on cross-functional teams.',
  },
  {
    title: 'Member',
    company: 'Google Developer Student Clubs (GDSC)',
    location: 'University of Texas at Dallas',
    date: '2022 - Present',
    description:
      'Engaged in hands-on learning by attending workshops on web development, artificial intelligence, and other emerging technologies. Built mini projects, including web applications and AI models, to strengthen technical skills and real-world problem-solving.',
  },
]

// Education section
const education = [
  {
    degree: 'Bachelor of Science in Computer Science',
    school: 'University of Texas at Dallas',
    location: 'Richardson, TX',
    date: 'May 2028',
    description: 'Coursework in software engineering, data structures, and full-stack development.',
  },
]

// Contact section - (optional)
const contact = {
  email: 'dscutd@gmail.com',
}


// Important: If you add extra sections, make sure to export them here
// Export all sections so they can be used in other files
export { header, about, projects, skills, experience, education, contact }
