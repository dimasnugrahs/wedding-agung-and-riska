import { motion } from "motion/react";
import imageCover from "../assets/images/agung-cover-compressed.webp";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.6, // Background dimuat dulu baru teks menyusul
      staggerChildren: 0.2, // Jeda 0.2 detik bergiliran dari atas ke bawah
    },
  },
};

// Varian Anak: Efek kemunculan teks (meluncur halus dari bawah ke atas)
const textFadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1.2,
      ease: [0.25, 1, 0.5, 1], // Kurva pengereman halus
    },
  },
};

const viewportConfig = {
  once: true,
  amount: 0.3, // Diturunkan ke 0.3 agar teks langsung terpicu nyaman di mobile
};

const viewportConfigImg = {
  once: true,
  amount: 0.1,
};

const Footer = () => {
  return (
    <footer className="relative min-h-screen flex flex-col justify-end items-end md:justify-center md:text-center md:items-center px-6 py-16 text-white overflow-hidden">
      <div className="absolute inset-0 z-0">
        <motion.img
          src={imageCover}
          alt="Groom"
          className="w-full h-full object-cover"
          initial={{ scale: 1.15, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={viewportConfigImg}
          transition={{ duration: 1.5, ease: [0.25, 1, 0.5, 1] }}
        />
        <div className="absolute inset-0 bg-linear-to-b from-slate-950/80 via-slate-950/80 to-slate-950/80"></div>
      </div>

      {/* AREA KONTEN TEKS (KONTAINER INDUK) */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={viewportConfig}
        variants={containerVariants}
        className="relative z-10 space-y-0 w-full md:w-1/2"
      >
        {/* Teks 2: Pembukaan Undang */}
        <motion.div variants={textFadeIn} className="font-light">
          <div className="uppercase leading-relaxed">TERIMA KASIH</div>
        </motion.div>

        {/* Teks 3: Detail Tanggal & Jam */}
        <motion.div variants={textFadeIn} className="">
          <div className="text-2xl">Love is a gift, our story is forever</div>
          <div className="border md:border-0 border-b border-zinc-300 my-4 md:my-8"></div>
        </motion.div>
      </motion.div>
    </footer>
  );
};

export default Footer;
