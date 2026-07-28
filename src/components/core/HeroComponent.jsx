import { useState, useEffect } from "react";
import { motion } from "motion/react";

// Default images mengarah langsung ke folder public/images/
const DEFAULT_SLIDER_IMAGES = [
  {
    src: "/images/wedding-agung-and-riska-slider-1.webp",
    alt: "Foto Prewedding Agung dan Riska Utama",
  },
  {
    src: "/images/wedding-agung-and-riska-slider-2.webp",
    alt: "Momen Bahagia Agung Riska di Bali",
  },
];

const HeroComponent = ({
  triggerAnimation = false,
  sliderImages = DEFAULT_SLIDER_IMAGES,
}) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Auto-slide effect
  useEffect(() => {
    if (!sliderImages || sliderImages.length <= 1) return;

    const sliderTimer = setInterval(() => {
      setCurrentImageIndex(
        (prevIndex) => (prevIndex + 1) % sliderImages.length,
      );
    }, 4000);

    return () => clearInterval(sliderTimer);
  }, [sliderImages]);

  return (
    <section className="text-center h-screen bg-black text-white font-inter overflow-hidden relative w-full">
      {/* Kontainer Utama dengan Posisi Lower-Third */}
      <div className="relative h-screen flex items-end justify-center px-4 pb-28 md:pb-36 overflow-hidden w-full">
        {/* SLIDER BACKGROUND IMAGES */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          {sliderImages.map((image, index) => {
            const isActive = index === currentImageIndex;
            const isFirstImage = index === 0;

            return (
              <img
                key={image.src || index}
                src={image.src}
                alt={image.alt}
                fetchPriority={isFirstImage ? "high" : "auto"}
                loading={isFirstImage ? "eager" : "lazy"}
                decoding="async"
                className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${
                  isActive ? "opacity-100" : "opacity-0"
                }`}
              />
            );
          })}

          {/* Overlay Gradient Premium Black */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/80" />
        </div>

        {/* CONTENT WRAPPER - LOWER THIRD POSITION */}
        <div className="relative z-10 flex flex-col items-center space-y-4 md:space-y-6">
          {/* Teks 1: Sub-title Atas */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={triggerAnimation ? { opacity: 1, y: 0 } : {}}
            transition={{
              type: "spring",
              stiffness: 50,
              damping: 15,
              delay: 0.1,
            }}
            className="text-xs md:text-sm tracking-[0.3em] uppercase text-zinc-300 font-light"
          >
            The Wedding Ceremony of
          </motion.p>

          {/* Teks 2: Nama Pengantin Utama */}
          <motion.h1
            initial={{ opacity: 0, y: 35, scale: 0.95 }}
            animate={triggerAnimation ? { opacity: 1, y: 0, scale: 1 } : {}}
            transition={{
              type: "spring",
              stiffness: 45,
              damping: 14,
              delay: 0.2,
            }}
            className="font-lobster text-4xl md:text-7xl tracking-wide text-white font-light drop-shadow-md py-2"
          >
            Agung & Riska
          </motion.h1>

          {/* Teks 3: Tanggal Pernikahan */}
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={triggerAnimation ? { opacity: 1, y: 0 } : {}}
            transition={{
              type: "spring",
              stiffness: 50,
              damping: 15,
              delay: 0.5,
            }}
            className="text-xs md:text-sm tracking-[0.3em] uppercase text-zinc-300 font-light flex items-center justify-center gap-3"
          >
            <span>21</span>
            <span className="text-zinc-500/60">•</span>
            <span>Oktober</span>
            <span className="text-zinc-500/60">•</span>
            <span>2026</span>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroComponent;
