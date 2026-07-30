import { useState, useEffect, useCallback } from "react";
import { motion } from "motion/react";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.2,
      staggerChildren: 0.15,
    },
  },
};

const textFadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      ease: [0.25, 1, 0.5, 1],
    },
  },
};

const viewportConfig = {
  once: true,
  amount: 0.3,
};

const CountdownComponent = ({ targetDate = "2026-10-21T13:00:00" }) => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const calculateTimeLeft = useCallback(() => {
    // Parsing tanggal yang aman untuk semua browser (termasuk Safari)
    const targetTime = new Date(targetDate).getTime();
    const currentTime = Date.now();
    const difference = targetTime - currentTime;

    if (difference > 0) {
      return {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / (1000 * 60)) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  }, [targetDate]);

  useEffect(() => {
    setTimeLeft(calculateTimeLeft());

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [calculateTimeLeft]);

  const timeUnits = [
    { label: "Hari", value: timeLeft.days },
    { label: "Jam", value: timeLeft.hours },
    { label: "Menit", value: timeLeft.minutes },
    { label: "Detik", value: timeLeft.seconds },
  ];

  return (
    <section className="relative w-full py-16 px-6 bg-black text-white flex flex-col justify-center items-center text-center overflow-hidden select-none">
      {/* Background Gelap Elegan */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="w-full h-full bg-black" />
        <div className="absolute inset-0 bg-linear-to-b from-black/90 via-black/80 to-black/90" />
      </div>

      {/* AREA KONTEN UTAMA */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={viewportConfig}
        variants={containerVariants}
        className="relative z-10 space-y-8 w-full max-w-xl flex flex-col items-center"
      >
        {/* Judul Section */}
        <motion.div variants={textFadeIn} className="space-y-2">
          <h2 className="text-2xl md:text-3xl text-white tracking-wide">
            Menuju Hari Bahagia
          </h2>
          <p className="text-[10px] uppercase tracking-[0.4em] font-light text-amber-300/90">
            Counting Down The Special Day
          </p>
        </motion.div>

        {/* CONTAINER KOTAK COUNTDOWN DAN EFEK KEEMASAN */}
        <motion.div variants={textFadeIn} className="relative w-full">
          {/* EFEK KEEMASAN DIBUAT TEPAT DI BEKAS/DI BAWAH KOTAK COUNTDOWN */}
          <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-full max-w-md h-32 pointer-events-none z-0 flex items-center justify-center">
            {/* Layer Inner Glow Emas Terang */}
            <motion.div
              animate={{ opacity: [0.6, 0.9, 0.6], scale: [0.95, 1.05, 0.95] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="w-3/4 h-20 bg-amber-400/20 rounded-full blur-2xl"
            />
            {/* Layer Outer Glow Emas Hangat Luas */}
            <motion.div
              animate={{ opacity: [0.4, 0.7, 0.4] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute w-full h-28 bg-amber-600/15 rounded-full blur-3xl"
            />
          </div>

          {/* KOTAK COUNTDOWN UTAMA */}
          <div className="relative z-10 w-full bg-zinc-950/80 border border-zinc-800/80 hover:border-amber-500/40 rounded-2xl p-6 md:p-8 backdrop-blur-md transition-all duration-300 shadow-[0_20px_50px_rgba(217,119,6,0.12)]">
            <div className="grid grid-cols-4 divide-x divide-zinc-800/80 w-full">
              {timeUnits.map((unit, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center justify-center space-y-2 px-1 md:px-3"
                >
                  {/* Angka Countdown */}
                  <span className="font-light text-3xl px-2 md:px-5 text-center text-amber-100">
                    {String(unit.value).padStart(2, "0")}
                  </span>

                  {/* Label Unit */}
                  <span className="text-[10px] sm:text-xs uppercase tracking-[0.15em] sm:tracking-[0.2em] text-zinc-400 font-light">
                    {unit.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default CountdownComponent;
