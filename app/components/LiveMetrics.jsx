"use client";

import React from "react";
import { usePortfolio } from "../context/PortfolioContext";
import { Award, Zap, BookOpen, Layers } from "lucide-react";

export default function LiveMetrics() {
  const { personalInfo } = usePortfolio();
  const metrics = personalInfo?.metrics || [];
  const icons = [BookOpen, Award, Zap, Layers];

  return (
    <div style={{
      width: "100%",
      margin: "24px 0 60px 0"
    }}>
      <div style={{
        background: "rgba(255, 255, 255, 0.85)",
        backdropFilter: "blur(20px)",
        border: "1px solid rgba(210, 220, 240, 0.8)",
        borderRadius: "var(--radius-xl)",
        padding: "24px",
        boxShadow: "var(--shadow-md)",
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
        gap: "20px"
      }}>
        {metrics.map((m, idx) => {
          const IconComponent = icons[idx] || Zap;
          return (
            <div key={idx} style={{
              display: "flex",
              flexDirection: "column",
              gap: "6px",
              padding: "8px 12px"
            }}>
              <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                <IconComponent size={16} color="#4f46e5" />
                <span style={{ fontSize: "0.8125rem", color: "var(--text-muted)", fontWeight: "600" }}>{m.label}</span>
              </div>
              <div style={{ fontSize: "1.875rem", fontWeight: "800", color: "var(--text-primary)", letterSpacing: "-0.02em" }}>
                {m.value}
              </div>
              <div style={{ fontSize: "0.8125rem", color: "var(--text-secondary)" }}>
                {m.detail}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
