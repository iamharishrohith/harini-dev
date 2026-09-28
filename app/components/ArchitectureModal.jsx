"use client";

import React from "react";
import { X, Cpu, Server, Database, ArrowRight, Zap, CheckCircle2 } from "lucide-react";

export default function ArchitectureModal({ project, onClose }) {
  if (!project) return null;

  return (
    <div style={{
      position: "fixed",
      inset: 0,
      background: "rgba(15, 23, 42, 0.5)",
      backdropFilter: "blur(16px)",
      WebkitBackdropFilter: "blur(16px)",
      zIndex: 200,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      padding: "20px"
    }}>
      <div style={{
        width: "100%",
        maxWidth: "840px",
        background: "#ffffff",
        borderRadius: "24px",
        border: "1px solid rgba(210, 220, 240, 0.8)",
        boxShadow: "0 25px 60px -12px rgba(15, 23, 42, 0.25)",
        overflow: "hidden",
        maxHeight: "90vh",
        display: "flex",
        flexDirection: "column"
      }}>
        {/* Header */}
        <div style={{
          padding: "24px 28px",
          borderBottom: "1px solid rgba(226, 232, 240, 0.8)",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          background: "linear-gradient(135deg, rgba(248, 250, 252, 0.9), rgba(241, 245, 249, 0.9))"
        }}>
          <div>
            <div style={{ fontSize: "0.8125rem", color: "#4f46e5", fontWeight: "700", textTransform: "uppercase", letterSpacing: "0.05em" }}>
              FDE System Architecture
            </div>
            <h3 style={{ fontSize: "1.5rem", fontWeight: "800", color: "var(--text-primary)", marginTop: "4px" }}>
              {project.title} Pipeline
            </h3>
          </div>
          <button onClick={onClose} style={{ color: "#64748b", padding: "8px" }}>
            <X size={20} />
          </button>
        </div>

        {/* Body */}
        <div style={{ padding: "28px", overflowY: "auto" }}>
          {/* Visual Architecture Flow */}
          <div style={{
            background: "linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%)",
            border: "1px solid #e2e8f0",
            borderRadius: "16px",
            padding: "24px",
            marginBottom: "28px"
          }}>
            <div style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))",
              gap: "14px",
              alignItems: "center"
            }}>
              {/* Step 1 */}
              <div style={{ background: "linear-gradient(135deg, #ecfeff 0%, #cffafe 100%)", padding: "16px", borderRadius: "12px", border: "1.5px solid #a5f3fc", textAlign: "center", boxShadow: "0 2px 8px rgba(6, 182, 212, 0.15)" }}>
                <div style={{ color: "#0891b2", marginBottom: "8px" }}><Server size={22} style={{ margin: "0 auto" }} /></div>
                <div style={{ fontSize: "0.8125rem", fontWeight: "800", color: "#0e7490" }}>Client Ingestion</div>
                <div style={{ fontSize: "0.75rem", color: "#155e75", marginTop: "4px", fontWeight: "600" }}>{project.architecture.client}</div>
              </div>

              {/* Step 2 */}
              <div style={{ background: "linear-gradient(135deg, #eef2ff 0%, #ede9fe 100%)", padding: "16px", borderRadius: "12px", border: "1.5px solid #c7d2fe", textAlign: "center", boxShadow: "0 2px 8px rgba(79, 70, 229, 0.15)" }}>
                <div style={{ color: "#4f46e5", marginBottom: "8px" }}><Zap size={22} style={{ margin: "0 auto" }} /></div>
                <div style={{ fontSize: "0.8125rem", fontWeight: "800", color: "#4338ca" }}>Async Gateway</div>
                <div style={{ fontSize: "0.75rem", color: "#3730a3", marginTop: "4px", fontWeight: "600" }}>{project.architecture.gateway}</div>
              </div>

              {/* Step 3 */}
              <div style={{ background: "linear-gradient(135deg, #fdf4ff 0%, #fae8ff 100%)", padding: "16px", borderRadius: "12px", border: "1.5px solid #f0abfc", textAlign: "center", boxShadow: "0 2px 8px rgba(192, 38, 211, 0.15)" }}>
                <div style={{ color: "#c026d3", marginBottom: "8px" }}><Cpu size={22} style={{ margin: "0 auto" }} /></div>
                <div style={{ fontSize: "0.8125rem", fontWeight: "800", color: "#a21caf" }}>LLM Orchestrator</div>
                <div style={{ fontSize: "0.75rem", color: "#86198f", marginTop: "4px", fontWeight: "600" }}>{project.architecture.orchestrator}</div>
              </div>

              {/* Step 4 */}
              <div style={{ background: "linear-gradient(135deg, #ecfdf5 0%, #d1fae5 100%)", padding: "16px", borderRadius: "12px", border: "1.5px solid #a7f3d0", textAlign: "center", boxShadow: "0 2px 8px rgba(16, 185, 129, 0.15)" }}>
                <div style={{ color: "#059669", marginBottom: "8px" }}><Database size={22} style={{ margin: "0 auto" }} /></div>
                <div style={{ fontSize: "0.8125rem", fontWeight: "800", color: "#065f46" }}>State & Storage</div>
                <div style={{ fontSize: "0.75rem", color: "#047857", marginTop: "4px", fontWeight: "600" }}>{project.architecture.storage}</div>
              </div>
            </div>

            <div style={{
              marginTop: "20px",
              padding: "12px 18px",
              background: "linear-gradient(135deg, #eef2ff 0%, #ede9fe 100%)",
              border: "1px solid #c7d2fe",
              borderRadius: "10px",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              fontSize: "0.8125rem",
              color: "#334155"
            }}>
              <span><strong style={{ color: "#4338ca" }}>Benchmark Latency Profile:</strong> {project.architecture.latency}</span>
              <span style={{ color: "#059669", fontWeight: "800", background: "#d1fae5", padding: "2px 8px", borderRadius: "4px" }}>⚡ Non-Blocking Async Queue</span>
            </div>
          </div>

          {/* Key Engineering Details */}
          <h4 style={{ fontSize: "1.125rem", fontWeight: "700", marginBottom: "14px" }}>
            Production Highlights & Engineering Decisions
          </h4>
          <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
            {project.highlights.map((h, i) => (
              <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: "10px", fontSize: "0.9375rem", color: "var(--text-secondary)" }}>
                <CheckCircle2 size={18} color="#4f46e5" style={{ flexShrink: 0, marginTop: "2px" }} />
                <span>{h}</span>
              </div>
            ))}
          </div>

          {/* Tech Stack Pills */}
          <div style={{ marginTop: "24px" }}>
            <div style={{ fontSize: "0.8125rem", fontWeight: "700", color: "var(--text-muted)", marginBottom: "10px" }}>TECHNOLOGY STACK</div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
              {project.stack.map((s, idx) => (
                <span key={idx} style={{
                  fontSize: "0.8125rem",
                  fontWeight: "600",
                  padding: "4px 12px",
                  borderRadius: "9999px",
                  background: "rgba(15, 23, 42, 0.05)",
                  color: "#1e293b",
                  border: "1px solid rgba(15, 23, 42, 0.1)"
                }}>
                  {s}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
