import React from 'react';

import MangoMap from '@/../public/images/MangoMap/Location.png';
import TheatreReservation from '@/../public/images/TheatreReservation/Theatre_ReservationMovie.png'
import UXPlore from '@/../public/images/UxPlore/UXploreHome.png'
import ECommerce from '@/../public/images/E-Commerce/image.png';
import Nano from '@/../public/images/Nano/nano.png';
import surgeImg from '@/../public/images/surge.png';
import {
  BookIcon,
  BriefcaseBusinessIcon,
  LaptopMinimalIcon,
} from 'lucide-react';

export const links = [
  {
    name: 'Home',
    id: 'home',
  },
  {
    name: 'About',
    id: 'about',
  },
  {
    name: 'Projects',
    id: 'projects',
  },
  {
    name: 'Experience',
    id: 'experience',
  },
  {
    name: 'Skills',
    id: 'skills',
  },
  {
    name: 'Contact',
    id: 'contact',
  },
] as const;

export const experiencesData = [
  {
    title: 'University of Moratuwa',
    location: '',
    description: `Bachelor's of Science degree in Computer Science of Engineering. Studying on the department of Computer Science of Engineering `,
    icon: React.createElement(BriefcaseBusinessIcon),
    date: 'Jun 2024 - Present',
  },
  
  {
    title: 'Ananda College',
    location: 'Maradana, Colombo 10',
    description: `G.C.E. (A/L) Examination | 2020 - 3As - Physical Science Stream `,
    icon: React.createElement(BookIcon),
    date: '2011 - 2019',
  },
  {
    title: 'Self-studying',
    location: '',
    description: `Digging into Programming, Software Engineering and Web Development, picking up a expertise in Frontend, Backend and database technologies (MongoDB/MySQL) Technologies and Programming languages.`,
    icon: React.createElement(LaptopMinimalIcon),
    date: '2024 - Present',
  },
] as const;

export const images = {
  MangoMap,
  TheatreReservation,
  UXPlore,
  Nano,
  surgeImg,
};

export const projectsData = [
  {
    title: 'MangoMap',
    description:
      'A cross-platform app for iOS and Android built using Flutter, offering fast development with hot reload and high performance through native ARM code compilation. MangoMap features an expressive, flexible UI, enabling users to share travel reviews and photos to inspire and guide fellow travelers.',
    tags: [
      'Flutter',
      'JavaScript',
      'Node.js',
      'Express.js',
      'MySql',
      'ORM',
      'Figma'
    ],
    imageUrl: MangoMap,
    link: 'https://github.com/SajithAnuradha/Mango-Map',
  },
  {
    title: 'Theatre Reservation System',
    description: `A comprehensive web application for booking theater seats. It features a user-friendly platform for browsing and reserving seats, along with an admin dashboard for managing reservations, shows, and seat updates.`,
    tags: [
      'Flutter',
      'React',
      'JavaScript',
      'TypeScript',
      'Node.js',
      'Nest.js',
      'MongoDB',
      'MicroServices'
    ],
    imageUrl: TheatreReservation,
    link: 'https://github.com/Theatre-Reservation',
  },
    {
    title: 'UXplore Platform',
    description:
      'Built a platform for the MoraUXplore Competition with user registration, authentication, answer submission, and chat features. Developed the contacts page, admin dashboard, and managed backend content and tasks.',
    tags: ['React','JavaScript', 'Node.js', 'Express.js', 'MySql', 'Tailwind', 'Figma'],
    imageUrl: UXPlore,
    link: 'https://github.com/UXplore-2-0/official-web',
  },
   {
    title: 'Money Tracker',
    description:
      'A cross-platform mobile and web application designed to help users manage their finances. It tracks expenses, income, and budgets with a sleek UI and provides detailed financial reports for better decision-making.',
    tags: [
      'Flutter',
      'React',
      'JavaScript',
      'Node.js',
      'Express.js',
      'MongoDB',
    ],
    imageUrl: surgeImg,
    link: 'https://github.com/SanjanaKumarasingha/MoneyTracker',
  },
    {
    title: 'E-Commerce Platform',
    description: `This project is a full-stack implementation of a single vendor e-commerce platform for a local chain retailer. The platform focuses on consumer electronics and toys in its initial phase, supporting detailed product variants, inventory management, and a comprehensive reporting system for monitoring and analytics.`,
    tags: [
     'React',
      'JavaScript',
      'Node.js',
      'Express.js',
      'MySql',    ],
    imageUrl: ECommerce,
    link: 'https://github.com/ThisaraWeerakoon/ECommerce_Platform_DataBase_Project',
  },
  // {
  //   title: 'RPAL Interpreter',
  //   description: `Isida is a platform that helps people to get legal advice from the best lawyers in the world. It's a platform that connects people with lawyers.`,
  //   tags: [
  //     'C++',
  //   ],
  //   imageUrl: Nano,
  //   link: 'https://github.com/SanjanaKumarasingha/Interpriter-Project',
  // },
  {
    title: ' Nano Processor ',
    description:
      'Designed and implemented an 8-bit nanoprocessor using VHDL for arithmetic, shift, and logical operations. Integrated memory for data storage and executed simple assembly code. Developed with Xilinx ISE and tested on a Basys3 FPGA board.',
    tags: [
      'VHDL',
    ],
    imageUrl: Nano,
    link: 'https://github.com/SanjanaKumarasingha/Vivado-Nano-Processor',
  },

] as const;

export const skillsData = [
  ['Flutter', "/svgs/flutter.png"],
  ['React', '/svgs/react.svg'],
  ['JavaScript', '/svgs/javascript-js.svg'],
  ['Node.js', '/svgs/node-js.svg'],
  ['Express', '/svgs/express-original.svg'],
  ['TypeScript', '/svgs/typescript-icon.svg'],
  ['Tailwind', '/svgs/tailwind-css.svg'],
  ['MongoDB', '/svgs/mongodb-original.svg'],
  ['MySQL', '/svgs/MySQL.svg'],
  ['python', '/svgs/Python.jpeg'],
  ['Java', '/svgs/Java.jpeg'],
  ['c++', '/svgs/c++.png'],
  ['HTML', '/svgs/file-type-html.svg'],
  ['CSS', '/svgs/file-type-css.svg'],
  ['Git', '/svgs/git.svg'],
  ['GitHub', '/svgs/github.svg'],
  ['Figma', '/svgs/figma.jpeg']
] as const;
