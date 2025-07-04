import React from "react";
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const location = useLocation();
  return (
    <nav
      style={{
        background: "#222",
        padding: "16px",
        display: "flex",
        gap: "18px",
        justifyContent: "center"
      }}
    >

      <Link
        to="/text-transform"
        style={{
          color: "#fff",
          textDecoration: "none",
          fontWeight: "bold",
          padding: "6px 16px",
          borderRadius: "6px",
          background: location.pathname === "/text-transform" ? "#4caf50" : "transparent",
          transition: "background 0.2s"
        }}
      >
        Text Transformer
      </Link>
      <Link
        to="/star-rating"
        style={{
          color: "#fff",
          textDecoration: "none",
          fontWeight: "bold",
          padding: "6px 16px",
          borderRadius: "6px",
          background: location.pathname === "/star-rating" ? "#4caf50" : "transparent",
          transition: "background 0.2s"
        }}
      >
        Star Rating
      </Link>
      <Link
        to="/telephone"
        style={{
          color: "#fff",
          textDecoration: "none",
          fontWeight: "bold",
          padding: "6px 16px",
          borderRadius: "6px",
          background: location.pathname === "/telephone" ? "#4caf50" : "transparent",
          transition: "background 0.2s"
        }}
      >
        Telephone Formatter
      </Link>
      <Link
        to="/traffic"
        style={{
          color: "#fff",
          textDecoration: "none",
          fontWeight: "bold",
          padding: "6px 16px",
          borderRadius: "6px",
          background: location.pathname === "/traffic" ? "#4caf50" : "transparent",
          transition: "background 0.2s"
        }}
      >
        Traffic Light
      </Link>
      <Link
        to="/password"
        style={{
          color: "#fff",
          textDecoration: "none",
          fontWeight: "bold",
          padding: "6px 16px",
          borderRadius: "6px",
          background: location.pathname === "/password" ? "#4caf50" : "transparent",
          transition: "background 0.2s"
        }}
      >
        Password Checker
      </Link>
    </nav>
  );
}
