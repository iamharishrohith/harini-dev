"use client";

import React, { useState, useEffect, useMemo, useRef } from "react";
import Link from "next/link";
import { usePortfolio } from "../context/PortfolioContext";
import { 
  ShieldCheck, Lock, Unlock, Activity, Server, Database, 
  Layers, Users, Mail, Eye, Edit3, Trash2, Plus, Check, 
  ArrowLeft, RefreshCw, Terminal, Cpu, Clock, KeyRound, LogOut,
  Download, Upload, RotateCcw, AlertTriangle, X, Search, Sparkles,
  BookOpen, GraduationCap, Award, ExternalLink, Sliders, Briefcase, FileText
} from "lucide-react";

export default function AdminPortal() {
  const {
    personalInfo,
    projects,
    gallery,
    skills,
    experience,
    education,
    certifications,
    articles,
    inquiries,
    updateProfile,
    createProject,
    updateProject,
    deleteProject,
    createGalleryItem,
    updateGalleryItem,
    deleteGalleryItem,
    createSkill,
    updateSkill,
    deleteSkill,
    createSkillCategory,
    deleteSkillCategory,
    createExperience,
    updateExperience,
    deleteExperience,
    createEducation,
    updateEducation,
    deleteEducation,
    createCertification,
    updateCertification,
    deleteCertification,
    createArticle,
    updateArticle,
    deleteArticle,
    addInquiry,
    toggleInquiryStatus,
    deleteInquiry,
    resetToDefaults,
    exportData,
    importData
  } = usePortfolio();

  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [passkey, setPasskey] = useState("");
  const [authError, setAuthError] = useState("");
  const [activeTab, setActiveTab] = useState("overview");
  const [notification, setNotification] = useState(null);

  // Modal States
  const [modalType, setModalType] = useState(null); // 'project', 'gallery', 'skill', 'experience', 'education', 'cert', 'article', 'newCategory'
  const [editingItem, setEditingItem] = useState(null);
  const [deleteConfirm, setDeleteConfirm] = useState(null);

  // Search & Filter state
  const [searchTerm, setSearchTerm] = useState("");
  const [skillCategoryFilter, setSkillCategoryFilter] = useState("");
  const [galleryCategoryFilter, setGalleryCategoryFilter] = useState("All");

  // File import ref
  const fileInputRef = useRef(null);

  // Show Toast Notification
  const showToast = (message, type = "success") => {
    setNotification({ message, type });
    setTimeout(() => setNotification(null), 3500);
  };

  // Check Session
  useEffect(() => {
    if (typeof window !== "undefined" && sessionStorage.getItem("fde_admin_auth") === "true") {
      setIsAuthenticated(true);
    }
  }, []);

  const handleLogin = (e) => {
    e.preventDefault();
    if (passkey.trim() === "hk@fde1411") {
      setIsAuthenticated(true);
      setAuthError("");
      sessionStorage.setItem("fde_admin_auth", "true");
      showToast("Access Granted: Welcome back, Harini.");
    } else {
      setAuthError("Invalid FDE Passkey. Access Denied.");
    }
  };

  const handleLogout = () => {
    sessionStorage.removeItem("fde_admin_auth");
    setIsAuthenticated(false);
    setPasskey("");
  };

  // Export JSON
  const handleExport = () => {
    const jsonStr = exportData();
    const blob = new Blob([jsonStr], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `harini_portfolio_backup_${new Date().toISOString().split("T")[0]}.json`;
    a.click();
    URL.revokeObjectURL(url);
    showToast("Portfolio backup JSON exported successfully.");
  };

  // Import JSON
  const handleImportFile = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (event) => {
      const content = event.target.result;
      const success = importData(content);
      if (success) {
        showToast("Portfolio database successfully restored from JSON!");
      } else {
        showToast("Failed to restore: Invalid JSON structure.", "error");
      }
    };
    reader.readAsText(file);
    e.target.value = "";
  };

  // Reset to Defaults
  const handleReset = () => {
    if (confirm("Are you sure you want to restore all portfolio data to factory defaults? Any custom edits will be reset.")) {
      resetToDefaults();
      showToast("All portfolio data restored to factory defaults.");
    }
  };

  // 1. Locked State Screen
  if (!isAuthenticated) {
    return (
      <div className="page-wrapper" style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", padding: "24px" }}>
        <div className="border-card" style={{
          width: "100%",
          maxWidth: "440px",
          background: "#ffffff",
          padding: "40px 32px",
          textAlign: "center",
          boxShadow: "8px 8px 0px #4f46e5",
          border: "2px solid #6366f1"
        }}>
          <div style={{
            width: "64px",
            height: "64px",
            borderRadius: "50%",
            background: "linear-gradient(135deg, #eef2ff 0%, #ede9fe 100%)",
            border: "2px solid #c7d2fe",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            margin: "0 auto 20px auto"
          }}>
            <KeyRound size={28} color="#4f46e5" />
          </div>

          <div style={{ fontSize: "0.75rem", fontWeight: "800", letterSpacing: "0.1em", textTransform: "uppercase", color: "#4f46e5", marginBottom: "6px" }}>
            RESTRICTED ACCESS
          </div>
          <h1 style={{ fontSize: "1.75rem", fontWeight: "800", color: "var(--text-dark)", marginBottom: "8px" }}>
            FDE Command Core
          </h1>
          <p style={{ fontSize: "0.875rem", color: "var(--text-secondary)", marginBottom: "28px" }}>
            Enter your administrative passkey to manage system telemetry, projects, gallery, skills, and client inquiries.
          </p>

          <form onSubmit={handleLogin} style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <div style={{ textAlign: "left" }}>
              <label style={{ fontSize: "0.8125rem", fontWeight: "700", color: "#1b1b1b", display: "block", marginBottom: "6px" }}>
                Admin Passkey (Hint: hk@fde1411)
              </label>
              <input
                type="password"
                required
                value={passkey}
                onChange={(e) => setPasskey(e.target.value)}
                placeholder="••••••••"
                style={{
                  width: "100%",
                  padding: "12px 16px",
                  borderRadius: "8px",
                  border: "2px solid #1b1b1b",
                  background: "#ffffff",
                  fontSize: "1rem",
                  fontFamily: "var(--font-mono)",
                  outline: "none"
                }}
              />
            </div>

            {authError && (
              <div style={{ fontSize: "0.8125rem", color: "#ef4444", fontWeight: "700" }}>
                {authError}
              </div>
            )}

            <button type="submit" className="btn-dark" style={{ width: "100%", padding: "12px" }}>
              <Lock size={16} />
              <span>Authenticate & Enter</span>
            </button>
          </form>

          <div style={{ marginTop: "24px", paddingTop: "16px", borderTop: "1px solid #e2e8f0" }}>
            <Link href="/" style={{ fontSize: "0.8125rem", fontWeight: "700", color: "#64748b", display: "inline-flex", alignItems: "center", gap: "4px" }}>
              <ArrowLeft size={14} />
              <span>Return to Public Portfolio</span>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  // 2. Authenticated Management Dashboard
  return (
    <div className="page-wrapper" style={{ minHeight: "100vh", background: "#f8fafc" }}>
      
      {/* Toast Notification */}
      {notification && (
        <div style={{
          position: "fixed",
          bottom: "24px",
          right: "24px",
          zIndex: 9999,
          background: notification.type === "error" ? "#ef4444" : "#10b981",
          color: "#ffffff",
          padding: "12px 24px",
          borderRadius: "10px",
          fontWeight: "700",
          fontSize: "0.9rem",
          boxShadow: "0 8px 24px rgba(0,0,0,0.15)",
          display: "flex",
          alignItems: "center",
          gap: "8px",
          animation: "slideUp 0.3s ease"
        }}>
          {notification.type === "error" ? <AlertTriangle size={18} /> : <Check size={18} />}
          <span>{notification.message}</span>
        </div>
      )}

      {/* Admin Topbar */}
      <header style={{
        background: "#ffffff",
        borderBottom: "2px solid #1b1b1b",
        padding: "16px 32px",
        position: "sticky",
        top: 0,
        zIndex: 50
      }}>
        <div style={{
          maxWidth: "1380px",
          margin: "0 auto",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: "16px"
        }}>
          <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
            <div style={{
              width: "40px",
              height: "40px",
              borderRadius: "10px",
              background: "linear-gradient(135deg, #4f46e5 0%, #7c3aed 100%)",
              color: "#ffffff",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontWeight: "800",
              boxShadow: "0 2px 8px rgba(79, 70, 229, 0.3)"
            }}>
              HK
            </div>
            <div>
              <div style={{ fontSize: "1.05rem", fontWeight: "800", color: "#1b1b1b" }}>
                Portfolio CRUD Command Suite
              </div>
              <div style={{ fontSize: "0.75rem", color: "#10b981", fontWeight: "700", display: "flex", alignItems: "center", gap: "4px" }}>
                <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#10b981" }} />
                <span>Active Session • Harini K (Forward Deployed Engineer)</span>
              </div>
            </div>
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: "10px", flexWrap: "wrap" }}>
            <input 
              type="file" 
              ref={fileInputRef} 
              style={{ display: "none" }} 
              accept=".json" 
              onChange={handleImportFile} 
            />

            <button
              onClick={() => fileInputRef.current?.click()}
              title="Import JSON Backup"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "6px",
                fontSize: "0.8125rem",
                fontWeight: "700",
                color: "#0f172a",
                padding: "8px 14px",
                borderRadius: "6px",
                background: "#f1f5f9",
                border: "1px solid #cbd5e1"
              }}
            >
              <Upload size={14} />
              <span>Import JSON</span>
            </button>

            <button
              onClick={handleExport}
              title="Export Full Portfolio as JSON"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "6px",
                fontSize: "0.8125rem",
                fontWeight: "700",
                color: "#4f46e5",
                padding: "8px 14px",
                borderRadius: "6px",
                background: "#eef2ff",
                border: "1px solid #c7d2fe"
              }}
            >
              <Download size={14} />
              <span>Export Backup</span>
            </button>

            <button
              onClick={handleReset}
              title="Reset Portfolio to Default State"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "6px",
                fontSize: "0.8125rem",
                fontWeight: "700",
                color: "#d97706",
                padding: "8px 14px",
                borderRadius: "6px",
                background: "#fffbeb",
                border: "1px solid #fde68a"
              }}
            >
              <RotateCcw size={14} />
              <span>Reset Defaults</span>
            </button>

            <Link 
              href="/"
              target="_blank"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "6px",
                fontSize: "0.8125rem",
                fontWeight: "700",
                color: "#1b1b1b",
                padding: "8px 14px",
                borderRadius: "6px",
                background: "#ffffff",
                border: "1.5px solid #1b1b1b"
              }}
            >
              <Eye size={14} />
              <span>Live Site</span>
            </Link>

            <button
              onClick={handleLogout}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "6px",
                fontSize: "0.8125rem",
                fontWeight: "700",
                color: "#ef4444",
                padding: "8px 14px",
                borderRadius: "6px",
                background: "#fef2f2",
                border: "1px solid #fecaca"
              }}
            >
              <LogOut size={14} />
              <span>Exit</span>
            </button>
          </div>
        </div>
      </header>

      {/* Main Admin Content Container */}
      <main className="content-container" style={{ padding: "32px 32px 80px 32px", maxWidth: "1380px", margin: "0 auto" }}>
        
        {/* Navigation Tabs Bar */}
        <div style={{
          display: "flex",
          gap: "8px",
          marginBottom: "32px",
          flexWrap: "wrap",
          borderBottom: "1px solid #e2e8f0",
          paddingBottom: "16px"
        }}>
          {[
            { id: "overview", label: "Overview & Telemetry", icon: Activity },
            { id: "profile", label: "Profile & Metrics", icon: Edit3 },
            { id: "projects", label: `Projects (${(projects || []).length})`, icon: Server },
            { id: "gallery", label: `Gallery (${(gallery || []).length})`, icon: Layers },
            { id: "skills", label: `Skills (${Object.values(skills || {}).flat().length})`, icon: Cpu },
            { id: "timeline", label: `Experience & Education`, icon: Briefcase },
            { id: "articles", label: `Articles (${(articles || []).length})`, icon: BookOpen },
            { id: "inbox", label: `Inquiries (${(inquiries || []).length})`, icon: Mail, badge: (inquiries || []).filter(i => i.status === "Unread").length }
          ].map((tab) => {
            const IconComponent = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => { setActiveTab(tab.id); setSearchTerm(""); }}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                  padding: "10px 18px",
                  borderRadius: "8px",
                  fontSize: "0.9rem",
                  fontWeight: "700",
                  background: isActive ? "#1b1b1b" : "#ffffff",
                  color: isActive ? "#ffffff" : "#475569",
                  border: isActive ? "2px solid #1b1b1b" : "1.5px solid #cbd5e1",
                  boxShadow: isActive ? "3px 3px 0px #4f46e5" : "none",
                  transition: "all 0.15s ease",
                  cursor: "pointer",
                  position: "relative"
                }}
              >
                <IconComponent size={16} color={isActive ? "#ffffff" : "#4f46e5"} />
                <span>{tab.label}</span>
                {tab.badge > 0 && (
                  <span style={{
                    background: "#ef4444",
                    color: "#ffffff",
                    fontSize: "0.7rem",
                    fontWeight: "800",
                    padding: "2px 6px",
                    borderRadius: "9999px"
                  }}>
                    {tab.badge}
                  </span>
                )}
              </button>
            );
          })}
        </div>

        {/* TAB 1: OVERVIEW & TELEMETRY */}
        {activeTab === "overview" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "28px" }}>
            {/* Quick Stat Cards */}
            <div style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
              gap: "20px"
            }}>
              <div className="border-card" style={{ padding: "20px", background: "#ffffff", border: "2px solid #c7d2fe", boxShadow: "4px 4px 0px #4f46e5" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <span style={{ fontSize: "0.75rem", fontWeight: "800", color: "#4f46e5", textTransform: "uppercase" }}>PROJECTS</span>
                  <Server size={18} color="#4f46e5" />
                </div>
                <div style={{ fontSize: "2rem", fontWeight: "800", color: "#0f172a", margin: "6px 0" }}>{(projects || []).length}</div>
                <div style={{ fontSize: "0.8125rem", color: "var(--text-secondary)" }}>Active Deployments</div>
              </div>

              <div className="border-card" style={{ padding: "20px", background: "#ffffff", border: "2px solid #a7f3d0", boxShadow: "4px 4px 0px #059669" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <span style={{ fontSize: "0.75rem", fontWeight: "800", color: "#059669", textTransform: "uppercase" }}>GALLERY ARTIFACTS</span>
                  <Layers size={18} color="#059669" />
                </div>
                <div style={{ fontSize: "2rem", fontWeight: "800", color: "#0f172a", margin: "6px 0" }}>{(gallery || []).length}</div>
                <div style={{ fontSize: "0.8125rem", color: "var(--text-secondary)" }}>Milestones & Blueprints</div>
              </div>

              <div className="border-card" style={{ padding: "20px", background: "#ffffff", border: "2px solid #fde68a", boxShadow: "4px 4px 0px #d97706" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <span style={{ fontSize: "0.75rem", fontWeight: "800", color: "#d97706", textTransform: "uppercase" }}>TOTAL SKILLS</span>
                  <Cpu size={18} color="#d97706" />
                </div>
                <div style={{ fontSize: "2rem", fontWeight: "800", color: "#0f172a", margin: "6px 0" }}>{Object.values(skills || {}).flat().length}</div>
                <div style={{ fontSize: "0.8125rem", color: "var(--text-secondary)" }}>Across {Object.keys(skills || {}).length} Domains</div>
              </div>

              <div className="border-card" style={{ padding: "20px", background: "#ffffff", border: "2px solid #fecaca", boxShadow: "4px 4px 0px #e11d48" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <span style={{ fontSize: "0.75rem", fontWeight: "800", color: "#e11d48", textTransform: "uppercase" }}>CLIENT INBOX</span>
                  <Mail size={18} color="#e11d48" />
                </div>
                <div style={{ fontSize: "2rem", fontWeight: "800", color: "#0f172a", margin: "6px 0" }}>{(inquiries || []).length}</div>
                <div style={{ fontSize: "0.8125rem", color: (inquiries || []).some(i => i.status === "Unread") ? "#e11d48" : "#059669", fontWeight: "700" }}>
                  {(inquiries || []).filter(i => i.status === "Unread").length} Unread inquiries
                </div>
              </div>
            </div>

            {/* Quick Status Pill Editor */}
            <div className="border-card" style={{ padding: "28px", background: "#ffffff", border: "2px solid #e2e8f0" }}>
              <h2 style={{ fontSize: "1.25rem", fontWeight: "800", color: "var(--text-dark)", marginBottom: "8px" }}>
                Live Portfolio Status & Availability Pill
              </h2>
              <p style={{ fontSize: "0.875rem", color: "var(--text-secondary)", marginBottom: "16px" }}>
                This status is broadcasted at the top of the homepage Hero and in header metadata.
              </p>
              <div style={{ display: "flex", gap: "12px", alignItems: "center", flexWrap: "wrap" }}>
                <input
                  type="text"
                  value={personalInfo?.status || ""}
                  onChange={(e) => updateProfile({ status: e.target.value })}
                  style={{
                    flex: 1,
                    minWidth: "280px",
                    padding: "12px 16px",
                    borderRadius: "8px",
                    border: "2px solid #1b1b1b",
                    fontSize: "0.95rem",
                    fontWeight: "600",
                    outline: "none"
                  }}
                />
                <button
                  onClick={() => showToast("Profile status updated live!")}
                  className="btn-dark"
                  style={{ padding: "12px 20px" }}
                >
                  <Check size={16} />
                  <span>Update Live Status</span>
                </button>
              </div>
            </div>

            {/* Quick Jumps */}
            <div style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              gap: "20px"
            }}>
              <div className="clean-card" style={{ padding: "24px", border: "1.5px solid #e2e8f0", borderRadius: "12px" }}>
                <h3 style={{ fontSize: "1.1rem", fontWeight: "800", marginBottom: "10px" }}>Instant Project Creation</h3>
                <p style={{ fontSize: "0.875rem", color: "var(--text-secondary)", marginBottom: "16px" }}>
                  Add a new system deployment with architectural specs and telemetry highlights.
                </p>
                <button
                  onClick={() => { setEditingItem(null); setModalType("project"); }}
                  className="btn-primary"
                  style={{ padding: "10px 18px", fontSize: "0.875rem" }}
                >
                  <Plus size={16} />
                  <span>Create Deployment</span>
                </button>
              </div>

              <div className="clean-card" style={{ padding: "24px", border: "1.5px solid #e2e8f0", borderRadius: "12px" }}>
                <h3 style={{ fontSize: "1.1rem", fontWeight: "800", marginBottom: "10px" }}>Add Gallery Artifact</h3>
                <p style={{ fontSize: "0.875rem", color: "var(--text-secondary)", marginBottom: "16px" }}>
                  Record a new hackathon victory, system architecture diagram, or field metric.
                </p>
                <button
                  onClick={() => { setEditingItem(null); setModalType("gallery"); }}
                  className="btn-dark"
                  style={{ padding: "10px 18px", fontSize: "0.875rem" }}
                >
                  <Plus size={16} />
                  <span>Add Artifact</span>
                </button>
              </div>

              <div className="clean-card" style={{ padding: "24px", border: "1.5px solid #e2e8f0", borderRadius: "12px" }}>
                <h3 style={{ fontSize: "1.1rem", fontWeight: "800", marginBottom: "10px" }}>Publish Research Paper</h3>
                <p style={{ fontSize: "0.875rem", color: "var(--text-secondary)", marginBottom: "16px" }}>
                  Post an article, paper note, or engineering latency study.
                </p>
                <button
                  onClick={() => { setEditingItem(null); setModalType("article"); }}
                  className="btn-outline"
                  style={{ padding: "10px 18px", fontSize: "0.875rem", borderColor: "#4f46e5", color: "#4f46e5" }}
                >
                  <Plus size={16} />
                  <span>Write Publication</span>
                </button>
              </div>
            </div>
          </div>
        )}

        {/* TAB 2: PROFILE & METRICS */}
        {activeTab === "profile" && (
          <div className="border-card" style={{ padding: "32px", background: "#ffffff", border: "2px solid #e2e8f0" }}>
            <h2 style={{ fontSize: "1.5rem", fontWeight: "800", color: "var(--text-dark)", marginBottom: "8px" }}>
              Personal Profile & Live Key Metrics
            </h2>
            <p style={{ fontSize: "0.875rem", color: "var(--text-secondary)", marginBottom: "28px" }}>
              Changes made here immediately synchronize with the Navigation Bar, About Page, Hero Section, and Footer.
            </p>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "20px", marginBottom: "28px" }}>
              <div>
                <label style={{ fontSize: "0.8125rem", fontWeight: "700", color: "#334155", display: "block", marginBottom: "6px" }}>Full Name</label>
                <input
                  type="text"
                  value={personalInfo?.name || ""}
                  onChange={(e) => updateProfile({ name: e.target.value })}
                  style={{ width: "100%", padding: "10px 14px", borderRadius: "8px", border: "1.5px solid #cbd5e1", outline: "none" }}
                />
              </div>

              <div>
                <label style={{ fontSize: "0.8125rem", fontWeight: "700", color: "#334155", display: "block", marginBottom: "6px" }}>Professional Title</label>
                <input
                  type="text"
                  value={personalInfo?.role || ""}
                  onChange={(e) => updateProfile({ role: e.target.value })}
                  style={{ width: "100%", padding: "10px 14px", borderRadius: "8px", border: "1.5px solid #cbd5e1", outline: "none" }}
                />
              </div>

              <div>
                <label style={{ fontSize: "0.8125rem", fontWeight: "700", color: "#334155", display: "block", marginBottom: "6px" }}>Contact Email</label>
                <input
                  type="email"
                  value={personalInfo?.email || ""}
                  onChange={(e) => updateProfile({ email: e.target.value })}
                  style={{ width: "100%", padding: "10px 14px", borderRadius: "8px", border: "1.5px solid #cbd5e1", outline: "none" }}
                />
              </div>

              <div>
                <label style={{ fontSize: "0.8125rem", fontWeight: "700", color: "#334155", display: "block", marginBottom: "6px" }}>Location</label>
                <input
                  type="text"
                  value={personalInfo?.location || ""}
                  onChange={(e) => updateProfile({ location: e.target.value })}
                  style={{ width: "100%", padding: "10px 14px", borderRadius: "8px", border: "1.5px solid #cbd5e1", outline: "none" }}
                />
              </div>

              <div>
                <label style={{ fontSize: "0.8125rem", fontWeight: "700", color: "#334155", display: "block", marginBottom: "6px" }}>LinkedIn URL</label>
                <input
                  type="text"
                  value={personalInfo?.linkedin || ""}
                  onChange={(e) => updateProfile({ linkedin: e.target.value })}
                  style={{ width: "100%", padding: "10px 14px", borderRadius: "8px", border: "1.5px solid #cbd5e1", outline: "none" }}
                />
              </div>

              <div>
                <label style={{ fontSize: "0.8125rem", fontWeight: "700", color: "#334155", display: "block", marginBottom: "6px" }}>GitHub Profile URL</label>
                <input
                  type="text"
                  value={personalInfo?.github || ""}
                  onChange={(e) => updateProfile({ github: e.target.value })}
                  style={{ width: "100%", padding: "10px 14px", borderRadius: "8px", border: "1.5px solid #cbd5e1", outline: "none" }}
                />
              </div>
            </div>

            {/* Biography & Tagline */}
            <div style={{ marginBottom: "28px" }}>
              <label style={{ fontSize: "0.8125rem", fontWeight: "700", color: "#334155", display: "block", marginBottom: "6px" }}>Short Headline / Bio</label>
              <textarea
                rows={3}
                value={personalInfo?.tagline || ""}
                onChange={(e) => updateProfile({ tagline: e.target.value })}
                style={{ width: "100%", padding: "12px 14px", borderRadius: "8px", border: "1.5px solid #cbd5e1", outline: "none", resize: "vertical" }}
              />
            </div>

            {/* 4 Quantitative Metrics */}
            <h3 style={{ fontSize: "1.15rem", fontWeight: "800", color: "var(--text-dark)", marginBottom: "16px" }}>
              4 Top Key Metrics
            </h3>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "16px", marginBottom: "28px" }}>
              {(personalInfo?.metrics || []).map((m, idx) => (
                <div key={idx} style={{ padding: "16px", border: "1.5px solid #cbd5e1", borderRadius: "10px", background: "#f8fafc" }}>
                  <div style={{ fontSize: "0.75rem", fontWeight: "800", color: "#4f46e5", marginBottom: "8px" }}>METRIC #{idx + 1}</div>
                  <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                    <input
                      type="text"
                      placeholder="Value (e.g. 8.50, -40%)"
                      value={m.value || ""}
                      onChange={(e) => {
                        const updatedMetrics = [...(personalInfo?.metrics || [])];
                        updatedMetrics[idx] = { ...updatedMetrics[idx], value: e.target.value };
                        updateProfile({ metrics: updatedMetrics });
                      }}
                      style={{ padding: "8px 10px", borderRadius: "6px", border: "1px solid #cbd5e1", fontWeight: "700" }}
                    />
                    <input
                      type="text"
                      placeholder="Label (e.g. Academic CGPA)"
                      value={m.label || ""}
                      onChange={(e) => {
                        const updatedMetrics = [...(personalInfo?.metrics || [])];
                        updatedMetrics[idx] = { ...updatedMetrics[idx], label: e.target.value };
                        updateProfile({ metrics: updatedMetrics });
                      }}
                      style={{ padding: "8px 10px", borderRadius: "6px", border: "1px solid #cbd5e1" }}
                    />
                    <input
                      type="text"
                      placeholder="Detail (e.g. B.Sc AI & DS)"
                      value={m.detail || ""}
                      onChange={(e) => {
                        const updatedMetrics = [...(personalInfo?.metrics || [])];
                        updatedMetrics[idx] = { ...updatedMetrics[idx], detail: e.target.value };
                        updateProfile({ metrics: updatedMetrics });
                      }}
                      style={{ padding: "8px 10px", borderRadius: "6px", border: "1px solid #cbd5e1" }}
                    />
                  </div>
                </div>
              ))}
            </div>

            <button
              onClick={() => showToast("Profile and metrics saved successfully!")}
              className="btn-dark"
              style={{ padding: "12px 24px" }}
            >
              <Check size={16} />
              <span>Save Profile Changes</span>
            </button>
          </div>
        )}

        {/* TAB 3: PROJECTS CRUD */}
        {activeTab === "projects" && (
          <div>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "24px", flexWrap: "wrap", gap: "16px" }}>
              <div>
                <h2 style={{ fontSize: "1.5rem", fontWeight: "800", color: "var(--text-dark)" }}>Projects & Deployments</h2>
                <p style={{ fontSize: "0.875rem", color: "var(--text-secondary)" }}>Manage production architectures, stack tags, and latency benchmarks.</p>
              </div>
              <div style={{ display: "flex", gap: "12px", alignItems: "center" }}>
                <div style={{ position: "relative" }}>
                  <Search size={16} style={{ position: "absolute", left: "12px", top: "50%", transform: "translateY(-50%)", color: "#94a3b8" }} />
                  <input
                    type="text"
                    placeholder="Search projects..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    style={{ padding: "10px 14px 10px 36px", borderRadius: "8px", border: "1.5px solid #cbd5e1", outline: "none", width: "220px" }}
                  />
                </div>
                <button
                  onClick={() => { setEditingItem(null); setModalType("project"); }}
                  className="btn-primary"
                  style={{ padding: "10px 18px", fontSize: "0.9rem" }}
                >
                  <Plus size={16} />
                  <span>Add Project</span>
                </button>
              </div>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))", gap: "24px" }}>
              {(projects || [])
                .filter(p => p.title.toLowerCase().includes(searchTerm.toLowerCase()) || p.summary.toLowerCase().includes(searchTerm.toLowerCase()))
                .map((proj) => (
                  <div key={proj.id} className="border-card" style={{ padding: "24px", background: "#ffffff", display: "flex", flexDirection: "column", justifyContent: "space-between", border: "2px solid #e2e8f0" }}>
                    <div>
                      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "12px" }}>
                        <span style={{ fontSize: "0.75rem", fontWeight: "800", color: "#4f46e5", background: "#eef2ff", padding: "4px 10px", borderRadius: "6px" }}>
                          {proj.badge}
                        </span>
                        <span style={{ fontSize: "0.75rem", fontWeight: "700", color: "#059669", background: "#ecfdf5", padding: "4px 8px", borderRadius: "6px" }}>
                          Latency: {proj.architecture?.latency || "< 250ms"}
                        </span>
                      </div>

                      <h3 style={{ fontSize: "1.3rem", fontWeight: "800", color: "#0f172a", marginBottom: "8px" }}>
                        {proj.title}
                      </h3>
                      <p style={{ fontSize: "0.875rem", color: "#475569", lineHeight: "1.6", marginBottom: "16px" }}>
                        {proj.summary}
                      </p>

                      <div style={{ display: "flex", flexWrap: "wrap", gap: "6px", marginBottom: "20px" }}>
                        {(proj.stack || []).map((st, i) => (
                          <span key={i} style={{ fontSize: "0.75rem", fontWeight: "600", padding: "3px 8px", borderRadius: "4px", background: "#f1f5f9", color: "#334155" }}>
                            {st}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", paddingTop: "14px", borderTop: "1px solid #e2e8f0" }}>
                      <a href={proj.link} target="_blank" rel="noopener noreferrer" style={{ fontSize: "0.8125rem", color: "#4f46e5", fontWeight: "700", display: "flex", alignItems: "center", gap: "4px" }}>
                        <span>Visit Link</span>
                        <ExternalLink size={14} />
                      </a>
                      <div style={{ display: "flex", gap: "8px" }}>
                        <button
                          onClick={() => { setEditingItem(proj); setModalType("project"); }}
                          style={{ padding: "6px 10px", borderRadius: "6px", background: "#f1f5f9", border: "1px solid #cbd5e1", color: "#0f172a", cursor: "pointer" }}
                        >
                          <Edit3 size={15} />
                        </button>
                        <button
                          onClick={() => setDeleteConfirm({ type: "project", id: proj.id, name: proj.title })}
                          style={{ padding: "6px 10px", borderRadius: "6px", background: "#fef2f2", border: "1px solid #fecaca", color: "#ef4444", cursor: "pointer" }}
                        >
                          <Trash2 size={15} />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        )}

        {/* TAB 4: GALLERY ARTIFACTS CRUD */}
        {activeTab === "gallery" && (
          <div>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "24px", flexWrap: "wrap", gap: "16px" }}>
              <div>
                <h2 style={{ fontSize: "1.5rem", fontWeight: "800", color: "var(--text-dark)" }}>Gallery & Artifacts</h2>
                <p style={{ fontSize: "0.875rem", color: "var(--text-secondary)" }}>Manage milestones, system diagrams, and hackathon accomplishments.</p>
              </div>
              <div style={{ display: "flex", gap: "12px", alignItems: "center" }}>
                <button
                  onClick={() => { setEditingItem(null); setModalType("gallery"); }}
                  className="btn-dark"
                  style={{ padding: "10px 18px", fontSize: "0.9rem" }}
                >
                  <Plus size={16} />
                  <span>Add Artifact</span>
                </button>
              </div>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "24px" }}>
              {(gallery || []).map((item) => (
                <div key={item.id} className="border-card" style={{ padding: "24px", background: "#ffffff", display: "flex", flexDirection: "column", justifyContent: "space-between", border: "2px solid #e2e8f0" }}>
                  <div>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "12px" }}>
                      <span style={{ fontSize: "0.75rem", fontWeight: "800", color: "#4f46e5", background: "#eef2ff", padding: "4px 10px", borderRadius: "6px" }}>
                        {item.category}
                      </span>
                      <span style={{ fontSize: "0.75rem", color: "var(--text-muted)", fontWeight: "600" }}>{item.date}</span>
                    </div>

                    <h3 style={{ fontSize: "1.25rem", fontWeight: "800", color: "#0f172a", marginBottom: "6px" }}>
                      {item.title}
                    </h3>
                    <div style={{ fontSize: "0.8125rem", color: "#64748b", marginBottom: "12px", fontWeight: "600" }}>
                      📍 {item.location}
                    </div>
                    <p style={{ fontSize: "0.875rem", color: "#475569", lineHeight: "1.6", marginBottom: "16px" }}>
                      {item.description}
                    </p>

                    <div style={{ display: "flex", flexWrap: "wrap", gap: "6px", marginBottom: "16px" }}>
                      {(item.tags || []).map((t, i) => (
                        <span key={i} style={{ fontSize: "0.75rem", fontWeight: "600", padding: "3px 8px", borderRadius: "4px", background: "#f8fafc", color: "#334155", border: "1px solid #e2e8f0" }}>
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div style={{ display: "flex", justifyContent: "flex-end", gap: "8px", paddingTop: "14px", borderTop: "1px solid #e2e8f0" }}>
                    <button
                      onClick={() => { setEditingItem(item); setModalType("gallery"); }}
                      style={{ padding: "6px 12px", borderRadius: "6px", background: "#f1f5f9", border: "1px solid #cbd5e1", color: "#0f172a", cursor: "pointer", display: "flex", alignItems: "center", gap: "4px", fontSize: "0.8125rem", fontWeight: "700" }}
                    >
                      <Edit3 size={14} />
                      <span>Edit</span>
                    </button>
                    <button
                      onClick={() => setDeleteConfirm({ type: "gallery", id: item.id, name: item.title })}
                      style={{ padding: "6px 12px", borderRadius: "6px", background: "#fef2f2", border: "1px solid #fecaca", color: "#ef4444", cursor: "pointer", display: "flex", alignItems: "center", gap: "4px", fontSize: "0.8125rem", fontWeight: "700" }}
                    >
                      <Trash2 size={14} />
                      <span>Delete</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 5: SKILLS CRUD */}
        {activeTab === "skills" && (
          <div>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "24px", flexWrap: "wrap", gap: "16px" }}>
              <div>
                <h2 style={{ fontSize: "1.5rem", fontWeight: "800", color: "var(--text-dark)" }}>Technical Competencies & Matrix</h2>
                <p style={{ fontSize: "0.875rem", color: "var(--text-secondary)" }}>Manage domain categories, skill proficiencies (0-100%), and tag labels.</p>
              </div>
              <div style={{ display: "flex", gap: "10px" }}>
                <button
                  onClick={() => setModalType("newCategory")}
                  className="btn-outline"
                  style={{ padding: "10px 16px", fontSize: "0.875rem" }}
                >
                  <Plus size={16} />
                  <span>New Domain Category</span>
                </button>
                <button
                  onClick={() => { setEditingItem(null); setModalType("skill"); }}
                  className="btn-primary"
                  style={{ padding: "10px 18px", fontSize: "0.875rem" }}
                >
                  <Plus size={16} />
                  <span>Add Skill</span>
                </button>
              </div>
            </div>

            {/* Categories and Skill Items */}
            <div style={{ display: "flex", flexDirection: "column", gap: "32px" }}>
              {Object.entries(skills || {}).map(([category, skillList]) => (
                <div key={category} className="border-card" style={{ padding: "24px", background: "#ffffff", border: "2px solid #e2e8f0" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "20px", borderBottom: "1px solid #e2e8f0", paddingBottom: "12px" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                      <Cpu size={20} color="#4f46e5" />
                      <h3 style={{ fontSize: "1.25rem", fontWeight: "800", color: "#0f172a" }}>{category}</h3>
                      <span style={{ fontSize: "0.75rem", fontWeight: "700", color: "#64748b", background: "#f1f5f9", padding: "2px 8px", borderRadius: "9999px" }}>
                        {(skillList || []).length} skills
                      </span>
                    </div>

                    <div style={{ display: "flex", gap: "8px" }}>
                      <button
                        onClick={() => { setEditingItem({ category }); setModalType("skill"); }}
                        style={{ padding: "6px 12px", borderRadius: "6px", background: "#eef2ff", border: "1px solid #c7d2fe", color: "#4f46e5", fontSize: "0.8125rem", fontWeight: "700", cursor: "pointer", display: "flex", alignItems: "center", gap: "4px" }}
                      >
                        <Plus size={14} />
                        <span>Add to Category</span>
                      </button>
                      <button
                        onClick={() => {
                          if (confirm(`Delete category "${category}" and all its skills?`)) {
                            deleteSkillCategory(category);
                            showToast(`Deleted category: ${category}`);
                          }
                        }}
                        style={{ padding: "6px 10px", borderRadius: "6px", background: "#fef2f2", border: "1px solid #fecaca", color: "#ef4444", fontSize: "0.8125rem", fontWeight: "700", cursor: "pointer" }}
                      >
                        <Trash2 size={14} />
                      </button>
                    </div>
                  </div>

                  <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "16px" }}>
                    {(skillList || []).map((s, idx) => (
                      <div key={idx} style={{ padding: "16px", border: "1px solid #e2e8f0", borderRadius: "10px", background: "#f8fafc" }}>
                        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "8px" }}>
                          <span style={{ fontSize: "0.95rem", fontWeight: "700", color: "#0f172a" }}>{s.name}</span>
                          <span style={{ fontSize: "0.75rem", fontWeight: "700", color: "#4f46e5", background: "#eef2ff", padding: "2px 8px", borderRadius: "6px" }}>
                            {s.tag}
                          </span>
                        </div>

                        {/* Slider Progress */}
                        <div style={{ width: "100%", height: "6px", background: "#e2e8f0", borderRadius: "9999px", overflow: "hidden", marginBottom: "8px" }}>
                          <div style={{ width: `${s.level}%`, height: "100%", background: "linear-gradient(90deg, #4f46e5, #06b6d4)", borderRadius: "9999px" }} />
                        </div>

                        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                          <span style={{ fontSize: "0.8125rem", color: "#64748b", fontWeight: "600" }}>{s.level}% Mastery</span>
                          <div style={{ display: "flex", gap: "6px" }}>
                            <button
                              onClick={() => { setEditingItem({ category, ...s }); setModalType("skill"); }}
                              style={{ padding: "4px 8px", borderRadius: "4px", background: "#ffffff", border: "1px solid #cbd5e1", color: "#0f172a", cursor: "pointer" }}
                            >
                              <Edit3 size={13} />
                            </button>
                            <button
                              onClick={() => {
                                deleteSkill(category, s.name);
                                showToast(`Deleted skill: ${s.name}`);
                              }}
                              style={{ padding: "4px 8px", borderRadius: "4px", background: "#fef2f2", border: "1px solid #fecaca", color: "#ef4444", cursor: "pointer" }}
                            >
                              <Trash2 size={13} />
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 6: TIMELINE (EXPERIENCE & EDUCATION) */}
        {activeTab === "timeline" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "32px" }}>
            
            {/* Experience Section */}
            <div className="border-card" style={{ padding: "28px", background: "#ffffff", border: "2px solid #e2e8f0" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "20px" }}>
                <div>
                  <h3 style={{ fontSize: "1.35rem", fontWeight: "800", color: "#0f172a" }}>Work Experience & Internships</h3>
                  <p style={{ fontSize: "0.875rem", color: "#64748b" }}>Roles, enterprise engagements, and engineering responsibilities.</p>
                </div>
                <button
                  onClick={() => { setEditingItem(null); setModalType("experience"); }}
                  className="btn-primary"
                  style={{ padding: "8px 16px", fontSize: "0.875rem" }}
                >
                  <Plus size={14} />
                  <span>Add Role</span>
                </button>
              </div>

              <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                {(experience || []).map((exp, idx) => (
                  <div key={idx} style={{ padding: "18px", border: "1.5px solid #e2e8f0", borderLeft: "4px solid #4f46e5", borderRadius: "10px", background: "#f8fafc" }}>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "6px" }}>
                      <div>
                        <span style={{ fontSize: "1.05rem", fontWeight: "800", color: "#0f172a" }}>{exp.role}</span>
                        <span style={{ color: "#4f46e5", fontWeight: "700", marginLeft: "6px" }}>@ {exp.organization}</span>
                      </div>
                      <span style={{ fontSize: "0.8125rem", color: "#4f46e5", background: "#eef2ff", padding: "3px 8px", borderRadius: "6px", fontWeight: "700" }}>
                        {exp.period}
                      </span>
                    </div>
                    <p style={{ fontSize: "0.875rem", color: "#475569", lineHeight: "1.6", marginBottom: "12px" }}>
                      {exp.description}
                    </p>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                      <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
                        {(exp.tags || []).map((t, i) => (
                          <span key={i} style={{ fontSize: "0.75rem", fontWeight: "600", padding: "2px 8px", borderRadius: "4px", background: "#ffffff", border: "1px solid #cbd5e1" }}>
                            {t}
                          </span>
                        ))}
                      </div>
                      <div style={{ display: "flex", gap: "6px" }}>
                        <button
                          onClick={() => { setEditingItem({ ...exp, originalRole: exp.role }); setModalType("experience"); }}
                          style={{ padding: "4px 8px", borderRadius: "4px", background: "#ffffff", border: "1px solid #cbd5e1", color: "#0f172a", cursor: "pointer" }}
                        >
                          <Edit3 size={13} />
                        </button>
                        <button
                          onClick={() => {
                            deleteExperience(exp.role);
                            showToast(`Deleted experience: ${exp.role}`);
                          }}
                          style={{ padding: "4px 8px", borderRadius: "4px", background: "#fef2f2", border: "1px solid #fecaca", color: "#ef4444", cursor: "pointer" }}
                        >
                          <Trash2 size={13} />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Education & Certifications 2-Col Grid */}
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))", gap: "24px" }}>
              {/* Education */}
              <div className="border-card" style={{ padding: "24px", background: "#ffffff", border: "2px solid #e2e8f0" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "16px" }}>
                  <h3 style={{ fontSize: "1.2rem", fontWeight: "800", color: "#0f172a" }}>Degrees & Academics</h3>
                  <button
                    onClick={() => { setEditingItem(null); setModalType("education"); }}
                    className="btn-dark"
                    style={{ padding: "6px 12px", fontSize: "0.8125rem" }}
                  >
                    <Plus size={13} />
                    <span>Add Degree</span>
                  </button>
                </div>

                <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
                  {(education || []).map((edu, idx) => (
                    <div key={idx} style={{ padding: "14px", border: "1px solid #e2e8f0", borderRadius: "8px", background: "#f8fafc" }}>
                      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
                        <div>
                          <div style={{ fontSize: "0.95rem", fontWeight: "700", color: "#0f172a" }}>{edu.degree}</div>
                          <div style={{ fontSize: "0.8125rem", color: "#64748b" }}>{edu.institution} ({edu.period})</div>
                          <div style={{ fontSize: "0.875rem", fontWeight: "800", color: "#4f46e5", marginTop: "4px" }}>{edu.score}</div>
                        </div>
                        <div style={{ display: "flex", gap: "4px" }}>
                          <button
                            onClick={() => { setEditingItem({ ...edu, originalDegree: edu.degree }); setModalType("education"); }}
                            style={{ padding: "4px 6px", borderRadius: "4px", background: "#ffffff", border: "1px solid #cbd5e1", cursor: "pointer" }}
                          >
                            <Edit3 size={13} />
                          </button>
                          <button
                            onClick={() => {
                              deleteEducation(edu.degree);
                              showToast(`Deleted degree: ${edu.degree}`);
                            }}
                            style={{ padding: "4px 6px", borderRadius: "4px", background: "#fef2f2", border: "1px solid #fecaca", color: "#ef4444", cursor: "pointer" }}
                          >
                            <Trash2 size={13} />
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Certifications */}
              <div className="border-card" style={{ padding: "24px", background: "#ffffff", border: "2px solid #e2e8f0" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "16px" }}>
                  <h3 style={{ fontSize: "1.2rem", fontWeight: "800", color: "#0f172a" }}>Accreditations & Certs</h3>
                  <button
                    onClick={() => { setEditingItem(null); setModalType("cert"); }}
                    className="btn-dark"
                    style={{ padding: "6px 12px", fontSize: "0.8125rem" }}
                  >
                    <Plus size={13} />
                    <span>Add Cert</span>
                  </button>
                </div>

                <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
                  {(certifications || []).map((c, idx) => (
                    <div key={idx} style={{ padding: "14px", border: "1px solid #e2e8f0", borderRadius: "8px", background: "#f8fafc" }}>
                      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
                        <div>
                          <div style={{ fontSize: "0.95rem", fontWeight: "700", color: "#0f172a" }}>{c.name}</div>
                          <div style={{ fontSize: "0.8125rem", color: "#64748b" }}>{c.issuer} • <span style={{ color: "#d97706", fontWeight: "700" }}>{c.tag}</span></div>
                        </div>
                        <div style={{ display: "flex", gap: "4px" }}>
                          <button
                            onClick={() => { setEditingItem({ ...c, originalName: c.name }); setModalType("cert"); }}
                            style={{ padding: "4px 6px", borderRadius: "4px", background: "#ffffff", border: "1px solid #cbd5e1", cursor: "pointer" }}
                          >
                            <Edit3 size={13} />
                          </button>
                          <button
                            onClick={() => {
                              deleteCertification(c.name);
                              showToast(`Deleted certification: ${c.name}`);
                            }}
                            style={{ padding: "4px 6px", borderRadius: "4px", background: "#fef2f2", border: "1px solid #fecaca", color: "#ef4444", cursor: "pointer" }}
                          >
                            <Trash2 size={13} />
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* TAB 7: ARTICLES CRUD */}
        {activeTab === "articles" && (
          <div>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "24px", flexWrap: "wrap", gap: "16px" }}>
              <div>
                <h2 style={{ fontSize: "1.5rem", fontWeight: "800", color: "var(--text-dark)" }}>Publications & Research Notes</h2>
                <p style={{ fontSize: "0.875rem", color: "var(--text-secondary)" }}>Manage technical write-ups, whitepapers, and featured flags.</p>
              </div>
              <button
                onClick={() => { setEditingItem(null); setModalType("article"); }}
                className="btn-primary"
                style={{ padding: "10px 18px", fontSize: "0.9rem" }}
              >
                <Plus size={16} />
                <span>Write Article</span>
              </button>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "24px" }}>
              {(articles || []).map((art, idx) => (
                <div key={idx} className="border-card" style={{ padding: "24px", background: "#ffffff", display: "flex", flexDirection: "column", justifyContent: "space-between", border: "2px solid #e2e8f0" }}>
                  <div>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "12px" }}>
                      <span style={{ fontSize: "0.75rem", fontWeight: "800", color: art.featured ? "#4f46e5" : "#64748b", background: art.featured ? "#eef2ff" : "#f1f5f9", padding: "4px 10px", borderRadius: "6px" }}>
                        {art.featured ? "Featured Paper" : "Article"}
                      </span>
                      <span style={{ fontSize: "0.75rem", color: "#64748b", fontWeight: "600" }}>{art.readTime || "5 min read"}</span>
                    </div>

                    <h3 style={{ fontSize: "1.2rem", fontWeight: "800", color: "#0f172a", marginBottom: "8px" }}>
                      {art.title}
                    </h3>
                    <p style={{ fontSize: "0.875rem", color: "#475569", lineHeight: "1.6", marginBottom: "16px" }}>
                      {art.summary}
                    </p>

                    <div style={{ display: "flex", flexWrap: "wrap", gap: "6px", marginBottom: "16px" }}>
                      {(art.tags || []).map((t, i) => (
                        <span key={i} style={{ fontSize: "0.75rem", fontWeight: "600", padding: "3px 8px", borderRadius: "4px", background: "#f8fafc", color: "#334155", border: "1px solid #cbd5e1" }}>
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", paddingTop: "14px", borderTop: "1px solid #e2e8f0" }}>
                    <span style={{ fontSize: "0.8125rem", color: "#64748b", fontWeight: "600" }}>{art.date}</span>
                    <div style={{ display: "flex", gap: "8px" }}>
                      <button
                        onClick={() => { setEditingItem({ ...art, originalTitle: art.title }); setModalType("article"); }}
                        style={{ padding: "6px 10px", borderRadius: "6px", background: "#f1f5f9", border: "1px solid #cbd5e1", color: "#0f172a", cursor: "pointer" }}
                      >
                        <Edit3 size={14} />
                      </button>
                      <button
                        onClick={() => {
                          deleteArticle(art.title);
                          showToast(`Deleted publication: ${art.title}`);
                        }}
                        style={{ padding: "6px 10px", borderRadius: "6px", background: "#fef2f2", border: "1px solid #fecaca", color: "#ef4444", cursor: "pointer" }}
                      >
                        <Trash2 size={14} />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 8: CLIENT INQUIRIES INBOX */}
        {activeTab === "inbox" && (
          <div className="border-card" style={{ padding: "32px", background: "#ffffff", border: "2px solid #e2e8f0" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "24px", flexWrap: "wrap", gap: "16px" }}>
              <div>
                <h2 style={{ fontSize: "1.5rem", fontWeight: "800", color: "var(--text-dark)" }}>
                  Client Inquiries & Contact Dispatches
                </h2>
                <p style={{ fontSize: "0.875rem", color: "var(--text-secondary)" }}>
                  Inquiries submitted via `/contact` and homepage forms appear in real time.
                </p>
              </div>

              <div style={{ display: "flex", gap: "10px" }}>
                <button
                  onClick={() => {
                    addInquiry({
                      name: "Mock Enterprise Recruiter",
                      email: "talent@scaleai.com",
                      message: "We came across your ASTRO AI deployment architecture and would like to discuss a Forward Deployed Engineer role on our team."
                    });
                    showToast("Simulated inquiry added to inbox.");
                  }}
                  className="btn-outline"
                  style={{ padding: "8px 14px", fontSize: "0.8125rem" }}
                >
                  <Plus size={14} />
                  <span>Generate Test Inquiry</span>
                </button>
              </div>
            </div>

            {(inquiries || []).length === 0 ? (
              <div style={{ padding: "60px 20px", textAlign: "center", color: "#64748b" }}>
                <Mail size={40} color="#cbd5e1" style={{ margin: "0 auto 12px auto" }} />
                <h4 style={{ fontSize: "1.1rem", fontWeight: "700" }}>No Inquiries in Inbox</h4>
                <p style={{ fontSize: "0.875rem", marginTop: "4px" }}>When clients or recruiters submit the contact form, submissions will populate here.</p>
              </div>
            ) : (
              <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                {(inquiries || []).map((inq) => (
                  <div key={inq.id} style={{
                    padding: "20px",
                    borderRadius: "12px",
                    border: inq.status === "Unread" ? "2px solid #6366f1" : "1.5px solid #e2e8f0",
                    background: inq.status === "Unread" ? "#f8faff" : "#ffffff",
                    boxShadow: inq.status === "Unread" ? "0 4px 12px rgba(99, 102, 241, 0.08)" : "none"
                  }}>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: "8px", marginBottom: "8px" }}>
                      <div>
                        <span style={{ fontSize: "1.1rem", fontWeight: "800", color: "#0f172a" }}>{inq.name || inq.sender}</span>
                        <a href={`mailto:${inq.email}`} style={{ fontSize: "0.875rem", color: "#4f46e5", fontWeight: "600", marginLeft: "10px" }}>
                          {inq.email}
                        </a>
                      </div>
                      <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                        <span style={{ fontSize: "0.75rem", color: "#64748b", fontWeight: "600" }}>{inq.date}</span>
                        <button
                          onClick={() => {
                            toggleInquiryStatus(inq.id);
                            showToast(`Toggled status for ${inq.name || inq.sender}`);
                          }}
                          style={{
                            fontSize: "0.75rem",
                            fontWeight: "800",
                            padding: "4px 10px",
                            borderRadius: "9999px",
                            background: inq.status === "Unread" ? "#fee2e2" : "#ecfdf5",
                            color: inq.status === "Unread" ? "#dc2626" : "#059669",
                            border: "none",
                            cursor: "pointer"
                          }}
                        >
                          {inq.status} (Click to toggle)
                        </button>
                      </div>
                    </div>

                    <p style={{ fontSize: "0.95rem", color: "#334155", lineHeight: "1.65", margin: "12px 0 16px 0", background: "#ffffff", padding: "14px", borderRadius: "8px", border: "1px solid #e2e8f0" }}>
                      {inq.message || inq.scope}
                    </p>

                    <div style={{ display: "flex", justifyContent: "flex-end", gap: "10px" }}>
                      <a
                        href={`mailto:${inq.email}?subject=Re:%20Portfolio%20Inquiry%20from%20Harini%20K`}
                        className="btn-dark"
                        style={{ padding: "8px 16px", fontSize: "0.8125rem", display: "inline-flex", alignItems: "center", gap: "6px" }}
                      >
                        <Mail size={14} />
                        <span>Direct Reply Email</span>
                      </a>
                      <button
                        onClick={() => {
                          deleteInquiry(inq.id);
                          showToast("Inquiry deleted.");
                        }}
                        style={{ padding: "8px 14px", borderRadius: "6px", background: "#fef2f2", border: "1px solid #fecaca", color: "#ef4444", fontSize: "0.8125rem", fontWeight: "700", cursor: "pointer", display: "flex", alignItems: "center", gap: "4px" }}
                      >
                        <Trash2 size={14} />
                        <span>Delete</span>
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

      </main>

      {/* UNIVERSAL EDIT / CREATE MODAL LIGHTBOX */}
      {modalType && (
        <ModalForm 
          modalType={modalType} 
          editingItem={editingItem} 
          onClose={() => { setModalType(null); setEditingItem(null); }}
          onSave={(data) => {
            if (modalType === "project") {
              if (editingItem?.id) {
                updateProject(editingItem.id, data);
                showToast(`Updated project: ${data.title}`);
              } else {
                createProject(data);
                showToast(`Created project: ${data.title}`);
              }
            } else if (modalType === "gallery") {
              if (editingItem?.id) {
                updateGalleryItem(editingItem.id, data);
                showToast(`Updated artifact: ${data.title}`);
              } else {
                createGalleryItem(data);
                showToast(`Created artifact: ${data.title}`);
              }
            } else if (modalType === "skill") {
              if (editingItem?.name) {
                updateSkill(data.category, editingItem.name, { level: data.level, tag: data.tag, name: data.name });
                showToast(`Updated skill: ${data.name}`);
              } else {
                createSkill(data.category, { name: data.name, level: Number(data.level), tag: data.tag });
                showToast(`Added skill: ${data.name}`);
              }
            } else if (modalType === "newCategory") {
              createSkillCategory(data.categoryName);
              showToast(`Created category: ${data.categoryName}`);
            } else if (modalType === "experience") {
              if (editingItem?.originalRole) {
                updateExperience(editingItem.originalRole, data);
                showToast(`Updated experience: ${data.role}`);
              } else {
                createExperience(data);
                showToast(`Added experience: ${data.role}`);
              }
            } else if (modalType === "education") {
              if (editingItem?.originalDegree) {
                updateEducation(editingItem.originalDegree, data);
                showToast(`Updated degree: ${data.degree}`);
              } else {
                createEducation(data);
                showToast(`Added degree: ${data.degree}`);
              }
            } else if (modalType === "cert") {
              if (editingItem?.originalName) {
                updateCertification(editingItem.originalName, data);
                showToast(`Updated certification: ${data.name}`);
              } else {
                createCertification(data);
                showToast(`Added certification: ${data.name}`);
              }
            } else if (modalType === "article") {
              if (editingItem?.originalTitle) {
                updateArticle(editingItem.originalTitle, data);
                showToast(`Updated publication: ${data.title}`);
              } else {
                createArticle(data);
                showToast(`Published article: ${data.title}`);
              }
            }
            setModalType(null);
            setEditingItem(null);
          }}
          skillsCategories={Object.keys(skills || {})}
        />
      )}

      {/* DELETE CONFIRMATION DIALOG */}
      {deleteConfirm && (
        <div style={{
          position: "fixed",
          inset: 0,
          background: "rgba(15, 23, 42, 0.65)",
          backdropFilter: "blur(8px)",
          zIndex: 999,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "20px"
        }}>
          <div className="border-card" style={{ maxWidth: "420px", width: "100%", background: "#ffffff", padding: "28px", textAlign: "center" }}>
            <div style={{ width: "48px", height: "48px", borderRadius: "50%", background: "#fee2e2", color: "#dc2626", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 16px auto" }}>
              <Trash2 size={24} />
            </div>
            <h3 style={{ fontSize: "1.25rem", fontWeight: "800", color: "#0f172a", marginBottom: "8px" }}>Confirm Deletion</h3>
            <p style={{ fontSize: "0.875rem", color: "#64748b", marginBottom: "24px" }}>
              Are you sure you want to delete <strong>{deleteConfirm.name}</strong>? This action cannot be undone.
            </p>
            <div style={{ display: "flex", gap: "12px" }}>
              <button
                onClick={() => setDeleteConfirm(null)}
                className="btn-outline"
                style={{ flex: 1, padding: "10px" }}
              >
                Cancel
              </button>
              <button
                onClick={() => {
                  if (deleteConfirm.type === "project") {
                    deleteProject(deleteConfirm.id);
                  } else if (deleteConfirm.type === "gallery") {
                    deleteGalleryItem(deleteConfirm.id);
                  }
                  showToast(`Deleted ${deleteConfirm.name}`);
                  setDeleteConfirm(null);
                }}
                style={{ flex: 1, padding: "10px", borderRadius: "8px", background: "#ef4444", color: "#ffffff", border: "none", fontWeight: "700", cursor: "pointer" }}
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

// -------------------------------------------------------------
// UNIVERSAL MODAL FORM COMPONENT
// -------------------------------------------------------------
function ModalForm({ modalType, editingItem, onClose, onSave, skillsCategories }) {
  const [formData, setFormData] = useState(() => {
    if (modalType === "project") {
      return {
        title: editingItem?.title || "",
        role: editingItem?.role || "Forward Deployed Engineer",
        period: editingItem?.period || "2026",
        badge: editingItem?.badge || "Featured Deployment",
        summary: editingItem?.summary || "",
        link: editingItem?.link || "https://github.com/harinik-fde",
        stack: (editingItem?.stack || []).join(", "),
        highlights: (editingItem?.highlights || []).join("\n"),
        gateway: editingItem?.architecture?.gateway || "FastAPI Non-Blocking Gateway",
        orchestrator: editingItem?.architecture?.orchestrator || "LangChain / LLM Agent Core",
        latency: editingItem?.architecture?.latency || "< 200ms"
      };
    } else if (modalType === "gallery") {
      return {
        title: editingItem?.title || "",
        category: editingItem?.category || "Architecture & Systems",
        location: editingItem?.location || "Coimbatore, TN",
        date: editingItem?.date || "2026",
        badge: editingItem?.badge || "SYSTEM SPEC",
        icon: editingItem?.icon || "Cpu",
        description: editingItem?.description || "",
        tags: (editingItem?.tags || []).join(", ")
      };
    } else if (modalType === "skill") {
      return {
        category: editingItem?.category || skillsCategories[0] || "Generative AI & LLMs",
        name: editingItem?.name || "",
        level: editingItem?.level || 85,
        tag: editingItem?.tag || "Production"
      };
    } else if (modalType === "newCategory") {
      return { categoryName: "" };
    } else if (modalType === "experience") {
      return {
        role: editingItem?.role || "",
        organization: editingItem?.organization || "",
        period: editingItem?.period || "2025 - Present",
        description: editingItem?.description || "",
        tags: (editingItem?.tags || []).join(", ")
      };
    } else if (modalType === "education") {
      return {
        degree: editingItem?.degree || "",
        institution: editingItem?.institution || "",
        period: editingItem?.period || "2022 - 2026",
        score: editingItem?.score || "8.50 CGPA"
      };
    } else if (modalType === "cert") {
      return {
        name: editingItem?.name || "",
        issuer: editingItem?.issuer || "",
        tag: editingItem?.tag || "Cloud / AI"
      };
    } else if (modalType === "article") {
      return {
        title: editingItem?.title || "",
        date: editingItem?.date || "2026",
        readTime: editingItem?.readTime || "5 min read",
        summary: editingItem?.summary || "",
        link: editingItem?.link || "https://github.com/harinik-fde",
        tags: (editingItem?.tags || []).join(", "),
        featured: editingItem?.featured || false
      };
    }
    return {};
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (modalType === "project") {
      onSave({
        ...formData,
        stack: formData.stack.split(",").map(s => s.trim()).filter(Boolean),
        highlights: formData.highlights.split("\n").map(s => s.trim()).filter(Boolean),
        architecture: {
          gateway: formData.gateway,
          orchestrator: formData.orchestrator,
          latency: formData.latency
        }
      });
    } else if (modalType === "gallery") {
      onSave({
        ...formData,
        tags: formData.tags.split(",").map(s => s.trim()).filter(Boolean)
      });
    } else if (modalType === "skill") {
      onSave(formData);
    } else if (modalType === "newCategory") {
      onSave(formData);
    } else if (modalType === "experience") {
      onSave({
        ...formData,
        tags: formData.tags.split(",").map(s => s.trim()).filter(Boolean)
      });
    } else if (modalType === "education") {
      onSave(formData);
    } else if (modalType === "cert") {
      onSave(formData);
    } else if (modalType === "article") {
      onSave({
        ...formData,
        tags: formData.tags.split(",").map(s => s.trim()).filter(Boolean)
      });
    }
  };

  return (
    <div style={{
      position: "fixed",
      inset: 0,
      background: "rgba(15, 23, 42, 0.65)",
      backdropFilter: "blur(8px)",
      zIndex: 1000,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      padding: "20px",
      overflowY: "auto"
    }}>
      <div className="border-card" style={{
        maxWidth: "640px",
        width: "100%",
        background: "#ffffff",
        padding: "32px",
        maxHeight: "90vh",
        overflowY: "auto",
        position: "relative"
      }}>
        {/* Close Button */}
        <button
          onClick={onClose}
          style={{ position: "absolute", top: "20px", right: "20px", background: "#f1f5f9", border: "none", borderRadius: "6px", padding: "6px", cursor: "pointer" }}
        >
          <X size={18} />
        </button>

        <h2 style={{ fontSize: "1.35rem", fontWeight: "800", color: "#0f172a", marginBottom: "4px" }}>
          {editingItem ? "Edit Entry" : "Create New Entry"}
        </h2>
        <div style={{ fontSize: "0.8125rem", color: "#64748b", textTransform: "uppercase", fontWeight: "700", marginBottom: "20px" }}>
          {modalType.toUpperCase()} FORM
        </div>

        <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          
          {/* PROJECT MODAL FIELDS */}
          {modalType === "project" && (
            <>
              <div>
                <label style={{ fontSize: "0.8125rem", fontWeight: "700", display: "block", marginBottom: "4px" }}>Project Title</label>
                <input
                  type="text"
                  required
                  value={formData.title}
                  onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                  style={{ width: "100%", padding: "10px 12px", borderRadius: "6px", border: "1.5px solid #cbd5e1" }}
                />
              </div>

              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px" }}>
                <div>
                  <label style={{ fontSize: "0.8125rem", fontWeight: "700", display: "block", marginBottom: "4px" }}>Badge Tag</label>
                  <input
                    type="text"
                    value={formData.badge}
                    onChange={(e) => setFormData({ ...formData, badge: e.target.value })}
                    style={{ width: "100%", padding: "10px 12px", borderRadius: "6px", border: "1.5px solid #cbd5e1" }}
                  />
                </div>
                <div>
                  <label style={{ fontSize: "0.8125rem", fontWeight: "700", display: "block", marginBottom: "4px" }}>Period</label>
                  <input
                    type="text"
                    value={formData.period}
                    onChange={(e) => setFormData({ ...formData, period: e.target.value })}
                    style={{ width: "100%", padding: "10px 12px", borderRadius: "6px", border: "1.5px solid #cbd5e1" }}
                  />
                </div>
              </div>

              <div>
                <label style={{ fontSize: "0.8125rem", fontWeight: "700", display: "block", marginBottom: "4px" }}>Executive Summary</label>
                <textarea
                  rows={3}
                  required
                  value={formData.summary}
                  onChange={(e) => setFormData({ ...formData, summary: e.target.value })}
                  style={{ width: "100%", padding: "10px 12px", borderRadius: "6px", border: "1.5px solid #cbd5e1" }}
                />
              </div>

              <div>
                <label style={{ fontSize: "0.8125rem", fontWeight: "700", display: "block", marginBottom: "4px" }}>Tech Stack (Comma Separated)</label>
                <input
                  type="text"
                  value={formData.stack}
                  onChange={(e) => setFormData({ ...formData, stack: e.target.value })}
                  placeholder="Python, FastAPI, OpenAI API, MySQL"
                  style={{ width: "100%", padding: "10px 12px", borderRadius: "6px", border: "1.5px solid #cbd5e1" }}
                />
              </div>

              <div>
                <label style={{ fontSize: "0.8125rem", fontWeight: "700", display: "block", marginBottom: "4px" }}>Telemetry Highlights (One per line)</label>
                <textarea
                  rows={3}
                  value={formData.highlights}
                  onChange={(e) => setFormData({ ...formData, highlights: e.target.value })}
                  placeholder="Engineered non-blocking async queue&#10;Achieved 40% reduction in response latency"
                  style={{ width: "100%", padding: "10px 12px", borderRadius: "6px", border: "1.5px solid #cbd5e1" }}
                />
              </div>

              <div style={{ padding: "14px", background: "#f8fafc", borderRadius: "8px", border: "1px solid #e2e8f0" }}>
                <div style={{ fontSize: "0.75rem", fontWeight: "800", color: "#4f46e5", marginBottom: "10px" }}>ARCHITECTURE PIPELINE SPEC</div>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px" }}>
                  <div>
                    <label style={{ fontSize: "0.75rem", fontWeight: "700", display: "block", marginBottom: "2px" }}>Ingestion Gateway</label>
                    <input
                      type="text"
                      value={formData.gateway}
                      onChange={(e) => setFormData({ ...formData, gateway: e.target.value })}
                      style={{ width: "100%", padding: "8px", borderRadius: "4px", border: "1px solid #cbd5e1", fontSize: "0.85rem" }}
                    />
                  </div>
                  <div>
                    <label style={{ fontSize: "0.75rem", fontWeight: "700", display: "block", marginBottom: "2px" }}>Agent Orchestrator</label>
                    <input
                      type="text"
                      value={formData.orchestrator}
                      onChange={(e) => setFormData({ ...formData, orchestrator: e.target.value })}
                      style={{ width: "100%", padding: "8px", borderRadius: "4px", border: "1px solid #cbd5e1", fontSize: "0.85rem" }}
                    />
                  </div>
                  <div>
                    <label style={{ fontSize: "0.75rem", fontWeight: "700", display: "block", marginBottom: "2px" }}>Latency Benchmark</label>
                    <input
                      type="text"
                      value={formData.latency}
                      onChange={(e) => setFormData({ ...formData, latency: e.target.value })}
                      style={{ width: "100%", padding: "8px", borderRadius: "4px", border: "1px solid #cbd5e1", fontSize: "0.85rem" }}
                    />
                  </div>
                  <div>
                    <label style={{ fontSize: "0.75rem", fontWeight: "700", display: "block", marginBottom: "2px" }}>Live Project / GitHub URL</label>
                    <input
                      type="text"
                      value={formData.link}
                      onChange={(e) => setFormData({ ...formData, link: e.target.value })}
                      style={{ width: "100%", padding: "8px", borderRadius: "4px", border: "1px solid #cbd5e1", fontSize: "0.85rem" }}
                    />
                  </div>
                </div>
              </div>
            </>
          )}

          {/* GALLERY MODAL FIELDS */}
          {modalType === "gallery" && (
            <>
              <div>
                <label style={{ fontSize: "0.8125rem", fontWeight: "700", display: "block", marginBottom: "4px" }}>Artifact Title</label>
                <input
                  type="text"
                  required
                  value={formData.title}
                  onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                  style={{ width: "100%", padding: "10px 12px", borderRadius: "6px", border: "1.5px solid #cbd5e1" }}
                />
              </div>

              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px" }}>
                <div>
                  <label style={{ fontSize: "0.8125rem", fontWeight: "700", display: "block", marginBottom: "4px" }}>Category</label>
                  <select
                    value={formData.category}
                    onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                    style={{ width: "100%", padding: "10px 12px", borderRadius: "6px", border: "1.5px solid #cbd5e1" }}
                  >
                    <option value="Architecture & Systems">Architecture & Systems</option>
                    <option value="Hackathons & Awards">Hackathons & Awards</option>
                    <option value="Engineering Snapshots">Engineering Snapshots</option>
                  </select>
                </div>
                <div>
                  <label style={{ fontSize: "0.8125rem", fontWeight: "700", display: "block", marginBottom: "4px" }}>Icon Type</label>
                  <select
                    value={formData.icon}
                    onChange={(e) => setFormData({ ...formData, icon: e.target.value })}
                    style={{ width: "100%", padding: "10px 12px", borderRadius: "6px", border: "1.5px solid #cbd5e1" }}
                  >
                    <option value="Award">Award</option>
                    <option value="Cpu">Cpu</option>
                    <option value="Database">Database</option>
                    <option value="ShieldCheck">ShieldCheck</option>
                    <option value="Zap">Zap</option>
                    <option value="Terminal">Terminal</option>
                    <option value="Layers">Layers</option>
                  </select>
                </div>
              </div>

              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px" }}>
                <div>
                  <label style={{ fontSize: "0.8125rem", fontWeight: "700", display: "block", marginBottom: "4px" }}>Location</label>
                  <input
                    type="text"
                    value={formData.location}
                    onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                    style={{ width: "100%", padding: "10px 12px", borderRadius: "6px", border: "1.5px solid #cbd5e1" }}
                  />
                </div>
                <div>
                  <label style={{ fontSize: "0.8125rem", fontWeight: "700", display: "block", marginBottom: "4px" }}>Date</label>
                  <input
                    type="text"
                    value={formData.date}
                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                    style={{ width: "100%", padding: "10px 12px", borderRadius: "6px", border: "1.5px solid #cbd5e1" }}
                  />
                </div>
              </div>

              <div>
                <label style={{ fontSize: "0.8125rem", fontWeight: "700", display: "block", marginBottom: "4px" }}>Description</label>
                <textarea
                  rows={3}
                  required
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  style={{ width: "100%", padding: "10px 12px", borderRadius: "6px", border: "1.5px solid #cbd5e1" }}
                />
              </div>

              <div>
                <label style={{ fontSize: "0.8125rem", fontWeight: "700", display: "block", marginBottom: "4px" }}>Tags (Comma Separated)</label>
                <input
                  type="text"
                  value={formData.tags}
                  onChange={(e) => setFormData({ ...formData, tags: e.target.value })}
                  placeholder="LLM, Pipeline, MySQL"
                  style={{ width: "100%", padding: "10px 12px", borderRadius: "6px", border: "1.5px solid #cbd5e1" }}
                />
              </div>
            </>
          )}

          {/* SKILL MODAL FIELDS */}
          {modalType === "skill" && (
            <>
              <div>
                <label style={{ fontSize: "0.8125rem", fontWeight: "700", display: "block", marginBottom: "4px" }}>Domain Category</label>
                <select
                  value={formData.category}
                  onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                  style={{ width: "100%", padding: "10px 12px", borderRadius: "6px", border: "1.5px solid #cbd5e1" }}
                >
                  {skillsCategories.map(cat => (
                    <option key={cat} value={cat}>{cat}</option>
                  ))}
                </select>
              </div>

              <div>
                <label style={{ fontSize: "0.8125rem", fontWeight: "700", display: "block", marginBottom: "4px" }}>Skill Name</label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="e.g. OpenAI API, FastAPI, Redis"
                  style={{ width: "100%", padding: "10px 12px", borderRadius: "6px", border: "1.5px solid #cbd5e1" }}
                />
              </div>

              <div>
                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "4px" }}>
                  <label style={{ fontSize: "0.8125rem", fontWeight: "700" }}>Proficiency Level ({formData.level}%)</label>
                </div>
                <input
                  type="range"
                  min="20"
                  max="100"
                  step="1"
                  value={formData.level}
                  onChange={(e) => setFormData({ ...formData, level: Number(e.target.value) })}
                  style={{ width: "100%", accentColor: "#4f46e5" }}
                />
              </div>

              <div>
                <label style={{ fontSize: "0.8125rem", fontWeight: "700", display: "block", marginBottom: "4px" }}>Tag Badge Label</label>
                <input
                  type="text"
                  value={formData.tag}
                  onChange={(e) => setFormData({ ...formData, tag: e.target.value })}
                  placeholder="e.g. Advanced, Production, Expert"
                  style={{ width: "100%", padding: "10px 12px", borderRadius: "6px", border: "1.5px solid #cbd5e1" }}
                />
              </div>
            </>
          )}

          {/* NEW CATEGORY MODAL */}
          {modalType === "newCategory" && (
            <div>
              <label style={{ fontSize: "0.8125rem", fontWeight: "700", display: "block", marginBottom: "4px" }}>Category Name</label>
              <input
                type="text"
                required
                value={formData.categoryName}
                onChange={(e) => setFormData({ ...formData, categoryName: e.target.value })}
                placeholder="e.g. Mobile & Embedded AI"
                style={{ width: "100%", padding: "10px 12px", borderRadius: "6px", border: "1.5px solid #cbd5e1" }}
              />
            </div>
          )}

          {/* EXPERIENCE MODAL FIELDS */}
          {modalType === "experience" && (
            <>
              <div>
                <label style={{ fontSize: "0.8125rem", fontWeight: "700", display: "block", marginBottom: "4px" }}>Role Title</label>
                <input
                  type="text"
                  required
                  value={formData.role}
                  onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                  style={{ width: "100%", padding: "10px 12px", borderRadius: "6px", border: "1.5px solid #cbd5e1" }}
                />
              </div>

              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px" }}>
                <div>
                  <label style={{ fontSize: "0.8125rem", fontWeight: "700", display: "block", marginBottom: "4px" }}>Organization</label>
                  <input
                    type="text"
                    required
                    value={formData.organization}
                    onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                    style={{ width: "100%", padding: "10px 12px", borderRadius: "6px", border: "1.5px solid #cbd5e1" }}
                  />
                </div>
                <div>
                  <label style={{ fontSize: "0.8125rem", fontWeight: "700", display: "block", marginBottom: "4px" }}>Period</label>
                  <input
                    type="text"
                    value={formData.period}
                    onChange={(e) => setFormData({ ...formData, period: e.target.value })}
                    style={{ width: "100%", padding: "10px 12px", borderRadius: "6px", border: "1.5px solid #cbd5e1" }}
                  />
                </div>
              </div>

              <div>
                <label style={{ fontSize: "0.8125rem", fontWeight: "700", display: "block", marginBottom: "4px" }}>Description</label>
                <textarea
                  rows={3}
                  required
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  style={{ width: "100%", padding: "10px 12px", borderRadius: "6px", border: "1.5px solid #cbd5e1" }}
                />
              </div>

              <div>
                <label style={{ fontSize: "0.8125rem", fontWeight: "700", display: "block", marginBottom: "4px" }}>Tags (Comma Separated)</label>
                <input
                  type="text"
                  value={formData.tags}
                  onChange={(e) => setFormData({ ...formData, tags: e.target.value })}
                  placeholder="Agentic AI, MySQL, Production"
                  style={{ width: "100%", padding: "10px 12px", borderRadius: "6px", border: "1.5px solid #cbd5e1" }}
                />
              </div>
            </>
          )}

          {/* EDUCATION MODAL FIELDS */}
          {modalType === "education" && (
            <>
              <div>
                <label style={{ fontSize: "0.8125rem", fontWeight: "700", display: "block", marginBottom: "4px" }}>Degree & Major</label>
                <input
                  type="text"
                  required
                  value={formData.degree}
                  onChange={(e) => setFormData({ ...formData, degree: e.target.value })}
                  style={{ width: "100%", padding: "10px 12px", borderRadius: "6px", border: "1.5px solid #cbd5e1" }}
                />
              </div>

              <div>
                <label style={{ fontSize: "0.8125rem", fontWeight: "700", display: "block", marginBottom: "4px" }}>Institution</label>
                <input
                  type="text"
                  required
                  value={formData.institution}
                  onChange={(e) => setFormData({ ...formData, institution: e.target.value })}
                  style={{ width: "100%", padding: "10px 12px", borderRadius: "6px", border: "1.5px solid #cbd5e1" }}
                />
              </div>

              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px" }}>
                <div>
                  <label style={{ fontSize: "0.8125rem", fontWeight: "700", display: "block", marginBottom: "4px" }}>Period</label>
                  <input
                    type="text"
                    value={formData.period}
                    onChange={(e) => setFormData({ ...formData, period: e.target.value })}
                    style={{ width: "100%", padding: "10px 12px", borderRadius: "6px", border: "1.5px solid #cbd5e1" }}
                  />
                </div>
                <div>
                  <label style={{ fontSize: "0.8125rem", fontWeight: "700", display: "block", marginBottom: "4px" }}>Score / Grade</label>
                  <input
                    type="text"
                    value={formData.score}
                    onChange={(e) => setFormData({ ...formData, score: e.target.value })}
                    style={{ width: "100%", padding: "10px 12px", borderRadius: "6px", border: "1.5px solid #cbd5e1" }}
                  />
                </div>
              </div>
            </>
          )}

          {/* CERTIFICATION MODAL FIELDS */}
          {modalType === "cert" && (
            <>
              <div>
                <label style={{ fontSize: "0.8125rem", fontWeight: "700", display: "block", marginBottom: "4px" }}>Certification Name</label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  style={{ width: "100%", padding: "10px 12px", borderRadius: "6px", border: "1.5px solid #cbd5e1" }}
                />
              </div>

              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px" }}>
                <div>
                  <label style={{ fontSize: "0.8125rem", fontWeight: "700", display: "block", marginBottom: "4px" }}>Issuer / Authority</label>
                  <input
                    type="text"
                    required
                    value={formData.issuer}
                    onChange={(e) => setFormData({ ...formData, issuer: e.target.value })}
                    style={{ width: "100%", padding: "10px 12px", borderRadius: "6px", border: "1.5px solid #cbd5e1" }}
                  />
                </div>
                <div>
                  <label style={{ fontSize: "0.8125rem", fontWeight: "700", display: "block", marginBottom: "4px" }}>Tag Badge</label>
                  <input
                    type="text"
                    value={formData.tag}
                    onChange={(e) => setFormData({ ...formData, tag: e.target.value })}
                    style={{ width: "100%", padding: "10px 12px", borderRadius: "6px", border: "1.5px solid #cbd5e1" }}
                  />
                </div>
              </div>
            </>
          )}

          {/* ARTICLE MODAL FIELDS */}
          {modalType === "article" && (
            <>
              <div>
                <label style={{ fontSize: "0.8125rem", fontWeight: "700", display: "block", marginBottom: "4px" }}>Article / Paper Title</label>
                <input
                  type="text"
                  required
                  value={formData.title}
                  onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                  style={{ width: "100%", padding: "10px 12px", borderRadius: "6px", border: "1.5px solid #cbd5e1" }}
                />
              </div>

              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px" }}>
                <div>
                  <label style={{ fontSize: "0.8125rem", fontWeight: "700", display: "block", marginBottom: "4px" }}>Publication Date</label>
                  <input
                    type="text"
                    value={formData.date}
                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                    style={{ width: "100%", padding: "10px 12px", borderRadius: "6px", border: "1.5px solid #cbd5e1" }}
                  />
                </div>
                <div>
                  <label style={{ fontSize: "0.8125rem", fontWeight: "700", display: "block", marginBottom: "4px" }}>Read Time</label>
                  <input
                    type="text"
                    value={formData.readTime}
                    onChange={(e) => setFormData({ ...formData, readTime: e.target.value })}
                    style={{ width: "100%", padding: "10px 12px", borderRadius: "6px", border: "1.5px solid #cbd5e1" }}
                  />
                </div>
              </div>

              <div>
                <label style={{ fontSize: "0.8125rem", fontWeight: "700", display: "block", marginBottom: "4px" }}>Summary & Insights</label>
                <textarea
                  rows={3}
                  required
                  value={formData.summary}
                  onChange={(e) => setFormData({ ...formData, summary: e.target.value })}
                  style={{ width: "100%", padding: "10px 12px", borderRadius: "6px", border: "1.5px solid #cbd5e1" }}
                />
              </div>

              <div>
                <label style={{ fontSize: "0.8125rem", fontWeight: "700", display: "block", marginBottom: "4px" }}>Tags (Comma Separated)</label>
                <input
                  type="text"
                  value={formData.tags}
                  onChange={(e) => setFormData({ ...formData, tags: e.target.value })}
                  placeholder="AsyncIO, FastChat, System Design"
                  style={{ width: "100%", padding: "10px 12px", borderRadius: "6px", border: "1.5px solid #cbd5e1" }}
                />
              </div>

              <div>
                <label style={{ fontSize: "0.8125rem", fontWeight: "700", display: "block", marginBottom: "4px" }}>Paper / Publication URL</label>
                <input
                  type="text"
                  value={formData.link}
                  onChange={(e) => setFormData({ ...formData, link: e.target.value })}
                  style={{ width: "100%", padding: "10px 12px", borderRadius: "6px", border: "1.5px solid #cbd5e1" }}
                />
              </div>

              <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                <input
                  type="checkbox"
                  id="featuredToggle"
                  checked={formData.featured}
                  onChange={(e) => setFormData({ ...formData, featured: e.target.checked })}
                  style={{ width: "18px", height: "18px", accentColor: "#4f46e5" }}
                />
                <label htmlFor="featuredToggle" style={{ fontSize: "0.875rem", fontWeight: "700", color: "#0f172a" }}>
                  Mark as Featured Publication (Show in Top Highlight Grid)
                </label>
              </div>
            </>
          )}

          <div style={{ display: "flex", justifyContent: "flex-end", gap: "10px", marginTop: "12px", paddingTop: "12px", borderTop: "1px solid #e2e8f0" }}>
            <button
              type="button"
              onClick={onClose}
              className="btn-outline"
              style={{ padding: "10px 18px", fontSize: "0.875rem" }}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="btn-dark"
              style={{ padding: "10px 20px", fontSize: "0.875rem" }}
            >
              <Check size={16} />
              <span>{editingItem ? "Save Changes" : "Create Item"}</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
