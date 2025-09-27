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
    noteify
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
      image: "https://media.licdn.com/dms/image/v2/D4E0BAQEA5PyHeWis6g/company-logo_200_200/B4EZfXNjeqGcAI-/0/1751662344652/kaizennic_logo?e=1761782400&v=beta&t=b4mvP9aBGzMZo_mNilwqTQz8bnRVs3P_Y_zNXahf1Jw",
    },
    {
      testimonial: "Dedicated Android and Web developer, Ships fast.",
      name: "Mashayaque",
      designation: "Co-Founder",
      company: "Kaizennic",
      image: "https://media.licdn.com/dms/image/v2/D4E0BAQEA5PyHeWis6g/company-logo_200_200/B4EZfXNjeqGcAI-/0/1751662344652/kaizennic_logo?e=1761782400&v=beta&t=b4mvP9aBGzMZo_mNilwqTQz8bnRVs3P_Y_zNXahf1Jw",
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
        "Developed an Android application using React Native (Expo) with JWT-based authentication (Sign Up, Sign In, and Logout)Implemented core task management features: create, update, edit, and delete tasks; assign priorities and due dates; and track task progress. Tasks are stored and fetched from MongoDB.Added advanced functionalities including task search, calendar view (upcoming and today’s tasks), and filters based on priority and completion status.",
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
      image: noteify,
      source_code_link: "https://github.com/imrozkhan205/task-manager-app",
      live_link: "https://expo.dev/accounts/imrozkhan/projects/noteify/builds/8388dfc1-cee7-4e19-9ae3-ee66487cb1cd"
    },
  ]
  
  export { services, technologies, experiences, testimonials, projects };