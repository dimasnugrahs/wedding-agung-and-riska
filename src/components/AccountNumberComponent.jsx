import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import imageCover from "../assets/images/wedding-agung-and-riska-account-number.webp";

const DigitalEnvelope = () => {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [copied, setCopied] = useState(false);

  const accountName = "AGUNG WIDIANA";
  const accountNumber = "1420012345678"; // Ganti dengan nomor rekening asli

  const handleCopy = () => {
    navigator.clipboard.writeText(accountNumber);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    /* 
      PENYESUAIAN LAYOUT UTAMA SECTIONS:
      - Mobile: justify-end (di bawah) & items-start (di kiri)
      - Desktop (md:): md:justify-center & md:items-center (rata tengah sempurna)
    */
    <section className="relative w-full h-screen bg-black flex flex-col justify-end items-start md:justify-center md:items-center px-6 py-16 md:py-0 text-zinc-300 overflow-hidden select-none">
      <div className="absolute inset-0 z-0">
        {/* Menggunakan div dengan bg-fixed dan bg-cover agar gambar terkunci di layar saat di-scroll */}
        <div
          className="w-full h-full bg-fixed bg-cover bg-center"
          style={{ backgroundImage: `url(${imageCover})` }}
        />
        {/* Overlay kegelapan */}
        <div className="absolute inset-0 bg-linear-to-b from-black/70 via-black/70 to-black/70"></div>
      </div>

      {/* 
        PENYESUAIAN AREA KONTEN TEKS:
        - Mobile: text-left (tulisan rata kiri agar sinkron saat berada di pojok kiri bawah)
        - Desktop (md:): md:text-center (tulisan kembali rata tengah saat konten di tengah layar)
      */}
      <div className="relative z-10 flex flex-col items-start md:items-center w-full max-w-sm md:max-w-2xl text-left md:text-center space-y-8">
        <div className="space-y-4 w-full">
          <div className="text-3xl font-display tracking-widest text-white">
            DIGITAL GIFT
          </div>
          <p className="text-sm font-light text-zinc-400 leading-relaxed md:px-4">
            Doa restu Anda merupakan hal yang sangat berarti bagi kami. Bagi
            Anda yang ingin memberikan tanda kasih atau hadiah kepada kami,
            dengan rasa syukur kami dapat menerima gift terbaik kalian.
          </p>
        </div>

        <button
          onClick={() => setIsOpenModal(true)}
          className="flex items-center gap-2.5 border border-zinc-500/20 bg-zinc-600/10 hover:border-zinc-500/50 hover:bg-zinc-600/40 text-white font-medium px-8 py-3.5 rounded-full shadow-lg hover:scale-105 active:scale-95 transition-all text-xs uppercase tracking-widest cursor-pointer group"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-4 h-4 text-amber-300 group-hover:animate-pulse"
          >
            <rect width="20" height="14" x="2" y="5" rx="2" />
            <line x1="2" y1="10" x2="22" y2="10" />
          </svg>
          Kirim Hadiah
        </button>

        {/* FOOTER UCAPAN TERIMA KASIH */}
        <div className="pt-4 w-full">
          {/* Garis pembatas disesuaikan: hilang di mobile (karena rata kiri), muncul kembali di desktop lewat md:block */}
          <div className="hidden md:block w-1/3 h-px bg-gradient-to-r from-transparent via-zinc-700 to-transparent mx-auto mb-6"></div>
          <p className="font-light text-sm italic text-zinc-400 tracking-wide">
            Terima kasih atas doa restu & hadiah Anda
          </p>
        </div>
      </div>

      {/* ==================== POP UP MODAL DIGITAL REKENING ==================== */}
      <AnimatePresence>
        {isOpenModal && (
          <div className="fixed inset-0 z-[1000] flex items-center justify-center p-4">
            {/* Backdrop Kegelapan Di Belakang Modal */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpenModal(false)}
              className="absolute inset-0 bg-black/80 backdrop-blur-sm cursor-pointer"
            />

            {/* Konten Tengah: Kartu ATM Digital (Tetap berada di tengah layar baik mobile maupun desktop agar fokus tamu terjaga) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative w-full max-w-sm flex flex-col items-center gap-6 z-10"
            >
              {/* KARTU ATM REKENING */}
              <div className="relative w-full aspect-[1.66/1] bg-gradient-to-br from-stone-900 via-zinc-900 to-stone-950 border border-zinc-800/60 rounded-2xl shadow-2xl p-6 flex flex-col justify-between items-start text-left overflow-hidden">
                <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none"></div>

                <div className="w-full flex justify-between items-start">
                  <div className="flex flex-col space-y-0.5">
                    <div className="flex space-x-0.5 opacity-80">
                      <span className="w-2 h-1 bg-amber-400 rounded-full animate-pulse"></span>
                      <span className="w-4 h-1.5 bg-amber-500 rounded-full"></span>
                      <span className="w-3 h-1 bg-amber-400 rounded-full"></span>
                    </div>
                    <span className="text-md font-bold tracking-wider text-blue-400/90 lowercase font-sans">
                      rekening mandiri
                    </span>
                  </div>
                  <div className="w-8 h-6 bg-zinc-800/80 border border-zinc-700/50 rounded-md opacity-40"></div>
                </div>

                <div className="space-y-1 w-full z-10">
                  <p className="font-mono text-lg md:text-xl text-zinc-200 tracking-[0.2em]">
                    {accountNumber.replace(/(\d{4})/g, "$1 ").trim()}
                  </p>
                  <p className="text-[11px] uppercase tracking-widest text-zinc-500 font-medium font-sans">
                    {accountName}
                  </p>
                </div>

                <div className="w-full flex justify-between items-end relative z-10">
                  <button
                    onClick={handleCopy}
                    className="inline-flex items-center gap-2 bg-stone-800/80 hover:bg-stone-700 text-stone-200 text-xs tracking-wider uppercase px-4 py-2.5 rounded-xl border border-stone-700/50 transition-all shadow-md cursor-pointer active:scale-95"
                  >
                    Salin Nomor Rekening
                  </button>

                  <AnimatePresence>
                    {copied && (
                      <motion.span
                        initial={{ opacity: 0, y: 10, scale: 0.9 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="absolute bottom-12 left-0 bg-emerald-950/90 text-emerald-400 border border-emerald-800/50 text-[10px] uppercase tracking-widest px-3 py-1 rounded-md shadow-lg"
                      >
                        Tersalin!
                      </motion.span>
                    )}
                  </AnimatePresence>
                </div>
              </div>

              {/* Tombol Tutup Mandiri (Di Luar Kartu ATM) */}
              <button
                onClick={() => setIsOpenModal(false)}
                className="flex items-center justify-center w-10 h-10 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-white hover:border-zinc-600 shadow-md transition-all active:scale-95 cursor-pointer"
                title="Tutup Rekening"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-5 h-5"
                >
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default DigitalEnvelope;
