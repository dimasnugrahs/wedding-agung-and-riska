import { motion } from "motion/react";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.3,
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

const viewportConfigImg = {
  once: true,
  amount: 0.1,
};

const FooterComponent = () => {
  return (
    <footer className="relative h-screen flex flex-col justify-end items-end md:justify-between md:items-center px-6 pb-28 pt-16 md:py-16 text-white overflow-hidden select-none">
      {/* BACKGROUND IMAGE & OVERLAY (Direct from /public/images/) */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <motion.img
          src="/images/wedding-agung-and-riska-footer.webp"
          alt="Groom and Bride Footer Background"
          loading="lazy"
          decoding="async"
          className="w-full h-full object-cover object-center"
          initial={{ scale: 1.15, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={viewportConfigImg}
          transition={{ duration: 1.5, ease: [0.25, 1, 0.5, 1] }}
        />
        {/* Overlay Black Gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/70 to-black/95" />
      </div>

      {/* Spacer Atas (Desktop saja untuk keseimbangan vertikal) */}
      <div className="hidden md:block" />

      {/* AREA KONTEN UTAMA */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={viewportConfig}
        variants={containerVariants}
        className="relative z-10 flex flex-col items-end md:items-center space-y-4 md:space-y-6 w-full max-w-sm md:max-w-2xl text-right md:text-center mb-6 md:my-auto"
      >
        {/* 1. JUDUL TERIMA KASIH */}
        <motion.div variants={textFadeIn} className="w-full">
          <h2 className="text-xl md:text-2xl font-serif font-light tracking-widest uppercase text-white">
            TERIMA KASIH
          </h2>
        </motion.div>

        {/* 2. PARAGRAF UCAPAN UTAMA */}
        <motion.div variants={textFadeIn} className="w-full">
          <p className="text-xs md:text-sm font-light text-zinc-300 leading-relaxed">
            Merupakan suatu kebahagiaan dan kehormatan bagi kami, apabila
            Bapak/Ibu/Saudara/i berkenan hadir untuk memberikan doa restu kepada
            kami.
          </p>
        </motion.div>

        {/* 3. PARAGRAF PENUTUP & GARIS PEMBATAS */}
        <motion.div variants={textFadeIn} className="w-full">
          <p className="text-xs md:text-sm font-light text-zinc-400 italic">
            Atas kehadiran dan doa restunya kami ucapkan terima kasih.
          </p>
          <div className="h-px bg-gradient-to-r from-transparent via-zinc-700/80 to-transparent my-4 md:my-6 w-full" />
        </motion.div>
      </motion.div>

      {/* 4. TEKS COPYRIGHT */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={viewportConfig}
        variants={containerVariants}
        className="relative z-10 w-full text-right md:text-center text-[10px] uppercase tracking-[0.25em] text-zinc-500 font-light"
      >
        <motion.p variants={textFadeIn}>AGUNG & RISKA • 2026</motion.p>
      </motion.div>
    </footer>
  );
};

export default FooterComponent;
