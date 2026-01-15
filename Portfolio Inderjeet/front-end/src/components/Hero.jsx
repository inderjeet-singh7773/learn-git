import { useEffect, useRef, useState } from "react";
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

  useEffect(() => {
    const currentRole = roles[currentRoleIndex];
    const interval = setInterval(() => {
      if (charIndex < currentRole.length) {
        setDisplayText(currentRole.substring(0, charIndex + 1));
        setCharIndex(charIndex + 1);
      } else {
        setTimeout(() => {
          setCurrentRoleIndex((currentRoleIndex + 1) % roles.length);
          setCharIndex(0);
          setDisplayText("");
        }, 500);
        clearInterval(interval);
      }
    }, 50);

    return () => clearInterval(interval);
  }, [charIndex, currentRoleIndex]);

  useEffect(() => {
    const overlay = skeletonRef.current;
    if (!overlay) return;

    const handleMouseMove = (e) => {
      overlay.style.maskImage = `
        radial-gradient(circle 160px at ${e.clientX}px ${e.clientY}px,
          white 60%, transparent 100%)
      `;
      overlay.style.webkitMaskImage = overlay.style.maskImage;
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section
      id="home"
      className="relative h-screen overflow-hidden"
    >
      {/* Base Image */}
      <img
        src={photo}
        alt="Base"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Skeleton Overlay */}
      <img
        ref={skeletonRef}
        src={skeleton}
        alt="Skeleton"
        className="absolute inset-0 w-full h-full object-cover pointer-events-none"
        style={{
          maskImage:
            "radial-gradient(circle 160px at 50% 50%, white 60%, transparent 100%)",
          WebkitMaskImage:
            "radial-gradient(circle 160px at 50% 50%, white 60%, transparent 100%)",
        }}
      />

      {/* CONTENT */}
      <div className="relative z-10 h-full flex flex-col justify-center px-8 md:px-16">
        <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-2">
          Inderjeet Singh
        </h1>

        <p className="text-xl md:text-3xl text-blue-600 font-bold min-h-[50px]">
          {displayText}
          <span className="animate-pulse">|</span>
        </p>

        <div className="flex gap-4 mt-8">
          <a
            href="https://github.com/inderjeet-singh"
            target="_blank"
            className="px-6 py-3 bg-black text-white rounded-lg hover:scale-105 transition"
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
