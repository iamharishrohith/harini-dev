"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { 
  personalInfo as defaultPersonalInfo, 
  projectsData as defaultProjects, 
  galleryItems as defaultGallery, 
  skillsData as defaultSkills, 
  experienceData as defaultExperience, 
  educationData as defaultEducation, 
  certificationsData as defaultCertifications 
} from "../data/portfolioData";

export const defaultArticles = [
  {
    id: "art-1",
    title: "Optimizing Asynchronous Python Endpoints for Multi-Tenant LLM Dialogue: 40% Latency Drop",
    date: "August 2026",
    readTime: "6 min read",
    summary: "A deep dive into building non-blocking FastAPI and AsyncIO queue dispatchers to eliminate prompt request starvation across high-throughput institutional conversational agents.",
    tags: ["AsyncIO", "LLM Optimization", "FastAPI", "Python", "System Design"],
    featured: true,
    link: "https://github.com/harini-k-dev"
  },
  {
    id: "art-2",
    title: "Stateful Relational Caching for Low-Latency Multi-Turn Dialogue Systems",
    date: "May 2026",
    readTime: "5 min read",
    summary: "Architecting a dual-tier caching layer combining indexed MySQL session logs and in-memory key-value state to accelerate OpenAI multi-turn conversation turnaround.",
    tags: ["MySQL", "OpenAI API", "Caching", "State Management"],
    featured: true,
    link: "https://github.com/harini-k-dev"
  },
  {
    id: "art-3",
    title: "Technical Paper: AI Agent Architectures for High-Concurrency Academic Workflows",
    date: "February 2026",
    readTime: "8 min read",
    summary: "Research presentation awarded Runner-Up at Rathinam Grand Fest (RGF 2026), examining multi-agent routing algorithms and latency trade-offs in enterprise dialogue automation.",
    tags: ["Research Paper", "Agentic AI", "Academic R&D", "RGF 2026"],
    featured: false,
    link: "https://github.com/harini-k-dev"
  },
  {
    id: "art-4",
    title: "Vectorized Numerical Computations with NumPy in Enterprise Record Engines",
    date: "November 2025",
    readTime: "4 min read",
    summary: "Benchmarking Python array vectorization vs iterative loops for high-volume academic record evaluation and grade batching.",
    tags: ["NumPy", "Data Architecture", "Python Performance"],
    featured: false,
    link: "https://github.com/harini-k-dev"
  },
  {
    id: "art-5",
    title: "Designing Robust Role-Based Access Control (RBAC) in Full-Stack Web Applications",
    date: "July 2025",
    readTime: "5 min read",
    summary: "Implementation patterns for JWT authentication, database permission mapping, and frontend route protection in modern React and Node.js applications.",
    tags: ["Security", "Full Stack", "React", "Node.js"],
    featured: false,
    link: "https://github.com/harini-k-dev"
  }
];

export const defaultInquiries = [
  {
    id: 1,
    sender: "Apex AI Labs (Talent Acquisition)",
    email: "recruiting@apexailabs.io",
    date: "2026-09-28",
    scope: "Full-time Forward Deployed AI Engineer role for multi-agent enterprise deployment.",
    status: "Unread"
  },
  {
    id: 2,
    sender: "Venture Systems Consulting",
    email: "director@venturesystems.com",
    date: "2026-09-27",
    scope: "Consulting engagement on optimizing asynchronous Python pipelines and LLM context caching.",
    status: "Replied"
  }
];

const PortfolioContext = createContext(null);

