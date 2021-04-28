import {
  // Contact
  FaGlobe,
  FaGithub,
  FaEnvelope,
  FaPhoneAlt,

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
      Recent graduate with a MS in Computer Science looking for an internship/entry level 
      position to leverage my experience in building mobile-friendly web apps to solve interesting problems.`,
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
      { text: 'Java, JavaScript'},
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
      { text: 'React, Node.js, jQuery'},
      {text: 'Bootstrap, Wix'},
      { text: 'GitHub, Git' },
      { text: 'REST API' },
      { text: 'Debugging, Problem Solving'}
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
          'HTML',
          'CSS',
        ],
        description: 
          ['Improved focusness on each daily task using Pomodoro technique.'] ,
        url: 'https://pomotodo7.herokuapp.com/',
      },
      {
        name: 'National DashBoard App',
        techList: ['React', 'Javascript', 'HTML', 'Bootstraps', 'React-Charts', 'Leaflet'],
        description: ['Interacted with the US National Park Service (NPS) API.', 'Created a highly interactive and responsive cards displaying a different type of info about national parks in a selected state.'],
        url: 'https://agile-ridge-26387.herokuapp.com/',
      },
      {
        name: 'Happy Chat',
        techList: ['HTML', 'CSS', 'Bootstraps', 'Ajax', 'Javascript', 'Express', 'Opencv4Node'],
        description: ["Logged in a web chat app using a smile dectection."]
      },
      {
        name: 'Tic Tac Toe',
        techList: ['Java', 'AI (MINIMAX with Alpha Beta Pruning)'],
        description: ['Played against the AI robot which was built using the minimax with alpha beta pruning'],
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
        Provided general technical support including network connectivity, virtual labs, printers for Portland State University 's faculty, staff, and students.`,
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
