import Link from "next/link";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export default function NotFound() {
  return (
    <div className="page-wrapper">
      <Navbar />
      <main className="content-container" style={{
        flex: 1,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        padding: "80px 24px"
      }}>
        <h1 style={{ fontSize: "5rem", fontWeight: "800", color: "#1b1b1b" }}>404</h1>
        <h2 style={{ fontSize: "1.75rem", fontWeight: "700", marginBottom: "16px", color: "#1b1b1b" }}>Page Not Found</h2>
        <p style={{ fontSize: "1.05rem", color: "var(--text-secondary)", marginBottom: "28px" }}>
          The deployment or page you are looking for does not exist.
        </p>
        <Link href="/" className="btn-dark">
          Return Home
        </Link>
      </main>
      <Footer />
    </div>
  );
}
