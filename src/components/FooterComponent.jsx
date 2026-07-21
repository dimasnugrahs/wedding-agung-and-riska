import { motion } from "motion/react";
import imageCover from "../assets/images/wedding-agung-and-riska-footer.webp";

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

const viewportConfigImg = {
  once: true,
  amount: 0.1,
};

const Footer = () => {
  return (
    /* 
      PERUBAHAN TATA LETAK:
      - Mobile: justify-end items-end (Semua konten didorong ke kanan bawah layar)
      - Desktop: md:justify-between md:items-center (Kembali seimbang & di tengah)
    */
    <footer className="relative h-screen flex flex-col justify-end items-end md:justify-between md:items-center px-6 pb-40 pt-16 md:py-16 text-white overflow-hidden select-none ">
      {/* BACKGROUND IMAGE & OVERLAY */}
      <div className="absolute inset-0 z-0">
        <motion.img
          src={imageCover}
          alt="Groom and Bride Footer Background"
          className="w-full h-full object-cover"
          initial={{ scale: 1.15, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={viewportConfigImg}
          transition={{ duration: 1.5, ease: [0.25, 1, 0.5, 1] }}
        />
        <div className="absolute inset-0 bg-linear-to-b from-black/40 via-black/60 to-black/90"></div>
      </div>

      {/* Spacer Atas (Desktop saja untuk keseimbangan vertikal) */}
      <div className="hidden md:block"></div>

      {/* AREA KONTEN UTAMA (TERDORONG KE KANAN BAWAH DI MOBILE) */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={viewportConfig}
        variants={containerVariants}
        className="relative z-10 flex flex-col items-end md:items-center space-y-4 md:space-y-6 w-full max-w-sm md:max-w-2xl text-right md:text-center mb-6 md:my-auto"
      >
        {/* 1. JUDUL TERIMA KASIH */}
        <motion.div variants={textFadeIn} className="w-full">
          <h2 className="text-xl md:text-2xl font-normal tracking-widest uppercase text-white">
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
          <div className="border border-b border-zinc-700/60 my-3 md:my-6 w-full ml-auto md:ml-0"></div>
        </motion.div>
      </motion.div>

      {/* 4. TEKS COPYRIGHT (Tepat di Tepi Kanan Bawah Layar Mobile) */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={viewportConfig}
        variants={containerVariants}
        className="relative z-10 w-full text-right md:text-center text-[10px] uppercase tracking-[0.2em] text-zinc-500 font-light"
      >
        <motion.p variants={textFadeIn}>AGUNG & RISKA</motion.p>
      </motion.div>
    </footer>
  );
};

export default Footer;
