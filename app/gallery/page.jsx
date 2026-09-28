"use client";

import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HireMeBadge from "../components/HireMeBadge";
import { usePortfolio } from "../context/PortfolioContext";
import { Award, Cpu, Database, ShieldCheck, Zap, Terminal, Layers, X, Calendar, MapPin, Eye, ArrowUpRight } from "lucide-react";

export default function GalleryPage() {
  const { gallery } = usePortfolio();
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedItem, setSelectedItem] = useState(null);

  const galleryList = gallery || [];

  const rawCategories = ["All", ...Array.from(new Set(galleryList.map(item => item.category).filter(Boolean)))];
  const categories = rawCategories.length > 1 ? rawCategories : ["All", "Architecture & Systems", "Hackathons & Awards", "Engineering Snapshots"];

  const filteredItems = activeCategory === "All" 
    ? galleryList 
    : galleryList.filter(item => item.category === activeCategory);

  const getIcon = (iconName) => {
    switch (iconName) {
      case "Award": return <Award size={24} color="#4f46e5" />;
      case "Cpu": return <Cpu size={24} color="#4f46e5" />;
      case "Database": return <Database size={24} color="#4f46e5" />;
      case "ShieldCheck": return <ShieldCheck size={24} color="#4f46e5" />;
      case "Zap": return <Zap size={24} color="#4f46e5" />;
      case "Terminal": return <Terminal size={24} color="#4f46e5" />;
      case "Layers": return <Layers size={24} color="#4f46e5" />;
      default: return <Layers size={24} color="#4f46e5" />;
    }
  };

  return (
    <div className="page-wrapper">
      <Navbar />

      <main className="content-container" style={{ padding: "40px 32px 80px 32px" }}>
        
        {/* Page Header */}
        <div style={{ textAlign: "center", marginBottom: "56px" }}>
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
            <span>GALLERY & ARTIFACTS</span>
          </div>
          <h1 style={{
            fontSize: "clamp(2.5rem, 5vw, 4.5rem)",
            fontWeight: "800",
            letterSpacing: "-0.03em",
            color: "var(--text-dark)",
            marginBottom: "12px"
          }}>
            Systems & <span className="gradient-text">Milestones</span>
          </h1>
          <p style={{ fontSize: "1.125rem", color: "var(--text-secondary)", maxWidth: "720px", margin: "0 auto" }}>
            A curated showcase of architectural blueprints, hackathon victories, and engineering telemetry from the field.
          </p>
        </div>

        {/* Category Filters */}
        <div style={{
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
          gap: "10px",
          marginBottom: "48px"
        }}>
          {categories.map((cat) => {
            const isActive = activeCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                style={{
                  padding: "10px 22px",
                  borderRadius: "10px",
                  fontSize: "0.95rem",
                  fontWeight: "700",
                  background: isActive ? "linear-gradient(135deg, #4f46e5 0%, #7c3aed 100%)" : "#ffffff",
                  color: isActive ? "#ffffff" : "#475569",
                  border: isActive ? "2px solid #4f46e5" : "2px solid #e2e8f0",
                  boxShadow: isActive ? "0 4px 14px rgba(79, 70, 229, 0.3)" : "0 2px 6px rgba(0,0,0,0.02)",
                  transition: "all 0.2s ease"
                }}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Gallery Grid */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
          gap: "32px"
        }}>
          {filteredItems.map((item) => {
            const isAward = item.category === "Hackathons & Awards";
            const isArch = item.category === "Architecture & Systems";
            const cardAccent = isAward ? "#d97706" : isArch ? "#4f46e5" : "#059669";
            const cardBorder = isAward ? "#fde68a" : isArch ? "#c7d2fe" : "#a7f3d0";
            const badgeBg = isAward ? "linear-gradient(135deg, #fffbeb 0%, #fef3c7 100%)" : isArch ? "linear-gradient(135deg, #eef2ff 0%, #ede9fe 100%)" : "linear-gradient(135deg, #ecfdf5 0%, #d1fae5 100%)";
            return (
              <div 
                key={item.id} 
                className="border-card"
                style={{
                  padding: "28px",
                  background: "#ffffff",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  cursor: "pointer",
                  border: `2px solid ${cardBorder}`,
                  boxShadow: `6px 6px 0px ${cardAccent}`
                }}
                onClick={() => setSelectedItem(item)}
              >
                <div>
                  {/* Top Card Bar */}
                  <div style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginBottom: "18px"
                  }}>
                    <div style={{
                      width: "48px",
                      height: "48px",
                      borderRadius: "12px",
                      background: badgeBg,
                      border: `1.5px solid ${cardBorder}`,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: cardAccent
                    }}>
                      {getIcon(item.icon)}
                    </div>

                    <span style={{
                      fontSize: "0.75rem",
                      fontWeight: "800",
                      textTransform: "uppercase",
                      padding: "4px 10px",
                      borderRadius: "6px",
                      background: badgeBg,
                      border: `1px solid ${cardBorder}`,
                      color: cardAccent
                    }}>
                      {item.badge}
                    </span>
                  </div>

                {/* Title */}
                <h3 style={{
                  fontSize: "1.35rem",
                  fontWeight: "800",
                  color: "var(--text-dark)",
                  marginBottom: "10px",
                  lineHeight: "1.3"
                }}>
                  {item.title}
                </h3>

                {/* Location & Date */}
                <div style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "14px",
                  fontSize: "0.8125rem",
                  color: "var(--text-muted)",
                  marginBottom: "16px",
                  fontWeight: "600"
                }}>
                  <span style={{ display: "flex", alignItems: "center", gap: "4px" }}>
                    <MapPin size={14} />
                    {item.location}
                  </span>
                  <span>•</span>
                  <span style={{ display: "flex", alignItems: "center", gap: "4px" }}>
                    <Calendar size={14} />
                    {item.date}
                  </span>
                </div>

                {/* Description snippet */}
                <p style={{
                  fontSize: "0.9rem",
                  color: "var(--text-secondary)",
                  lineHeight: "1.6",
                  marginBottom: "20px"
                }}>
                  {item.description}
                </p>
              </div>

              <div>
                {/* Tags */}
                <div style={{ display: "flex", flexWrap: "wrap", gap: "6px", marginBottom: "16px" }}>
                  {(item.tags || []).map((t, i) => (
                    <span key={i} style={{
                      fontSize: "0.75rem",
                      fontWeight: "700",
                      padding: "3px 8px",
                      borderRadius: "4px",
                      background: "#f1f5f9",
                      color: "#334155",
                      border: "1px solid #e2e8f0"
                    }}>
                      {t}
                    </span>
                  ))}
                </div>

                {/* Action trigger */}
                <div style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  paddingTop: "12px",
                  borderTop: "1px solid #e2e8f0"
                }}>
                  <span style={{ fontSize: "0.8125rem", fontWeight: "700", color: "#4f46e5", display: "flex", alignItems: "center", gap: "4px" }}>
                    <Eye size={15} />
                    <span>View Artifact Details</span>
                  </span>
                  <ArrowUpRight size={16} color="#1b1b1b" />
                </div>
              </div>
            </div>
          );
        })}
      </div>

        {/* Detailed Modal Lightbox */}
        {selectedItem && (
          <div style={{
            position: "fixed",
            inset: 0,
            background: "rgba(15, 23, 42, 0.6)",
            backdropFilter: "blur(12px)",
            WebkitBackdropFilter: "blur(12px)",
            zIndex: 100,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "20px"
          }}>
            <div className="border-card" style={{
              width: "100%",
              maxWidth: "680px",
              background: "#ffffff",
              padding: "36px",
              position: "relative"
            }}>
              {/* Close button */}
              <button
                onClick={() => setSelectedItem(null)}
                style={{
                  position: "absolute",
                  top: "24px",
                  right: "24px",
                  padding: "6px",
                  borderRadius: "8px",
                  background: "#f1f5f9",
                  color: "#1b1b1b"
                }}
              >
                <X size={20} />
              </button>

              <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "12px" }}>
                <span style={{
                  fontSize: "0.75rem",
                  fontWeight: "800",
                  textTransform: "uppercase",
                  padding: "4px 10px",
                  borderRadius: "6px",
                  background: "#f1f5f9",
                  color: "#4f46e5"
                }}>
                  {selectedItem.category}
                </span>
                <span style={{ fontSize: "0.8125rem", color: "var(--text-muted)", fontWeight: "600" }}>
                  {selectedItem.date}
                </span>
              </div>

              <h2 style={{ fontSize: "1.75rem", fontWeight: "800", color: "var(--text-dark)", marginBottom: "12px", lineHeight: "1.3" }}>
                {selectedItem.title}
              </h2>

              <div style={{ display: "flex", alignItems: "center", gap: "6px", fontSize: "0.875rem", color: "var(--text-secondary)", marginBottom: "20px", fontWeight: "600" }}>
                <MapPin size={16} color="#4f46e5" />
                <span>{selectedItem.location}</span>
              </div>

              <div style={{
                background: "#f8fafc",
                border: "2px solid #1b1b1b",
                borderRadius: "12px",
                padding: "20px",
                marginBottom: "24px"
              }}>
                <div style={{ fontSize: "0.75rem", fontWeight: "800", textTransform: "uppercase", color: "var(--text-muted)", marginBottom: "6px" }}>
                  FIELD ARTIFACT SUMMARY
                </div>
                <p style={{ fontSize: "0.95rem", color: "var(--text-secondary)", lineHeight: "1.7" }}>
                  {selectedItem.description}
                </p>
              </div>

              <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", marginBottom: "24px" }}>
                {(selectedItem.tags || []).map((t, i) => (
                  <span key={i} style={{
                    fontSize: "0.8125rem",
                    fontWeight: "700",
                    padding: "4px 12px",
                    borderRadius: "6px",
                    background: "#f1f5f9",
                    border: "1px solid #cbd5e1"
                  }}>
                    {t}
                  </span>
                ))}
              </div>

              <button
                onClick={() => setSelectedItem(null)}
                className="btn-dark"
                style={{ width: "100%", padding: "12px" }}
              >
                Close Preview
              </button>
            </div>
          </div>
        )}

      </main>

      <HireMeBadge />
      <Footer />
    </div>
  );
}
