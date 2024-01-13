import {
  CalendarIcon,
  ChartPieIcon,
  DocumentDuplicateIcon,
  FolderIcon,
  HomeIcon,
  UsersIcon,
} from '@heroicons/react/24/outline';
import postgreSql from '/public/asset/icons/postgreSql.png';
import bootstrap from '/public/asset/icons/bootstrap.png';
import docker from '/public/asset/icons/docker.png';
import express from '/public/asset/icons/express.png';
import mongoDB from '/public/asset/icons/mongoDB.png';
import neoVim from '/public/asset/icons/neoVim.png';
import next from '/public/asset/icons/next.png';
import node from '/public/asset/icons/node.png';
import react from '/public/asset/icons/react.png';
import redux from '/public/asset/icons/redux.png';
import sass from '/public/asset/icons/sass.png';
import tailwind from '/public/asset/icons/tailwind.png';
import javascript from '/public/asset/icons/javascript.png';
import vite from '/public/asset/icons/vite.png';
import fawflix from '/public/asset/projects/fawflix.webp';
import gbdc from '/public/asset/projects/gbdc.webp';
import LovelyMusic from '/public/asset/projects/lovelyMusic.webp';
import lovelytube from '/public/asset/projects/lovelytube.webp';
import lranslate from '/public/asset/projects/lranslate.webp';
import sumz from '/public/asset/projects/sumz.webp';

export {
  LovelyMusic,
  bootstrap,
  docker,
  express,
  fawflix,
  gbdc,
  lovelytube,
  lranslate,
  mongoDB,
  next,
  postgreSql,
  node,
  react,
  redux,
  sass,
  sumz,
  tailwind,
  javascript,
  vite,
};

export const myEducation = [
  {
    year: 'Aug 2023 -  Present',
    work: [
      {
        name: 'ReactJs Developer Intern',
        company: 'Devship pvt. Ltd',
        desc: 'Working on extension and converting it to full fledge website in react',
      },
    ],
  },
  {
    year: 'July 2023 - Dec 2023',
    work: [
      {
        name: 'Software Developer Intern',
        company: 'CGWB, Govt of India',
        desc: 'Made a data visualization tool. Using PHP, MYSQL and frontend technologies HTML, CSS and Bootstrap',
      },
    ],
  },
  {
    year: 'Jan 2023 - Aug 2023',
    work: [
      {
        name: 'Public Relations Head',
        company: 'BIICF BIET, Jhansi',
        desc: 'My major task were to communicate with sponsors and experts for events. Work on the social media reach of the organisation',
      },
    ],
  },
];

export const mySkills = [
  {
    name: 'Next.js',
    icon: next,
  },
  {
    name: 'React.js',
    icon: react,
  },
  {
    name: 'Tailwind',
    icon: tailwind,
  },
  {
    name: 'Javascript',
    icon: javascript,
  },
  {
    name: 'Node.js',
    icon: node,
  },
  {
    name: 'Express.js',
    icon: express,
  },
  {
    name: 'MongoDB',
    icon: mongoDB,
  },
  {
    name: 'Redux',
    icon: redux,
  },
  {
    name: 'Bootstrap',
    icon: bootstrap,
  },
  {
    name: 'Vite',
    icon: vite,
  },
  {
    name: 'PostgreSQL',
    icon: postgreSql,
  },

  {
    name: 'Docker',
    icon: docker,
  },
];

export const myExperiences = [
  {
    year: '2020 - 2024',
    work: [
      {
        name: 'Bachelors of Technology',
        company: 'Bundelkhand Institute of Engineering and Technology, Jhansi',
        desc: 'Branch : Electronics and Communication',
      },
    ],
  },
  {
    year: '2019 - 2020',
    work: [
      {
        name: 'Higher Secondary (10+2)',
        company: 'Blue Bells Public School, Jhansi (ISC)',
        desc: 'Subject : Mathematics, Physics and Chemistry',
      },
    ],
  },
  {
    year: '2017 - 2018',
    work: [
      {
        name: 'High School',
        company: 'Blue Bells Public School, Jhansi (ICSE)',
        desc: 'Subject : All Subjects',
      },
    ],
  },

];


export const projects = [
  {
    title: 'FawFlix',
    imgUrl: fawflix,
    projectLink: '#',
    codeLink: 'https://github.com/siddhantmi/',
    description: 'FawFlix is a netflix clone website with  movie streaming ',
    tags: ['MERN', 'React.js', 'Tailwind CSS'],
  },
  {
    title: 'GBDC',
    imgUrl: gbdc,
    projectLink: '#',
    codeLink: 'https://github.com/siddhantmi/',
    description: 'GBDC is a blood donation web App with admin panel.',
    tags: ['Next.js', 'Node JS', 'React.js', 'Tailwind CSS', 'Landing Page'],
  },
  {
    title: 'Lovely Tube',
    imgUrl: lovelytube,
    projectLink: 'https://lovelytube.vercel.app/',
    codeLink: 'https://github.com/siddhantmi/',
    description: 'Lovely Tube is a youtube clone website',
    tags: ['API', 'React.js', 'Tailwind CSS'],
  },
  {
    title: 'Lranslate',
    imgUrl: lranslate,
    projectLink: '#',
    codeLink: 'https://github.com/siddhantmi/',
    description: 'Lranslate is Google Translate clone made with Api',
    tags: ['React.js', 'API', 'Node JS', 'MongoDB', 'Redux'],
  },
  {
    title: 'Lovely Music',
    imgUrl: LovelyMusic,
    projectLink: '#',
    codeLink: 'https://github.com/siddhantmi/',
    description: 'Lovely Music is a music streaming website',
    tags: ['React.js', 'Tailwind CSS', 'Redux', 'API'],
  },
  {
    name: 'Sumz',
    title: 'Article Summarizer',
    imgUrl: sumz,
    projectLink: '#',
    codeLink: 'https://github.com/siddhantmi/',
    description: 'Sumz is Article summarizer made with Api',
    tags: ['React.js', 'API', 'Redux'],
  },
];
export const navigation = [
  { name: 'Home', href: '/' },
  { name: 'All Projects', href: '/all-projects' },
  { name: 'Coding Profiles', href: '/coding-profiles' },
  { name: 'Resume', href: '/resume.pdf' },
];


