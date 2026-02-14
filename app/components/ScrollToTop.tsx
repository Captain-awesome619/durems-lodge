"use client";

import { useEffect, useState } from "react";

export default function ScrollToTop() {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // show button after user scrolls 200px
      setShowButton(window.scrollY > 550);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  if (!showButton) return null;

  return (
    <button
      onClick={scrollToTop}
      className="
        fixed bottom-8 right-6 z-50
        w-14 h-14
        rounded-full
        flex items-center justify-center
        bg-[#FEB420]
        border border-[#0F1115]
        shadow-lg
        transition-all duration-300
        hover:scale-110
        active:scale-95
      "
      aria-label="Scroll to top"
    >
      {/* Triangle Arrow */}
      <div
        className="
          w-0 h-0
          border-l-10 border-l-transparent
          border-r-10 border-r-transparent
          border-b-14 border-b-[#0F1115]
        "
      />
    </button>
  );
}
