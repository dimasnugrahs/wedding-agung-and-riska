import { useState, useEffect } from "react";
import imageHeroOne from "../assets/images/agung-hero-1.jpg";
import imageHeroTwo from "../assets/images/agung-hero-2.jpg";
import imageHeroThree from "../assets/images/agung-hero-3.jpg";
import imageHeroFour from "../assets/images/agung-hero-4.jpg";
import imageHeroFive from "../assets/images/agung-hero-5.jpg";
import { motion } from "motion/react";

const Hero = ({
  title = "Agung & Riska",
  sliderImages = [
    { src: imageHeroOne, alt: "Foto Prewedding Agung dan Riska Utama" },
    { src: imageHeroTwo, alt: "Momen Bahagia Agung Riska di Bali" },
    { src: imageHeroThree, alt: "Sesi Foto Kasual Agung dan Riska" },
    { src: imageHeroFour, alt: "Detail Dekorasi Pernikahan Agung Riska" },
    { src: imageHeroFive, alt: "Foto Kenangan Agung dan Riska" },
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
    <section className="text-center h-screen flex flex-col justify-between bg-black text-white font-inter overflow-hidden">
      <div className="relative h-screen flex items-start justify-center pt-36 md:pt-16 px-4 overflow-hidden">
        <div className="absolute inset-0 z-0 pointer-events-none">
          {sliderImages.map((image, index) => (
            <img
              key={index}
              src={image.src}
              alt={image.alt} // Menggunakan alternatif text dinamis dari props
              className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${
                index === currentImageIndex ? "opacity-100" : "opacity-0"
              }`}
              loading="eager"
            />
          ))}
          <div className="absolute inset-0 bg-linear-to-b from-black/60 via-black/40 to-black/70"></div>
        </div>

        <div className="relative z-10 space-y-3">
          <div className="text-xs md:text-sm tracking-[0.3em] text-zinc-300 font-light flex items-center justify-center gap-2"></div>
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="font-lobster text-4xl md:text-7xl tracking-wide text-white font-light"
          >
            {title}
          </motion.h1>
          <div className="text-xs md:text-sm tracking-[0.3em] uppercase text-zinc-300 font-light flex items-center justify-center gap-2">
            <span>21</span>
            <span className="text-zinc-500">•</span>
            <span>10</span>
            <span className="text-zinc-500">•</span>
            <span>2026</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
