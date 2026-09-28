"use client";

import React, { useState } from "react";
import { usePortfolio } from "../context/PortfolioContext";
import { ArrowUpRight, Layers, Eye } from "lucide-react";
import ArchitectureModal from "./ArchitectureModal";

export default function Projects() {
  const { projects } = usePortfolio();
  const [selectedArchProject, setSelectedArchProject] = useState(null);
  const projectsList = projects || [];

  return (
    <section id="projects" className="section-wrapper">
      <div className="section-header">
        <div className="section-tag">
          <Layers size={14} />
          <span>Production Deployments</span>
        </div>
        <h2 className="section-title">
          Mission-Critical AI & Full-Stack Systems
        </h2>
        <p className="section-subtitle">
          Real-world implementations combining agentic workflows, asynchronous microservices, and database performance optimization.
        </p>
      </div>

      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
        gap: "28px"
      }}>
        {projectsList.map((project) => (
          <div key={project.id} className="glass-card" style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between"
          }}>
            <div>
              {/* Header Badge */}
              <div style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                marginBottom: "16px"
              }}>
                <span style={{
                  fontSize: "0.75rem",
                  fontWeight: "700",
                  textTransform: "uppercase",
                  letterSpacing: "0.08em",
                  padding: "4px 12px",
                  borderRadius: "9999px",
                  background: project.featured ? "rgba(79, 70, 229, 0.12)" : "rgba(15, 23, 42, 0.06)",
                  color: project.featured ? "#4f46e5" : "var(--text-secondary)",
                  border: project.featured ? "1px solid rgba(79, 70, 229, 0.25)" : "1px solid rgba(15, 23, 42, 0.1)"
                }}>
                  {project.badge}
                </span>

                <span style={{ fontSize: "0.8125rem", color: "var(--text-muted)", fontWeight: "500" }}>
                  {project.period}
                </span>
              </div>

              {/* Title & Role */}
              <h3 style={{ fontSize: "1.45rem", fontWeight: "800", color: "var(--text-primary)", marginBottom: "6px" }}>
                {project.title}
              </h3>
              <div style={{ fontSize: "0.875rem", fontWeight: "600", color: "#4f46e5", marginBottom: "16px" }}>
                {project.role}
              </div>

              {/* Summary */}
              <p style={{ fontSize: "0.9375rem", color: "var(--text-secondary)", lineHeight: "1.6", marginBottom: "20px" }}>
                {project.summary}
              </p>

              {/* Key Bullet Points */}
              <div style={{ display: "flex", flexDirection: "column", gap: "10px", marginBottom: "24px" }}>
                {(project.highlights || []).map((h, i) => (
                  <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: "8px", fontSize: "0.875rem", color: "#334155" }}>
                    <div style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#4f46e5", marginTop: "8px", flexShrink: 0 }} />
                    <span>{h}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              {/* Stack tags */}
              <div style={{ display: "flex", flexWrap: "wrap", gap: "6px", marginBottom: "20px" }}>
                {(project.stack || []).map((s, idx) => (
                  <span key={idx} style={{
                    fontSize: "0.75rem",
                    fontWeight: "600",
                    padding: "3px 10px",
                    borderRadius: "6px",
                    background: "rgba(241, 245, 249, 0.9)",
                    color: "#334155",
                    border: "1px solid rgba(226, 232, 240, 0.8)"
                  }}>
                    {s}
                  </span>
                ))}
              </div>

              {/* Actions */}
              <div style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                paddingTop: "16px",
                borderTop: "1px solid rgba(226, 232, 240, 0.8)"
              }}>
                <button
                  onClick={() => setSelectedArchProject(project)}
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "6px",
                    fontSize: "0.8125rem",
                    fontWeight: "700",
                    color: "#4f46e5"
                  }}
                >
                  <Eye size={15} />
                  <span>Inspect Pipeline</span>
                </button>

                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "4px",
                    fontSize: "0.8125rem",
                    fontWeight: "600",
                    color: "var(--text-muted)"
                  }}
                >
                  <span>Code</span>
                  <ArrowUpRight size={14} />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Architecture Modal */}
      {selectedArchProject && (
        <ArchitectureModal 
          project={selectedArchProject} 
          onClose={() => setSelectedArchProject(null)} 
        />
      )}
    </section>
  );
}
