'use client';

import { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > 30);
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <button
       onClick={scrollToTop}
      className={`fixed
        bottom-2 right-2
        lg:bottom-10 lg:right-10
        bg-[#114046] text-white
        p-3
        rounded-full
        shadow-lg
        transition-opacity duration-300
        z-50
        ${
          isVisible
            ? 'opacity-100'
            : 'opacity-0 pointer-events-none'
        }
      `}
    >
      <ArrowUp className="w-6 h-6" />
    </button>
  );
}