export function PortfolioProvider({ children }) {
  const [isLoaded, setIsLoaded] = useState(false);

  const [personalInfo, setPersonalInfo] = useState(defaultPersonalInfo);
  const [projects, setProjects] = useState(defaultProjects);
  const [gallery, setGallery] = useState(defaultGallery);
  const [skills, setSkills] = useState(defaultSkills);
  const [experience, setExperience] = useState(defaultExperience);
  const [education, setEducation] = useState(defaultEducation);
  const [certifications, setCertifications] = useState(defaultCertifications);
  const [articles, setArticles] = useState(defaultArticles);
  const [inquiries, setInquiries] = useState(defaultInquiries);

  // Load from localStorage on mount
  useEffect(() => {
    try {
      const storedData = localStorage.getItem("fde_portfolio_full_store");
      if (storedData) {
        const parsed = JSON.parse(storedData);
        if (parsed.personalInfo) setPersonalInfo(parsed.personalInfo);
        if (parsed.projects) setProjects(parsed.projects);
        if (parsed.gallery) setGallery(parsed.gallery);
        if (parsed.skills) setSkills(parsed.skills);
        if (parsed.experience) setExperience(parsed.experience);
        if (parsed.education) setEducation(parsed.education);
        if (parsed.certifications) setCertifications(parsed.certifications);
        if (parsed.articles) setArticles(parsed.articles);
        if (parsed.inquiries) setInquiries(parsed.inquiries);
      }
    } catch (err) {
      console.error("Failed to load portfolio storage:", err);
    } finally {
      setIsLoaded(true);
    }
  }, []);

  // Save changes to localStorage whenever state changes
  useEffect(() => {
    if (!isLoaded) return;
    try {
      const payload = {
        personalInfo,
        projects,
        gallery,
        skills,
        experience,
        education,
        certifications,
        articles,
        inquiries
      };
      localStorage.setItem("fde_portfolio_full_store", JSON.stringify(payload));
    } catch (err) {
      console.error("Failed to save portfolio state:", err);
    }
  }, [personalInfo, projects, gallery, skills, experience, education, certifications, articles, inquiries, isLoaded]);

  // =========================================================================
  // 1. Profile & Metrics CRUD
  // =========================================================================
  const updateProfile = (updatedFields) => {
    setPersonalInfo(prev => ({ ...prev, ...updatedFields }));
  };

  const updateMetric = (index, updatedMetric) => {
    setPersonalInfo(prev => {
      const nextMetrics = [...prev.metrics];
      nextMetrics[index] = { ...nextMetrics[index], ...updatedMetric };
      return { ...prev, metrics: nextMetrics };
    });
  };

  // =========================================================================
  // 2. Projects / Deployments CRUD
  // =========================================================================
  const createProject = (newProj) => {
    const id = newProj.id || `proj-${Date.now()}`;
    setProjects(prev => [{ ...newProj, id }, ...prev]);
  };

  const updateProject = (id, updatedFields) => {
    setProjects(prev => prev.map(p => (p.id === id ? { ...p, ...updatedFields } : p)));
  };

  const deleteProject = (id) => {
    setProjects(prev => prev.filter(p => p.id !== id));
  };

  // =========================================================================
  // 3. Gallery Artifacts CRUD
  // =========================================================================
  const createGalleryItem = (newItem) => {
    const id = newItem.id || `g-${Date.now()}`;
    setGallery(prev => [{ ...newItem, id }, ...prev]);
  };

  const updateGalleryItem = (id, updatedFields) => {
    setGallery(prev => prev.map(g => (g.id === id ? { ...g, ...updatedFields } : g)));
  };

  const deleteGalleryItem = (id) => {
    setGallery(prev => prev.filter(g => g.id !== id));
  };

  // =========================================================================
  // 4. Skills & Competencies CRUD
  // =========================================================================
  const createSkill = (category, skill) => {
    setSkills(prev => {
      const catList = prev[category] ? [...prev[category]] : [];
      return {
        ...prev,
        [category]: [...catList, skill]
      };
    });
  };

  const updateSkill = (category, index, updatedSkill) => {
    setSkills(prev => {
      const catList = [...prev[category]];
      catList[index] = updatedSkill;
      return {
        ...prev,
        [category]: catList
      };
    });
  };

  const deleteSkill = (category, index) => {
    setSkills(prev => {
      const catList = prev[category].filter((_, i) => i !== index);
      return {
        ...prev,
        [category]: catList
      };
    });
  };

  const createSkillCategory = (categoryName) => {
    if (!categoryName) return;
    setSkills(prev => {
      if (prev[categoryName]) return prev;
      return { ...prev, [categoryName]: [] };
    });
  };

  const deleteSkillCategory = (categoryName) => {
    setSkills(prev => {
      const copy = { ...prev };
      delete copy[categoryName];
      return copy;
    });
  };

  // =========================================================================
  // 5. Experience CRUD
  // =========================================================================
  const createExperience = (newExp) => {
    setExperience(prev => [newExp, ...prev]);
  };

  const updateExperience = (index, updatedExp) => {
    setExperience(prev => {
      const next = [...prev];
      next[index] = updatedExp;
      return next;
    });
  };

  const deleteExperience = (index) => {
    setExperience(prev => prev.filter((_, i) => i !== index));
  };

  // =========================================================================
  // 6. Education & Certifications CRUD
  // =========================================================================
  const createEducation = (newEdu) => {
    setEducation(prev => [newEdu, ...prev]);
  };

  const updateEducation = (index, updatedEdu) => {
    setEducation(prev => {
      const next = [...prev];
      next[index] = updatedEdu;
      return next;
    });
  };

  const deleteEducation = (index) => {
    setEducation(prev => prev.filter((_, i) => i !== index));
  };

  const createCertification = (newCert) => {
    setCertifications(prev => [newCert, ...prev]);
  };

  const updateCertification = (index, updatedCert) => {
    setCertifications(prev => {
      const next = [...prev];
      next[index] = updatedCert;
      return next;
    });
  };

  const deleteCertification = (index) => {
    setCertifications(prev => prev.filter((_, i) => i !== index));
  };

  // =========================================================================
  // 7. Articles & Publications CRUD
  // =========================================================================
  const createArticle = (newArt) => {
    const id = newArt.id || `art-${Date.now()}`;
    setArticles(prev => [{ ...newArt, id }, ...prev]);
  };

  const updateArticle = (index, updatedArt) => {
    setArticles(prev => {
      const next = [...prev];
      next[index] = updatedArt;
      return next;
    });
  };

  const deleteArticle = (index) => {
    setArticles(prev => prev.filter((_, i) => i !== index));
  };

  // =========================================================================
  // 8. Client Inquiries CRUD (Contact Form -> Admin)
  // =========================================================================
  const addInquiry = (inquiryData) => {
    const newInq = {
      id: Date.now(),
      sender: inquiryData.name || "Direct Client",
      email: inquiryData.email,
      date: new Date().toISOString().split("T")[0],
      scope: inquiryData.message,
      status: "Unread"
    };
    setInquiries(prev => [newInq, ...prev]);
  };

  const toggleInquiryStatus = (id) => {
    setInquiries(prev => prev.map(inq => {
      if (inq.id === id) {
        return {
          ...inq,
          status: inq.status === "Unread" ? "Replied" : "Unread"
        };
      }
      return inq;
    }));
  };

  const deleteInquiry = (id) => {
    setInquiries(prev => prev.filter(inq => inq.id !== id));
  };

  // =========================================================================
  // 9. Global Reset, Export & Import
  // =========================================================================
  const resetToDefaults = () => {
    setPersonalInfo(defaultPersonalInfo);
    setProjects(defaultProjects);
    setGallery(defaultGallery);
    setSkills(defaultSkills);
    setExperience(defaultExperience);
    setEducation(defaultEducation);
    setCertifications(defaultCertifications);
    setArticles(defaultArticles);
    setInquiries(defaultInquiries);
    localStorage.removeItem("fde_portfolio_full_store");
  };

  const exportData = () => {
    const data = {
      personalInfo,
      projects,
      gallery,
      skills,
      experience,
      education,
      certifications,
      articles,
      inquiries,
      exportedAt: new Date().toISOString()
    };
    const jsonString = `data:text/json;charset=utf-8,${encodeURIComponent(JSON.stringify(data, null, 2))}`;
    const downloadAnchor = document.createElement("a");
    downloadAnchor.setAttribute("href", jsonString);
    downloadAnchor.setAttribute("download", `Harini_Portfolio_Backup_${new Date().toISOString().split("T")[0]}.json`);
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    downloadAnchor.remove();
  };

  const importData = (jsonData) => {
    try {
      const parsed = typeof jsonData === "string" ? JSON.parse(jsonData) : jsonData;
      if (parsed.personalInfo) setPersonalInfo(parsed.personalInfo);
      if (parsed.projects) setProjects(parsed.projects);
      if (parsed.gallery) setGallery(parsed.gallery);
      if (parsed.skills) setSkills(parsed.skills);
      if (parsed.experience) setExperience(parsed.experience);
      if (parsed.education) setEducation(parsed.education);
      if (parsed.certifications) setCertifications(parsed.certifications);
      if (parsed.articles) setArticles(parsed.articles);
      if (parsed.inquiries) setInquiries(parsed.inquiries);
      return { success: true };
    } catch (err) {
      console.error("Import error:", err);
      return { success: false, error: err.message };
    }
  };

  return (
    <PortfolioContext.Provider
      value={{
        isLoaded,
        personalInfo,
        projects,
        gallery,
        skills,
        experience,
        education,
        certifications,
        articles,
        inquiries,

        // CRUD Functions
        updateProfile,
        updateMetric,
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
      }}
    >
      {children}
    </PortfolioContext.Provider>
  );
}

export function usePortfolio() {
  const context = useContext(PortfolioContext);
  if (!context) {
    throw new Error("usePortfolio must be used within a PortfolioProvider");
  }
  return context;
}
