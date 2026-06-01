import { useState, useEffect } from "react";
import imageCover from "../assets/images/agung-cover.jpg";

const Hero = () => {
  // Tanggal target pernikahan Agung & Riska
  const TARGET_DATE = "2026-10-20T13:00:00";

  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = +new Date(TARGET_DATE) - +new Date();
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
  }, [TARGET_DATE]);

  return (
    <section className="text-center h-screen flex flex-col justify-between bg-black text-white font-inter">
      <div
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.7)), url(${imageCover})`,
        }}
        className="h-3/4 bg-cover bg-center flex items-end justify-center pb-16 px-4"
      >
        <div className="space-y-3">
          <h1 className="font-angele text-5xl md:text-7xl tracking-wide text-white font-light">
            Agung & Riska
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

      <div className="grow flex flex-col items-center justify-center bg-white text-black py-8 border-t border-zinc-200">
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
