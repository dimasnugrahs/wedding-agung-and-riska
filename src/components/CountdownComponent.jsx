import { useState, useEffect } from "react";
import { motion } from "motion/react";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.4,
      staggerChildren: 0.2,
    },
  },
};

const textFadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1.2,
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

  const timeUnits = [
    { label: "Days", value: timeLeft.days },
    { label: "Hours", value: timeLeft.hours },
    { label: "Mins", value: timeLeft.minutes },
    { label: "Secs", value: timeLeft.seconds },
  ];

  return (
    <div className="relative flex flex-col justify-center text-center items-center px-6 py-16 text-white overflow-hidden select-none">
      <div className="absolute inset-0 z-0">
        <div className="w-full h-full bg-fixed bg-cover bg-center bg-black" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/85 via-black/85 to-black/85"></div>
      </div>

      {/* AREA KONTEN UTAMA */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={viewportConfig}
        variants={containerVariants}
        className="relative z-10 space-y-8 w-full max-w-2xl flex flex-col items-center"
      >
        {/* Judul */}
        <motion.div
          variants={textFadeIn}
          className="text-2xl md:text-3xl font-light tracking-wide"
        >
          <h2>Menuju Hari Bahagia</h2>
        </motion.div>

        {/* 1 KOTAK TUNGGAL UNTUK SEMUA ANGKA & LABEL */}
        <motion.div
          variants={textFadeIn}
          className="w-full bg-zinc-950/80 border border-zinc-800/80 hover:border-amber-500/30 rounded-2xl p-6 md:p-8 backdrop-blur-sm transition-all duration-300 shadow-xl"
        >
          <div className="grid grid-cols-4 gap-2 md:gap-4 w-full divide-zinc-800/60">
            {timeUnits.map((unit, index) => (
              <div
                key={index}
                className="flex flex-col items-center justify-center space-y-1 px-1"
              >
                {/* Angka Countdown */}
                <span className="font-light text-3xl px-5 text-center mt-4 mb-2">
                  {String(unit.value).padStart(2, "0")}
                </span>
                {/* Label (Days, Hours, Mins, Secs) */}
                <span className="text-[10px] sm:text-xs uppercase tracking-[0.15em] sm:tracking-[0.2em] text-zinc-400 font-light text-3xl px-5 text-center mb-8">
                  {unit.label}
                </span>
              </div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default CountdownComponent;
