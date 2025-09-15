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

    jobit,
    tripguide,
    threejs,
    kaizennic,
    skyradar,
    sts,
    hms,
    taskManager
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
      testimonial: "Awesome development speed with amazing UI/UX. ",
      name: "Ammar Shivkar",
      designation: "Founder",
      company: "Kaizennic",
      image: "https://media.licdn.com/dms/image/v2/D4E0BAQEA5PyHeWis6g/company-logo_200_200/B4EZfXNjeqGcAI-/0/1751662344652/kaizennic_logo?e=1758153600&v=beta&t=EruBq7CjPgBqk_zCzCav8Jg535LRg590hL2dGJlNrzE",
    },
    {
      testimonial: "Dedicated developer and develops fast",
      name: "Mashayaque",
      designation: "Co-Founder",
      company: "Kaizennic",
      image: "https://media.licdn.com/dms/image/v2/D4E0BAQEA5PyHeWis6g/company-logo_200_200/B4EZfXNjeqGcAI-/0/1751662344652/kaizennic_logo?e=1758153600&v=beta&t=EruBq7CjPgBqk_zCzCav8Jg535LRg590hL2dGJlNrzE",
    },
  ];
  
  const projects = [
    {
      name: "Hospital Mgnt System",
      description:
        "An industry level software which primarily helps the patients to book an appointment with a doctor with ease by sitting at home. It works like: There are 3 main users, Admin, Doctor, Patient where Admin or Doctor can create a Patient account by creating username and password and once made the patient can sign in using those credentials and can book an appointment with any doctor in that hospital.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "mysql",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
        {
          name: "node",
          color: "yellow-text-gradient",
        },
      ],
      image: hms,
      source_code_link: "https://github.com/imrozkhan205/hospital_management_system",
      live_link: ""
    },
    {
      name: "Support Ticketing System",
      description:
        "This is a system which is primarily made for clients who we work with, Support Ticketing System(STS) includes 3 types of users: Admin, Support, Customer. In which customer creates a ticket and admin assigns that ticket to a support, where the customer can communicate with the Support via Chat which works in real time.",
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

        {
          name: "node",
          color: "yellow-text-gradient",
        },
      ],
      image: sts,
      source_code_link: "https://github.com/imrozkhan205/Support-Ticketing-System-CRM-",
      live_link: "https://support-ticketing-system-crm.vercel.app"
    },
    {
      name: "Task Manager App",
      description:
        "A Task manager App which have authentication and CRUD operations. User can create an account and can add, delete, update tasks. User can also browse, search, filter their tasks. It is made using React-native using expo for frontend and Nodejs, Express, MongoDB for backend.",
      tags: [
        {
          name: "react-native",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "node",
          color: "yellow-text-gradient",
        },
      ],
      image: taskManager,
      source_code_link: "https://github.com/imrozkhan205/task-manager-app",
      live_link: "https://expo.dev/accounts/imrozkhan/projects/task-manager/builds/8bdd295d-077c-49da-b696-f0e91f61d2ad"
    },
  ]
  
  export { services, technologies, experiences, testimonials, projects };