"use client";

import Link from "next/link";

export default function Projects() {
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
        style={{
          backgroundColor: "#f9f5f0", // Couleur de fond beige
          width: "calc(100% - 160px)",
          maxWidth: "1080px",
          padding: "40px",
          borderRadius: "12px",
          position: "relative",
        }}
      >
        {/* Titre en haut à gauche */}
        <h1
          style={{
            fontSize: "24px",
            fontWeight: "bold",
            marginBottom: "20px",
          }}
        >
          Studio D
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
            Spatial design, Visualisation & Interaction
          </p>
          <h2
            style={{
              fontSize: "48px",
              fontWeight: "bold",
              lineHeight: "1.2",
              marginBottom: "20px",
            }}
          >
            Designing for today, building for tomorrow
          </h2>
        </div>

        {/* Image */}
        <div style={{ marginTop: "20px" }}>
          <img
            src="/path-to-your-image.jpg" // Remplacez par le chemin de votre image
            alt="Projects Image"
            style={{
              width: "100%",
              borderRadius: "8px",
            }}
          />
        </div>

        {/* Texte "Scroll to explore" à gauche */}
        <p
          style={{
            position: "absolute",
            left: "-50px",
            top: "50%",
            transform: "rotate(-90deg)",
            fontSize: "14px",
            fontWeight: "bold",
            color: "#333",
          }}
        >
          Scroll to explore
        </p>

        {/* Icône menu en haut à droite */}
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
