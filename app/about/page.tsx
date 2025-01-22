"use client";

import Link from "next/link";

export default function About() {
  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundImage: "url('/path-to-your-background-image.jpg')", // Image de fond
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Conteneur principal */}
      <div
        className="rounded shadow-lg position-relative"
        style={{
          backgroundColor: "#f9f5f0", // Couleur de fond beige
          width: "calc(100% - 160px)", // Réduction de la largeur globale
          maxWidth: "1080px",
          padding: "40px",
          borderRadius: "12px",
        }}
      >
        {/* Titre "Studio D" */}
        <h1
          style={{
            fontSize: "24px",
            fontWeight: "bold",
            marginBottom: "20px",
          }}
        >
          About
        </h1>

        {/* Texte principal */}
        <div style={{ marginBottom: "20px" }}>
          <p
            style={{
              fontSize: "18px",
              fontStyle: "italic",
              marginBottom: "10px",
            }}
          >
            Driven by culture
          </p>
          <h2
            style={{
              fontSize: "36px",
              fontWeight: "bold",
              lineHeight: "1.2",
            }}
          >
            We are united in the pursuit of excellence and the belief in the
            power of our people.
          </h2>
        </div>

        {/* Image et citation */}
        <div style={{ display: "flex", marginTop: "20px" }}>
          {/* Image */}
          <div style={{ flex: 1, marginRight: "20px" }}>
            <img
              src="/path-to-your-image.jpg" // Remplacez par le chemin de votre image
              alt="About Image"
              style={{
                width: "100%",
                borderRadius: "8px",
              }}
            />
          </div>

          {/* Citation */}
          <div style={{ flex: 1 }}>
            <blockquote
              style={{
                fontStyle: "italic",
                fontSize: "16px",
              }}
            >
              "In our heart lies a deep passion for design, technology, and
              nature."
            </blockquote>
            <hr
              style={{
                marginTop: "10px",
                border: "none",
                borderTop: "1px solid #ccc",
              }}
            />
          </div>
        </div>

        {/* Icône menu */}
        <div
          style={{
            position: "absolute",
            top: "10px",
            right: "10px",
            cursor: "pointer",
            width: "40px",
            height: "40px",
            backgroundColor: "black",
            borderRadius: "50%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Link href="/">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="white"
              style={{
                width: "20px",
                height: "20px",
              }}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5"
              />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
}
