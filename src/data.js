// src/data.js
import { FaReact, FaNodeJs, FaPython, FaNetworkWired, FaLaptopCode, FaTrophy, FaCertificate, FaAward, FaJava, FaAws, FaGithub, FaBrain } from 'react-icons/fa';
import { SiMongodb, SiExpress, SiCplusplus, SiSolidity, SiCisco, SiOracle, SiStreamlit, SiIpfs, SiJavascript } from 'react-icons/si';
import { BiChip } from 'react-icons/bi';

export const personalData = {
  name: "Shyam Jee Rai",
  role: "Computer Science Student | Software Dev. & Automation",
  email: "shyamjeeroy@gmail.com",
  phone: "(+91) 9661088483",
  socials: {
    github: "https://github.com/shyam4545/shyam4545",
    linkedin: "https://linkedin.com/in/shyam-jee-rai-5a3493292"
  },
  about: [
    "I am a Third-year B.Tech Computer Science student at PCET's Pimpri Chinchwad University. ",
    "Software Engineer with expertise in Software development, Cyber security and automation. I possess strong teamwork abilities, quick learning skills, and a positive attitude. I am passionate about exploring the latest technologies and applying them to build secure, scalable, and efficient solutions."
  ],
  skills: [
    { name: "React.js", icon: FaReact, color: "#61DAFB" },
    { name: "Node.js", icon: FaNodeJs, color: "#339933" },
    { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
    { name: "Express", icon: SiExpress, color: "#000000" },
    { name: "Python", icon: FaPython, color: "#3776AB" },
    { name: "C++", icon: SiCplusplus, color: "#00599C" },
    { name: "Java", icon: FaJava, color: "#007396" },
    { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
    { name: "AWS", icon: FaAws, color: "#FF9900" },
    { name: "Git & GitHub", icon: FaGithub, color: "#181717" },
    { name: "AI & ML", icon: FaBrain, color: "#FF4F8B" },
    { name: "Cybersecurity", icon: FaNetworkWired, color: "#FF0000" },
    { name: "Truffle", icon: SiSolidity, color: "#363636" },
    { name: "Networking", icon: SiCisco, color: "#1BA0D7" }
  ],
  experiences: [
    {
      id: 1,
      role: "1st Prize Winner", company: "First-Year Project Expo", duration: "2024",
      desc: "Awarded Best Project for 'DESTROYER'.", 
      icon: FaTrophy,
      image: [ "/Certificate/expo1.jpeg" , "/Certificate/expo2.jpeg" ,
               "/Certificate/expo3.jpeg" , "/Certificate/expo4.jpeg" , "/Certificate/expo5.jpeg"
             ] // Add your photo path here (e.g., "/Certificates/expo1.jpg")
    },
    {
      id: 2,
      role: "Top 10 Finalist", company: "College Hackathon", duration: "2025",
      desc: "Developed 'Hybrid Mode for DDoS Detection' using Python and AI/ML.", 
      icon: FaTrophy,
      image: "" // Add your photo path here
    },
    {
      id: 3,
      role: "2nd Place Winner", company: "Second-Year IoT Project Expo", duration: "2025",
      desc: "A groundbreaking fusion of IEEE 802.11 network penetration and a 100,000-volt EMP (Electromagnetic Pulse) wave capable of disrupting electronic systems. While the concept holds immense potential for defense-sector applications (think strategic EMP technology for safeguarding critical infrastructure).",
      icon: FaAward, // Added missing icon to prevent crash
      image: [ "/Certificate/itexpo1.jpeg" , "/Certificate/itexpo2.jpeg" ,
               "/Certificate/itexpo3.jpeg" , "/Certificate/itexpo4.jpeg"
             ] // Add your photo path here
    },
    {
      id: 4,
      role: "Spoken Tutorial Project, IIT Bombay", company: "Certificate for the Completion of Python 3.4.3 Training", duration: "2025",
      desc: "Completed Python 3.4.3 test organized at Pimpri Chinchwad University with course material provided by the Spoken Tutorial Project, IIT Bombay. Passing an online exam, conducted remotely from IIT Bombay, is a pre-requisite for completing this training, With Credits: 4 Score: 95.00%.",
      icon: FaCertificate, // Added missing icon to prevent crash
      image: "/Certificate/SpokenTutorial.pdf" // Example from your previous screenshot
    }
  ],
  projects: [
    {
      id: 1,
      title: "Blockchain Certificate Validation",
      tech: ["Python", "Streamlit", "IPFS", "Ganache", "Solidity"],
      icons: [FaPython, SiStreamlit, SiIpfs, SiSolidity],
      desc: "Designed a secure DApp to validate data wiping processes. Generates tamper-proof PDFs stored on IPFS. Anchors hashes on a local Ethereum blockchain (Ganache) via custom Solidity smart contracts.",
      github: "https://github.com/shyam4545/Blockchian-Cerificate-Validation",
      images: [ // Changed to Array to prevent syntax error crash
        "/BlockChain/01.png", "/BlockChain/02.png", "/BlockChain/03.png", 
        "/BlockChain/04.png", "/BlockChain/05.png", "/BlockChain/06.png", 
        "/BlockChain/07.png", "/BlockChain/08.png", "/BlockChain/09.png"
      ], 
      video: ""
    },
    {
      id: 2,
      title: "Exam Portal Application",
      tech: ["React", "Node.js", "MongoDB"],
      icons: [FaReact, FaNodeJs, SiMongodb],
      desc: "A full-stack portal for conducting exams with student and admin panels.",
      github: "https://github.com/shyam4545/Exam-Portel",
      images: ["/ExamPortel/01.png", "/ExamPortel/02.png"], // Changed to Array
      video: "/ExamPortel/01.mp4"  
    },
    {
      id: 3,
      title: "DESTROYER",
      tech: ["Hardware", "WiFi Penetration"],
      icons: [BiChip, SiCisco, FaNetworkWired],
      desc: "Developed a solution to address the dynamic nature of DDoS attacks in high-speed environments with limited real-time explainability. Implemented real-time DDoS classification using hybrid and N-I optimization techniques, incorporating Explainable AI (XAI) for enhanced understanding of detection methods",
      github: "https://github.com/shyam4545/",
      images: ["/Destroyer/01.jpeg", "/Destroyer/02.jpeg", "/Destroyer/03.jpeg"], // Changed to Array
      video: ""
    }
  ]
};