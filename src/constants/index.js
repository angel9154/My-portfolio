export const navLinks = [
    {
      id: 1,
      name: 'Home',
      href: '#home',
    },
    {
      id: 2,
      name: 'About',
      href: '#about',
    },
    {
      id: 3,
      name: 'Work',
      href: '#work',
    },
    {
      id: 4,
      name: 'Contact',
      href: '#contact',
    },
  ];
  
  export const clientReviews = [
    {
      id: 1,
      name: 'Emily Johnson',
      position: 'Marketing Director at GreenLeaf',
      img: 'assets/review1.png',
      review:
        'Working with Adrian was a fantastic experience. He transformed our outdated website into a modern, user-friendly platform. His attention to detail and commitment to quality are unmatched. Highly recommend him for any web dev projects.',
    },
    {
      id: 2,
      name: 'Mark Rogers',
      position: 'Founder of TechGear Shop',
      img: 'assets/review2.png',
      review:
        'Adrian’s expertise in web development is truly impressive. He delivered a robust and scalable solution for our e-commerce site, and our online sales have significantly increased since the launch. He’s a true professional! Fantastic work.',
    },
    {
      id: 3,
      name: 'John Dohsas',
      position: 'Project Manager at UrbanTech ',
      img: 'assets/review3.png',
      review:
        'I can’t say enough good things about Adrian. He was able to take our complex project requirements and turn them into a seamless, functional website. His problem-solving abilities are outstanding.',
    },
    {
      id: 4,
      name: 'Ether Smith',
      position: 'CEO of BrightStar Enterprises',
      img: 'assets/review4.png',
      review:
        'Adrian was a pleasure to work with. He understood our requirements perfectly and delivered a website that exceeded our expectations. His skills in both frontend backend dev are top-notch.',
    },
  ];
  
  export const myProjects = [
    {
      title: 'Paws & Found Server.js',
      desc: 'Developed a full-stack dog adoption server with my classmates using Node.js, Express, and MongoDB, featuring dog listing management, user roles, and lost & found reports; built user authentication with role-based access control for secure admin management; created schemas for posting, editing, updating, and deleting dog adoption listings; implemented a report schema for submitting lost & found dog reports; integrated MongoDB for efficient storage and retrieval of user, dog, and report data; designed RESTful APIs for seamless front-end and back-end communication; ensured scalability and reliability of the platform for ongoing use.',
      
      href: 'https://github.com/angel9154/Paws-Found-Server.js',
      texture: '/textures/project/project1.mp4',
      logo: '/assets/dog.png',
      logoStyle: {
        backgroundColor: '#2A1816',
        border: '0.2px solid #36201D',
        boxShadow: '0px 0px 60px 0px #AA3C304D',
      },
      spotlight: '/assets/spotlight1.png',
      tags: [
        {
          id: 1,
          name: 'React.js',
          path: '/assets/react.svg',
        },
        {
          id: 2,
          name: 'Javascript',
          path: 'assets/js.png',
        },
        {
          id: 3,
          name: 'MongoDB',
          path: '/assets/sql-server.png',
        },
        {
          id: 4,
          name: 'Node.js',
          path: '/assets/programing.png',
        },
      ],
    },
    {
      title: 'Snowboarding Management Application',
      desc: 'Developed a Snowboarding Management Application allowing admin users to perform CRUD (Create, Read, Update, Delete) operations on snowboards, along with a dynamic recommendation engine that suggests the ideal snowboard based on user skill level using an algorithm to assess input and provide personalized recommendations, enhancing the overall user experience.',
      
      href: 'https://github.com/angel9154/my-project-2',
      texture: '/textures/project/project2.mp4',
      logo: '/assets/snowboard (1).png',
      logoStyle: {
        backgroundColor: '#13202F',
        border: '0.2px solid #17293E',
        boxShadow: '0px 0px 60px 0px #2F6DB54D',
      },
      spotlight: '/assets/spotlight2.png',
      tags: [
        {
          id: 1,
          name: 'HTML',
          path: '/assets/html.png',
        },
        {
          id: 2,
          name: 'CSS',
          path: 'assets/text.png',
        },
        {
          id: 3,
          name: 'JavaScript',
          path: '/assets/js.png',
        },
        {
          id: 4,
          name: 'node.js',
          path: '/assets/programing.png',
        },
      ],
    },
    {
      title: 'This Portfolio that you are looking at ',
      desc: 'Developed my first professional portfolio using React, Three.js, and Next.js, showcasing a modern interactive design with React for component-based architecture, Next.js for server-side rendering and optimized performance, and Three.js for immersive 3D visual elements; focused on responsive design for compatibility across devices, implemented smooth navigation and interactive features, and emphasized clean code, modular design, and performance optimization for a seamless user experience.',
      
      href: 'https://github.com/angel9154/My-portfolio',
      texture: '/textures/project/project3.mp4',
      logo: '/assets/portfolio.png',
      logoStyle: {
        backgroundColor: '#60f5a1',
        background:
          'linear-gradient(0deg, #60F5A150, #60F5A150), linear-gradient(180deg, rgba(255, 255, 255, 0.9) 0%, rgba(208, 213, 221, 0.8) 100%)',
        border: '0.2px solid rgba(208, 213, 221, 1)',
        boxShadow: '0px 0px 60px 0px rgba(35, 131, 96, 0.3)',
      },
      spotlight: '/assets/spotlight3.png',
      tags: [
        {
          id: 1,
          name: 'React.js',
          path: '/assets/react.svg',
        },
        {
          id: 2,
          name: 'TailwindCSS',
          path: 'assets/tailwindcss.png',
        },
        {
          id: 3,
          name: 'TypeScript',
          path: '/assets/typescript.png',
        },
        {
          id: 4,
          name: 'Framer Motion',
          path: '/assets/framer.png',
        },
      ],
    },
  ];
  
  export const calculateSizes = (isSmall, isMobile, isTablet) => {
    return {
      deskScale: isSmall ? 0.05 : isMobile ? 0.06 : 0.065,
      deskPosition: isMobile ? [0.5, -4.5, 0] : [0.25, -5.5, 0],
      cubePosition: isSmall ? [4, -5, 0] : isMobile ? [5, -5, 0] : isTablet ? [5, -5, 0] : [9, -5.5, 0],
      reactLogoPosition: isSmall ? [3, 4, 0] : isMobile ? [5, 4, 0] : isTablet ? [5, 4, 0] : [12, 3, 0],
      ringPosition: isSmall ? [-5, 7, 0] : isMobile ? [-10, 10, 0] : isTablet ? [-12, 10, 0] : [-24, 10, 0],
      targetPosition: isSmall ? [-5, -10, -10] : isMobile ? [-9, -10, -10] : isTablet ? [-11, -7, -10] : [-13, -13, -10],
    };
  };
  
 