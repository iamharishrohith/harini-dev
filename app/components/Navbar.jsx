"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
import { usePortfolio } from "../context/PortfolioContext";
import { Github, Linkedin, Mail, Menu, X, FileText, Lock } from "lucide-react";

export default function Navbar() {
  const { personalInfo } = usePortfolio();
  const router = useRouter();
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  
  // Stealth Admin Trigger States
  const clickCountRef = useRef(0);
  const clickTimerRef = useRef(null);
  const [stealthUnlocked, setStealthUnlocked] = useState(false);

  // Secret Chord Sequence State for Ctrl + Shift + H + K
  const lastKeyRef = useRef({ key: "", time: 0 });

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Process", href: "/process" },
    { name: "Projects", href: "/projects" },
    { name: "Gallery", href: "/gallery" },
    { name: "Articles", href: "/articles" },
    { name: "Contact", href: "/contact" }
  ];

  // 1. Secret Keyboard Shortcut: Ctrl + Shift + H followed by K (or Ctrl + Shift + HK)
  useEffect(() => {
    const handleKeyDown = (e) => {
      const isCtrlOrMeta = e.ctrlKey || e.metaKey;
      const isShift = e.shiftKey;
      const key = e.key.toLowerCase();

      // Check if user is pressing H with Ctrl + Shift
      if (isCtrlOrMeta && isShift && key === "h") {
        lastKeyRef.current = { key: "h", time: Date.now() };
      } 
      // Check if K is pressed within 2 seconds after H while holding Ctrl/Shift or as sequence
      else if (
        key === "k" && 
        lastKeyRef.current.key === "h" && 
        (Date.now() - lastKeyRef.current.time < 2000)
      ) {
        e.preventDefault();
        lastKeyRef.current = { key: "", time: 0 };
        setStealthUnlocked(true);
        setTimeout(() => {
          router.push("/admin");
        }, 700);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [router]);

  // 2. Secret Triple-Click on the "HK" Monogram Logo
  const handleLogoSecretClick = (e) => {
    clickCountRef.current += 1;
    if (clickTimerRef.current) clearTimeout(clickTimerRef.current);

    if (clickCountRef.current >= 3) {
      e.preventDefault();
      clickCountRef.current = 0;
      setStealthUnlocked(true);
      setTimeout(() => {
        router.push("/admin");
      }, 700);
    } else {
      clickTimerRef.current = setTimeout(() => {
        clickCountRef.current = 0;
      }, 800);
    }
  };

  return (
    <header style={{
      width: "100%",
      padding: "32px 0",
      position: "relative",
      zIndex: 40
    }}>
      <div className="content-container" style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        position: "relative"
      }}>
        {/* Left: Navigation Links */}
        <nav style={{
          display: "flex",
          alignItems: "center",
          gap: "22px"
        }} className="desktop-links">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link 
                key={link.href} 
                href={link.href}
                className={`nav-link ${isActive ? "active" : ""}`}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>

        {/* Center: Monogram Avatar Logo with Stealth Triple-Click Access */}
        <div style={{
          position: "absolute",
          left: "50%",
          top: "50%",
          transform: "translate(-50%, -50%)"
        }}>
          <Link 
            href="/"
            onClick={handleLogoSecretClick}
            className="logo-badge"
            title="Harini K (Shortcut: Ctrl + Shift + H + K)"
          >
            HK
          </Link>
        </div>

        {/* Right: Social Links & Resume */}
        <div style={{
          display: "flex",
          alignItems: "center",
          gap: "18px"
        }} className="desktop-socials">
          <a 
            href={personalInfo.github} 
            target="_blank" 
            rel="noopener noreferrer"
            aria-label="GitHub Profile"
            className="social-icon-btn"
            style={{ color: "#1e293b" }}
          >
            <Github size={20} />
          </a>

          <a 
            href={personalInfo.linkedin} 
            target="_blank" 
            rel="noopener noreferrer"
            aria-label="LinkedIn Profile"
            className="social-icon-btn"
            style={{ color: "#0077b5" }}
          >
            <Linkedin size={20} />
          </a>

          <a 
            href={`mailto:${personalInfo.email}`} 
            aria-label="Send Email"
            className="social-icon-btn"
            style={{ color: "#e11d48" }}
          >
            <Mail size={20} />
          </a>

          <a 
            href="/Harini_K_Resume.pdf"
            download="Harini_K_Resume.pdf"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "6px",
              padding: "7px 16px",
              borderRadius: "8px",
              background: "linear-gradient(135deg, #eef2ff 0%, #ede9fe 100%)",
              border: "1px solid #c7d2fe",
              fontSize: "0.875rem",
              fontWeight: "700",
              color: "#4f46e5",
              boxShadow: "0 2px 6px rgba(79, 70, 229, 0.12)",
              transition: "all 0.2s ease"
            }}
          >
            <FileText size={15} />
            <span>CV</span>
          </a>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          style={{
            display: "none",
            alignItems: "center",
            justifyContent: "center",
            width: "40px",
            height: "40px",
            borderRadius: "8px",
            background: "#f8fafc",
            border: "1px solid #e2e8f0",
            color: "#1b1b1b"
          }}
          className="mobile-toggle"
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Secret Trigger Animation Flash */}
      {stealthUnlocked && (
        <div style={{
          position: "fixed",
          top: "20px",
          left: "50%",
          transform: "translateX(-50%)",
          background: "#1b1b1b",
          color: "#ffffff",
          padding: "10px 20px",
          borderRadius: "9999px",
          boxShadow: "0 10px 30px rgba(0,0,0,0.3)",
          display: "flex",
          alignItems: "center",
          gap: "8px",
          fontSize: "0.875rem",
          fontWeight: "700",
          zIndex: 200
        }}>
          <Lock size={16} color="#10b981" />
          <span>FDE Stealth Access [HK Code Accepted]... Routing to Admin</span>
        </div>
      )}

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div style={{
          position: "fixed",
          inset: 0,
          background: "rgba(255, 255, 255, 0.98)",
          zIndex: 100,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: "24px",
          padding: "24px"
        }}>
          <button 
            onClick={() => setMobileOpen(false)}
            style={{ position: "absolute", top: "32px", right: "32px", padding: "8px" }}
          >
            <X size={28} />
          </button>

          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              style={{ fontSize: "1.5rem", fontWeight: "700", color: "#1b1b1b" }}
            >
              {link.name}
            </Link>
          ))}

          <div style={{ display: "flex", gap: "20px", marginTop: "16px" }}>
            <a href={personalInfo.github} target="_blank" rel="noopener noreferrer"><Github size={24} /></a>
            <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer"><Linkedin size={24} color="#0077b5" /></a>
            <a href={`mailto:${personalInfo.email}`}><Mail size={24} /></a>
          </div>
        </div>
      )}
    </header>
  );
}
