"use client";

import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HireMeBadge from "../components/HireMeBadge";
import { usePortfolio } from "../context/PortfolioContext";
import { Github, ArrowUpRight, Eye } from "lucide-react";
import ArchitectureModal from "../components/ArchitectureModal";

export default function Projects() {
  const { projects } = usePortfolio();
  const [selectedArchProject, setSelectedArchProject] = useState(null);
  const projectsList = projects || [];

  return (
    <div className="page-wrapper">
      <Navbar />

      <main className="content-container" style={{ padding: "40px 32px 80px 32px" }}>
        
        {/* Page Header */}
        <div style={{ textAlign: "center", marginBottom: "64px" }}>
          <div style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "6px",
            padding: "4px 14px",
            borderRadius: "9999px",
            background: "linear-gradient(135deg, #eef2ff 0%, #ede9fe 100%)",
            border: "1px solid #c7d2fe",
            fontSize: "0.8125rem",
            fontWeight: "800",
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            color: "#4f46e5",
            marginBottom: "12px"
          }}>
            <span>SYSTEM DEPLOYMENTS</span>
          </div>
          <h1 style={{
            fontSize: "clamp(2.5rem, 5vw, 4.5rem)",
            fontWeight: "800",
            letterSpacing: "-0.03em",
            color: "var(--text-dark)",
            marginBottom: "12px"
          }}>
            Deployments Drive <span className="gradient-text">Real Impact!</span>
          </h1>
          <p style={{ fontSize: "1.125rem", color: "var(--text-secondary)", maxWidth: "700px", margin: "0 auto" }}>
            Production-grade implementations combining LLM agent orchestration, asynchronous REST backends, and low-latency database architectures.
          </p>
        </div>

        {/* Featured Deployment Hero Card */}
        {projectsList.slice(0, 1).map((proj) => (
          <div key={proj.id} className="border-card" style={{
            padding: "36px",
            marginBottom: "48px",
            background: "#ffffff",
            border: "2px solid #6366f1",
            boxShadow: "8px 8px 0px #4f46e5"
          }}>
            <div style={{
              display: "grid",
              gridTemplateColumns: "1.2fr 1fr",
              gap: "40px",
              alignItems: "center"
            }} className="featured-proj-grid">
              
              {/* Left Column: Visual Architecture Preview */}
              <div style={{
                background: "linear-gradient(135deg, #f8fafc 0%, #f5f3ff 100%)",
                border: "2px solid #c7d2fe",
                borderRadius: "16px",
                padding: "24px",
                display: "flex",
                flexDirection: "column",
                gap: "16px"
              }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <span style={{
                    fontSize: "0.8125rem",
                    fontWeight: "800",
                    color: "#4f46e5",
                    textTransform: "uppercase",
                    background: "#eef2ff",
                    padding: "4px 10px",
                    borderRadius: "6px"
                  }}>
                    Featured Architecture Spec
                  </span>
                  <span style={{
                    fontSize: "0.75rem",
                    fontWeight: "800",
                    background: "linear-gradient(135deg, #059669 0%, #10b981 100%)",
                    color: "#ffffff",
                    padding: "4px 10px",
                    borderRadius: "6px",
                    boxShadow: "0 2px 8px rgba(16, 185, 129, 0.3)"
                  }}>
                    Latency: {proj.architecture?.latency || "< 250ms"}
                  </span>
                </div>

                <div style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: "12px"
                }}>
                  <div style={{ background: "#ffffff", padding: "12px", borderRadius: "10px", border: "1px solid #c7d2fe", boxShadow: "0 2px 6px rgba(79, 70, 229, 0.06)" }}>
                    <div style={{ fontSize: "0.6875rem", color: "#6366f1", fontWeight: "800", letterSpacing: "0.05em" }}>INGESTION GATEWAY</div>
                    <div style={{ fontSize: "0.875rem", fontWeight: "700", color: "#0f172a", marginTop: "2px" }}>{proj.architecture?.gateway || "REST API Gateway"}</div>
                  </div>

                  <div style={{ background: "#ffffff", padding: "12px", borderRadius: "10px", border: "1px solid #c7d2fe", boxShadow: "0 2px 6px rgba(79, 70, 229, 0.06)" }}>
                    <div style={{ fontSize: "0.6875rem", color: "#6366f1", fontWeight: "800", letterSpacing: "0.05em" }}>AGENT ORCHESTRATOR</div>
                    <div style={{ fontSize: "0.875rem", fontWeight: "700", color: "#0f172a", marginTop: "2px" }}>{proj.architecture?.orchestrator || "LangChain / FastChat"}</div>
                  </div>
                </div>

                <button
                  onClick={() => setSelectedArchProject(proj)}
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "8px",
                    padding: "12px",
                    borderRadius: "10px",
                    background: "linear-gradient(135deg, #4f46e5 0%, #7c3aed 100%)",
                    color: "#ffffff",
                    fontSize: "0.875rem",
                    fontWeight: "700",
                    boxShadow: "0 4px 14px rgba(79, 70, 229, 0.3)",
                    marginTop: "8px",
                    transition: "all 0.2s ease"
                  }}
                >
                  <Eye size={16} />
                  <span>Inspect Complete System Pipeline</span>
                </button>
              </div>

              {/* Right Column: Project Info */}
              <div>
                <div style={{
                  display: "inline-block",
                  fontSize: "0.8125rem",
                  fontWeight: "800",
                  color: "#4f46e5",
                  background: "linear-gradient(135deg, #eef2ff 0%, #ede9fe 100%)",
                  padding: "4px 10px",
                  borderRadius: "6px",
                  marginBottom: "8px"
                }}>
                  {proj.badge || "Featured"}
                </div>
                <h2 style={{ fontSize: "2rem", fontWeight: "800", color: "var(--text-dark)", marginBottom: "12px" }}>
                  {proj.title}
                </h2>
                <p style={{ fontSize: "1rem", color: "var(--text-secondary)", lineHeight: "1.7", marginBottom: "20px" }}>
                  {proj.summary}
                </p>

                <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", marginBottom: "24px" }}>
                  {(proj.stack || []).map((st, i) => (
                    <span key={i} style={{
                      fontSize: "0.8125rem",
                      fontWeight: "700",
                      padding: "4px 12px",
                      borderRadius: "6px",
                      background: "linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%)",
                      border: "1px solid #cbd5e1",
                      color: "#334155"
                    }}>
                      {st}
                    </span>
                  ))}
                </div>

                <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
                  <a 
                    href={proj.link || "#"} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="btn-dark"
                    style={{ padding: "10px 24px", fontSize: "0.95rem" }}
                  >
                    <span>Visit Project</span>
                    <ArrowUpRight size={18} />
                  </a>

                  <a 
                    href={proj.link || "#"} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    style={{ color: "#1e293b", padding: "8px" }}
                  >
                    <Github size={24} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* Other Projects Grid */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))",
          gap: "36px"
        }}>
          {projectsList.slice(1).map((proj, pIdx) => {
            const isEmerald = pIdx % 2 === 0;
            const accentColor = isEmerald ? "#059669" : "#0284c7";
            const borderCol = isEmerald ? "#6ee7b7" : "#7dd3fc";
            const badgeBg = isEmerald ? "linear-gradient(135deg, #ecfdf5 0%, #d1fae5 100%)" : "linear-gradient(135deg, #ecfeff 0%, #cffafe 100%)";
            return (
              <div key={proj.id} className="border-card" style={{
                padding: "32px",
                background: "#ffffff",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                border: `2px solid ${borderCol}`,
                boxShadow: `6px 6px 0px ${accentColor}`
              }}>
                <div>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "12px" }}>
                    <span style={{
                      fontSize: "0.8125rem",
                      fontWeight: "800",
                      color: accentColor,
                      background: badgeBg,
                      padding: "4px 10px",
                      borderRadius: "6px"
                    }}>
                      {proj.badge || "Deployment"}
                    </span>
                    <span style={{ fontSize: "0.8125rem", color: "var(--text-muted)", fontWeight: "600" }}>
                      {proj.period || "2024"}
                    </span>
                  </div>

                  <h3 style={{ fontSize: "1.5rem", fontWeight: "800", color: "var(--text-dark)", marginBottom: "10px" }}>
                    {proj.title}
                  </h3>

                  <p style={{ fontSize: "0.95rem", color: "var(--text-secondary)", lineHeight: "1.65", marginBottom: "20px" }}>
                    {proj.summary}
                  </p>

                  <div style={{ display: "flex", flexDirection: "column", gap: "8px", marginBottom: "20px" }}>
                    {(proj.highlights || []).map((h, i) => (
                      <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: "8px", fontSize: "0.875rem", color: "#334155" }}>
                        <div style={{ width: "6px", height: "6px", borderRadius: "50%", background: accentColor, marginTop: "8px", flexShrink: 0 }} />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: "6px", marginBottom: "20px" }}>
                    {(proj.stack || []).map((st, i) => (
                      <span key={i} style={{
                        fontSize: "0.75rem",
                        fontWeight: "700",
                        padding: "4px 10px",
                        borderRadius: "6px",
                        background: "#f8fafc",
                        border: "1px solid #e2e8f0",
                        color: "#475569"
                      }}>
                        {st}
                      </span>
                    ))}
                  </div>

                  <div style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    paddingTop: "16px",
                    borderTop: "1px solid #e2e8f0"
                  }}>
                    <button
                      onClick={() => setSelectedArchProject(proj)}
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "6px",
                        fontSize: "0.875rem",
                        fontWeight: "700",
                        color: accentColor
                      }}
                    >
                      <Eye size={15} />
                      <span>Inspect Pipeline</span>
                    </button>

                    <a 
                      href={proj.link} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      style={{ color: "#0f172a", display: "flex", alignItems: "center", gap: "4px", fontSize: "0.875rem", fontWeight: "700" }}
                    >
                      <span>Code</span>
                      <ArrowUpRight size={16} />
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Architecture Modal */}
        {selectedArchProject && (
          <ArchitectureModal 
            project={selectedArchProject} 
            onClose={() => setSelectedArchProject(null)} 
          />
        )}
      </main>

      <HireMeBadge />
      <Footer />
    </div>
  );
}
