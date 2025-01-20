"use client";

import Link from "next/link";

export default function Home() {
  return (
    <div
      className="d-flex align-items-center justify-content-center vh-100"
      style={{
        backgroundImage: "url('/path-to-your-background-image.jpg')", // Remplacez par votre image de fond
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Conteneur noir */}
      <div
        className="bg-dark text-white rounded shadow-lg position-relative"
        style={{
          width: "calc(100% - 160px)", // Ajouter 80px de chaque côté horizontalement
          maxWidth: "1080px", // Limiter la largeur maximale
          padding: "80px", // Ajouter 80px de padding sur tous les côtés
        }}
      >
        <div className="row">
          {/* Section gauche */}
          <div
            className="col-md-6 d-flex flex-column justify-content-between text-white p-3"
            style={{ height: "100%" }}
          >
            {/* Logo et titre */}
            <div
              className="position-absolute"
              style={{
                top: "20px", // Ajustez pour définir la distance par rapport au haut
                left: "20px", // Ajustez pour définir la distance par rapport au bord gauche
              }}
            >
              <h1 className="fs-1 fw-bold mb-3">Archimmo</h1>
            </div>

            {/* Bouton Play Showreel */}
            <div className="d-flex flex-column align-items-center justify-content-center">
              <button
                className="btn btn-outline-light rounded-circle mb-2"
                style={{
                  width: "80px",
                  height: "80px",
                  fontSize: "24px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                ▶
              </button>
              <span className="text-light fw-semibold mt-2">Play Showreel</span>
            </div>
          </div>

          {/* Section droite */}
          <div
            className="col-md-6 border-start ps-md-4 d-flex flex-column justify-content-between"
            style={{ height: "100%" }}
          >
            <nav>
              <ul className="list-unstyled">
                <li className="mb-2">
                  <Link
                    href="/"
                    className="text-white text-decoration-none fs-5 hover:underline"
                  >
                    Home
                  </Link>
                </li>
                <li className="mb-2">
                  <Link
                    href="/projects"
                    className="text-white text-decoration-none fs-5 hover:underline"
                  >
                    Projects
                  </Link>
                </li>
                <li className="mb-2">
                  <Link
                    href="/services"
                    className="text-white text-decoration-none fs-5 hover:underline"
                  >
                    Services
                  </Link>
                </li>
                <li className="mb-2">
                  <Link
                    href="/about"
                    className="text-white text-decoration-none fs-5 hover:underline"
                  >
                    About
                  </Link>
                </li>
                <li className="mb-2">
                  <Link
                    href="/contact"
                    className="text-white text-decoration-none fs-5 hover:underline"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </nav>
            <footer>
              <p className="text-muted mb-1">
                Spatial Design | Visualisation | Interaction
              </p>
              <p className="text-muted mb-1">+31 (0)6-53734397</p>
              <p className="text-muted">mail@studiod.nu</p>
            </footer>
          </div>
        </div>
      </div>
    </div>
  );
}
