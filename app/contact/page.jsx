"use client";

import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HireMeBadge from "../components/HireMeBadge";
import { usePortfolio } from "../context/PortfolioContext";
import { Mail, Linkedin, Github, Send, Copy, Check, Download, MapPin, Sparkles, ArrowUpRight } from "lucide-react";

export default function Contact() {
  const { personalInfo, addInquiry } = usePortfolio();
  const [copied, setCopied] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const copyEmail = () => {
    navigator.clipboard.writeText(personalInfo?.email || "harinik1411@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (addInquiry) {
      addInquiry({
        name: formData.name,
        email: formData.email,
        message: formData.message
      });
    }
    setSubmitted(true);
  };

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
            <span>GET IN TOUCH</span>
          </div>
          <h1 style={{
            fontSize: "clamp(2.5rem, 5vw, 4.5rem)",
            fontWeight: "800",
            letterSpacing: "-0.03em",
            color: "var(--text-dark)",
            marginBottom: "12px"
          }}>
            Let’s Connect & <span className="gradient-text">Deploy Systems!</span>
          </h1>
          <p style={{ fontSize: "1.125rem", color: "var(--text-secondary)", maxWidth: "700px", margin: "0 auto" }}>
            Open for Forward Deployed Engineer positions, AI systems consulting, and high-velocity engineering teams.
          </p>
        </div>

        <div style={{
          display: "grid",
          gridTemplateColumns: "1fr 1.2fr",
          gap: "48px",
          maxWidth: "1080px",
          margin: "0 auto"
        }} className="contact-grid">
          
          {/* Left Column: Direct Contact & Social Cards */}
          <div className="border-card" style={{
            padding: "36px",
            background: "#ffffff",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            border: "2px solid #c7d2fe",
            boxShadow: "6px 6px 0px #4f46e5"
          }}>
            <div>
              <h2 style={{ fontSize: "1.75rem", fontWeight: "800", color: "var(--text-dark)", marginBottom: "6px" }}>
                {personalInfo.name}
              </h2>
              <div style={{
                display: "inline-block",
                fontSize: "0.875rem",
                fontWeight: "700",
                color: "#4f46e5",
                background: "#eef2ff",
                padding: "3px 10px",
                borderRadius: "6px",
                marginBottom: "20px"
              }}>
                {personalInfo.role}
              </div>

              <p style={{ fontSize: "0.95rem", color: "var(--text-secondary)", lineHeight: "1.7", marginBottom: "28px" }}>
                Whether you are looking to integrate an intelligent AI agent, optimize backend throughput, or hire for a Forward Deployed Engineering role, feel free to reach out directly.
              </p>

              {/* Location */}
              <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "18px", color: "var(--text-secondary)" }}>
                <div style={{
                  width: "32px",
                  height: "32px",
                  borderRadius: "8px",
                  background: "#fffbeb",
                  border: "1px solid #fde68a",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#d97706"
                }}>
                  <MapPin size={16} />
                </div>
                <span style={{ fontSize: "0.95rem", fontWeight: "600", color: "#334155" }}>{personalInfo.location}</span>
              </div>

              {/* Email with One-Click Copy */}
              <div style={{
                background: "linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%)",
                border: "1.5px solid #cbd5e1",
                borderRadius: "12px",
                padding: "12px 16px",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                marginBottom: "24px"
              }}>
                <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                  <div style={{
                    width: "32px",
                    height: "32px",
                    borderRadius: "8px",
                    background: "#fee2e2",
                    border: "1px solid #fca5a5",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#e11d48"
                  }}>
                    <Mail size={16} />
                  </div>
                  <span style={{ fontSize: "0.9rem", fontWeight: "700", color: "#0f172a" }}>
                    {personalInfo.email}
                  </span>
                </div>

                <button
                  onClick={copyEmail}
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "4px",
                    padding: "6px 12px",
                    borderRadius: "6px",
                    background: copied ? "#10b981" : "linear-gradient(135deg, #4f46e5 0%, #7c3aed 100%)",
                    color: "#ffffff",
                    fontSize: "0.75rem",
                    fontWeight: "700",
                    boxShadow: "0 2px 8px rgba(79, 70, 229, 0.2)",
                    transition: "all 0.2s ease"
                  }}
                >
                  {copied ? <Check size={12} /> : <Copy size={12} />}
                  <span>{copied ? "Copied" : "Copy"}</span>
                </button>
              </div>
            </div>

            {/* Social Links & Resume Action */}
            <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
              <div style={{ display: "flex", gap: "12px" }}>
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-outline"
                  style={{ flex: 1, padding: "10px 16px", fontSize: "0.9rem", color: "#0077b5", borderColor: "#bae6fd", background: "#f0f9ff" }}
                >
                  <Linkedin size={16} color="#0077b5" />
                  <span>LinkedIn</span>
                  <ArrowUpRight size={14} />
                </a>

                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-outline"
                  style={{ flex: 1, padding: "10px 16px", fontSize: "0.9rem", color: "#1e293b", borderColor: "#cbd5e1" }}
                >
                  <Github size={16} color="#1e293b" />
                  <span>GitHub</span>
                  <ArrowUpRight size={14} />
                </a>
              </div>

              <a
                href="/Harini_K_Resume.pdf"
                download="Harini_K_Resume.pdf"
                className="btn-dark"
                style={{ width: "100%", padding: "12px 20px", fontSize: "0.95rem" }}
              >
                <Download size={16} />
                <span>Download Verified Resume</span>
              </a>
            </div>
          </div>

          {/* Right Column: Interactive Contact Form */}
          <div className="border-card" style={{
            padding: "36px",
            background: "#ffffff",
            border: "2px solid #e2e8f0",
            boxShadow: "6px 6px 0px #0f172a"
          }}>
            <h2 style={{ fontSize: "1.5rem", fontWeight: "800", color: "var(--text-dark)", marginBottom: "8px" }}>
              Send Direct Message
            </h2>
            <p style={{ fontSize: "0.9rem", color: "var(--text-secondary)", marginBottom: "24px" }}>
              Fill out the details below and I will respond to your inquiry within 24 hours.
            </p>

            {submitted ? (
              <div style={{
                background: "#f0fdf4",
                border: "2px solid #16a34a",
                borderRadius: "12px",
                padding: "32px 24px",
                textAlign: "center"
              }}>
                <Sparkles size={32} color="#16a34a" style={{ margin: "0 auto 12px auto" }} />
                <h3 style={{ fontSize: "1.25rem", fontWeight: "800", color: "#166534" }}>Message Sent!</h3>
                <p style={{ fontSize: "0.9rem", color: "#15803d", marginTop: "4px" }}>
                  Thank you for reaching out. Harini will be in touch shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "18px" }}>
                <div>
                  <label style={{ fontSize: "0.875rem", fontWeight: "700", color: "#1b1b1b", display: "block", marginBottom: "6px" }}>
                    Your Name / Organization
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                    placeholder="e.g. Engineering Lead / Recruiter"
                    style={{
                      width: "100%",
                      padding: "12px 16px",
                      borderRadius: "8px",
                      border: "2px solid #1b1b1b",
                      background: "#ffffff",
                      fontSize: "0.95rem",
                      outline: "none"
                    }}
                  />
                </div>

                <div>
                  <label style={{ fontSize: "0.875rem", fontWeight: "700", color: "#1b1b1b", display: "block", marginBottom: "6px" }}>
                    Email Address
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                    placeholder="your.email@company.com"
                    style={{
                      width: "100%",
                      padding: "12px 16px",
                      borderRadius: "8px",
                      border: "2px solid #1b1b1b",
                      background: "#ffffff",
                      fontSize: "0.95rem",
                      outline: "none"
                    }}
                  />
                </div>

                <div>
                  <label style={{ fontSize: "0.875rem", fontWeight: "700", color: "#1b1b1b", display: "block", marginBottom: "6px" }}>
                    Message / Deployment Scope
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
                    placeholder="Tell me about your role, technical requirements, or opportunity..."
                    style={{
                      width: "100%",
                      padding: "12px 16px",
                      borderRadius: "8px",
                      border: "2px solid #1b1b1b",
                      background: "#ffffff",
                      fontSize: "0.95rem",
                      outline: "none",
                      resize: "vertical"
                    }}
                  />
                </div>

                <button type="submit" className="btn-dark" style={{ padding: "14px 24px", marginTop: "8px" }}>
                  <span>Submit Inquiry</span>
                  <Send size={16} />
                </button>
              </form>
            )}
          </div>
        </div>

      </main>

      <HireMeBadge />
      <Footer />
    </div>
  );
}
