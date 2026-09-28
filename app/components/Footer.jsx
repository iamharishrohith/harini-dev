"use client";

import React from "react";
import Link from "next/link";
import { usePortfolio } from "../context/PortfolioContext";
import { Sparkles, Heart } from "lucide-react";

export default function Footer() {
  const { personalInfo } = usePortfolio();
  return (
    <footer style={{
      width: "100%",
      borderTop: "1px solid #e2e8f0",
      position: "relative",
      padding: "32px 0",
      marginTop: "80px",
      background: "linear-gradient(180deg, rgba(255, 255, 255, 0.8) 0%, #f8fafc 100%)"
    }}>
      {/* Top Gradient Accent Stripe */}
      <div style={{
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        height: "3px",
        background: "linear-gradient(90deg, #4f46e5 0%, #7c3aed 35%, #06b6d4 70%, #10b981 100%)"
      }} />

      <div className="content-container" style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        flexWrap: "wrap",
        gap: "16px",
        fontSize: "0.95rem",
        fontWeight: "500",
        color: "#475569"
      }}>
        <div>
          {new Date().getFullYear()} © <strong style={{ color: "#0f172a" }}>Harini K</strong> • Forward Deployed Systems
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
          <span>Crafted with</span>
          <Sparkles size={16} color="#ec4899" />
          <span>by</span>
          <strong style={{ fontWeight: "700", color: "#4f46e5" }}>{personalInfo.name}</strong>
        </div>

        <div>
          <Link 
            href="/contact" 
            style={{
              color: "#4f46e5",
              fontWeight: "700",
              textDecoration: "underline",
              textUnderlineOffset: "4px"
            }}
          >
            Say Hello →
          </Link>
        </div>
      </div>
    </footer>
  );
}
