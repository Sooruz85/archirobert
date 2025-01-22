"use client";

import Link from "next/link";

export default function Services() {
  return (
    <div
      className="d-flex align-items-center justify-content-center vh-100"
      style={{
        backgroundImage: "url('/path-to-your-background-image.jpg')", // Image de fond
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Conteneur principal */}
      <div
        className="bg-dark text-white rounded shadow-lg position-relative"
        style={{
          width: "calc(100% - 160px)", // Réduction de la largeur globale
          maxWidth: "1080px", // Limitation de la largeur
          padding: "60px 40px", // Padding interne
          height: "500px", // Hauteur fixe pour que la taille reste constante
        }}
      >
        {/* Lien menu dans le coin supérieur droit */}
        <div
          className="position-absolute"
          style={{
            top: "10px",
            right: "10px", // Aligné à droite
          }}
        >
          <Link href="/">
            <img
              src="/menu-icon.svg" // Icône du menu
              alt="Menu"
              style={{
                width: "40px",
                height: "40px",
                cursor: "pointer",
              }}
            />
          </Link>
        </div>

        <div className="row h-100">
          {/* Section gauche */}
          <div
            className="col-md-6 d-flex flex-column justify-content-start align-items-center text-white p-3 position-relative"
            style={{
              height: "100%",
            }}
          >
            {/* Titre aligné avec le logo menu */}
            <h1
              className="fs-1 fw-bold position-absolute"
              style={{
                top: "10px", // Même niveau que le logo menu
                left: "50%", // Centré horizontalement
                transform: "translateX(-50%)", // Correction pour le centrer précisément
              }}
            >
              Services
            </h1>
          </div>

          {/* Section droite */}
          <div
            className="col-md-6 border-start ps-md-4 d-flex flex-column justify-content-between"
            style={{ height: "100%" }}
          >
            {/* Section droite vide */}
          </div>
        </div>
      </div>
    </div>
  );
}
