import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";

const CoverComponent = ({
  guestName,
  handleOpenInvitation,
  onTiraiRemaining,
}) => {
  // State untuk melacak apakah gambar cover sudah selesai di-load
  const [isImageLoaded, setIsImageLoaded] = useState(false);
  const [animationPhase, setAnimationPhase] = useState("loading");

  // Timer animasi baru berjalan SETELAH gambar selesai di-load
  useEffect(() => {
    if (!isImageLoaded) return;

    // Mulai fase animasi pertama
    setAnimationPhase("wedding_of");

    const timer1 = setTimeout(() => {
      setAnimationPhase("names_intro");
    }, 2500);

    const timer2 = setTimeout(() => {
      setAnimationPhase("main_cover");
    }, 5000);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, [isImageLoaded]);

  return (
    <motion.div
      initial={{ y: "0%" }}
      exit={{ y: "-100%" }}
      transition={{
        duration: 1.5,
        ease: [0.76, 0, 0.24, 1],
      }}
      onUpdate={(latest) => {
        if (latest.y && typeof latest.y === "string") {
          const murniAngkaY = Math.abs(parseFloat(latest.y));
          const sisaTiraiDiLayar = 100 - murniAngkaY;

          if (onTiraiRemaining) {
            onTiraiRemaining(sisaTiraiDiLayar);
          }
        }
      }}
      className="fixed inset-0 z-999 flex flex-col justify-between items-center text-center bg-black select-none overflow-hidden"
    >
      {/* Hidden/Preloaded Image Tag untuk memicu onLoad */}
      <img
        src="/images/wedding-agung-and-riska-cover.webp"
        alt="Preload Cover"
        fetchPriority="high"
        decoding="async"
        onLoad={() => setIsImageLoaded(true)}
        className="hidden"
      />

      <AnimatePresence mode="wait">
        {/* PHASE 0: Loading / Menunggu Gambar Siap */}
        {animationPhase === "loading" && (
          <motion.div
            key="loading"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 flex items-center justify-center bg-black z-30"
          >
            {/* Minimalis Loading Spinner / Indicator */}
            <div className="w-6 h-6 border-2 border-amber-400/30 border-t-amber-400 rounded-full animate-spin" />
          </motion.div>
        )}

        {/* PHASE 1: "The Wedding Of" */}
        {animationPhase === "wedding_of" && (
          <motion.div
            key="wedding_of"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.6 }}
            className="absolute inset-0 flex items-center justify-center p-6 bg-black z-20"
          >
            <h2 className="text-xs md:text-sm tracking-[0.4em] uppercase text-zinc-300 font-light font-serif">
              The Wedding Of
            </h2>
          </motion.div>
        )}

        {/* PHASE 2: "Agung & Riska" Intro */}
        {animationPhase === "names_intro" && (
          <motion.div
            key="names_intro"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.6 }}
            className="absolute inset-0 flex items-center justify-center p-6 bg-black z-20"
          >
            <h1 className="text-xs md:text-sm tracking-[0.4em] uppercase text-zinc-300 font-light font-serif">
              Agung & Riska
            </h1>
          </motion.div>
        )}

        {/* PHASE 3: Cover Utama dengan Gambar Background */}
        {animationPhase === "main_cover" && (
          <motion.div
            key="main_cover"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="absolute inset-0 flex flex-col justify-between items-center p-6 z-10"
          >
            {/* Background Image yang sudah ter-load */}
            <div className="absolute inset-0 z-0 overflow-hidden">
              <img
                src="/images/wedding-agung-and-riska-cover.webp"
                alt="Cover Prewedding"
                className="w-full h-full object-cover object-center"
              />
              {/* Overlay Gelap Aksen Premium */}
              <div className="absolute inset-0 bg-black/40" />
            </div>

            {/* Header Cover: Judul */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="relative z-10 mt-12"
            >
              <div className="text-xs md:text-sm tracking-[0.3em] uppercase text-zinc-300 font-light flex items-center justify-center gap-2 mt-4">
                THE WEDDING OF
              </div>
              <h1 className="font-lobster font-light text-4xl md:text-7xl bg-clip-text text-white tracking-wide mt-2">
                Agung & Riska
              </h1>
            </motion.div>

            {/* Undangan & Tombol Buka */}
            <div className="relative z-10 w-full max-w-md flex flex-col items-center gap-2 mb-8">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="w-full rounded-2xl px-4 py-3"
              >
                <p className="text-zinc-300 font-light text-xs md:text-sm uppercase tracking-wider">
                  Kepada Yth. Bapak/Ibu/Saudara/i:
                </p>
                <h2 className="font-angele font-bold text-2xl md:text-3xl text-white tracking-wide mt-1">
                  {guestName}
                </h2>
              </motion.div>

              {/* Tombol Buka Undangan */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.8 }}
                className="w-full flex justify-center"
              >
                <button
                  onClick={handleOpenInvitation}
                  className="flex items-center gap-2.5 border border-amber-300/30 bg-amber-300/10 backdrop-blur-md hover:bg-linear-to-r hover:from-amber-600 hover:to-amber-500 text-white font-medium px-8 py-3.5 rounded-full shadow-lg hover:scale-105 active:scale-95 transition-all text-sm group cursor-pointer"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-5 h-5 group-hover:animate-bounce text-amber-300 group-hover:text-white"
                  >
                    <path d="M21.2 8.4c.5.3.8.8.8 1.4v10c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V9.8c0-.6.3-1.1.8-1.4l8-4.8c.7-.4 1.5-.4 2.2 0l8 4.8z" />
                    <path d="m22 10-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 10" />
                  </svg>
                  Buka Undangan
                </button>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default CoverComponent;
