import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.png";
import project3 from "../assets/projects/project-3.png";
import project4 from "../assets/projects/project-4.png";
import project5 from "../assets/projects/project-5.png";

export const HERO_CONTENT = `As a dedicated full-stack developer with over five years of hands-on experience, I specialize in building 
scalable and robust web applications. My expertise spans across front-end technologies such as React, Next.js, and Tailwind CSS, and 
extends to back-end technologies including Node.js, Laravel, PHP, Python, MySQL, PostgreSQL, Firebase, and MongoDB. Additionally, I 
possess a strong background in cybersecurity, utilizing tools like Kali Linux and Wireshark to secure networks and identify vulnerabilities. 
I am committed to leveraging my diverse skill set to craft innovative solutions that enhance user experiences and drive business growth.`;


export const ABOUT_TEXT = `I am a versatile full-stack developer with a deep passion for creating efficient and user-friendly web 
applications. With 5 years of experience, I have honed my skills with a wide array of technologies, including React, Next.js, Node.js, 
MySQL, PostgreSQL, and MongoDB. My journey into web development began with a keen curiosity for how systems operate, and it has since 
grown into a rewarding career focused on solving complex problems and delivering high-quality solutions. I thrive in collaborative settings, 
continuously embracing new challenges and technologies. Outside of development, I enjoy staying active, exploring cutting-edge tech, and 
contributing to open-source projects.`;


export const EXPERIENCES = [
  {
    year: "2025 - Present",
    role: "Co-Founder",
    company: "CyberWise Security Group",
    description: `As one of the founders of CyberWise Security Group, I oversee the creation of an online course designed to help 
    employees in data-focused companies learn how to protect important information. We also focus on teaching young adults how to 
    stay safe online. My role involves leading the company, setting goals, and ensuring that our training helps people understand 
    and apply basic cybersecurity practices.`,
    technologies: ["Laravel", "MySQL", "GitHub", "PHP", "Blade"],
  },  
  {
    year: "2024 - 2025",
    role: "Front-End Developer",
    company: "AOPHBA",
    description: `Designed and developed the protoype landing page for the AOPHBA organiztion using tools like Figma to design the page and React.`,
    technologies: ["Figma", "React.js"],
  },
  {
    year: "2023 - 2023",
    role: "Cybersecurity Analysist and IT Support",
    company: "On-Site Computer Solutions",
    description: `In the last few months of 2023, I worked with my professor in his IT support business. My role involved assisting 
    with scheduled maintenance and repairs for printers, desktops, and laptops. I diagnosed system issues within the local network, 
    performed physical repairs on computer components, and reconfigured network settings on local machines.`,
    technologies: ["Kali Linux", "Office365", "Google Docs", "Wireshark"],
  },
  {
    year: "2024 - 2025",
    role: "Cybersecurity",
    company: "St. Clair College",
    description: `From 2024 to 2025, I was enrolled in the Cybersecurity program at St. Clair College, where I gained hands-on 
    experience in network security, threat analysis, and system hardening. Through practical labs and real-world simulations, 
    I worked with various cybersecurity tools to identify vulnerabilities, conduct penetration testing, and implement defensive 
    measures. This program equipped me with skills in risk assessment, incident response, and secure network configuration.`,
    technologies: ["Kali Linux", "Wireshark", "Nmap", "Snort", "BurpSuite", "OSForensics", "pfSense"],
  },
  {
    year: "2020 - 2024",
    role: "Mobile App and Web Development",
    company: "St. Clair College",
    description: `From 2020 to 2024, I was enrolled in the Mobile Application Development program at St. Clair College, where i 
    studied the pratical application of mobile, and web framework technology to build interactive, and responsive websites and 
    apps. I also gained knowledge into the world of game design and development`,
    technologies: ["Javascript", "React.js", "Next.js", "mongoDB", "Angular", "Flutter", "Unity", "MySQL", "C#", "Python"],
  },
  {
    year: "2023 - Present",
    role: "TPT",
    company: "Fiat Chrysler",
    description: `I am working as a TPT at Fiat Chrysler, where I was responsible for the manufacturing and quality ensurance for the
    trim sector.`,
    technologies: [],
  },

];

export const PROJECTS = [
  {
    title: "CyberWise Course Web Application",
    image: project1,
    description:
      `My startup companies cybersecurity course site where users can recieve a better understanding of the dangers in the cyberspace 
      around them, and how to prevent any malicous attacks by understanding what can and can't be trusted online.`,
    technologies: ["Laravel", "PHP", "MySQL", "SQL", "TailwindCSS", "Figma"],
    github: "https://github.com/PeanutSoup55/CyberWise"
  },
  {
    title: "CyberWise Product Landing Page",
    image: project2,
    description:
      `I created this page to give potential customers a clear insight into our offerings through a well-designed, user-friendly 
      interface that showcases our expertise in the field.`,
    technologies: ["React.js", "TailwindCSS", "Figma", "MySQL", "SQL"],
    github: "https://github.com/PeanutSoup55/CyberWiseLanding",
  },
  {
    title: "Portfolio Website",
    image: project3,
    description:
      "My personal portfolio to display my passion and eager to create web applications and software products",
    technologies: ["React.js", "TailwindCSS"],
    github: "https://github.com/PeanutSoup55/portfolio",
  },
  {
    title: "AOPHBA Protoype",
    image: project4,
    description:
      "This is the prototype for the design i created for the AOPHBA",
    technologies: [ "TailwindCSS", "React.js", "MySQL"],
    github: "https://github.com/PeanutSoup55/aophbatest",
  },
  {
    title: "Black Hat Penetration Testing Python Tools",
    image: project5,
    description:
      "A Library of Python scripts used for penetration testing derived from the Black Hat Python Book",
    technologies: ["Kali Linux", "Python3", "SQL"],
    github: "https://github.com/PeanutSoup55/Black-Hat-Python-2nd-Edition",
  },
];

export const CONTACT = {
  phoneNo: "+1 (226) 350-8750",
  email: "ericrwblanchette@gmail.com",
};
