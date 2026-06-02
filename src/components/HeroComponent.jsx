import { useState, useEffect } from "react";
import imageHeroOne from "../assets/images/agung-hero-1.jpg";
import imageHeroTwo from "../assets/images/agung-hero-2.jpg";
import imageHeroThree from "../assets/images/agung-hero-3.jpg";
import imageHeroFour from "../assets/images/agung-hero-4.jpg";
import imageHeroFive from "../assets/images/agung-hero-5.jpg";

const Hero = ({
  title = "Agung & Riska",
  subtitle = "THE WEDDING",
  targetDate = "2026-10-20T13:00:00",
  // Props sliderImages berisi array object yang menampung gambar & alt text
  sliderImages = [
    { src: imageHeroOne, alt: "Foto Prewedding Agung dan Riska Utama" },
    { src: imageHeroTwo, alt: "Momen Bahagia Agung Riska di Bali" },
    { src: imageHeroThree, alt: "Sesi Foto Kasual Agung dan Riska" },
    { src: imageHeroFour, alt: "Detail Dekorasi Pernikahan Agung Riska" },
    { src: imageHeroFive, alt: "Foto Kenangan Agung dan Riska" },
  ],
}) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  // EFFECT 1: Mengatur Slider Otomatis per 2 detik
  useEffect(() => {
    if (sliderImages.length === 0) return;

    const sliderTimer = setInterval(() => {
      setCurrentImageIndex(
        (prevIndex) => (prevIndex + 1) % sliderImages.length,
      );
    }, 2000);

    return () => clearInterval(sliderTimer);
  }, [sliderImages.length]);

  // EFFECT 2: Mengatur Hitung Mundur (Countdown)
  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = +new Date(targetDate) - +new Date();
      let newTimeLeft = { days: 0, hours: 0, minutes: 0, seconds: 0 };

      if (difference > 0) {
        newTimeLeft = {
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        };
      }

      setTimeLeft(newTimeLeft);
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <section className="text-center h-screen flex flex-col justify-between bg-black text-white font-inter overflow-hidden">
      <div className="relative h-3/4 flex items-end justify-center pb-16 px-4 overflow-hidden">
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
          {/* Overlay Gelap */}
          <div className="absolute inset-0 bg-linear-to-b from-black/60 via-black/40 to-black/70"></div>
        </div>

        {/* Teks Judul Dinamis dari Props */}
        <div className="relative z-10 space-y-3">
          <div className="text-xs md:text-sm tracking-[0.3em] uppercase text-zinc-300 font-light flex items-center justify-center gap-2">
            {subtitle}
          </div>
          <h1 className="font-angele text-5xl md:text-7xl tracking-wide text-white font-light">
            {title}
          </h1>
          <div className="text-xs md:text-sm tracking-[0.3em] uppercase text-zinc-300 font-light flex items-center justify-center gap-2">
            <span>27</span>
            <span className="text-zinc-500">•</span>
            <span>05</span>
            <span className="text-zinc-500">•</span>
            <span>2026</span>
          </div>
        </div>
      </div>

      <div className="grow flex flex-col items-center bg-white text-black py-8 border-t border-zinc-200 z-10">
        <p className="font-angele text-[10px] md:text-xs uppercase tracking-[0.25em] text-zinc-400 font-semibold mb-5">
          Counting Down to Our Special Day.
        </p>

        <div className="grid grid-cols-4 gap-4 md:gap-8 max-w-sm w-full px-6">
          {/* Hari */}
          <div className="flex flex-col items-center">
            <span className="font-angele text-3xl md:text-4xl font-bold text-zinc-900 tracking-tight">
              {String(timeLeft.days).padStart(2, "0")}
            </span>
            <span className="text-[9px] uppercase tracking-widest text-zinc-400 mt-1">
              Days
            </span>
          </div>

          {/* Jam */}
          <div className="flex flex-col items-center border-l border-zinc-100">
            <span className="font-angele text-3xl md:text-4xl font-bold text-zinc-900 tracking-tight">
              {String(timeLeft.hours).padStart(2, "0")}
            </span>
            <span className="text-[9px] uppercase tracking-widest text-zinc-400 mt-1">
              Hours
            </span>
          </div>

          {/* Menit */}
          <div className="flex flex-col items-center border-l border-zinc-100">
            <span className="font-angele text-3xl md:text-4xl font-bold text-zinc-900 tracking-tight">
              {String(timeLeft.minutes).padStart(2, "0")}
            </span>
            <span className="text-[9px] uppercase tracking-widest text-zinc-400 mt-1">
              Mins
            </span>
          </div>

          {/* Detik */}
          <div className="flex flex-col items-center border-l border-zinc-100">
            <span className="font-angele text-3xl md:text-4xl font-bold text-zinc-900 tracking-tight animate-pulse">
              {String(timeLeft.seconds).padStart(2, "0")}
            </span>
            <span className="text-[9px] uppercase tracking-widest text-zinc-400 mt-1">
              Secs
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
