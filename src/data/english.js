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
  FaCertificate,
} from "react-icons/fa";

const data = {
  /**
   * Full name
   */
  fullName: "Kim Ma",

  /**
   * Summary - short "about me" paragraph
   */
  summary: {
    title: "Summary",
    text: `
     A recent computer science graduate looking to obtain the entry position as a Software Developer. Bringing experience in web development technologies and a solid grasp of data structures and object-oriented designs.`,
  },

  /**
   * Contact details
   */
  contact: {
    title: "Contact",
    list: [
      {
        text: "https://mkimp.github.io/Portfolio/",
        url: "https://mkimp.github.io/Portfolio/",
        icon: <FaGlobe />,
      },
      {
        text: "https://www.linkedin.com/in/kim-p-ma/",
        url: "https://www.linkedin.com/in/kim-p-ma/",
        icon: <FaLinkedin />,
      },
      {
        text: "github.com/mKimp",
        url: "https://github.com/mKimp",
        icon: <FaGithub />,
      },
      {
        text: "phuongkim.ma@gmail.com",
        icon: <FaEnvelope />,
      },
      {
        text: "(408) 886-1188",
        icon: <FaPhoneAlt />,
      },
    ],
  },

  /**
   * Key skills
   */
  keySkills: {
    title: "Languages",
    list: [{ text: "Java" }, { text: "JavaScript" }, { text: "C++" }],
  },

  /**
   * Web tech skills
   */

  webSkills: {
    title: "Skills",
    list: [
      { text: "Object Oriented Design" },
      { text: "HTML5, CSS3" },
      { text: "SQL" },

      { text: "React, jQuery, Bootstrap" },
      { text: "Nodejs, Express, REST APIs" },
      { text: "Heroku, Wix, Junit, Postman" },
    ],
  },

  /**
   * Additional skills
   
  additionalSkills: {
    title: "Additional skills",
    list: [
      { text: "SQL" },
      { text: "CMS (Wix), Git" },
      { text: "Unit Testing JUnit" },
      { text: "Postman" },
    ], 
  },

  /**
   * Languages I speak
   */
  languages: {
    title: "Languages",
    list: [{ text: "English - Fluent" }, { text: "Vietnamese- Native" }],
  },
  /* Hackathon */
  activities: {
    title: "Hackathon",
    list: [
      {
        text: "Local Hack Day: Build (Major League Hacking 2020)",
        icon: <FaTwitch />,
      },
    ],
  },

  /**
   * Hobbies and interests
   */
  interests: {
    title: "Interests",
    list: [
      { text: "Learning new things", icon: <FaReact /> },
      { text: "Building things", icon: <FaWrench /> },
      { text: "Hiking", icon: <FaHiking /> },
      { text: "Retrogaming", icon: <FaGamepad /> },
    ],
  },

  /**
   * Certificates and courses
   */
  certificates: {
    title: "Certificates",
    list: [
      {
        text: "Responsive Web Design (freeCodeCamp 2021)",
        icon: <FaCertificate />,
      },
    ],
  },

  projects: {
    title: "Projects",
    list: [
      /*
      {
        name: 'PomoTodo App',
        techList: [
          'React',
          'React Router',
          'JavaScript',
          'MomentJs',
          'Heroku'
        ],
        description: 
          ['Improved focuses on each daily task drastically by combining the Pomodoro technique with the to-do app, leading to not overspend time on each task.'] ,
        url: 'https://pomotodo7.herokuapp.com/',
      }, */
      {
        name: "National DashBoard App",
        techList: [
          "React",
          "National Park Service API",
          "Bootstraps",
          "React-Charts",
          "Leaflet",
          "Heroku",
        ],
        description: [
          "Interacted with National Park Service API to create highly interactive and responsive cards to display all necessary information about US National Parks in one application.",
        ],
        url: "https://agile-ridge-26387.herokuapp.com/",
      },
      {
        name: "Happy Chat",
        techList: [
          "Bootstraps",
          "Ajax",
          "Javascript",
          "Express",
          "Opencv4Node",
          "Socket.io",
          "Passport.js",
        ],
        description: [
          "Created successfully a logged in feature of a chat room using a Smile ID (Facial Recognition) detection by implementing the open-source library Opencv4Node.",
        ],
      },
      {
        name: "Tic Tac Toe",
        techList: ["Java", "AI (MINIMAX with Alpha Beta Pruning)"],
        description: [
          "Reduced the searching time for a move of a Tic Tac Toe robot by applying the minimax with alpha-beta pruning algorithm.",
        ],
        url: "https://agile-ridge-26387.herokuapp.com/",
      },
    ],
  },

  /**
   * Work experience
   *
   * Acceptable date format: `YYYY-MM`
   */
  workExperience: {
    title: "Work Experience",
    list: [
      {
        company: "We Connect The Dots",
        location: "Westbury, New York",
        date: {
          start: "2021-06",
          end: "current",
        },
        jobTitle: "Software Engineer Volunteer",
        description: [
          "Handle programming duties including developing the new features and fixing the existing bugs.",
          "Attend the weekly scrum meeting to develop and work on the items in the backlog.",
        ],
        description_team: `Researched and created the content of online summer youth camp.`,
      },
      {
        company: "PDX Alliance for Self-Care",
        location: "Portland, OR",
        date: {
          start: "2021-01",
          end: "2021-03",
        },
        jobTitle: "Information Technology Intern",
        description: [
          `Updated website content regularly by adding new web pages with new content or updating the existing material, leading to a fresh and up-to-date website. `,
        ],
        description_team: `Researched and created the content of online summer youth camp.`,
      },
      {
        company: "Office of Information Technology",
        location: "Portland, OR",
        date: {
          start: "2017-07",
          end: "2021-03",
        },
        jobTitle: "Helpdesk Agent",
        description: [
          `
        Provided general technical support to Portland State University's faculty, staff, and students by applying knowledge on network connectivity, virtual labs, and printers, resulting in helping to troubleshoot different types of problems.`,
        ],
        description_team: `Worked collaboratively in a strong team-oriented environment.`,
      },
    ],
  },

  /**
   * Education, school, etc
   */
  education: {
    title: "Education",
    list: [
      {
        institution: "Portland State University",
        description: "MS Computer Science",
        date: {
          start: "2019-04",
          end: "2021-03",
        },
      },
      {
        institution: "San Franscisco State University",
        description: "BS Hospitality Managment",
        date: {
          start: "2012-09",
          end: "2014-14",
        },
      },
    ],
    courses:
      "Data Structures and Algorithm, Software Engineering Development, Full-Stack Web Development, Introduction to Database (MySQL).",
  },
};

export default data;
