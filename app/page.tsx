"use client";

import Link from "next/link";
import { useRef, useState } from "react";

export default function Home() {
  const videoRef = useRef(null);
  const [language, setLanguage] = useState("en");

  const handlePlayShowreel = () => {
    if (videoRef.current) {
      videoRef.current.paused ? videoRef.current.play() : videoRef.current.pause();
    }
  };

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

  const content = translations[language];

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        height: "100vh",
        padding: "40px", // Réduction du padding pour plus d’espace
        boxSizing: "border-box",
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
      </div>

      {/* Section droite optimisée */}
      <div
        style={{
          flex: 1,
          backgroundColor: "black",
          color: "white",
          display: "grid",
          gridTemplateRows: "auto 1fr auto",
          padding: "30px",
          height: "100%",
        }}
      >
        {/* Menu (Haut) */}
        <nav>
          <ul style={{ listStyleType: "none", padding: 0, margin: 0 }}>
            {content.menu.map((item, index) => (
              <li
                key={index}
                style={{
                  fontSize: "46px", // Réduction de la taille du menu
                  fontWeight: "bold",
                  marginBottom: index === content.menu.length - 1 ? 0 : "10px",
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

 {/* Liens en italique alignés à droite */}
<div
  style={{
    textAlign: "right", // ✅ Assure l'alignement à droite
    fontStyle: "italic",
    alignSelf: "center",
    marginLeft: "auto", // ✅ Pousse la section tout à droite
    width: "fit-content",
    marginTop: "-240px" // ✅ Empêche la zone de clic de dépasser
  }}
>
  {[content.spatialDesign, content.visualisation, content.interaction].map(
    (item, index) => (
      <a
        key={index}
        href="#"
        style={{
          color: "white",
          fontSize: "18px",
          textDecoration: "none",
          marginBottom: index === 2 ? 0 : "5px",
          display: "block", // ✅ Garde les liens empilés
          width: "fit-content", // ✅ Empêche la zone de clic de dépasser
        }}
        onMouseEnter={(e) => (e.target.style.textDecoration = "underline")}
        onMouseLeave={(e) => (e.target.style.textDecoration = "none")}
      >
        {item}
      </a>
    )
  )}
</div>



        {/* Bas de page (Langues + Coordonnées alignés en `space-between`) */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          {/* Langues (Aligné à gauche) */}
          <div>
            <a
              href="#"
              onClick={() => setLanguage("en")}
              style={{
                display: "block",
                color: "white",
                textDecoration: "none",
                fontSize: "12px",
                marginBottom: "5px",
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
                display: "block",
                color: "white",
                textDecoration: "none",
                fontSize: "12px",
              }}
              onMouseEnter={(e) => (e.target.style.textDecoration = "underline")}
              onMouseLeave={(e) => (e.target.style.textDecoration = "none")}
            >
              French
            </a>
          </div>

          {/* Coordonnées (Aligné à droite) */}
          <div style={{ textAlign: "right" }}>
            <p style={{ margin: "5px 0", fontSize: "12px" }}>+31 (0)6-53734397</p>
            <p style={{ margin: "5px 0", fontSize: "12px" }}>mail@studiod.nu</p>
          </div>
        </div>
      </div>
    </div>
  );
}
