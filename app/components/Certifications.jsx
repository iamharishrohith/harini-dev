"use client";

import React from "react";
import { usePortfolio } from "../context/PortfolioContext";
import { Award, ShieldCheck } from "lucide-react";

export default function Certifications() {
  const { certifications } = usePortfolio();
  const certificationsList = certifications || [];

  return (
    <section className="section-wrapper" style={{ paddingTop: "20px" }}>
      <div className="section-header">
        <div className="section-tag">
          <Award size={14} />
          <span>Industry Accreditations</span>
        </div>
        <h2 className="section-title">
          Certified Credentials
        </h2>
      </div>

      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
        gap: "20px"
      }}>
        {certificationsList.map((cert, idx) => (
          <div key={idx} className="glass-card" style={{
            padding: "22px",
            display: "flex",
            alignItems: "flex-start",
            gap: "14px"
          }}>
            <div style={{
              width: "40px",
              height: "40px",
              borderRadius: "10px",
              background: "rgba(79, 70, 229, 0.1)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#4f46e5",
              flexShrink: 0
            }}>
              <ShieldCheck size={20} />
            </div>

            <div>
              <div style={{ fontSize: "0.6875rem", fontWeight: "700", color: "#4f46e5", textTransform: "uppercase", letterSpacing: "0.05em" }}>
                {cert.tag}
              </div>
              <h4 style={{ fontSize: "0.9375rem", fontWeight: "700", color: "var(--text-primary)", marginTop: "2px", marginBottom: "4px" }}>
                {cert.name}
              </h4>
              <div style={{ fontSize: "0.8125rem", color: "var(--text-muted)" }}>
                {cert.issuer}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
