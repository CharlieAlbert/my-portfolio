"use client";

import { useEffect, useState } from "react";
import { Container, Engine, tsParticles } from "@tsparticles/engine";
import { loadSlim } from "@tsparticles/slim";

interface ParticlesProps {
  className?: string;
}

export default function Particles({ className }: ParticlesProps) {
  const [init, setInit] = useState(false);

  useEffect(() => {
    const initParticles = async () => {
      await loadSlim(tsParticles);

      await tsParticles.load({
        id: "tsparticles",
        options: {
          fullScreen: {
            enable: false,
          },
          background: {
            color: {
              value: "transparent",
            },
          },
          fpsLimit: 120,
          interactivity: {
            events: {
              onClick: {
                enable: true,
                mode: "push",
              },
              onHover: {
                enable: true,
                mode: "repulse",
              },
              resize: {
                enable: true,
                delay: 0.5,
              },
            },
            modes: {
              push: {
                quantity: 4,
              },
              repulse: {
                distance: 100,
                duration: 0.4,
              },
            },
          },
          particles: {
            color: {
              value: "#6366f1", // Indigo color to match your theme
            },
            links: {
              color: "#6366f1",
              distance: 150,
              enable: true,
              opacity: 0.3,
              width: 1,
            },
            move: {
              direction: "none",
              enable: true,
              outModes: {
                default: "bounce",
              },
              random: false,
              speed: 1,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                width: 800,
                height: 800,
              },
              value: 90,
            },
            opacity: {
              value: 0.5,
            },
            shape: {
              type: "circle",
            },
            size: {
              value: { min: 1, max: 5 },
            },
          },
          detectRetina: true,
        },
      });

      setInit(true);
    };

    initParticles();

    return () => {
      const container = tsParticles.domItem(0);
      if (container) {
        container.destroy();
      }
    };
  }, []);

  return (
    <div
      id="tsparticles"
      className={`absolute inset-0 -z-10 ${className || ""}`}
    />
  );
}
