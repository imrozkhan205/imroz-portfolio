import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
    kaizennic,
    skyradar,
    sts,
    hms
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "React Native Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "UI UX designer",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    // {
    //   name: "TypeScript",
    //   icon: typescript,
    // },
    {
      name: "React JS",
      icon: reactjs,
    },
    // {
    //   name: "Redux Toolkit",
    //   icon: redux,
    // },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    // {
    //   name: "docker",
    //   icon: docker,
    // },
  ];
  
  const experiences = [
    {
      title: "Full Stack Developer",
      company_name: "Kaizennic",
      icon: kaizennic,
      iconBg: "#383E56",
      date: "July 2025 - Still Ongoing",
      points: [
        "Developing and Deploying Full Stack Projects which works on the latest technology and Beautiful UI/UX design",
        "Creating Projects from scratch to shipping and working on different technologies.",
        "Tech stack includes: React.Js, Node.Js, Express, MongoDB, MySQL.",
        "Working as the head of the interns and guiding them to make projects.",
      ],
    },

  ]
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Hospital Management System",
      description:
        "An industry level software made using MySQL, Express, Node and React Hospital Management System primarily helps the patients to book an appointment with a doctor with ease by sitting at home. It works like: There are 3 main users, Admin, Doctor, Patient where Admin or Doctor can create a Patient account by creating username and password and once made the patient can sign in using those credentials and can book an appointment with any doctor in that hospital, I also did the limitations check for the patients to create 1 appointment with 1 doctor in a single day. The appointment process is very simple and that's what this system makes so much better",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: hms,
      source_code_link: "https://github.com/imrozkhan205/hospital_management_system",
    },
    {
      name: "Support Ticketing System",
      description:
        "This is a system which is primarily made for clients who we work with, Support Ticketing System(STS) includes 3 types of users: Admin, Support, Customer. In which customer creates a ticket and admin assigns that ticket to a support, where the customer can communicate with the Support via Chat which works in real time, implemented in real time.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: sts,
      source_code_link: "https://github.com/imrozkhan205/Support-Ticketing-System-CRM-",
    },
    {
      name: "Sky radar",
      description:
        "A minimilist MERN stack project which lets you know which airplane is above you in real time. It asks for permission of location and gives back the information of the flight above you. ",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: skyradar,
      source_code_link: "https://github.com/imrozkhan205/skyradar",
    },

    
    
  ]
  
  export { services, technologies, experiences, testimonials, projects };