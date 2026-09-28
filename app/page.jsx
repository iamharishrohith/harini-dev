"use client";

import React from "react";
import Link from "next/link";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HireMeBadge from "./components/HireMeBadge";
import ProcessFlow from "./components/ProcessFlow";
import { usePortfolio } from "./context/PortfolioContext";
import { ArrowUpRight, Sparkles, Zap, Award, GraduationCap, Cpu, Layers } from "lucide-react";

export default function Home() {
  const { personalInfo } = usePortfolio();
  const m = personalInfo.metrics || [];

  return (
    <div className="page-wrapper">
      <Navbar />

      <main className="content-container" style={{
        flex: 1,
        padding: "20px 32px 80px 32px",
        position: "relative"
      }}>
        {/* Split Hero Section */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "60px",
          alignItems: "center",
          width: "100%",
          minHeight: "75vh",
          paddingBottom: "40px"
        }} className="hero-grid">
          
          {/* Left Column: Developer Photo / Avatar Card with Colorful Radiant Halo */}
          <div style={{
            position: "relative",
            width: "100%",
            maxWidth: "520px",
            margin: "0 auto"
          }}>
            {/* Ambient Background Gradient Aura */}
            <div style={{
              position: "absolute",
              inset: "-16px",
              background: "radial-gradient(circle at center, rgba(99, 102, 241, 0.3) 0%, rgba(236, 72, 153, 0.2) 40%, rgba(6, 182, 212, 0.15) 70%, transparent 80%)",
              filter: "blur(24px)",
              zIndex: 0,
              borderRadius: "32px"
            }} className="animate-pulse-glow" />

            <div className="border-card" style={{
              overflow: "hidden",
              position: "relative",
              zIndex: 1,
              padding: "12px",
              background: "#ffffff",
              border: "2px solid #1e1b4b"
            }}>
              <img 
                src="/developer-avatar.svg" 
                alt={`${personalInfo.name} - Forward Deployed Engineer`}
                style={{
                  width: "100%",
                  height: "auto",
                  display: "block",
                  borderRadius: "14px"
                }}
              />
            </div>
          </div>

          {/* Right Column: Hero Typography, Badges & Actions */}
          <div style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            gap: "20px"
          }} className="hero-text-col">
            
            {/* Live Availability Status Pill */}
            <div style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              padding: "6px 14px",
              borderRadius: "9999px",
              background: "linear-gradient(135deg, #f0fdf4 0%, #ecfeff 100%)",
              border: "1px solid #86efac",
              boxShadow: "0 2px 8px rgba(16, 185, 129, 0.15)"
            }}>
              <span style={{
                width: "8px",
                height: "8px",
                borderRadius: "50%",
                background: "#10b981",
                display: "inline-block",
                boxShadow: "0 0 8px #10b981"
              }} />
              <span style={{
                fontSize: "0.8125rem",
                fontWeight: "700",
                letterSpacing: "0.05em",
                textTransform: "uppercase",
                color: "#065f46"
              }}>
                {personalInfo.status}
              </span>
            </div>

            {/* Main Headline with Gradient Text Accent */}
            <h1 style={{
              fontSize: "clamp(2.5rem, 4.2vw, 3.75rem)",
              fontWeight: "800",
              lineHeight: "1.15",
              letterSpacing: "-0.03em",
              color: "var(--text-dark)"
            }}>
              Turning AI Vision Into Reality With Code & <span className="gradient-text">Forward Deployed Systems.</span>
            </h1>

            {/* Subtext */}
            <p style={{
              fontSize: "clamp(1rem, 1.5vw, 1.15rem)",
              color: "var(--text-secondary)",
              lineHeight: "1.7",
              maxWidth: "600px"
            }}>
              As a dedicated <strong style={{ color: "#4f46e5", fontWeight: "700" }}>{personalInfo.role}</strong> & AI Systems Developer, I build resilient LLM-powered assistants, asynchronous low-latency REST architectures, and intuitive web platforms that solve real-world problems.
            </p>

            {/* Quick Hero Metric Pills */}
            <div style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "10px",
              marginTop: "4px"
            }}>
              <div style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "6px",
                padding: "6px 12px",
                borderRadius: "8px",
                background: "linear-gradient(135deg, #eef2ff 0%, #ede9fe 100%)",
                border: "1px solid #c7d2fe",
                fontSize: "0.8125rem",
                fontWeight: "700",
                color: "#4338ca"
              }}>
                <GraduationCap size={15} color="#4f46e5" />
                <span>{m[0]?.value || "8.50"} CGPA ({m[0]?.detail || "B.Sc AI"})</span>
              </div>

              <div style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "6px",
                padding: "6px 12px",
                borderRadius: "8px",
                background: "linear-gradient(135deg, #fffbeb 0%, #fef3c7 100%)",
                border: "1px solid #fde68a",
                fontSize: "0.8125rem",
                fontWeight: "700",
                color: "#b45309"
              }}>
                <Award size={15} color="#d97706" />
                <span>{m[1]?.value || "1st Place"} ({m[1]?.label || "Hackathon"})</span>
              </div>

              <div style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "6px",
                padding: "6px 12px",
                borderRadius: "8px",
                background: "linear-gradient(135deg, #ecfdf5 0%, #d1fae5 100%)",
                border: "1px solid #a7f3d0",
                fontSize: "0.8125rem",
                fontWeight: "700",
                color: "#047857"
              }}>
                <Zap size={15} color="#059669" />
                <span>{m[2]?.value || "-40%"} ({m[2]?.label || "API Latency"})</span>
              </div>

              <div style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "6px",
                padding: "6px 12px",
                borderRadius: "8px",
                background: "linear-gradient(135deg, #ecfeff 0%, #cffafe 100%)",
                border: "1px solid #a5f3fc",
                fontSize: "0.8125rem",
                fontWeight: "700",
                color: "#0e7490"
              }}>
                <Cpu size={15} color="#0284c7" />
                <span>{m[3]?.value || "15+"} ({m[3]?.label || "Stack Tools"})</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div style={{
              display: "flex",
              alignItems: "center",
              gap: "18px",
              flexWrap: "wrap",
              marginTop: "8px"
            }}>
              <a 
                href="/Harini_K_Resume.pdf"
                download="Harini_K_Resume.pdf"
                className="btn-dark"
              >
                <span>Download Resume</span>
                <ArrowUpRight size={18} />
              </a>

              <Link 
                href="/projects"
                className="btn-outline"
              >
                <Layers size={18} />
                <span>Explore Deployments</span>
              </Link>
            </div>
          </div>
        </div>

        {/* Interactive Process / Engineering Thinking Flow Section */}
        <ProcessFlow />
      </main>

      {/* Rotating Circular Hire Me Badge */}
      <HireMeBadge />

      <Footer />
    </div>
  );
}
