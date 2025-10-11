// app/not-found.js
import Link from "next/link";

export default function NotFound() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        textAlign: "center",
      }}
    >
      <h1 style={{ fontSize: "3rem", marginBottom: "1rem", color: "#fff" }}>
        404 - Page Not Found
      </h1>
      <p style={{ marginBottom: "1.5rem", color: "#ccc" }}>
        Sorry, the page you are looking for does not exist.
      </p>
      <Link
        href="/"
        style={{
          backgroundColor: "#0070f3",
          color: "#fff",
          padding: "10px 20px",
          textDecoration: "none",
        }}
      >
        Go Back Home
      </Link>
    </div>
  );
}
