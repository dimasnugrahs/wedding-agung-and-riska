import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "motion/react";

const AccountNumberComponent = () => {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [copied, setCopied] = useState(false);

  const accountName = "I GUSTI AGUNG PUTU WIDIANA PUTRA";
  const accountNumber = "012401049590505";

  // Fitur Salin Nomor Rekening ke Clipboard
  const handleCopy = useCallback(() => {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(accountNumber);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  }, [accountNumber]);

  // Event listener tombol Escape keyboard untuk menutup modal
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        setIsOpenModal(false);
      }
    };

    if (isOpenModal) {
      window.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpenModal]);

  return (
    <section className="relative w-full h-screen bg-black flex flex-col justify-end items-start md:justify-center md:items-center px-6 py-16 md:py-0 text-zinc-300 overflow-hidden select-none">
      {/* Background Image Teroptimasi dari /public/images/ */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <img
          src="/images/wedding-agung-and-riska-account-number.webp"
          alt="Latar Belakang Hadiah Digital"
          loading="lazy"
          decoding="async"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/70 to-black/90" />
      </div>

      {/* Konten Utama */}
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

        {/* Tombol Pemicu Modal */}
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

        <div className="pt-4 w-full">
          <div className="hidden md:block w-1/3 h-px bg-gradient-to-r from-transparent via-zinc-700 to-transparent mx-auto mb-6" />
          <p className="font-light text-sm italic text-zinc-400 tracking-wide">
            Terima kasih atas doa restu & hadiah Anda
          </p>
        </div>
      </div>

      {/* POP-UP MODAL DIGITAL REKENING */}
      <AnimatePresence>
        {isOpenModal && (
          <div className="fixed inset-0 z-[1000] flex items-center justify-center p-4">
            {/* Backdrop Gelap dengan Blur */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpenModal(false)}
              className="absolute inset-0 bg-black/80 backdrop-blur-sm cursor-pointer"
            />

            {/* Container Modal */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative w-full max-w-sm flex flex-col items-center gap-6 z-10"
            >
              {/* KARTU REKENING BERGAYA ATM BRI */}
              <div className="relative w-full aspect-[1.66/1] bg-gradient-to-br from-[#1c1c1e] via-[#0f0f10] to-[#050505] border border-amber-500/20 rounded-2xl shadow-[0_25px_50px_-12px_rgba(0,0,0,0.8)] p-6 flex flex-col justify-between items-start text-left overflow-hidden">
                {/* Efek Pola Geometris */}
                <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:14px_14px] pointer-events-none" />
                <div className="absolute -left-10 -top-10 w-40 h-40 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />

                {/* Header Kartu: Logo BRI & Chip */}
                <div className="w-full flex justify-between items-start relative z-10">
                  <div className="flex flex-col space-y-0.5">
                    <span className="text-xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-blue-200 via-blue-400 to-blue-300 font-sans italic drop-shadow-[0_1px_2px_rgba(0,0,0,0.5)]">
                      BRI<span className="text-white font-normal">.</span>
                    </span>
                  </div>

                  {/* Ornamen Chip ATM Emas */}
                  <div className="w-9 h-7 bg-gradient-to-br from-amber-200 via-yellow-400 to-amber-500 rounded-md border border-amber-600/30 p-1 flex flex-col justify-between opacity-95 shadow-sm">
                    <div className="h-full w-full border border-amber-100/20 rounded-xs grid grid-cols-3 gap-[2px]">
                      <div className="border-r border-b border-amber-700/20" />
                      <div className="border-r border-b border-amber-700/20" />
                      <div className="border-b border-amber-700/20" />
                    </div>
                  </div>
                </div>

                {/* Tengah Kartu: Nomor Rekening & Nama */}
                <div className="space-y-1 w-full z-10">
                  <p className="font-mono text-lg md:text-xl text-zinc-100 tracking-[0.2em] font-medium drop-shadow-md">
                    {accountNumber.replace(/(\d{4})/g, "$1 ").trim()}
                  </p>
                  <p className="text-[11px] uppercase tracking-widest text-zinc-400 font-medium font-sans truncate">
                    {accountName}
                  </p>
                </div>

                {/* Bottom Kartu: Tombol Salin Rekening */}
                <div className="w-full flex justify-between items-end relative z-10">
                  <button
                    onClick={handleCopy}
                    className="inline-flex items-center gap-2 bg-zinc-900/90 hover:bg-zinc-800 text-white hover:text-amber-300 text-xs tracking-wider uppercase px-4 py-2.5 rounded-lg border border-zinc-500 transition-all shadow-md cursor-pointer active:scale-95"
                  >
                    {copied ? "Tersalin!" : "Salin Nomor Rekening"}
                  </button>

                  <AnimatePresence>
                    {copied && (
                      <motion.span
                        initial={{ opacity: 0, y: 10, scale: 0.9 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="absolute bottom-12 left-0 bg-emerald-950/90 text-emerald-400 border border-emerald-800/50 text-[10px] uppercase tracking-widest px-3 py-1 rounded-md shadow-lg"
                      >
                        Tersalin ke Clipboard!
                      </motion.span>
                    )}
                  </AnimatePresence>
                </div>
              </div>

              {/* Tombol Close Modal */}
              <button
                onClick={() => setIsOpenModal(false)}
                className="flex items-center justify-center w-10 h-10 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-white hover:border-zinc-600 shadow-md transition-all active:scale-95 cursor-pointer"
                title="Tutup Modal"
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

export default AccountNumberComponent;
