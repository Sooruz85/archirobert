"use client";

import Link from "next/link";

export default function MenuLogo() {
  return (
    <div style={{ position: "absolute", top: "10px", left: "10px" }}>
      <Link href="/">
        <img
          src="/menu-icon.svg" // Remplacez par le chemin de votre icône/menu
          alt="Menu"
          style={{
            width: "40px",
            height: "40px",
            cursor: "pointer",
          }}
        />
      </Link>
    </div>
  );
}
