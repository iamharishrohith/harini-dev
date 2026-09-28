"use client";

import React from "react";
import Link from "next/link";

export default function HireMeBadge() {
  return (
    <div style={{
      position: "fixed",
      left: "24px",
      bottom: "24px",
      zIndex: 50,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      width: "150px",
      height: "150px"
    }}>
      <div style={{ position: "relative", width: "100%", height: "100%", display: "flex", alignItems: "center", justifyContent: "center" }}>
        {/* Rotating Circular Text SVG */}
        <svg 
          viewBox="0 0 200 200" 
          className="animate-spin-slow" 
          style={{ width: "100%", height: "100%", fill: "#1b1b1b" }}
        >
          <path
            id="textPath"
            d="M 100, 100 m -70, 0 a 70,70 0 1,1 140,0 a 70,70 0 1,1 -140,0"
            fill="none"
          />
          <text fontSize="13.5" fontWeight="700" letterSpacing="3.5">
            <textPath href="#textPath" startOffset="0%">
              • FORWARD DEPLOYED • AI ARCHITECT •
            </textPath>
          </text>
        </svg>

        {/* Center Hire Me Button */}
        <Link 
          href="/contact"
          className="hire-me-btn"
        >
          Hire Me
        </Link>
      </div>
    </div>
  );
}
