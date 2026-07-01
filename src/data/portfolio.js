export const profile = {
  name: 'Aseem M H',
  shortName: 'Aseem',
  email: 'aseem3166@gmail.com',
  phone: '+91 7305271480',
  role: 'Software Engineer',
  roles: ['Software Engineer', 'Full Stack Developer', 'Java Developer'],
  intro: "I'm Aseem, a Computer Science Engineering student at RMD Engineering College with a CGPA of 8.09. I specialize in Java, Full Stack Development, and ServiceNow, with hands-on experience building AI-powered applications, cybersecurity solutions, and scalable web apps. I enjoy solving real-world problems through clean, efficient, and modern software.",
  location: 'Chennai, India',
  resume: '/resume.txt',
  socials: {
    github: 'https://github.com/ASEEM3155',
    linkedin: 'https://www.linkedin.com/in/aseem-mh/',
    email: 'mailto:aseem3166@gmail.com',
  },
};

export const stats = [
  { label: 'CGPA', value: '8.09', suffix: '' },
  { label: 'Certifications', value: 5, suffix: '+' },
  { label: 'Major Projects', value: 2, suffix: '+' },
  { label: 'Internship', value: 1, suffix: '' },
];

export const education = [
  {
    title: 'B.E. Computer Science and Engineering',
    place: 'RMD Engineering College',
    period: 'Expected June 2027',
    detail: 'CGPA: 8.09 / 10',
  },
  {
    title: 'Higher Secondary (12th)',
    place: 'Sir Ramaswami Mudaliar Hr. Sec. School',
    period: '',
    detail: '91%',
  },
  {
    title: 'SSLC (10th)',
    place: 'Sir Ramaswami Mudaliar Hr. Sec. School',
    period: '',
    detail: 'Pass',
  },
];

export const skills = [
  { name: 'React', category: 'Frontend', level: 94, icon: 'FaReact' },
  { name: 'JavaScript', category: 'Programming', level: 92, icon: 'SiJavascript' },
  { name: 'TailwindCSS', category: 'Frontend', level: 91, icon: 'SiTailwindcss' },
  { name: 'Node.js', category: 'Backend', level: 86, icon: 'FaNodeJs' },
  { name: 'Java', category: 'Programming', level: 84, icon: 'FaJava' },
  { name: 'ServiceNow', category: 'ServiceNow', level: 88, icon: 'FaCloud' },
  { name: 'AWS', category: 'Cloud', level: 80, icon: 'FaAws' },
  { name: 'MongoDB', category: 'Database', level: 82, icon: 'SiMongodb' },
  { name: 'Docker', category: 'DevOps', level: 78, icon: 'FaDocker' },
  { name: 'Git', category: 'Tools', level: 90, icon: 'FaGitAlt' },
  { name: 'Three.js', category: 'Frontend', level: 76, icon: 'SiThreedotjs' },
  { name: 'REST APIs', category: 'Backend', level: 87, icon: 'TbApi' },
];

export const experiences = [
  {
    title: 'Java Development Intern',
    company: 'InternPe (Remote)',
    period: 'Jun 2025 – Jul 2025',
    summary: 'Engineered and debugged core Java applications, implementing robust exception handling and file processing pipelines. Built scalable features using clean coding principles, optimizing data manipulation via Java Collections, and collaborated within an Agile team environment using Git for version control.',
    tags: ['Java', 'OOP', 'Git', 'Agile'],
  },
];

export const projects = [
  {
    title: 'AI Test Case Generator (Test-Forge AI)',
    description: 'An AI-powered platform that converts software requirements and SRS documents into structured manual test cases and automation scripts using Google Gemini 2.0 Flash.',
    image: 'linear-gradient(135deg, #ffffff 0%, #dffcf4 38%, #111111 100%)',
    tech: ['Python Flask', 'Gemini AI', 'JavaScript', 'Tailwind CSS'],
    github: 'https://github.com/ASEEM3155',
    live: 'https://github.com/ASEEM3155',
    features: ['Gemini 2.0 Flash integration', 'Selenium/Playwright/Cypress export', 'SRS document parsing', 'Export-ready output'],
  },
  {
    title: 'Wi-Fi Sentinel — Network Security Analyzer',
    description: 'A cybersecurity application that scans nearby Wi-Fi networks, analyzes encryption strength and signal quality, and performs real-time security testing with OTP authentication and QR verification.',
    image: 'linear-gradient(135deg, #ffffff 0%, #dffcf4 38%, #111111 100%)',
    tech: ['Python', 'Tkinter', 'PyOTP', 'QRCode'],
    github: 'https://github.com/ASEEM3155',
    live: 'https://github.com/ASEEM3155',
    features: ['Real-time Wi-Fi scanning', 'Encryption analysis', 'OTP authentication', 'QR verification'],
  },
];

export const certifications = [
  { title: 'Oracle Certified Professional: Java SE 17 Developer', issuer: 'Oracle', date: '2025', id: 'OCP-JAVA17', href: 'https://drive.google.com/file/d/1HQax5FlQQywvOuI3dopeSYeYHIVVMysY/view?usp=sharing' },
  { title: 'ServiceNow Certified System Administrator (CSA)', issuer: 'ServiceNow', date: '2025', id: 'SN-CSA-2025', href: 'https://drive.google.com/file/d/17nhcyCiT7HrQCRoG_cQywsBMYL7yiA4K/view?usp=sharing' },
  { title: 'ServiceNow Certified Application Developer (CAD)', issuer: 'ServiceNow', date: '2025', id: 'SN-CAD-2025', href: 'https://drive.google.com/file/d/1AdbS8QyqjrTtxxTdNN8-SXFDgHePEgQw/view?usp=sharing' },
  { title: 'AWS Academy Graduate – Cloud Architecting', issuer: 'AWS', date: '2024', id: 'AWS-CA-2024', href: 'https://drive.google.com/file/d/1UKnMu5w55-OIchAMB8XDaZHvy7n_TwGz/view?usp=sharing' },
  { title: 'Oracle Cloud Foundations Associate', issuer: 'Oracle', date: '2024', id: 'OCF-2024', href: 'https://drive.google.com/file/d/1O15pKigUoPilSnXzVzZp0ZFjkZEsp_Zb/view?usp=sharing' },
];

export const achievements = [
  { title: 'IEEE Hackathon Runner-Up', detail: 'Runner-Up in Cyber Security Track, DEVSPARK DevForge 24-Hour Hackathon (IEEE) conducted by KPRIET.', metric: '2nd' },
  { title: 'Intelliwiz Technical Quiz', detail: 'Secured Second Prize in "Intelliwiz" Technical Quiz conducted by Velammal Engineering College.', metric: '2nd' },
  { title: 'Gamathon 3rd Place', detail: 'Secured 3rd place at Gamathon for designing and developing a functional game conducted by VelTech MultiTech.', metric: '3rd' },
  { title: 'AI & Cybersecurity Builder', detail: 'Built production-grade AI test automation and network security tools as independent projects.', metric: '2+' },
];

