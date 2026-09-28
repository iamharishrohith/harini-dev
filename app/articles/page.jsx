"use client";

import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HireMeBadge from "../components/HireMeBadge";
import { usePortfolio } from "../context/PortfolioContext";
import { ArrowUpRight, BookOpen, Clock, Calendar } from "lucide-react";

export default function Articles() {
  const { articles } = usePortfolio();
  const articlesList = articles || [];

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
            <span>RESEARCH & PUBLICATIONS</span>
          </div>
          <h1 style={{
            fontSize: "clamp(2.5rem, 5vw, 4.5rem)",
            fontWeight: "800",
            letterSpacing: "-0.03em",
            color: "var(--text-dark)",
            marginBottom: "12px"
          }}>
            Words Can <span className="gradient-text">Change A World!</span>
          </h1>
          <p style={{ fontSize: "1.125rem", color: "var(--text-secondary)", maxWidth: "700px", margin: "0 auto" }}>
            Technical publications, architectural deep-dives, and research papers on AI systems engineering.
          </p>
        </div>

        {/* Featured Articles Grid */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))",
          gap: "32px",
          marginBottom: "48px"
        }}>
          {articlesList.filter(a => a.featured).map((art, idx) => (
            <div key={idx} className="border-card" style={{
              padding: "32px",
              background: "#ffffff",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              border: "2px solid #c7d2fe",
              boxShadow: "6px 6px 0px #4f46e5"
            }}>
              <div>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "12px" }}>
                  <span style={{
                    fontSize: "0.75rem",
                    fontWeight: "800",
                    color: "#4f46e5",
                    textTransform: "uppercase",
                    background: "linear-gradient(135deg, #eef2ff 0%, #ede9fe 100%)",
                    padding: "4px 10px",
                    borderRadius: "6px",
                    border: "1px solid #c7d2fe"
                  }}>
                    Featured Article
                  </span>
                  <div style={{ display: "flex", alignItems: "center", gap: "6px", fontSize: "0.8125rem", color: "var(--text-muted)" }}>
                    <Clock size={14} color="#4f46e5" />
                    <span>{art.readTime || "5 min read"}</span>
                  </div>
                </div>

                <h2 style={{ fontSize: "1.45rem", fontWeight: "800", color: "var(--text-dark)", marginBottom: "12px", lineHeight: "1.3" }}>
                  {art.title}
                </h2>

                <p style={{ fontSize: "0.95rem", color: "var(--text-secondary)", lineHeight: "1.65", marginBottom: "20px" }}>
                  {art.summary}
                </p>
              </div>

              <div>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "6px", marginBottom: "20px" }}>
                  {(art.tags || []).map((t, i) => (
                    <span key={i} style={{
                      fontSize: "0.75rem",
                      fontWeight: "700",
                      padding: "4px 10px",
                      borderRadius: "6px",
                      background: "#f8fafc",
                      border: "1px solid #e2e8f0",
                      color: "#475569"
                    }}>
                      {t}
                    </span>
                  ))}
                </div>

                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", paddingTop: "14px", borderTop: "1px solid #e2e8f0" }}>
                  <span style={{ fontSize: "0.8125rem", color: "var(--text-muted)", fontWeight: "600" }}>{art.date}</span>
                  <a 
                    href={art.link || "#"}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ fontSize: "0.875rem", fontWeight: "700", color: "#4f46e5", display: "flex", alignItems: "center", gap: "4px" }}
                  >
                    Read Paper <ArrowUpRight size={16} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* All Articles List */}
        <div style={{ maxWidth: "980px", margin: "0 auto", display: "flex", flexDirection: "column", gap: "20px" }}>
          <h2 style={{ fontSize: "1.75rem", fontWeight: "800", color: "var(--text-dark)", marginBottom: "12px" }}>
            All Publications & Notes
          </h2>

          {articlesList.map((art, idx) => (
            <div key={idx} className="clean-card" style={{
              border: "1.5px solid #e2e8f0",
              borderRadius: "14px",
              padding: "24px",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              flexWrap: "wrap",
              gap: "16px"
            }}>
              <div style={{ flex: 1, minWidth: "260px" }}>
                <h3 style={{ fontSize: "1.15rem", fontWeight: "700", color: "var(--text-dark)", marginBottom: "6px" }}>
                  {art.title}
                </h3>
                <div style={{ display: "flex", gap: "12px", fontSize: "0.8125rem", color: "var(--text-muted)" }}>
                  <span>{art.date}</span>
                  <span>•</span>
                  <span>{art.readTime || "5 min read"}</span>
                </div>
              </div>

              <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                <a 
                  href={art.link || "#"}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    fontSize: "0.875rem",
                    fontWeight: "700",
                    color: "#4f46e5",
                    background: "#eef2ff",
                    padding: "6px 14px",
                    borderRadius: "6px",
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "6px"
                  }}
                >
                  <span>View Publication</span>
                  <ArrowUpRight size={16} color="#4f46e5" />
                </a>
              </div>
            </div>
          ))}
        </div>

      </main>

      <HireMeBadge />
      <Footer />
    </div>
  );
}
