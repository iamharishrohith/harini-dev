"use client";

import React, { useState } from "react";
import { processStages } from "../data/portfolioData";
import { ChevronRight, Cpu, Activity, CheckCircle2, ArrowRight, Layers, ShieldCheck, Zap, Database, Terminal, Server } from "lucide-react";

export default function ProcessFlow() {
  const [activeStepIndex, setActiveStepIndex] = useState(0);
  const currentStage = processStages[activeStepIndex];

  const stageThemes = [
    {
      color: "#0284c7",
      darkColor: "#0369a1",
      lightBg: "#f0f9ff",
      borderColor: "#7dd3fc",
      gradient: "linear-gradient(135deg, #0284c7 0%, #06b6d4 100%)",
      glow: "rgba(2, 132, 199, 0.25)"
    },
    {
      color: "#7c3aed",
      darkColor: "#6d28d9",
      lightBg: "#f5f3ff",
      borderColor: "#c4b5fd",
      gradient: "linear-gradient(135deg, #7c3aed 0%, #a855f7 100%)",
      glow: "rgba(124, 58, 237, 0.25)"
    },
    {
      color: "#c026d3",
      darkColor: "#a21caf",
      lightBg: "#fdf4ff",
      borderColor: "#f0abfc",
      gradient: "linear-gradient(135deg, #c026d3 0%, #ec4899 100%)",
      glow: "rgba(192, 38, 211, 0.25)"
    },
    {
      color: "#d97706",
      darkColor: "#b45309",
      lightBg: "#fffbeb",
      borderColor: "#fcd34d",
      gradient: "linear-gradient(135deg, #d97706 0%, #f59e0b 100%)",
      glow: "rgba(217, 119, 6, 0.25)"
    },
    {
      color: "#059669",
      darkColor: "#047857",
      lightBg: "#ecfdf5",
      borderColor: "#6ee7b7",
      gradient: "linear-gradient(135deg, #059669 0%, #10b981 100%)",
      glow: "rgba(5, 150, 105, 0.25)"
    },
    {
      color: "#e11d48",
      darkColor: "#be123c",
      lightBg: "#fff1f2",
      borderColor: "#fda4af",
      gradient: "linear-gradient(135deg, #e11d48 0%, #f43f5e 100%)",
      glow: "rgba(225, 29, 72, 0.25)"
    }
  ];

  const currentTheme = stageThemes[activeStepIndex] || stageThemes[0];

  return (
    <section style={{ margin: "80px 0" }}>
      {/* Header */}
      <div style={{ textAlign: "center", marginBottom: "40px" }}>
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
          <span>FDE THINKING FLOW</span>
        </div>
        <h2 style={{
          fontSize: "clamp(2.25rem, 4vw, 3.5rem)",
          fontWeight: "800",
          letterSpacing: "-0.03em",
          color: "var(--text-dark)",
          marginBottom: "12px"
        }}>
          How I Work & <span className="gradient-text">Architect Systems</span>
        </h2>
        <p style={{
          fontSize: "1.05rem",
          color: "var(--text-secondary)",
          maxWidth: "680px",
          margin: "0 auto",
          lineHeight: "1.6"
        }}>
          A structured 6-phase engineering lifecycle designed to eliminate bottlenecks, guarantee sub-second latencies, and deploy production-resilient AI.
        </p>
      </div>

      {/* Stepper Navigation Bar (01 to 06) */}
      <div style={{
        maxWidth: "960px",
        margin: "0 auto 40px auto",
        background: "#ffffff",
        border: "2px solid #e2e8f0",
        borderRadius: "9999px",
        padding: "8px 12px",
        boxShadow: "0 6px 20px rgba(0, 0, 0, 0.05)",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        position: "relative",
        gap: "6px"
      }} className="stepper-bar">
        {processStages.map((stage, idx) => {
          const isActive = activeStepIndex === idx;
          const theme = stageThemes[idx];
          return (
            <button
              key={stage.id}
              onClick={() => setActiveStepIndex(idx)}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "8px",
                padding: "8px 18px",
                borderRadius: "9999px",
                background: isActive ? theme.gradient : "transparent",
                color: isActive ? "#ffffff" : "#64748b",
                fontWeight: "800",
                fontSize: "0.95rem",
                boxShadow: isActive ? `0 4px 14px ${theme.glow}` : "none",
                transition: "all 0.25s cubic-bezier(0.16, 1, 0.3, 1)"
              }}
            >
              <span>{stage.id}</span>
              {isActive && (
                <span style={{ fontSize: "0.8125rem", fontWeight: "700" }} className="stepper-label">
                  {stage.title.split(" ")[0]}
                </span>
              )}
            </button>
          );
        })}
      </div>

      {/* 2-Column Process Stage Card Layout */}
      <div style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: "32px",
        maxWidth: "1140px",
        margin: "0 auto",
        alignItems: "stretch"
      }} className="process-grid">
        
        {/* Left Column: Stage Detail Card */}
        <div className="border-card" style={{
          padding: "36px",
          background: "#ffffff",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          border: `2px solid ${currentTheme.borderColor}`,
          boxShadow: `6px 6px 0px ${currentTheme.color}`
        }}>
          <div>
            {/* Step ID & Phase Tag */}
            <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "16px" }}>
              <div style={{
                width: "42px",
                height: "42px",
                borderRadius: "10px",
                background: currentTheme.gradient,
                color: "#ffffff",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontWeight: "800",
                fontSize: "1rem",
                boxShadow: `0 4px 12px ${currentTheme.glow}`
              }}>
                {currentStage.id}
              </div>
              <span style={{
                fontSize: "0.8125rem",
                fontWeight: "800",
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                color: currentTheme.color
              }}>
                {currentStage.phase}
              </span>
            </div>

            {/* Stage Title */}
            <h3 style={{
              fontSize: "1.85rem",
              fontWeight: "800",
              color: "var(--text-dark)",
              marginBottom: "12px"
            }}>
              {currentStage.title}
            </h3>

            {/* Subtitle */}
            <p style={{
              fontSize: "0.95rem",
              color: "var(--text-secondary)",
              lineHeight: "1.65",
              marginBottom: "24px"
            }}>
              {currentStage.subtitle}
            </p>

            {/* Bullet Points */}
            <div style={{ display: "flex", flexDirection: "column", gap: "12px", marginBottom: "28px" }}>
              {currentStage.points.map((pt, i) => (
                <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: "10px", fontSize: "0.925rem", color: "#334155" }}>
                  <ChevronRight size={18} color={currentTheme.color} style={{ flexShrink: 0, marginTop: "2px" }} />
                  <span>{pt}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Target Outcome Box */}
          <div style={{
            background: currentTheme.lightBg,
            border: `1.5px solid ${currentTheme.borderColor}`,
            borderRadius: "12px",
            padding: "16px 20px"
          }}>
            <div style={{ fontSize: "0.6875rem", fontWeight: "800", textTransform: "uppercase", letterSpacing: "0.08em", color: currentTheme.darkColor, marginBottom: "4px" }}>
              TARGET OUTCOME
            </div>
            <div style={{ fontSize: "1rem", fontWeight: "800", color: "#0f172a" }}>
              {currentStage.targetOutcome}
            </div>
          </div>
        </div>

        {/* Right Column: Interactive Visual Simulator Card */}
        <div className="border-card" style={{
          padding: "36px",
          background: "#ffffff",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          border: `2px solid ${currentTheme.borderColor}`,
          boxShadow: `6px 6px 0px ${currentTheme.color}`
        }}>
          <div>
            {/* Header / Telemetry Tag */}
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "20px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                <span style={{
                  width: "8px",
                  height: "8px",
                  borderRadius: "50%",
                  background: currentTheme.color,
                  display: "inline-block",
                  boxShadow: `0 0 8px ${currentTheme.color}`
                }} />
                <span style={{ fontSize: "0.75rem", fontWeight: "800", letterSpacing: "0.08em", color: currentTheme.color, textTransform: "uppercase" }}>
                  {currentStage.simulation.status}
                </span>
              </div>
              <span style={{ fontSize: "0.75rem", fontWeight: "700", color: "var(--text-muted)" }}>
                {currentStage.simulation.tag}
              </span>
            </div>

            {/* Visual Node Diagram */}
            <div style={{
              background: currentTheme.lightBg,
              border: `1.5px solid ${currentTheme.borderColor}`,
              borderRadius: "14px",
              padding: "24px",
              marginBottom: "24px"
            }}>
              <div style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                gap: "8px",
                flexWrap: "wrap"
              }}>
                {currentStage.simulation.visualNodes.map((node, i) => (
                  <React.Fragment key={i}>
                    <div style={{
                      background: "#ffffff",
                      border: `1.5px solid ${currentTheme.borderColor}`,
                      borderRadius: "8px",
                      padding: "10px 14px",
                      fontSize: "0.8125rem",
                      fontWeight: "700",
                      color: "#0f172a",
                      textAlign: "center",
                      boxShadow: `0 2px 8px ${currentTheme.glow}`
                    }}>
                      {node}
                    </div>
                    {i < currentStage.simulation.visualNodes.length - 1 && (
                      <ArrowRight size={16} color={currentTheme.color} />
                    )}
                  </React.Fragment>
                ))}
              </div>

              {/* Metric Highlight */}
              <div style={{
                marginTop: "20px",
                paddingTop: "16px",
                borderTop: `1px dashed ${currentTheme.borderColor}`,
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center"
              }}>
                <span style={{ fontSize: "0.8125rem", color: "#475569", fontWeight: "600" }}>
                  {currentStage.simulation.metricLabel}
                </span>
                <span style={{ fontSize: "1.25rem", fontWeight: "800", color: currentTheme.color }}>
                  {currentStage.simulation.metricValue}
                </span>
              </div>
            </div>

            {/* Stage Description Narrative */}
            <h4 style={{ fontSize: "1.15rem", fontWeight: "800", color: "var(--text-dark)", marginBottom: "8px" }}>
              {currentStage.title} Execution
            </h4>
            <p style={{ fontSize: "0.9rem", color: "var(--text-secondary)", lineHeight: "1.6" }}>
              {currentStage.simulation.details}
            </p>
          </div>

          {/* Stepper Next/Prev Controls */}
          <div style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginTop: "24px",
            paddingTop: "16px",
            borderTop: "1px solid #e2e8f0"
          }}>
            <button
              onClick={() => setActiveStepIndex((prev) => (prev > 0 ? prev - 1 : processStages.length - 1))}
              style={{
                fontSize: "0.8125rem",
                fontWeight: "700",
                color: "#475569",
                padding: "8px 14px",
                borderRadius: "8px",
                background: "#f1f5f9",
                transition: "all 0.2s ease"
              }}
            >
              Previous Phase
            </button>

            <span style={{ fontSize: "0.8125rem", fontWeight: "800", color: currentTheme.color }}>
              Step {activeStepIndex + 1} of {processStages.length}
            </span>

            <button
              onClick={() => setActiveStepIndex((prev) => (prev < processStages.length - 1 ? prev + 1 : 0))}
              style={{
                fontSize: "0.8125rem",
                fontWeight: "700",
                color: "#ffffff",
                padding: "8px 16px",
                borderRadius: "8px",
                background: currentTheme.gradient,
                boxShadow: `0 4px 12px ${currentTheme.glow}`,
                transition: "all 0.2s ease"
              }}
            >
              Next Phase
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
