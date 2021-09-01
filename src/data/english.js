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
   */ /*
  keySkills: {
    title: "Programming Languages",
    list: [
      { text: "Java" },
      { text: "JavaScript" },
      { text: "SQL" },
    ],
  },*/

  /**
   * Web tech skills
   */

  webSkills: {
    title: "Skills",
    list: [
      { text: "Java" },
      { text: "JavaScript" },
      { text: "SQL" },
      { text: "Object-Oriented Design" },
      { text: "Responsive Design" },
      { text: "Reactjs, HTML, CSS3" },
      { text: "Bootstrap" },
      { text: "Nodejs, Express, REST APIs" },
      { text: "Heroku" },
    ],
  },

  //Additional skills

  additionalSkills: {
    title: "Additional skills",
    list: [
      { text: "PostgreSql" },
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
      {
        name: "Sms On-Time",
        techList: [
          "React",
          "React Router",
          "Express",
          "PostgreSql",
          "Twilio API",
          "Postman",
          "JWT Token",
        ],
        description: [
          " Built a full-stack web app to manage the user's private phone book with a text messaging service from Twillo REST API.",
        ],
      },
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
          "Created highly interactive and responsive information cards about US National Parks using the National Park Service API.",
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
      } /*
      {
        name: "Tic Tac Toe",
        techList: ["Java", "AI (MINIMAX with Alpha Beta Pruning)"],
        description: [
          "Reduced the searching time for a move of a Tic Tac Toe robot by applying the minimax with alpha-beta pruning algorithm.",
        ],
        url: "https://agile-ridge-26387.herokuapp.com/",
      }, */,
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
          "Develop code to convert design wireframes into website elements using Styled Components and Typescript.",
          "Inspect and debug the existing code to improve user experience.",
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
          "Maintained, developed, and designed the organization's public website using Wix.",
          "Collaborated weekly with the project manager to create new content for different campaigns.",
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
          "Served as the first point of contact for customers seeking technical assistance over the phone.",
          "Performed remote troubleshooting through diagnostic techniques and pertinent questions.",
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
        description: "MS Computer Science, GPA: 3.8",
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
    /*
    courses:
      "Data Structures and Algorithm, Software Engineering Development, Full-Stack Web Development, Introduction to Database (MySQL).",
  */
  },
};

export default data;
