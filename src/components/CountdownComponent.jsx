import { useState, useEffect } from "react";
import { motion } from "motion/react";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.6,
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

  return (
    <div className="relative flex flex-col justify-center text-center items-center px-6 py-16 text-white overflow-hidden">
      <div className="absolute inset-0 z-0">
        {/* Menggunakan div dengan bg-fixed dan bg-cover agar gambar terkunci di layar saat di-scroll */}
        <div className="w-full h-full bg-fixed bg-cover bg-center bg-black" />
        {/* Overlay kegelapan */}
        <div className="absolute inset-0 bg-linear-to-b from-black/85 via-black/85 to-black/85"></div>
      </div>

      {/* AREA KONTEN TEKS (KONTAINER INDUK) */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={viewportConfig}
        variants={containerVariants}
        className="relative z-10 space-y-0 w-full md:w-1/2"
      >
        {/* Teks 1: Judul Save The Date */}
        <motion.div variants={textFadeIn} className="text-3xl">
          <div className="block font-display md:hidden">
            Menuju Hari Bahagia
          </div>
          <div className="block md:hidden"></div>
          <div className="hidden md:block">Menuju Hari Bahagia</div>
        </motion.div>

        {/* Teks 7: Angka Countdown */}
        <motion.div
          variants={textFadeIn}
          className="font-light grid grid-cols-4 text-3xl px-5 text-center mt-8"
        >
          <div className="uppercase">
            {String(timeLeft.days).padStart(2, "0")}
          </div>
          <div className="uppercase">
            {String(timeLeft.hours).padStart(2, "0")}
          </div>
          <div className="uppercase">
            {String(timeLeft.minutes).padStart(2, "0")}
          </div>
          <div className="uppercase">
            {String(timeLeft.seconds).padStart(2, "0")}
          </div>
        </motion.div>

        {/* Teks 8: Label Countdown (Days, Hours, Mins, Secs) */}
        <motion.div
          variants={textFadeIn}
          className="font-light grid grid-cols-4 text-3xl px-5 text-center mb-8"
        >
          <div className="uppercase">
            <span className="text-sm text-zinc-400 mt-1">Days</span>
          </div>
          <div className="uppercase">
            <span className="text-sm text-zinc-400 mt-1">Hours</span>
          </div>
          <div className="uppercase">
            <span className="text-sm text-zinc-400 mt-1">Mins</span>
          </div>
          <div className="uppercase">
            <span className="text-sm text-zinc-400 mt-1">Secs</span>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default CountdownComponent;
