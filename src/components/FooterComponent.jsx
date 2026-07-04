import { motion } from "motion/react";
import imageCover from "../assets/images/wedding-agung-and-riska-footer.webp";

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
    /* 
      Mempertahankan layout asli Anda: 
      - Mobile: Pojok kanan bawah (justify-end items-end, text-right jika ditambahkan)
      - Desktop: Tengah (md:justify-center md:items-center md:text-center)
      Diubah min-h-screen menjadi h-screen & ditambahkan flex-col justify-between untuk menaruh copyright di bawah
    */
    <footer className="relative h-screen flex flex-col justify-between items-end md:justify-between md:items-center px-6 py-16 text-white overflow-hidden select-none">
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
        <div className="absolute inset-0 bg-linear-to-b from-black/50 via-black/70 to-black"></div>
      </div>

      {/* Spacer Atas untuk mendorong konten ke tengah di desktop */}
      <div className="hidden md:block"></div>

      {/* AREA KONTEN UTAMA (Sesuai Struktur Gambar Referensi) */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={viewportConfig}
        variants={containerVariants}
        className="relative z-10 flex flex-col items-end md:items-center space-y-6 w-full max-w-md md:max-w-2xl text-right md:text-center my-auto"
      >

        {/* 2. JUDUL TERIMA KASIH */}
        <motion.div variants={textFadeIn} className="w-full">
          <h2 className="text-2xl font-normal tracking-widest uppercase text-white">
            TERIMA KASIH
          </h2>
        </motion.div>

        {/* 3. PARAGRAF UCAPAN UTAMA */}
        <motion.div variants={textFadeIn} className="w-full">
          <p className="text-sm font-light text-zinc-300 leading-relaxed">
            Merupakan suatu kebahagiaan dan kehormatan bagi kami, apabila
            Bapak/Ibu/Saudara/i berkenan hadir untuk memberikan doa restu kepada
            kami.
          </p>
        </motion.div>

        {/* 4. PARAGRAF PENUTUP & GARIS PEMBATAS ASLI ANDA */}
        <motion.div variants={textFadeIn} className="w-full">
          <p className="text-sm font-light text-zinc-400 italic">
            Atas kehadiran dan doa restunya kami ucapkan terima kasih.
          </p>
          {/* Elemen baris pembatas asli dari komponen Anda */}
          <div className="border md:border-0 border-b border-zinc-700/60 my-4 md:my-6 w-full"></div>
        </motion.div>
      </motion.div>

      {/* 5. TEKS COPYRIGHT (Menetap di Paling Bawah Layar) */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={viewportConfig}
        variants={containerVariants}
        className="relative z-10 w-full text-right md:text-center text-[10px] uppercase tracking-[0.2em] text-zinc-500 font-light space-y-1"
      >
        <motion.p variants={textFadeIn}>AGUNG & RISKA</motion.p>
      </motion.div>
    </footer>
  );
};

export default Footer;
