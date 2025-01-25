"use client";

import Link from "next/link";
import { useRef } from "react";

export default function Home() {
  // Référence pour accéder à la vidéo
  const videoRef = useRef<HTMLVideoElement>(null);

  // Fonction pour démarrer ou mettre en pause la vidéo
  const handlePlayShowreel = () => {
    if (videoRef.current) {
      if (videoRef.current.paused) {
        videoRef.current.play(); // Joue la vidéo si elle est en pause
      } else {
        videoRef.current.pause(); // Met la vidéo en pause si elle joue déjà
      }
    }
  };

  return (
    <div
      className="d-flex vh-100"
      style={{
        display: "flex",
        height: "calc(100vh - 160px)", // Hauteur totale moins le padding vertical
        width: "calc(100% - 160px)", // Largeur totale moins le padding horizontal
        margin: "80px",
        boxSizing: "border-box", // Pour inclure le padding dans les dimensions
        backgroundColor: "transparent", // Fond transparent
      }}
    >
      {/* Section gauche */}
      <div
        className="position-relative"
        style={{
          flex: 1,
          overflow: "hidden", // Empêche le débordement
        }}
      >
        {/* Vidéo en arrière-plan */}
        <video
          ref={videoRef} // Référence à la vidéo
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
            objectFit: "cover", // La vidéo recouvre toute la section
            zIndex: -1, // Place la vidéo en arrière-plan
          }}
        >
          <source src="/videos/jeune-fille-au-bananier.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

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
          Archimmo
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
            onClick={handlePlayShowreel} // Appelle la fonction pour jouer ou mettre en pause la vidéo
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
          backgroundColor: "rgba(0, 0, 0, 0.8)", // Semi-transparent fond noir
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
            {["Home", "Projects", "Services", "About", "Contact"].map(
              (item, index) => (
                <li
                  key={item}
                  style={{
                    marginBottom: index === 4 ? "0" : "20px", // Espacement entre les items sauf le dernier
                    fontSize: "36px", // Taille du texte
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
              )
            )}
          </ul>
        </nav>

        {/* Bas de page */}
        <footer>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between", // Espace entre les colonnes
              alignItems: "flex-start",
            }}
          >
            {/* Langues */}
            <div>
              <p style={{ color: "white", fontSize: "14px" }}>English</p>
              <p style={{ color: "white", fontSize: "14px" }}>Nederlands</p>
            </div>

            {/* Services */}
            <div style={{ textAlign: "right" }}>
              <p style={{ color: "white", fontSize: "14px" }}>Spatial design</p>
              <p style={{ color: "white", fontSize: "14px" }}>Visualisation</p>
              <p style={{ color: "white", fontSize: "14px" }}>Interaction</p>
            </div>
          </div>

          {/* Coordonnées */}
          <div
            style={{
              textAlign: "center", // Centré horizontalement
              marginTop: "20px", // Espacement avec les colonnes au-dessus
            }}
          >
            <p style={{ color: "white", fontSize: "14px" }}>+31 (0)6-53734397</p>
            <p style={{ color: "white", fontSize: "14px" }}>
              mail@studiod.nu
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
}
