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
        <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/80 to-black/90" />
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
          <h2 className="text-2xl md:text-3xl font-serif font-light tracking-wide text-zinc-100">
            Menuju Hari Bahagia
          </h2>
          <p className="text-xs uppercase tracking-[0.3em] text-amber-300/80 font-light">
            Counting Down The Special Day
          </p>
        </motion.div>

        {/* KOTAK COUNTDOWN UTAMA */}
        <motion.div
          variants={textFadeIn}
          className="w-full bg-zinc-950/80 border border-zinc-800/80 hover:border-amber-500/30 rounded-2xl p-6 md:p-8 backdrop-blur-md transition-all duration-300 shadow-2xl"
        >
          <div className="grid grid-cols-4 divide-x divide-zinc-800/80 w-full">
            {timeUnits.map((unit, index) => (
              <div
                key={index}
                className="flex flex-col items-center justify-center space-y-2 px-1 md:px-3"
              >
                {/* Angka Countdown */}
                <span className="font-mono font-light text-2xl sm:text-4xl text-amber-200 tracking-tight">
                  {String(unit.value).padStart(2, "0")}
                </span>

                {/* Label Unit */}
                <span className="text-[10px] sm:text-xs uppercase tracking-[0.15em] sm:tracking-[0.2em] text-zinc-400 font-light">
                  {unit.label}
                </span>
              </div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default CountdownComponent;
