"use client";

import React, { useState, useRef, useEffect } from "react";
import { terminalCommands } from "../data/portfolioData";
import { X, CornerDownLeft } from "lucide-react";

export default function AgentTerminal({ isOpen, onClose }) {
  const [history, setHistory] = useState([
    { type: "system", text: " Harini-AI Forward Deployed Terminal v2.4 initialized." },
    { type: "system", text: "Type 'help' or click any prompt pill below to test live diagnostics." }
  ]);
  const [input, setInput] = useState("");
  const bottomRef = useRef(null);

  const quickCommands = ["fde-info", "deploy-astro", "test-zara", "skills", "metrics", "contact"];

  const handleCommand = (cmdText) => {
    const trimmed = (cmdText || input).trim().toLowerCase();
    if (!trimmed) return;

    if (trimmed === "clear") {
      setHistory([
        { type: "system", text: "Console cleared. Type 'help' for options." }
      ]);
      setInput("");
      return;
    }

    const newHistory = [...history, { type: "user", text: trimmed }];

    if (terminalCommands[trimmed]) {
      newHistory.push({ type: "output", text: terminalCommands[trimmed] });
    } else {
      newHistory.push({
        type: "output",
        text: `Command not recognized: '${trimmed}'. Type 'help' for available diagnostic commands.`
      });
    }

    setHistory(newHistory);
    setInput("");
  };

  useEffect(() => {
    if (isOpen) {
      bottomRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [history, isOpen]);

  if (!isOpen) return null;

  return (
    <div style={{
      position: "fixed",
      inset: 0,
      background: "rgba(15, 23, 42, 0.4)",
      backdropFilter: "blur(12px)",
      WebkitBackdropFilter: "blur(12px)",
      zIndex: 200,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      padding: "20px"
    }}>
      <div style={{
        width: "100%",
        maxWidth: "760px",
        background: "#0f172a",
        borderRadius: "20px",
        border: "1px solid rgba(99, 102, 241, 0.3)",
        boxShadow: "0 25px 60px -12px rgba(0, 0, 0, 0.5), 0 0 30px rgba(99, 102, 241, 0.2)",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        height: "560px",
        fontFamily: "var(--font-mono)"
      }}>
        {/* Terminal Header */}
        <div style={{
          background: "#1e293b",
          padding: "14px 20px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          borderBottom: "1px solid rgba(255, 255, 255, 0.08)"
        }}>
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <div style={{ display: "flex", gap: "6px" }}>
              <div style={{ width: "12px", height: "12px", borderRadius: "50%", background: "#ef4444" }} />
              <div style={{ width: "12px", height: "12px", borderRadius: "50%", background: "#f59e0b" }} />
              <div style={{ width: "12px", height: "12px", borderRadius: "50%", background: "#10b981" }} />
            </div>
            <span style={{ fontSize: "0.8125rem", color: "#94a3b8", fontWeight: "600", marginLeft: "8px" }}>
              harini-fde-ai@production-cluster:~$
            </span>
          </div>

          <button 
            onClick={onClose}
            style={{ color: "#94a3b8", display: "flex", alignItems: "center", justifyContent: "center" }}
          >
            <X size={18} />
          </button>
        </div>

        {/* Console Log Area */}
        <div style={{
          flex: 1,
          padding: "20px",
          overflowY: "auto",
          display: "flex",
          flexDirection: "column",
          gap: "12px",
          fontSize: "0.875rem",
          color: "#e2e8f0"
        }}>
          {history.map((item, idx) => (
            <div key={idx} style={{ lineHeight: "1.6" }}>
              {item.type === "system" && (
                <div style={{ color: "#38bdf8" }}>{item.text}</div>
              )}
              {item.type === "user" && (
                <div style={{ color: "#a855f7" }}>
                  <span style={{ color: "#64748b" }}>&gt; </span>{item.text}
                </div>
              )}
              {item.type === "output" && (
                <div style={{
                  color: "#cbd5e1",
                  whiteSpace: "pre-line",
                  background: "rgba(255, 255, 255, 0.03)",
                  padding: "8px 12px",
                  borderRadius: "8px",
                  borderLeft: "3px solid #6366f1"
                }}>
                  {item.text}
                </div>
              )}
            </div>
          ))}
          <div ref={bottomRef} />
        </div>

        {/* Quick Command Pills */}
        <div style={{
          padding: "10px 20px",
          background: "#131e33",
          borderTop: "1px solid rgba(255, 255, 255, 0.05)",
          display: "flex",
          gap: "8px",
          flexWrap: "wrap",
          alignItems: "center"
        }}>
          <span style={{ fontSize: "0.75rem", color: "#64748b" }}>Quick Diagnostic:</span>
          {quickCommands.map((cmd) => (
            <button
              key={cmd}
              onClick={() => handleCommand(cmd)}
              style={{
                fontSize: "0.75rem",
                padding: "4px 10px",
                borderRadius: "6px",
                background: "rgba(99, 102, 241, 0.15)",
                color: "#a5b4fc",
                border: "1px solid rgba(99, 102, 241, 0.3)",
                transition: "all 0.15s ease"
              }}
            >
              {cmd}
            </button>
          ))}
        </div>

        {/* Input Form */}
        <form 
          onSubmit={(e) => { e.preventDefault(); handleCommand(); }}
          style={{
            padding: "14px 20px",
            background: "#0f172a",
            borderTop: "1px solid rgba(255, 255, 255, 0.08)",
            display: "flex",
            alignItems: "center",
            gap: "10px"
          }}
        >
          <span style={{ color: "#38bdf8", fontWeight: "700" }}>&gt;</span>
          <input 
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type a command (e.g. 'deploy-astro' or 'skills')..."
            style={{
              flex: 1,
              background: "transparent",
              border: "none",
              outline: "none",
              color: "#f8fafc",
              fontFamily: "var(--font-mono)",
              fontSize: "0.875rem"
            }}
          />
          <button 
            type="submit"
            style={{
              background: "#4f46e5",
              color: "#fff",
              padding: "6px 14px",
              borderRadius: "8px",
              display: "flex",
              alignItems: "center",
              gap: "6px",
              fontSize: "0.8125rem",
              fontWeight: "600"
            }}
          >
            <span>Execute</span>
            <CornerDownLeft size={14} />
          </button>
        </form>
      </div>
    </div>
  );
}
