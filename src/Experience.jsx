import React from "react";
import { motion } from "framer-motion";
import { GoDotFill } from "react-icons/go";
import { CiCircleCheck } from "react-icons/ci";

const experiences = [
    {
      role: "Senior Software Engineer",
      company: "AFRIMA: Africa's Global Music Award",
      type: "Remote",
      duration: "05/2025 – Present",
responsibilities: [
  "Led backend development of the AFRIMA Adjudication Portal using Node.js, Express, and MongoDB.",
  "Designed and implemented RESTful APIs for music and video evaluations, including role-based access control.",
  "Built dynamic scoring and ranking logic with aggregation pipelines to support complex regional and continental judging flows.",
  "Developed Excel and PDF export modules for results reporting using ExcelJS and PDFKit.",
  "Implemented activity logging and juror-specific dashboards for transparent scoring audits.",
  "Collaborated with frontend developers by providing detailed API documentation and support for integration.",
  "Ensured scalability by modularizing routes, controllers, and extending schema support for evolving project needs.",
  "Tested all endpoints via Postman and optimized database queries for performance under load.",
],
    },
        {
      role: "Freelance Frontend Developer",
      company: "Gulf of Guinea Oil Exploration.",
      type: "Remote",
      duration: "06/2025",
responsibilities: [
  "Transformed a Figma prototype into a responsive, multi-page React application using React Router, framer-motion, and Chart.js.",
  "Integrated two dynamic Chart.js visualizations with mobile-responsive layouts, interactive tooltips, and smooth animations.",
  // "Built a fully functional, accessible navbar with mobile-friendly dropdown navigation and active-state indicators.",
  "Optimized images and animations for performance on Vercel deployment, achieving fast load times and responsive design.",
  "Ensured content accuracy by directly implementing Word/PDF-based tables, compliance stats, and market data without summaries.",
  "Collaborated with UI/UX designs to synchronize animations, layout adjustments, and content consistency across all devices.",
  "Maintained semantic HTML structure and accessibility compliance (ARIA roles, contrast ratios), enhancing usability."
]
    },
    {
      role: "Freelance Frontend Developer",
      company: "Anoh Gas Park.",
      type: "Remote",
      duration: "06/2025",
responsibilities: [
  "Converted Figma prototype into a multi-section React website using framer-motion for smooth scroll and reveal animations.",
  "Implemented responsive design to support clean layout redraws on mobile, tablet, and desktop viewports.",
  "Optimized visuals and lazy-loaded assets on Vercel to ensure fast page load and seamless user experience.",
  "Created reusable components for modular page structure—Overview, Infrastructure, Contact sections—improving maintainability.",
  "Enhanced UX through interactive feedback on links and animations, including hover states and scroll-triggered effects.",
  "Ensured accessibility with semantic HTML, alt text, and visible focus states, enhancing navigation support.",
  "Collaborated with client to maintain brand consistency—adhered to visual guidelines in color, typography, and layout."
]
    },
    {
      role: "Freelance Frontend Developer",
      company: "Gulf Of Guinea Midstream Limited.",
      type: "Remote",
      duration: "07/2025",
responsibilities: [
  "Developed a corporate midstream gas website using React with Tailwind CSS to reflect energy-sector professionalism and regional branding.",
  "Integrated scroll-aware navigation and section anchoring to guide users through multi-segment company insights and infrastructure goals.",
  "Engineered mobile-first layouts with advanced breakpoint handling to ensure optimal viewing across all devices and screen sizes.",
  "Built clean modular page structure for scalability, including dynamic sections like Leadership, Strategic Partnerships, and Gas Infrastructure.",
  "Applied on-scroll animation effects using Framer Motion to highlight key statistics, values, and company milestones.",
  "Implemented accessibility features and SEO-friendly tags to support discoverability and inclusive design practices.",
  "Deployed the project on Vercel with CI/CD hooks to allow seamless version control and live feedback from the client."
]
    },
    {
      role: "Full-Stack Software Developer",
      company: "Home Choice Security Network",
      type: "Hybrid",
      duration: "02/2025 – 05/2025",
      responsibilities: [
        "Collaborated directly with my employer on a production-grade smart surveillance web application (HCSN), built using React.js, Node.js, Express, and MongoDB",
        "Developed and styled multiple core frontend pages including the Default User Dashboard, Full-Screen Camera View, Snapshot Viewer, and Playback History",
        "Simulated and managed features such as camera-based event detection, payment￾restricted video access, and admin-supervised user management",
        "Handled user authentication, password reset, Twilio phone OTP verification, and contact-based recovery flows",
      ],
    },
    {
      role: "MERN Software Developer",
      company: "FinCalc",
      type: "Remote",
      duration: "04/2025 – 05/2025",
      responsibilities: [
        "Developed and deployed a full-featured MERN-stack personal finance tracking application, now actively used by 15+ individuals to manage daily income and expenses with real-time updates and persistent cloud storage",
        "Engineered secure user authentication and authorization using JWT, role-based access control, and OTP-based password reset functionality, ensuring robust data protection and user account safety.",
        "Designed and implemented dynamic, reusable, and responsive front-end components with advanced chart visualizations (Line, Bar, Pie, etc.) using Chart.js and other libraries to deliver insightful financial analytics.",
        // "Worked closely with clients to deliver customized, high-quality solutions."
      ],
    },
    {
      role: "Freelance Frontend Developer",
      company: "LANA RENOVATIONS",
      type: "Freelance",
      duration: "09/2024 – 11/2024",
      responsibilities: [
        "Designed and developed a full 5-page responsive website for a UK-based client in the home renovations industry, handling the entire frontend development independently from start to finish.",
        "Built clean, accessible, and SEO-friendly UI using modern HTML5, CSS3, JavaScript, and responsive design principles to ensure optimal performance across devices.",
        "Collaborated closely with the client through regular check-ins to gather feedback, iterate on design ideas, and ensure the website met UK industry standards and personal expectations and improved the client’s online presence and credibility in the local market..",
      ],
    },
  ];
  

const Experience = () => {
  return (
    <div className="container2">
      <motion.div
        className="history py-5"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <div className="sec-header mb-4 text-center ">
            <h2 className="text-bold">Experience</h2>
            <p className="about-text text-muted">My Professional Background</p>
        </div>
        <section className="timeline-section">
          <div className="timeline-items">
            {experiences.map((exp, index) => (
              <motion.div
                className="timeline-item"
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <div className="timeline-dot"></div>
                <div className="timeline-date ht">{exp.role}</div>
                <div className="work-h d-flex align-items-center gap-3">
                  <p className="fw-bolder se">{exp.company}</p>
                  <GoDotFill />
                  <p>{exp.type}</p>
                  <GoDotFill />
                  <p>{exp.duration}</p>
                </div>
                <div className="timeline-content mt-3 d-flex flex-column gap-3">
                  {exp.responsibilities.map((task, i) => (
                    <li className="d-flex gap-2" key={i}>
                      <CiCircleCheck className="w-icon" />
                      <small>{task}</small>
                    </li>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </section>
      </motion.div>
    </div>
  );
};

export default Experience;
