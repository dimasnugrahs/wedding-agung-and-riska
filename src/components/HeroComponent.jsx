import { useState, useEffect } from "react";
import imageHeroOne from "../assets/images/wedding-agung-and-riska-slider-1.webp";
import imageHeroTwo from "../assets/images/wedding-agung-and-riska-slider-2.webp";
import { motion } from "motion/react";

const Hero = ({
  triggerAnimation = false,
  sliderImages = [
    { src: imageHeroOne, alt: "Foto Prewedding Agung dan Riska Utama" },
    { src: imageHeroTwo, alt: "Momen Bahagia Agung Riska di Bali" },
  ],
}) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    if (sliderImages.length === 0) return;

    const sliderTimer = setInterval(() => {
      setCurrentImageIndex(
        (prevIndex) => (prevIndex + 1) % sliderImages.length,
      );
    }, 4000);

    return () => clearInterval(sliderTimer);
  }, [sliderImages.length]);

  return (
    <section className="text-center h-screen bg-black text-white font-inter overflow-hidden relative w-full">
      {/* 
        PENYESUAIAN POSISI AGAK KE BAWAH:
        - Mengubah 'items-center' menjadi 'items-end' (dorong ke bawah)
        - Menambahkan 'pb-28 md:pb-36' sebagai jarak aman dari tepi bawah layar
      */}
      <div className="relative h-screen flex items-end justify-center px-4 pb-28 md:pb-36 overflow-hidden w-full">
        {/* SLIDER BACKGROUND IMAGES */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          {sliderImages.map((image, index) => (
            <img
              key={index}
              src={image.src}
              alt={image.alt}
              className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${
                index === currentImageIndex ? "opacity-100" : "opacity-0"
              }`}
              loading="eager"
            />
          ))}
          <div className="absolute inset-0 bg-linear-to-b from-black/60 via-black/30 to-black/80"></div>
        </div>

        {/* CONTEN WRAPPER - POSISI AGAK BAWAH */}
        <div className="relative z-10 flex flex-col items-center space-y-4 md:space-y-6">
          {/* Teks 1: Sub-title atas */}
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

export default Hero;
