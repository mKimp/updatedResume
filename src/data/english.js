import {
  // Contact
  FaGlobe,
  FaGithub,
  FaEnvelope,
  FaPhoneAlt,
  FaLinkedin,

  // Interests
  FaReact,
  FaWrench,
  FaGamepad,
  FaHiking,

  //hackathon
  FaTwitch,

  //certificate
  FaCertificate
} from 'react-icons/fa';



const data = {
  /**
   * Full name
   */
  fullName: 'Kim Ma',

  /**
   * Summary - short "about me" paragraph
   */
  summary: {
    title: 'Summary',
    text: `
     Computer science graduate looking to obtain the position as a Software Engineer. Bringing experience in web development technologies and a solid grasp of data structures and object-oriented designs.`
  },

  /**
   * Contact details
   */
  contact: {
    title: 'Contact',
    list: [
      {
        text: 'https://mkimp.github.io/Portfolio/',
        url: 'https://mkimp.github.io/Portfolio/',
        icon: <FaGlobe />,
      },
      {
        text: 'https://www.linkedin.com/in/kim-p-ma/',
        url: 'https://www.linkedin.com/in/kim-p-ma/',
        icon: <FaLinkedin />,
      },
      {
        text: 'github.com/mKimp',
        url: 'https://github.com/mKimp',
        icon: <FaGithub />,
      },
      {
        text: 'phuongkim.ma@gmail.com',
        icon: <FaEnvelope />,
      },
      {
        text: '(408) 886-1188',
        icon: <FaPhoneAlt />,
      },
    ],
  },

  /**
   * Key skills
   */
  keySkills: {
    title: 'Key skills',
    list: [
      { text: 'Java, JavaScript, C++'},
      { text: 'Responsive Web Design' },
      { text: 'HTML5, CSS3' },
      { text: 'OOP'}
    ],
  },

  /**
   * Additional skills
   */
  additionalSkills: {
    title: 'Additional skills',
    list: [
      { text: 'React, jQuery, Bootstrap'},
      { text: 'Nodejs, Express, REST APIs'},
      { text: 'SQL' },
      {text: 'Wix, Git'},
      { text: 'Unit Testing JUnit'}
    ],
  },

  /**
   * Languages I speak
   */
  languages: {
    title: 'Languages',
    list: [
      { text: 'English - Fluent' },
      { text: 'Vietnamese- Native' },
    ],
  },
  /* Hackathon */ 
  activities: {
    title: 'Hackathon',
    list: [
      {
        text: 'Local Hack Day: Build (Major League Hacking 2020)', icon: <FaTwitch />,
      },
    ],
  },
 
  /**
   * Hobbies and interests
   */
  interests: {
    title: 'Interests',
    list: [
      { text: 'Learning new things', icon: <FaReact /> },
      { text: 'Building things', icon:  <FaWrench /> },
      {text: 'Hiking', icon: < FaHiking/>},
      { text: 'Retrogaming', icon: <FaGamepad />}
    ],
  },

  
    /**
   * Certificates and courses
   */
  certificates: {
    title: 'Certificates',
    list: [
      {
        text: 'Responsive Web Design (freeCodeCamp 2021)',
        icon: <FaCertificate />,
      },
    ],
  },

  projects: {
    title: 'Projects',
    list: [
      {
        name: 'PomoTodo App',
        techList: [
          'React',
          'React Router',
          'JavaScript',
          'MomentJs',
        ],
        description: 
          ['Improved focuses on each daily task using the Pomodoro technique.'] ,
        url: 'https://pomotodo7.herokuapp.com/',
      },
      {
        name: 'National DashBoard App',
        techList: ['React', 'Javascript', 'Bootstraps', 'React-Charts', 'Leaflet'],
        description: ['Fetched data from the US National Park Service (NPS) API.', 'Created highly interactive and responsive cards displaying different types of information about national parks in a selected state.'],
        url: 'https://agile-ridge-26387.herokuapp.com/',
      },
      {
        name: 'Happy Chat',
        techList: ['Bootstraps', 'Ajax', 'Javascript', 'Express', 'Opencv4Node', 'Socket.io', 'Passport.js'],
        description: ["Logged in a chat room using a Smile (Facial Recognition) detection or Google Account."]
      },
      {
        name: 'Tic Tac Toe',
        techList: ['Java', 'AI (MINIMAX with Alpha Beta Pruning)'],
        description: ['Played against the AI robot which was built using the minimax with alpha-beta pruning'],
        url: 'https://agile-ridge-26387.herokuapp.com/',
      },
    ],
  },

  /**
   * Work experience
   *
   * Acceptable date format: `YYYY-MM`
   */
  workExperience: {
    title: 'Work Experience',
    list: [
      {
        company: 'PDX Alliance for Self-Care',
        location: 'Portland, OR',
        date: {
          start: '2021-01',
          end: '2021-03',
        },
        jobTitle: 'Information Technology Intern',
        description: `Designed and improved the main website that was created using Wix. `,
        description_team: `Researched and created the content of online summer youth camp.`,
      },
      {
        company: 'Office of Information Technology',
        location: 'Portland, OR',
        date: {
          start: '2017-07',
          end: '2021-03',
        },
        jobTitle: 'Helpdesk Agent',
        description: `
        Provided general technical support including network connectivity, virtual labs, printers for Portland State University's faculty, staff, and students.`,
        description_team: `Worked collaboratively in a strong team-oriented environment.`,
      },
    ],
  },

  /**
   * Education, school, etc
   */
  education: {
    title: 'Education',
    list: [
      {
        institution: 'Portland State University',
        description: 'MS Computer Science',
        date: {
          start: '2019-04',
          end: '2021-03',
        },
      },
      {
        institution: 'San Franscisco State University',
        description: 'BS Hospitality Managment',
        date: {
          start: '2012-09',
          end: '2014-14',
        },
      }
    ],
    courses: 'Data Structures and Algorithm, Software Engineering, Front-End Development, Full-Stack Development, Introduction to Database (MySQL).'
  },
};

export default data;
