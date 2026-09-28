"use client";

import React from "react";
import { usePortfolio } from "../context/PortfolioContext";
import { achievementsData } from "../data/portfolioData";
import { Briefcase, Trophy, GraduationCap } from "lucide-react";

export default function ExperienceTimeline() {
  const { experience, education } = usePortfolio();
  const experienceList = experience || [];
  const educationList = education || [];
  return (
    <section id="experience" className="section-wrapper">
      <div className="section-header">
        <div className="section-tag">
          <Briefcase size={14} />
          <span>Track Record & Recognition</span>
        </div>
        <h2 className="section-title">
          Experience, Hackathons & Education
        </h2>
        <p className="section-subtitle">
          Proven track record of technical execution, rapid hackathon delivery, and academic distinction.
        </p>
      </div>

      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
        gap: "36px"
      }}>
        {/* Work & Internships */}
        <div>
          <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "24px" }}>
            <div style={{
              width: "36px",
              height: "36px",
              borderRadius: "10px",
              background: "rgba(79, 70, 229, 0.1)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#4f46e5"
            }}>
              <Briefcase size={18} />
            </div>
            <h3 style={{ fontSize: "1.35rem", fontWeight: "800" }}>Internships & Roles</h3>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
            {experienceList.map((exp, idx) => (
              <div key={idx} className="glass-card" style={{ padding: "24px" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "8px" }}>
                  <h4 style={{ fontSize: "1.125rem", fontWeight: "700", color: "var(--text-primary)" }}>{exp.role}</h4>
                  <span style={{ fontSize: "0.75rem", fontWeight: "600", color: "#4f46e5", background: "rgba(79, 70, 229, 0.08)", padding: "2px 8px", borderRadius: "9999px" }}>
                    {exp.period}
                  </span>
                </div>
                <div style={{ fontSize: "0.875rem", fontWeight: "600", color: "#334155", marginBottom: "12px" }}>
                  {exp.organization}
                </div>
                <p style={{ fontSize: "0.875rem", color: "var(--text-secondary)", lineHeight: "1.6", marginBottom: "16px" }}>
                  {exp.description}
                </p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
                  {(exp.tags || []).map((t, i) => (
                    <span key={i} style={{ fontSize: "0.6875rem", fontWeight: "600", padding: "2px 8px", borderRadius: "4px", background: "rgba(15, 23, 42, 0.04)", color: "#475569" }}>
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Hackathons & Achievements */}
        <div>
          <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "24px" }}>
            <div style={{
              width: "36px",
              height: "36px",
              borderRadius: "10px",
              background: "rgba(245, 158, 11, 0.1)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#f59e0b"
            }}>
              <Trophy size={18} />
            </div>
            <h3 style={{ fontSize: "1.35rem", fontWeight: "800" }}>Hackathons & Awards</h3>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
            {(achievementsData || []).map((ach, idx) => (
              <div key={idx} className="glass-card" style={{ padding: "24px", borderLeft: "4px solid #f59e0b" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "6px" }}>
                  <h4 style={{ fontSize: "1.125rem", fontWeight: "700", color: "var(--text-primary)" }}>{ach.title}</h4>
                  <span style={{ fontSize: "0.75rem", fontWeight: "700", color: "#d97706", background: "rgba(245, 158, 11, 0.12)", padding: "2px 8px", borderRadius: "9999px" }}>
                    {ach.badge}
                  </span>
                </div>
                <div style={{ fontSize: "0.875rem", fontWeight: "600", color: "#475569", marginBottom: "10px" }}>
                  {ach.event} • {ach.org}
                </div>
                <p style={{ fontSize: "0.875rem", color: "var(--text-secondary)", lineHeight: "1.5" }}>
                  {ach.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Education Timeline */}
      <div style={{ marginTop: "48px" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "24px" }}>
          <div style={{
            width: "36px",
            height: "36px",
            borderRadius: "10px",
            background: "rgba(16, 185, 129, 0.1)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "#10b981"
          }}>
            <GraduationCap size={18} />
          </div>
          <h3 style={{ fontSize: "1.35rem", fontWeight: "800" }}>Education</h3>
        </div>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: "20px"
        }}>
          {educationList.map((edu, idx) => (
            <div key={idx} className="glass-card" style={{ padding: "24px" }}>
              <span style={{ fontSize: "0.75rem", fontWeight: "700", color: "#10b981", background: "rgba(16, 185, 129, 0.1)", padding: "2px 8px", borderRadius: "9999px" }}>
                {edu.period}
              </span>
              <h4 style={{ fontSize: "1.05rem", fontWeight: "700", color: "var(--text-primary)", marginTop: "10px", marginBottom: "4px" }}>
                {edu.degree}
              </h4>
              <div style={{ fontSize: "0.875rem", color: "#475569", marginBottom: "12px" }}>
                {edu.institution}
              </div>
              <div style={{ fontSize: "1rem", fontWeight: "800", color: "#4f46e5" }}>
                {edu.score}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
