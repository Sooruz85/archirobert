"use client";

import Link from "next/link";
import Image from "next/image";

export default function Services() {
  const services = [
    {
      title: "Architecture & Design",
      description:
        "Nous concevons des espaces innovants, fonctionnels et esthétiques. Chaque projet architectural est pensé pour s'intégrer harmonieusement à son environnement.",
      image: "/images/architecture.jpg",
    },
    {
      title: "Promotion Immobilière",
      description:
        "De la conception à la commercialisation, nous développons des projets immobiliers de qualité, alliant innovation et viabilité économique.",
      image: "/images/promotion.jpg",
    },
    {
      title: "Vente & Conseil",
      description:
        "Nous accompagnons nos clients dans la vente et l'acquisition de biens immobiliers en apportant notre expertise et une approche personnalisée.",
      image: "/images/vente.jpg",
    },
  ];

  return (
    <div className="services-container">

      {/* Conteneur de tous les services */}
      <div className="services-page">
        {services.map((service, index) => (
          <section key={index} className="service-section">
            <div className="service-content">
              {/* Titre du service */}
              <h2 className="service-title">{service.title}</h2>

              {/* Image */}
              <div className="service-image">
                <Image
                  src={service.image}
                  alt={service.title}
                  width={600}
                  height={400}
                  className="rounded-lg shadow-md"
                  priority={index === 0}
                />
              </div>

              {/* Description */}
              <p className="service-description">{service.description}</p>
            </div>
          </section>
        ))}
      </div>

      {/* Icône menu en haut à droite */}
      <div className="menu-icon">
        <Link href="/">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="white"
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
  );
}
