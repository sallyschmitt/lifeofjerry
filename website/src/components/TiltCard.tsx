"use client";

import { useRef, useState, useCallback } from "react";
import Card from "./ui/Card";

interface TiltCardProps {
  children: React.ReactNode;
  variant?: "glow" | "default" | "glass" | "terminal";
  className?: string;
  hover?: boolean;
  tiltAmount?: number;
  glareOpacity?: number;
}

export default function TiltCard({
  children,
  variant = "glow",
  className = "",
  hover = true,
  tiltAmount = 8,
  glareOpacity = 0.07,
}: TiltCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [transform, setTransform] = useState("perspective(1000px) rotateX(0deg) rotateY(0deg)");
  const [glareStyle, setGlareStyle] = useState({ opacity: 0, background: "" });

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (!ref.current) return;
      const rect = ref.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const rotateX = ((y - centerY) / centerY) * -tiltAmount;
      const rotateY = ((x - centerX) / centerX) * tiltAmount;

      setTransform(
        `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`
      );

      // Glare effect
      const glareX = (x / rect.width) * 100;
      const glareY = (y / rect.height) * 100;
      setGlareStyle({
        opacity: glareOpacity,
        background: `radial-gradient(circle at ${glareX}% ${glareY}%, rgba(255,255,255,0.25) 0%, transparent 60%)`,
      });
    },
    [tiltAmount, glareOpacity]
  );

  const handleMouseLeave = useCallback(() => {
    setTransform("perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)");
    setGlareStyle({ opacity: 0, background: "" });
  }, []);

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`relative ${className}`}
      style={{
        transform,
        transition: "transform 0.15s ease-out",
        transformStyle: "preserve-3d",
        willChange: "transform",
      }}
    >
      <Card variant={variant} hover={hover} className="h-full">
        {children}
      </Card>
      {/* Glare overlay */}
      <div
        className="absolute inset-0 rounded-xl pointer-events-none"
        style={{
          opacity: glareStyle.opacity,
          background: glareStyle.background,
          transition: "opacity 0.15s ease-out",
        }}
      />
    </div>
  );
}
