import { useEffect, useRef, useState } from "react";
import { Github, Linkedin, Mail, MapPin, Phone } from "lucide-react";

import photo from "../assets/images/photo.jpg";
import skeleton from "../assets/images/skeleton.png";

export default function Hero() {
  const skeletonRef = useRef(null);
  const [displayText, setDisplayText] = useState("");
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  const roles = [
    "Front-end Developer",
    "Back-end Developer",
    "Full Stack Developer",
    "React.js Developer",
    "MERN Stack Developer"
  ];

  // Typing animation effect
  useEffect(() => {
    const currentRole = roles[currentRoleIndex];
    const interval = setInterval(() => {
      if (charIndex < currentRole.length) {
        setDisplayText(currentRole.substring(0, charIndex + 1));
        setCharIndex(charIndex + 1);
      } else {
        // Wait 0.5 seconds before switching to next role
        setTimeout(() => {
          setCurrentRoleIndex((currentRoleIndex + 1) % roles.length);
          setCharIndex(0);
          setDisplayText("");
        }, 500);
        clearInterval(interval);
      }
    }, 50); // Each character appears every 50ms (0.5s total for ~10 chars)

    return () => clearInterval(interval);
  }, [charIndex, currentRoleIndex, roles]);

  useEffect(() => {
    const overlay = skeletonRef.current;
    if (!overlay) return;

    let locked = false;

    const handleMouseMove = (e) => {
      if (locked) return;

      overlay.style.maskImage = `
        radial-gradient(circle 160px at ${e.clientX}px ${e.clientY}px,
          white 0%,
          white 60%,
          transparent 100%
        )
      `;
      overlay.style.webkitMaskImage = overlay.style.maskImage;
    };

    const handleClick = (e) => {
      if (locked) return;
      locked = true;

      overlay.style.maskImage = `
        repeating-linear-gradient(
          0deg,
          white 0px,
          white 18px,
          transparent 18px,
          transparent 20px
        ),
        repeating-linear-gradient(
          90deg,
          white 0px,
          white 18px,
          transparent 18px,
          transparent 20px
        ),
        radial-gradient(
          circle 180px at ${e.clientX}px ${e.clientY}px,
          white 60%,
          transparent 100%
        )
      `;
      overlay.style.webkitMaskImage = overlay.style.maskImage;
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("click", handleClick);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("click", handleClick);
    };
  }, []);

  return (
    <section className="relative min-h-screen overflow-hidden">
      <img
        src={photo}
        alt="Base"
        className="absolute inset-0 w-full h-full object-contain bg-white"
      />

      <img
        ref={skeletonRef}
        src={skeleton}
        alt="Skeleton"
        className="absolute inset-0 w-full h-full object-contain pointer-events-none"
        style={{
          maskImage:
            "radial-gradient(circle 160px at 50% 50%, white 60%, transparent 100%)",
          WebkitMaskImage:
            "radial-gradient(circle 160px at 50% 50%, white 60%, transparent 100%)",
        }}
      />

      {/* CONTENT (NO BLUR / NO DARK BG) */}
      <div className="relative z-10 min-h-screen flex flex-col items-start justify-center px-8 md:px-16">
        <div className="text-left max-w-2xl">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 drop-shadow-lg mb-2">
            Inderjeet Singh
          </h1>
          <p className="text-xl md:text-3xl text-blue-600 font-bold drop-shadow min-h-[50px]">
            {displayText}
            <span className="animate-pulse">|</span>
          </p>
        </div>

        <div className="flex gap-4 mt-8">
          <a
            href="https://github.com/inderjeet-singh"
            target="_blank"
            className="px-6 py-3 bg-black/80 text-white rounded-lg hover:scale-105 transition"
          >
            GitHub
          </a>

          <a
            href="https://linkedin.com/in/inderjeet-singh"
            target="_blank"
            className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:scale-105 transition"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}
