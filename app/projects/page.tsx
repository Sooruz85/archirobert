"use client";

import Link from "next/link";
import Image from "next/image";

export default function Projects() {
  const projects = [
    {
      title: "Innovative Architecture",
      description:
        "Blending modern aesthetics with functional design. Our architectural vision enhances spaces with sustainable solutions. Each project tells a unique story of innovation.",
      image: "/images/project1.jpg",
    },
    {
      title: "Immersive Interiors",
      description:
        "Creating atmospheres that inspire and engage. We combine textures, light, and materials for timeless interior spaces. Elegance and comfort are at the heart of our work.",
      image: "/images/project2.jpg",
    },
    {
      title: "Smart Urban Planning",
      description:
        "Designing cities for the future. We develop intelligent and adaptive spaces for urban living. Sustainability and accessibility guide every decision.",
      image: "/images/project3.jpg",
    },
  ];

  return (
    <div className="projects-container mx-16 my-16 max-w-[calc(100%-120px)] h-screen overflow-y-scroll scrollbar-hidden">
      {/* ✅ Un seul conteneur avec scroll activé et barre masquée */}

      {projects.map((project, index) => (
        <section key={index} className="project-section h-screen">
          <div className="project-content">
            {/* Titre du projet */}
            <h2 className="project-title">{project.title}</h2>

            {/* Image */}
            <div className="project-image">
              <Image
                src={project.image}
                alt={project.title}
                width={600}
                height={400}
                className="rounded-lg shadow-md"
                priority={index === 0} // Charge la première image en priorité
              />
            </div>

            {/* Description */}
            <p className="project-description">{project.description}</p>
          </div>
        </section>
      ))}

      {/* Icône menu en haut à droite */}
      <div className="menu-icon fixed top-5 right-5">
        <Link href="/">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="white"
            className="w-6 h-6"
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
