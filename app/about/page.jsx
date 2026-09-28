"use client";

import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { usePortfolio } from "../context/PortfolioContext";
import { Briefcase, Trophy, GraduationCap, Award, Cpu, Code2, Cloud, Database } from "lucide-react";

export default function About() {
  const { personalInfo, skills, experience, education, certifications } = usePortfolio();
  const skillCategories = Object.keys(skills || {});
  const [activeCategory, setActiveCategory] = useState(skillCategories[0] || "Generative AI & LLMs");
  const m = personalInfo?.metrics || [];

  const icons = {
    "Generative AI & LLMs": Cpu,
    "Full Stack & Distributed": Code2,
    "Cloud & DevOps": Cloud,
    "CS & System Design": Database
  };

  return (
    <div className="page-wrapper">
      <Navbar />

      <main className="content-container" style={{ padding: "40px 32px 80px 32px" }}>
        
        {/* Page Header */}
        <div style={{ textAlign: "center", marginBottom: "64px" }}>
          <h1 style={{
            fontSize: "clamp(2.5rem, 5vw, 4.5rem)",
            fontWeight: "800",
            letterSpacing: "-0.03em",
            color: "var(--text-dark)",
            marginBottom: "12px"
          }}>
            Passion Fuels Purpose!
          </h1>
          <p style={{ fontSize: "1.125rem", color: "var(--text-secondary)", maxWidth: "700px", margin: "0 auto" }}>
            Forward Deployed AI Engineer • Bridging state-of-the-art GenAI models with high-velocity production systems.
          </p>
        </div>

        {/* 3-Column Biography, Photo, and Numbers */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "1.2fr 1fr 0.8fr",
          gap: "48px",
          alignItems: "center",
          marginBottom: "96px"
        }} className="about-top-grid">
          
          {/* Biography */}
          <div>
            <h2 style={{ fontSize: "1.25rem", fontWeight: "800", textTransform: "uppercase", letterSpacing: "0.08em", color: "var(--text-dark)", marginBottom: "16px" }}>
              Biography
            </h2>
            <p style={{ fontSize: "1rem", color: "var(--text-secondary)", lineHeight: "1.75", marginBottom: "16px" }}>
              Hi, I am <strong style={{ color: "var(--text-dark)" }}>Harini K</strong>, a Forward Deployed AI Engineer based in Coimbatore, Tamil Nadu. I specialize in turning complex AI research concepts and LLM architectures into scalable, high-speed production applications.
            </p>
            <p style={{ fontSize: "1rem", color: "var(--text-secondary)", lineHeight: "1.75", marginBottom: "16px" }}>
              My engineering philosophy revolves around <strong>latency optimization, system resilience, and user-centric workflows</strong>. Having engineered asynchronous dispatch pipelines like ASTRO AI and winning 1st place in inter-college hackathons, I thrive in fast-paced environments where engineering velocity meets real client impact.
            </p>
            <p style={{ fontSize: "1rem", color: "var(--text-secondary)", lineHeight: "1.75" }}>
              Whether architecting multi-turn agent state, optimizing relational schemas in MySQL/PostgreSQL, or deploying Azure cloud infrastructure, I bring full commitment to every line of code.
            </p>
          </div>

          {/* Center: Photo Card */}
          <div style={{ position: "relative", width: "100%", maxWidth: "380px", margin: "0 auto" }}>
            <div className="border-card" style={{ padding: "12px", background: "#ffffff" }}>
              <img 
                src="/developer-avatar.svg" 
                alt="Harini K"
                style={{ width: "100%", height: "auto", borderRadius: "14px", display: "block" }}
              />
            </div>
          </div>

          {/* Right: Key Numbers with Radiant Gradient Styling */}
          <div style={{
            display: "flex",
            flexDirection: "column",
            gap: "24px",
            justifyContent: "center"
          }} className="metrics-col">
            <div style={{
              background: "linear-gradient(135deg, #eef2ff 0%, #ede9fe 100%)",
              border: "1.5px solid #c7d2fe",
              borderRadius: "14px",
              padding: "16px 20px",
              textAlign: "right"
            }} className="metric-item">
              <div style={{ fontSize: "clamp(2.25rem, 3.5vw, 3rem)", fontWeight: "800", color: "#4338ca", lineHeight: "1" }}>
                {m[0]?.value || "8.50"}
              </div>
              <div style={{ fontSize: "0.875rem", fontWeight: "700", color: "#4f46e5", marginTop: "4px" }}>
                {m[0]?.label || "Academic CGPA"} ({m[0]?.detail || "B.Sc AI"})
              </div>
            </div>

            <div style={{
              background: "linear-gradient(135deg, #fffbeb 0%, #fef3c7 100%)",
              border: "1.5px solid #fde68a",
              borderRadius: "14px",
              padding: "16px 20px",
              textAlign: "right"
            }} className="metric-item">
              <div style={{ fontSize: "clamp(2.25rem, 3.5vw, 3rem)", fontWeight: "800", color: "#b45309", lineHeight: "1" }}>
                {m[1]?.value || "1st Place"}
              </div>
              <div style={{ fontSize: "0.875rem", fontWeight: "700", color: "#d97706", marginTop: "4px" }}>
                {m[1]?.label || "Hackathon Champion"}
              </div>
            </div>

            <div style={{
              background: "linear-gradient(135deg, #ecfdf5 0%, #d1fae5 100%)",
              border: "1.5px solid #a7f3d0",
              borderRadius: "14px",
              padding: "16px 20px",
              textAlign: "right"
            }} className="metric-item">
              <div style={{ fontSize: "clamp(2.25rem, 3.5vw, 3rem)", fontWeight: "800", color: "#047857", lineHeight: "1" }}>
                {m[2]?.value || "-40%"}
              </div>
              <div style={{ fontSize: "0.875rem", fontWeight: "700", color: "#059669", marginTop: "4px" }}>
                {m[2]?.label || "API Latency Reduction"}
              </div>
            </div>

            <div style={{
              background: "linear-gradient(135deg, #ecfeff 0%, #cffafe 100%)",
              border: "1.5px solid #a5f3fc",
              borderRadius: "14px",
              padding: "16px 20px",
              textAlign: "right"
            }} className="metric-item">
              <div style={{ fontSize: "clamp(2.25rem, 3.5vw, 3rem)", fontWeight: "800", color: "#0e7490", lineHeight: "1" }}>
                {m[3]?.value || "15+"}
              </div>
              <div style={{ fontSize: "0.875rem", fontWeight: "700", color: "#0284c7", marginTop: "4px" }}>
                {m[3]?.label || "Production Tools & Frameworks"}
              </div>
            </div>
          </div>
        </div>

        {/* Skills Section */}
        <section style={{ marginBottom: "96px" }}>
          <h2 style={{
            fontSize: "clamp(2rem, 3.5vw, 3rem)",
            fontWeight: "800",
            textAlign: "center",
            color: "var(--text-dark)",
            marginBottom: "36px"
          }}>
            Technical <span className="gradient-text">Competencies</span>
          </h2>

          {/* Category Pills */}
          <div style={{ display: "flex", justifyContent: "center", flexWrap: "wrap", gap: "12px", marginBottom: "36px" }}>
            {skillCategories.map((cat) => {
              const IconComp = icons[cat] || Cpu;
              const isActive = activeCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "8px",
                    padding: "10px 22px",
                    borderRadius: "10px",
                    fontSize: "0.95rem",
                    fontWeight: "700",
                    background: isActive ? "linear-gradient(135deg, #4f46e5 0%, #7c3aed 100%)" : "#ffffff",
                    color: isActive ? "#ffffff" : "#475569",
                    border: isActive ? "2px solid #4f46e5" : "2px solid #e2e8f0",
                    boxShadow: isActive ? "0 4px 14px rgba(79, 70, 229, 0.3)" : "0 2px 6px rgba(0,0,0,0.02)",
                    transition: "all 0.2s ease"
                  }}
                >
                  <IconComp size={16} />
                  <span>{cat}</span>
                </button>
              );
            })}
          </div>

          {/* Skills Grid */}
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "20px"
          }}>
            {(skills[activeCategory] || []).map((s, idx) => (
              <div key={idx} className="clean-card" style={{ border: "1.5px solid #e2e8f0", borderRadius: "14px" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "10px" }}>
                  <span style={{ fontSize: "1rem", fontWeight: "700", color: "var(--text-dark)" }}>{s.name}</span>
                  <span style={{
                    fontSize: "0.75rem",
                    fontWeight: "700",
                    padding: "2px 8px",
                    borderRadius: "6px",
                    background: "linear-gradient(135deg, #eef2ff 0%, #ede9fe 100%)",
                    color: "#4f46e5",
                    border: "1px solid #c7d2fe"
                  }}>
                    {s.tag}
                  </span>
                </div>
                <div style={{ width: "100%", height: "8px", background: "#f1f5f9", borderRadius: "9999px", overflow: "hidden" }}>
                  <div style={{
                    width: `${s.level}%`,
                    height: "100%",
                    background: "linear-gradient(90deg, #4f46e5 0%, #7c3aed 50%, #06b6d4 100%)",
                    borderRadius: "9999px"
                  }} />
                </div>
                <div style={{ display: "flex", justifyContent: "space-between", marginTop: "6px", fontSize: "0.75rem", color: "var(--text-muted)", fontWeight: "600" }}>
                  <span>Proficiency</span>
                  <span style={{ color: "#4f46e5", fontWeight: "700" }}>{s.level}%</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Experience Section */}
        <section style={{ marginBottom: "96px" }}>
          <h2 style={{
            fontSize: "clamp(2rem, 3.5vw, 3rem)",
            fontWeight: "800",
            textAlign: "center",
            color: "var(--text-dark)",
            marginBottom: "48px"
          }}>
            Experience & <span className="gradient-text">Internships</span>
          </h2>

          <div style={{ maxWidth: "880px", margin: "0 auto", display: "flex", flexDirection: "column", gap: "24px" }}>
            {(experience || []).map((exp, idx) => (
              <div key={idx} className="clean-card" style={{
                border: "1.5px solid #e2e8f0",
                borderLeft: "5px solid #4f46e5",
                borderRadius: "16px",
                padding: "28px"
              }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: "8px", marginBottom: "8px" }}>
                  <h3 style={{ fontSize: "1.25rem", fontWeight: "800", color: "var(--text-dark)" }}>
                    {exp.role} @ <span style={{ color: "#4f46e5" }}>{exp.organization}</span>
                  </h3>
                  <span style={{
                    fontSize: "0.8125rem",
                    fontWeight: "700",
                    color: "#4f46e5",
                    background: "#eef2ff",
                    padding: "4px 10px",
                    borderRadius: "6px"
                  }}>
                    {exp.period}
                  </span>
                </div>
                <p style={{ fontSize: "0.95rem", color: "var(--text-secondary)", lineHeight: "1.7", marginBottom: "16px" }}>
                  {exp.description}
                </p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                  {(exp.tags || []).map((t, i) => (
                    <span key={i} style={{
                      fontSize: "0.75rem",
                      fontWeight: "700",
                      padding: "4px 10px",
                      borderRadius: "6px",
                      background: "linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%)",
                      border: "1px solid #cbd5e1",
                      color: "#334155"
                    }}>
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Education & Certifications */}
        <section>
          <h2 style={{
            fontSize: "clamp(2rem, 3.5vw, 3rem)",
            fontWeight: "800",
            textAlign: "center",
            color: "var(--text-dark)",
            marginBottom: "48px"
          }}>
            Education & <span className="gradient-text">Accreditations</span>
          </h2>

          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: "28px",
            maxWidth: "1080px",
            margin: "0 auto"
          }}>
            {/* Education Card */}
            <div className="clean-card" style={{
              border: "1.5px solid #e2e8f0",
              borderTop: "4px solid #4f46e5",
              borderRadius: "16px",
              padding: "28px"
            }}>
              <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "16px" }}>
                <div style={{
                  width: "40px",
                  height: "40px",
                  borderRadius: "10px",
                  background: "linear-gradient(135deg, #eef2ff 0%, #ede9fe 100%)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#4f46e5"
                }}>
                  <GraduationCap size={22} />
                </div>
                <h3 style={{ fontSize: "1.25rem", fontWeight: "800", color: "#0f172a" }}>Degree & Academics</h3>
              </div>
              {(education || []).map((edu, idx) => (
                <div key={idx} style={{ marginBottom: idx !== education.length - 1 ? "18px" : "0" }}>
                  <div style={{ fontSize: "1rem", fontWeight: "700", color: "var(--text-dark)" }}>{edu.degree}</div>
                  <div style={{ fontSize: "0.875rem", color: "var(--text-secondary)", marginTop: "2px" }}>{edu.institution} ({edu.period})</div>
                  <div style={{ fontSize: "0.9375rem", fontWeight: "800", color: "#4f46e5", marginTop: "4px" }}>{edu.score}</div>
                </div>
              ))}
            </div>

            {/* Certifications Card */}
            <div className="clean-card" style={{
              border: "1.5px solid #e2e8f0",
              borderTop: "4px solid #d97706",
              borderRadius: "16px",
              padding: "28px"
            }}>
              <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "16px" }}>
                <div style={{
                  width: "40px",
                  height: "40px",
                  borderRadius: "10px",
                  background: "linear-gradient(135deg, #fffbeb 0%, #fef3c7 100%)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#d97706"
                }}>
                  <Award size={22} />
                </div>
                <h3 style={{ fontSize: "1.25rem", fontWeight: "800", color: "#0f172a" }}>Certifications</h3>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                {(certifications || []).map((c, idx) => (
                  <div key={idx}>
                    <div style={{ fontSize: "0.95rem", fontWeight: "700", color: "var(--text-dark)" }}>{c.name}</div>
                    <div style={{ fontSize: "0.8125rem", color: "var(--text-muted)" }}>{c.issuer} • <span style={{ color: "#d97706", fontWeight: "700" }}>{c.tag}</span></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}
