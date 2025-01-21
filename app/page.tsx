"use client";

import Link from "next/link";

export default function Home() {
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
      top: "10px",
      left: "10px",
      padding: "10px", // Padding interne
      borderRadius: "8px", // Coins arrondis pour un effet moderne
    }}
    >
    <h1 className="fs-1 fw-bold mb-2">Archimmo</h1>

  </div>



          </div>

          {/* Section droite */}
          <div
            className="col-md-6 border-start ps-md-4 d-flex flex-column justify-content-between"
            style={{ height: "100%" }}
          >
            {/* Navigation */}
            <nav>
              <ul className="list-unstyled">
                {[
                  { href: "/", label: "Home" },
                  { href: "/projects", label: "Projects" },
                  { href: "/services", label: "Services" },
                  { href: "/about", label: "About" },
                  { href: "/contact", label: "Contact" },
                ].map((item) => (
                  <li className="mb-3" key={item.label}>
                    <Link
                      href={item.href}
                      className="text-white text-decoration-none fs-5 hover:underline"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            {/* Footer */}
            <footer className="footer-text">
              <p className="mb-1">
                Spatial Design | Visualisation | Interaction
              </p>
              <p className="mb-1">+31 (0)6-53734397</p>
              <p>mail@studiod.nu</p>
            </footer>
          </div>
        </div>
      </div>
    </div>
  );
}
