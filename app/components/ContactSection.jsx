"use client";

import React, { useState } from "react";
import { usePortfolio } from "../context/PortfolioContext";
import { Mail, Linkedin, Github, Send, Copy, Check, Sparkles, Download, ArrowUpRight } from "lucide-react";

export default function ContactSection() {
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
    <section id="contact" className="section-wrapper">
      <div className="section-header">
        <div className="section-tag">
          <Sparkles size={14} />
          <span>Forward Deployment & Collaboration</span>
        </div>
        <h2 className="section-title">
          Let’s Deploy High-Impact AI Together
        </h2>
        <p className="section-subtitle">
          Open for Forward Deployed Engineer positions, AI systems architecture, and high-velocity engineering teams.
        </p>
      </div>

      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
        gap: "32px",
        alignItems: "stretch"
      }}>
        {/* Left: Contact Info & Direct Links */}
        <div className="glass-card" style={{ padding: "36px", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
          <div>
            <h3 style={{ fontSize: "1.5rem", fontWeight: "800", marginBottom: "12px" }}>
              Harini K
            </h3>
            <div style={{ fontSize: "0.9375rem", fontWeight: "600", color: "#4f46e5", marginBottom: "20px" }}>
              Forward Deployed Engineer • Coimbatore, TN
            </div>
            <p style={{ fontSize: "0.9375rem", color: "var(--text-secondary)", lineHeight: "1.6", marginBottom: "28px" }}>
              Whether you need to prototype an agentic LLM pipeline, optimize API response times, or integrate complex enterprise databases, I am ready to deploy.
            </p>

            {/* Direct Email Action with Copy Button */}
            <div style={{
              background: "rgba(241, 245, 249, 0.9)",
              border: "1px solid rgba(210, 220, 240, 0.8)",
              borderRadius: "12px",
              padding: "12px 16px",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              marginBottom: "20px"
            }}>
              <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                <Mail size={18} color="#4f46e5" />
                <span style={{ fontSize: "0.875rem", fontWeight: "600", color: "var(--text-primary)" }}>
                  {personalInfo.email}
                </span>
              </div>
              <button
                onClick={copyEmail}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "4px",
                  fontSize: "0.75rem",
                  fontWeight: "700",
                  color: copied ? "#10b981" : "#4f46e5",
                  padding: "4px 10px",
                  borderRadius: "6px",
                  background: copied ? "rgba(16, 185, 129, 0.1)" : "rgba(79, 70, 229, 0.1)"
                }}
              >
                {copied ? <Check size={12} /> : <Copy size={12} />}
                <span>{copied ? "Copied!" : "Copy"}</span>
              </button>
            </div>
          </div>

          {/* Social Links & Resume */}
          <div style={{ display: "flex", flexDirection: "column", gap: "12px", marginTop: "20px" }}>
            <div style={{ display: "flex", gap: "12px" }}>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
                style={{ flex: 1, padding: "10px 16px", fontSize: "0.875rem" }}
              >
                <Linkedin size={16} color="#0077b5" />
                <span>LinkedIn</span>
                <ArrowUpRight size={14} />
              </a>

              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
                style={{ flex: 1, padding: "10px 16px", fontSize: "0.875rem" }}
              >
                <Github size={16} color="#0f172a" />
                <span>GitHub</span>
                <ArrowUpRight size={14} />
              </a>
            </div>

            <a
              href="/Harini_K_Resume.pdf"
              download="Harini_K_Resume.pdf"
              className="btn-primary"
              style={{ padding: "12px 20px", fontSize: "0.9375rem", width: "100%" }}
            >
              <Download size={16} />
              <span>Download Verified Resume</span>
            </a>
          </div>
        </div>

        {/* Right: Quick Direct Dispatch Form */}
        <div className="glass-card" style={{ padding: "36px" }}>
          <h3 style={{ fontSize: "1.35rem", fontWeight: "800", marginBottom: "8px" }}>
            Send Direct Message
          </h3>
          <p style={{ fontSize: "0.875rem", color: "var(--text-secondary)", marginBottom: "24px" }}>
            Inquire about project deployments, interview scheduling, or technical collaborations.
          </p>

          {submitted ? (
            <div style={{
              background: "rgba(16, 185, 129, 0.1)",
              border: "1px solid rgba(16, 185, 129, 0.3)",
              borderRadius: "12px",
              padding: "24px",
              textAlign: "center"
            }}>
              <Sparkles size={28} color="#10b981" style={{ margin: "0 auto 12px auto" }} />
              <h4 style={{ fontSize: "1.125rem", fontWeight: "700", color: "#065f46" }}>Message Dispatched!</h4>
              <p style={{ fontSize: "0.875rem", color: "#047857", marginTop: "4px" }}>
                Thank you for reaching out. Harini will respond promptly.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <div>
                <label style={{ fontSize: "0.8125rem", fontWeight: "600", color: "#334155", display: "block", marginBottom: "6px" }}>
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
                    borderRadius: "10px",
                    border: "1px solid #cbd5e1",
                    background: "rgba(255, 255, 255, 0.9)",
                    fontSize: "0.9375rem",
                    outline: "none"
                  }}
                />
              </div>

              <div>
                <label style={{ fontSize: "0.8125rem", fontWeight: "600", color: "#334155", display: "block", marginBottom: "6px" }}>
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
                    borderRadius: "10px",
                    border: "1px solid #cbd5e1",
                    background: "rgba(255, 255, 255, 0.9)",
                    fontSize: "0.9375rem",
                    outline: "none"
                  }}
                />
              </div>

              <div>
                <label style={{ fontSize: "0.8125rem", fontWeight: "600", color: "#334155", display: "block", marginBottom: "6px" }}>
                  Message / Deployment Scope
                </label>
                <textarea
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
                  placeholder="Tell me about the role, technical challenge, or opportunity..."
                  style={{
                    width: "100%",
                    padding: "12px 16px",
                    borderRadius: "10px",
                    border: "1px solid #cbd5e1",
                    background: "rgba(255, 255, 255, 0.9)",
                    fontSize: "0.9375rem",
                    outline: "none",
                    resize: "vertical"
                  }}
                />
              </div>

              <button type="submit" className="btn-primary" style={{ padding: "14px 20px", marginTop: "8px" }}>
                <span>Send Deployment Inquiry</span>
                <Send size={16} />
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
