import React from "react";
import { motion } from "framer-motion";
import { GoDotFill } from "react-icons/go";
import { CiCircleCheck } from "react-icons/ci";

const experiences = [
    {
      role: "Senior Backend Engineer",
      company: "Hallos (Creators Marketplace & Livestreaming Platform)",
      type: "Remote",
      duration: "2024 – Present",
responsibilities: [
  "Architected and deployed a multi-currency creators' marketplace enabling 1,000+ educators to sell live classes and courses, processing ₦50M+ across NGN/USD/GBP/EUR wallets with automated payment routing (Paystack/Stripe).",
  "Engineered a financially consistent wallet and transaction ledger using PostgreSQL row-level locking and ACID transactions, achieving zero balance inconsistencies across 10K+ concurrent operations.",
  "Implemented multi-layer fraud prevention (2FA withdrawals, velocity checks, risk scoring, idempotency), blocking 98% of fraudulent attempts and eliminating duplicate charges across payment retries.",
  "Built scalable live streaming infrastructure (ZegoCloud + Mux) supporting 500+ concurrent participants/session with <2s latency and automated lifecycle cleanup reducing server overhead ~40%.",
  "Optimized high-traffic financial and enrollment queries via indexing and tuning, improving API latency ~800ms → <200ms (75% faster) while sustaining 10K+ daily active users.",
  "Designed subscription and enrollment architecture (single purchase, monthly pass, yearly plans) with automated access control and expiry tracking, reducing manual enrollment operations ~70%.",
  "Integrated AWS Bedrock AI pipelines to generate course transcripts and adaptive quiz questions from creator content, enabling competitive quiz gameplay (peer-vs-peer, state-level tournaments) and standardized exam prep (WAEC/JAMB).",
  "Built audit-compliant financial logging and analytics dashboards tracking revenue, enrollments, and creator earnings across 50K+ transactions/events, enabling real-time platform oversight and reporting.",
],
    },
    {
      role: "Senior Software Engineer",
      company: "AFRIMA: Africa's Global Music Award : Continental Awards Evaluation System",
      type: "Remote",
      duration: "2025 – Present",
responsibilities: [
  "Led backend development of a continent-scale adjudication platform used by distributed jurors to evaluate 10,000+ artists across regional and multi-continental award categories, replacing manual spreadsheet-based scoring workflows.",
  "Architected a multi-stage evaluation pipeline with admin-gated approvals, duplicate-safe submissions, and full audit logging, ensuring scoring integrity and traceability across judges and categories.",
  "Designed scalable MongoDB schemas supporting multi-continental category evaluations per artist and extensible scoring frameworks for both music and video adjudication types.",
  "Engineered complex MongoDB aggregation pipelines computing category rankings, weighted averages, and percentage scores across multiple judges and criteria dimensions.",
  "Optimized heavy aggregation and reporting queries via indexing and pipeline tuning, reducing query latency by 40–60% and maintaining ≤1s p95 API latency under concurrent adjudication load.",
  "Built secure role-based access (Admin/Juror) and evaluation dashboards enabling real-time scoring, review, and oversight across continent-wide submissions.",
  "Implemented automated results collation and exports (ExcelJS, PDFKit), reducing manual adjudication reporting effort by ~70–80% for organizers.",
  "Added validation, duplicate protection, and activity tracking safeguards that eliminated inconsistent scoring states and ensured data integrity across thousands of evaluations.",
],
    }
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
