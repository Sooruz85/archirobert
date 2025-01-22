"use client";

import Link from "next/link";

export default function Home() {
  return (
    <div
      className="d-flex vh-100"
      style={{
        display: "flex",
        height: "100vh",
        width: "100%",
      }}
    >
      {/* Section gauche */}
      <div
        className="position-relative"
        style={{
          flex: 1,
          backgroundImage: "url('/path-to-your-image-or-video.jpg')", // Chemin vers l'image ou vidéo
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Titre */}
        <h1
          style={{
            position: "absolute",
            top: "20px",
            left: "20px",
            color: "white",
            fontSize: "24px",
            fontWeight: "bold",
          }}
        >
          Studio D
        </h1>

        {/* Bouton "Play Showreel" */}
        <div
          className="d-flex flex-column align-items-center justify-content-center"
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            textAlign: "center",
          }}
        >
          <button
            style={{
              width: "80px",
              height: "80px",
              borderRadius: "50%",
              backgroundColor: "rgba(255, 255, 255, 0.7)",
              border: "none",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
            }}
          >
            <span style={{ fontSize: "24px", fontWeight: "bold", color: "#000" }}>▶</span>
          </button>
          <span style={{ marginTop: "10px", color: "white" }}>Play showreel</span>
        </div>
      </div>

      {/* Section droite */}
      <div
        style={{
          flex: 1,
          backgroundColor: "black",
          color: "white",
          padding: "40px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        {/* Menu */}
        <nav>
          <ul style={{ listStyleType: "none", padding: 0 }}>
            {["Home", "Projects", "Services", "About", "Contact"].map((item) => (
              <li
                key={item}
                style={{
                  marginBottom: "20px",
                  fontSize: "24px",
                  fontWeight: "bold",
                }}
              >
                <Link
                  href={`/${item.toLowerCase()}`}
                  style={{
                    color: "white",
                    textDecoration: "none",
                  }}
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Bas de page */}
        <footer style={{ fontSize: "14px" }}>
          <div>
            <p>English</p>
            <p>Nederlands</p>
          </div>
          <div style={{ marginTop: "20px" }}>
            <p>Spatial design</p>
            <p>Visualisation</p>
            <p>Interaction</p>
          </div>
          <div style={{ marginTop: "20px" }}>
            <p>+31 (0)6-53734397</p>
            <p>mail@studiod.nu</p>
          </div>
        </footer>
      </div>
    </div>
  );
}
