"use client";

import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HireMeBadge from "../components/HireMeBadge";
import ProcessFlow from "../components/ProcessFlow";

export default function ProcessPage() {
  return (
    <div className="page-wrapper">
      <Navbar />

      <main className="content-container" style={{ padding: "40px 32px 80px 32px" }}>
        <ProcessFlow />
      </main>

      <HireMeBadge />
      <Footer />
    </div>
  );
}
