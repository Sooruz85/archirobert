"use client"; // Obligatoire pour utiliser les hooks comme useState dans Next.js 13+

import Link from "next/link";
import { useRef, useState } from "react";

export default function Home() {
  const videoRef = useRef(null); // Référence pour la vidéo
  const [language, setLanguage] = useState("en"); // État pour la langue

  // Gestion de la lecture/paus de la vidéo
  const handlePlayShowreel = () => {
    if (videoRef.current) {
      videoRef.current.paused ? videoRef.current.play() : videoRef.current.pause();
    }
  };

  // Traductions
  const translations = {
    en: {
      title: "Archimmo",
      showreel: "Play showreel",
      menu: ["Home", "Projects", "Services", "About", "Contact"],
      spatialDesign: "Spatial design",
      visualisation: "Visualisation",
      interaction: "Interaction",
    },
    fr: {
      title: "Archimmo",
      showreel: "Lire la vidéo",
      menu: ["Accueil", "Projets", "Services", "À propos", "Contact"],
      spatialDesign: "Design spatial",
      visualisation: "Visualisation",
      interaction: "Interaction",
    },
  };

  const content = translations[language]; // Contenu basé sur la langue

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        height: "100vh",
        margin: 0,
        padding: 0,
      }}
    >
      {/* Section gauche */}
      <div
        style={{
          flex: 1,
          position: "relative",
          overflow: "hidden",
        }}
      >
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            zIndex: -1,
          }}
        >
          <source src="/videos/jeune-fille-au-bananier.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <h1
          style={{
            position: "absolute",
            top: 20,
            left: 20,
            color: "white",
            fontSize: "24px",
            fontWeight: "bold",
          }}
        >
          {content.title}
        </h1>
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            textAlign: "center",
          }}
        >
          <button
            onClick={handlePlayShowreel}
            style={{
              width: 80,
              height: 80,
              borderRadius: "50%",
              backgroundColor: "rgba(255, 255, 255, 0.7)",
              border: "none",
              cursor: "pointer",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <span style={{ fontSize: "24px", fontWeight: "bold", color: "#000" }}>▶</span>
          </button>
          <p style={{ color: "white", marginTop: 10 }}>{content.showreel}</p>
        </div>
      </div>

      {/* Section droite */}
      <div
        style={{
          flex: 1,
          backgroundColor: "rgba(0, 0, 0, 0.8)",
          color: "white",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "40px",
        }}
      >
        {/* Menu */}
        <nav>
          <ul style={{ listStyleType: "none", padding: 0, margin: 0 }}>
            {content.menu.map((item, index) => (
              <li
                key={index}
                style={{
                  fontSize: "48px",
                  fontWeight: "bold",
                  marginBottom: index === content.menu.length - 1 ? 0 : "20px",
                }}
              >
                <Link
                  href={`/${item.toLowerCase()}`}
                  style={{ color: "white", textDecoration: "none" }}
                  onMouseEnter={(e) => (e.target.style.textDecoration = "underline")}
                  onMouseLeave={(e) => (e.target.style.textDecoration = "none")}
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Liens alignés à droite */}
        <div style={{ textAlign: "right", fontStyle: "italic" }}>
          {[content.spatialDesign, content.visualisation, content.interaction].map(
            (item, index) => (
              <a
                key={index}
                href="#"
                style={{
                  color: "white",
                  fontSize: "24px",
                  textDecoration: "none",
                  marginBottom: index === 2 ? 0 : "10px",
                  display: "block",
                }}
                onMouseEnter={(e) => (e.target.style.textDecoration = "underline")}
                onMouseLeave={(e) => (e.target.style.textDecoration = "none")}
              >
                {item}
              </a>
            )
          )}
        </div>

        {/* Footer */}
        <footer style={{ fontSize: "14px" }}>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            {/* Langues */}
<div>
  <a
    href="#"
    onClick={() => setLanguage("en")}
    style={{
      color: "white",
      textDecoration: "none",
      marginRight: "20px",
    }}
    onMouseEnter={(e) => (e.target.style.textDecoration = "underline")}
    onMouseLeave={(e) => (e.target.style.textDecoration = "none")}
  >
    English
  </a>
  <a
    href="#"
    onClick={() => setLanguage("fr")}
    style={{
      color: "white",
      textDecoration: "none",
    }}
    onMouseEnter={(e) => (e.target.style.textDecoration = "underline")}
    onMouseLeave={(e) => (e.target.style.textDecoration = "none")}
  >
    French
  </a>
</div>

            {/* Coordonnées */}
            <div style={{ textAlign: "right" }}>
              <p style={{ margin: "5px 0" }}>+31 (0)6-53734397</p>
              <p style={{ margin: "5px 0" }}>mail@studiod.nu</p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
