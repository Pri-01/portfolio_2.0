import Project1 from './assets/project1.png';
import Project2 from './assets/project2.png';
// import Project3 from './assets/project3.jpeg';
import Project4 from './assets/project4.png';
// import Project5 from './assets/project5.jpg';
// import Project6 from './assets/project6.jpg';
import bbit from './assets/bbit.jpg'
import dvb from './assets/dvb.jpg'
import chs from './assets/chs.jpg'

import Testimonial1 from './assets/testimonial1.jpg';
import Testimonial2 from './assets/testimonial2.jpg';
import Testimonial3 from './assets/testimonial3.jpg';
import Testimonial4 from './assets/testimonial4.jpg';
import Testimonial5 from './assets/testimonial5.jpg';

export const links = [
  {
    name: 'Home',
    path: 'home',
  },
  {
    name: 'Services',
    path: 'services',
  },
  {
    name: 'Skills',
    path: 'skills',
  },
  {
    name: 'Projects',
    path: 'work',
  },
  {
    name: 'History',
    path: 'resume',
  },
  // {
  //   name: 'Testimonials',
  //   path: 'testimonial',
  // },
  // {
  //   name: 'Pricing',
  //   path: 'pricing',
  // },
  {
    name: 'Hobbies',
    path: 'blog',
  },
  {
    name: 'Contact',
    path: 'contact',
  },
];

export const services = [
  {
    id: 1,
    name: 'Web Development',
    title: 'HTML , CSS, JS',
    description:
      'Web development is the art of crafting virtual worlds, where lines of code weave together to form dynamic experiences.',
  },
  {
    id: 2,
    name: ' Responsive designing ',
    title: ' CSS styles ',
    description:
      'Web designing is the art of sculpting digital experiences, where every click, swipe, and scroll is a brushstroke on the canvas of the internet.',
  },
  {
    id: 3,
    name: ' Problem Solving ',
    title: ' Java ',
    description:
      ' Problem solving using java in GeeksForGeeks, Leetcode and other platforms ',
  },
  {
    id: 4,
    name: ' React development ',
    title: ' React function based components ',
    description:
      ' Recently started learning about the popular javascript library "React.js" ',
  },
  {
    id: 5,
    name: ' ... ',
    title: ' ... ',
    description:
      '.............................................................',
  },
];

export const skills = [
  {
    id: 1,
    name: 'HTML',
    percentage: 80,
    description:
      'HTML, the humble backbone of the internet, is the language that breathes life into digital landscapes. Like a skilled architect, it lays the foundation upon which the web is built',
  },

  {
    id: 2,
    name: 'CSS',
    percentage: 75,
    description:
      'CSS, the silent magician of the web, adds the sparkle and charm to digital realms. Like a skilled artist with a palette of styles, it paints the visual landscape of the internet, transforming raw HTML into captivating experiences.',
  },

  {
    id: 3,
    name: 'JAVASCRIPT',
    percentage: 70,
    description:
      'JavaScript is the universal language of the web, empowering developers to create immersive applications that adapt and respond to user input in real-time. ',
  },

  {
    id: 4,
    name: 'JAVA',
    percentage: 70,
    description:
      'With its robust syntax and platform independence, Java transcends boundaries, seamlessly integrating across diverse environments to deliver unparalleled versatility.',
  },

  {
    id: 5,
    name: 'REACT',
    percentage: 60,
    description:
      'With its declarative syntax and component-based architecture, React empowers developers to sculpt intricate UIs like master artisans, seamlessly integrating data and design. ',
  },

  {
    id: 6,
    name: 'C',
    percentage: 70,
    description:
      'C, the timeless titan of programming languages, stands as the bedrock upon which the edifice of Data Structures and Algorithms (DSA) is erected.',
  },
];

export const projects = [
  {
    id: 1,
    img: Project1,
    category: 'React.js',
    title: 'To be completed',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.',
  },
  {
    id: 2,
    img: Project2,
    category: 'JavaScript',
    title: 'Spotify clone',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.',
  },
  {
    id: 3,
    img: Project1,
    category: 'React.js',
    title: 'Text-Utils',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.',
  },
  {
    id: 4,
    img: Project4,
    category: 'Html/css',
    title: 'Landing-page',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.',
  },
  {
    id: 5,
    img: Project1,
    category: 'React.js',
    title: 'Portfolio',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.',
  },
  {
    id: 6,
    img: Project2,
    category: 'JavaScript',
    title: 'Calculator',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.',
  },
];

export const cv = [
  {
    id: 1,
    title: 'D.v. Boys , Chittaranjan',
    subtitle: 'Secondary educarion',
    date: '2019',
    description:
      dvb,
    category: 'education',
  },

  {
    id: 2,
    title: 'CHS (EM)',
    subtitle: 'Higher secondary education',
    date: '2019 - 2021 (Pure Science)',
    description:
      chs,
    category: 'education',
  },

  {
    id: 3,
    title: 'Budge Budge Institute Of Technology',
    subtitle: 'B.tech in Information Technology',
    date: '2021 - present',
    description:
      bbit,
    category: 'education',
  },

  {
    id: 4,
    title: 'Codsoft',
    subtitle: 'Web developer intern (Virtual)',
    date: '2023',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    category: 'experience',
  },

  {
    id: 5,
    title: 'Nexabyte',
    subtitle: 'Web developer intern (Virtual)',
    date: '2023',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    category: 'experience',
  },

  // {
  //   id: 6,
  //   title: 'Plugins Developer',
  //   subtitle: 'Fiverr.com',
  //   date: '2016 - 2018',
  //   description:
  //     'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  //   category: 'experience',
  // },
];

export const testimonials = [
  {
    id: 1,
    img: Testimonial1,
    name: 'Barbara Wilson',
    author: 'CEO Company',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    id: 2,
    img: Testimonial2,
    name: 'Charlie Smith',
    author: 'Designer',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    id: 3,
    img: Testimonial3,
    name: 'Roy Wang',
    author: 'Manager GYM',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    id: 4,
    img: Testimonial4,
    name: 'Jennifer Smith',
    author: 'CEO & Founder',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    id: 5,
    img: Testimonial5,
    name: 'Paul Freeman',
    author: 'Photographer',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
];
