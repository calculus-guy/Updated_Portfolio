import React from "react";
import { motion } from "framer-motion";
import { GoDotFill } from "react-icons/go";
import { CiCircleCheck } from "react-icons/ci";

const experiences = [
    {
      role: "Senior Backend Engineer",
      company: "aahbibi (Creators & Livestreaming Platform)",
      type: "Remote",
      duration: "2024 – Present",
responsibilities: [
  "Architected and built backend supporting VOD, live classes, payments and gamified learning features (Node.js, Express, PostgreSQL, Redis). ",
  "Implemented secure JWT auth, role-aware authorization (creators, students, admins), and robust validation—reducing integration errors and ambiguous server failures. ",
  "Built live class infrastructure (class creation, hosts, attendees, playback access, and status lifecycle), enabling real-time creator-led sessions with recording and replay support. ",
  "Built wallet/ledger system with idempotent transaction handling and Stripe/Paystack integrations for subscriptions and withdrawals. Designed scalable video upload/playback flows using external streaming providers. ",
  "Implemented gamified quizzes and progress tracking, including scoring logic, attempt validation, and leaderboard-ready data models to increase learner engagement.",
  "Optimized database performance through schema design, indexing, and query tuning, significantly reducing response times on high-traffic endpoints (creator dashboards, video listings). ",
],
    },
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
      role: "Senior Backend Engineer",
      company: "Yupacgo Investor Platform",
      type: "Remote",
      duration: "2025 – Present",
responsibilities: [
  "Architected the backend for a personalized investment recommendations MVP: onboarding, auth, rule-based recommendation engine, and virtual portfolios. ",
  "Integrated multiple stock/market data providers with normalization, caching, and rate limit protections. Reduced external API calls by ~60% through caching and aggregation. ",
  "Ensured sub-second response times via query optimization and targeted caching strategies. Delivered complete API docs and Postman collections for frontend teams. ",
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
