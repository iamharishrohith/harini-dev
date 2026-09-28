"use client";

import React, { useState } from "react";
import { usePortfolio } from "../context/PortfolioContext";
import { Cpu, Database, Cloud, Code2, Sparkles } from "lucide-react";

export default function SkillsMatrix() {
  const { skills } = usePortfolio();
  const categories = Object.keys(skills || {});
  const [activeCategory, setActiveCategory] = useState(categories[0] || "Generative AI & LLMs");

  const categoryIcons = {
    "Generative AI & LLMs": Cpu,
    "Full Stack & Distributed": Code2,
    "Cloud & DevOps": Cloud,
    "CS & System Design": Database
  };

  return (
    <section id="skills" className="section-wrapper">
      <div className="section-header">
        <div className="section-tag">
          <Cpu size={14} />
          <span>Technical Architecture</span>
        </div>
        <h2 className="section-title">
          Engineering Skill Matrix & Toolchain
        </h2>
        <p className="section-subtitle">
          Core competencies spanning model inference, async API construction, relational database optimization, and cloud deployments.
        </p>
      </div>

      {/* Category Tabs */}
      <div style={{
        display: "flex",
        justifyContent: "center",
        flexWrap: "wrap",
        gap: "10px",
        marginBottom: "40px"
      }}>
        {categories.map((cat) => {
          const Icon = categoryIcons[cat] || Sparkles;
          const isActive = activeCategory === cat;
          return (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                padding: "10px 20px",
                borderRadius: "9999px",
                fontSize: "0.875rem",
                fontWeight: "600",
                background: isActive ? "var(--grad-accent-btn)" : "rgba(255, 255, 255, 0.8)",
                color: isActive ? "#ffffff" : "var(--text-secondary)",
                border: isActive ? "1px solid transparent" : "1px solid rgba(210, 220, 240, 0.8)",
                boxShadow: isActive ? "0 4px 14px rgba(79, 70, 229, 0.3)" : "var(--shadow-sm)",
                transition: "all 0.25s ease"
              }}
            >
              <Icon size={16} />
              <span>{cat}</span>
            </button>
          );
        })}
      </div>

      {/* Active Category Skills Grid */}
      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
        gap: "20px"
      }}>
        {((skills && skills[activeCategory]) || []).map((skill, idx) => (
          <div key={idx} className="glass-card" style={{ padding: "20px" }}>
            <div style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              marginBottom: "12px"
            }}>
              <span style={{ fontSize: "0.95rem", fontWeight: "700", color: "var(--text-primary)" }}>
                {skill.name}
              </span>
              <span style={{
                fontSize: "0.75rem",
                fontWeight: "700",
                padding: "2px 8px",
                borderRadius: "9999px",
                background: "rgba(79, 70, 229, 0.08)",
                color: "#4f46e5"
              }}>
                {skill.tag}
              </span>
            </div>

            {/* Progress bar */}
            <div style={{
              width: "100%",
              height: "6px",
              borderRadius: "9999px",
              background: "rgba(226, 232, 240, 0.8)",
              overflow: "hidden"
            }}>
              <div style={{
                width: `${skill.level}%`,
                height: "100%",
                borderRadius: "9999px",
                background: "linear-gradient(90deg, #4f46e5, #06b6d4)",
                transition: "width 0.8s ease"
              }} />
            </div>

            <div style={{
              display: "flex",
              justifyContent: "space-between",
              marginTop: "8px",
              fontSize: "0.75rem",
              color: "var(--text-muted)"
            }}>
              <span>Proficiency</span>
              <span>{skill.level}%</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
