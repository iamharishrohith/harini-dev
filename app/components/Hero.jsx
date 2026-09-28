"use client";

import React from "react";
import { usePortfolio } from "../context/PortfolioContext";
import { Terminal, ArrowRight, ShieldCheck, Zap, Cpu } from "lucide-react";

export default function Hero({ onOpenTerminal }) {
  const { personalInfo } = usePortfolio();

  return (
    <section id="about" style={{
      paddingTop: "140px",
      paddingBottom: "40px",
      position: "relative",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      textAlign: "center"
    }}>
      {/* Top Status Pill */}
      <div style={{
        display: "inline-flex",
        alignItems: "center",
        gap: "8px",
        padding: "8px 18px",
        borderRadius: "9999px",
        background: "rgba(255, 255, 255, 0.9)",
        border: "1px solid rgba(99, 102, 241, 0.25)",
        boxShadow: "0 4px 20px rgba(99, 102, 241, 0.08)",
        marginBottom: "24px",
        backdropFilter: "blur(12px)"
      }}>
        <span className="pulse-dot" />
        <span style={{ fontSize: "0.875rem", fontWeight: "600", color: "#334155" }}>
          {personalInfo?.status || "Available for Forward Deployed Engineer roles"}
        </span>
      </div>

      {/* Main Title */}
      <h1 style={{
        fontSize: "clamp(2.4rem, 5vw, 4.25rem)",
        fontWeight: "800",
        lineHeight: "1.12",
        letterSpacing: "-0.03em",
        maxWidth: "960px",
        marginBottom: "24px"
      }}>
        Deploying <span className="text-gradient">Agentic AI & Full-Stack Systems</span> to Production
      </h1>

      {/* Subtitle */}
      <p style={{
        fontSize: "clamp(1.05rem, 2vw, 1.25rem)",
        color: "var(--text-secondary)",
        maxWidth: "760px",
        lineHeight: "1.6",
        marginBottom: "36px"
      }}>
        I am <strong style={{ color: "var(--text-primary)", fontWeight: "700" }}>{personalInfo?.name || "Harini K"}</strong>, a {personalInfo?.role || "Forward Deployed Engineer"} specializing in LLM orchestration, asynchronous low-latency backend architectures, and high-impact enterprise AI workflows.
      </p>

      {/* CTA Buttons */}
      <div style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "16px",
        flexWrap: "wrap",
        marginBottom: "56px"
      }}>
        <a href="#projects" className="btn-primary" style={{ padding: "14px 28px", fontSize: "1rem" }}>
          <span>View Production Deployments</span>
          <ArrowRight size={18} />
        </a>

        <button onClick={onOpenTerminal} className="btn-secondary" style={{ padding: "14px 28px", fontSize: "1rem" }}>
          <Terminal size={18} color="#4f46e5" />
          <span>Launch AI Console</span>
        </button>
      </div>

      {/* Live System Spec Floating Grid */}
      <div style={{
        width: "100%",
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
        gap: "18px",
        marginTop: "12px"
      }}>
        <div className="glass-card" style={{ padding: "20px", display: "flex", alignItems: "flex-start", gap: "16px", textAlign: "left" }}>
          <div style={{
            width: "44px",
            height: "44px",
            borderRadius: "12px",
            background: "linear-gradient(135deg, rgba(79, 70, 229, 0.12), rgba(6, 182, 212, 0.12))",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "#4f46e5",
            flexShrink: 0
          }}>
            <Cpu size={22} />
          </div>
          <div>
            <div style={{ fontSize: "0.8125rem", color: "var(--text-muted)", fontWeight: "600" }}>CORE CAPABILITY</div>
            <div style={{ fontSize: "1rem", fontWeight: "700", color: "var(--text-primary)", marginTop: "2px" }}>Agentic LLM Orchestration</div>
            <div style={{ fontSize: "0.8125rem", color: "var(--text-secondary)", marginTop: "4px" }}>Multi-turn state, guardrails & prompt optimization</div>
          </div>
        </div>

        <div className="glass-card" style={{ padding: "20px", display: "flex", alignItems: "flex-start", gap: "16px", textAlign: "left" }}>
          <div style={{
            width: "44px",
            height: "44px",
            borderRadius: "12px",
            background: "linear-gradient(135deg, rgba(16, 185, 129, 0.12), rgba(6, 182, 212, 0.12))",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "#10b981",
            flexShrink: 0
          }}>
            <Zap size={22} />
          </div>
          <div>
            <div style={{ fontSize: "0.8125rem", color: "var(--text-muted)", fontWeight: "600" }}>PERFORMANCE</div>
            <div style={{ fontSize: "1rem", fontWeight: "700", color: "var(--text-primary)", marginTop: "2px" }}>Asynchronous REST APIs</div>
            <div style={{ fontSize: "0.8125rem", color: "var(--text-secondary)", marginTop: "4px" }}>Non-blocking dispatchers & 40% latency drop</div>
          </div>
        </div>

        <div className="glass-card" style={{ padding: "20px", display: "flex", alignItems: "flex-start", gap: "16px", textAlign: "left" }}>
          <div style={{
            width: "44px",
            height: "44px",
            borderRadius: "12px",
            background: "linear-gradient(135deg, rgba(244, 63, 94, 0.12), rgba(217, 70, 239, 0.12))",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "#f43f5e",
            flexShrink: 0
          }}>
            <ShieldCheck size={22} />
          </div>
          <div>
            <div style={{ fontSize: "0.8125rem", color: "var(--text-muted)", fontWeight: "600" }}>DATA & INTEGRATION</div>
            <div style={{ fontSize: "1rem", fontWeight: "700", color: "var(--text-primary)", marginTop: "2px" }}>Relational & NoSQL Schema</div>
            <div style={{ fontSize: "0.8125rem", color: "var(--text-secondary)", marginTop: "4px" }}>MySQL cache layer, Postgres, Redis & Firebase</div>
          </div>
        </div>
      </div>
    </section>
  );
}
