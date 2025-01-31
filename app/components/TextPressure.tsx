"use client";

import { useEffect, useRef, useState } from "react";

const TextPressure = ({
  text = "Archimmo",
  textColor = "#ffffff",
  strokeColor = "#ff0000",
  minFontSize = 36,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const spansRef = useRef<HTMLSpanElement[]>([]);

  const mouseRef = useRef({ x: 0, y: 0 });
  const cursorRef = useRef({ x: 0, y: 0 });

  const [fontSize, setFontSize] = useState(minFontSize);

  const chars = text.split("");

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      cursorRef.current.x = e.clientX;
      cursorRef.current.y = e.clientY;
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  useEffect(() => {
    let rafId: number;
    const animate = () => {
      mouseRef.current.x += (cursorRef.current.x - mouseRef.current.x) / 15;
      mouseRef.current.y += (cursorRef.current.y - mouseRef.current.y) / 15;

      spansRef.current.forEach((span) => {
        if (!span) return;
        span.style.transform = `scale(${1 + Math.random() * 0.05})`;
      });

      rafId = requestAnimationFrame(animate);
    };

    animate();
    return () => cancelAnimationFrame(rafId);
  }, [chars.length]);

  return (
    <div
      ref={containerRef}
      style={{
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        textAlign: "center",
        fontSize: fontSize,
        color: textColor,
        fontWeight: "bold",
        textShadow: `2px 2px 10px ${strokeColor}`,
        userSelect: "none",
      }}
    >
      {chars.map((char, i) => (
        <span key={i} ref={(el) => (spansRef.current[i] = el)}>{char}</span>
      ))}
    </div>
  );
};

export default TextPressure;
