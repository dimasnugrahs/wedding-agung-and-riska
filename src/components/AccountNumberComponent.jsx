import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";

const DigitalEnvelope = () => {
  const [copied, setCopied] = useState(false);
  const accountName = "AGUNG PERDANA";
  const accountNumber = "1420012345678"; // Ganti dengan nomor rekening asli

  const handleCopy = () => {
    navigator.clipboard.writeText(accountNumber);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="relative min-h-screen w-full bg-slate-950 flex flex-col justify-between items-center px-6 py-16 text-zinc-300 overflow-hidden select-none">
      {/* BACKGROUND POLOS TANPA CORAK */}
      <div className="absolute inset-0 pointer-events-none z-0 bg-slate-950"></div>

      {/* ==================== KONTEN UTAMA ==================== */}
      <div className="relative z-10 my-auto flex flex-col items-center w-full max-w-md text-center space-y-8">
        {/* HEADER & SUBTITLE */}
        <div className="space-y-4">
          <div className="relative inline-block">
            <div>DIGITAL GIFT</div>
          </div>

          <p className="text-xs font-light text-zinc-400 leading-relaxed px-4 pt-4 uppercase tracking-[0.18em]">
            Doa restu anda merupakan hal yang sangat berarti bagi kami & bagi
            para undangan yang ingin mengirimkan hadiah bisa melalui tautan
            berikut:
          </p>
        </div>

        {/* KARTU REKENING */}
        <div className="relative w-full aspect-[1.66/1] bg-gradient-to-br from-stone-900 via-zinc-900 to-stone-950 border border-zinc-800/60 rounded-2xl shadow-2xl p-6 flex flex-col justify-between items-start text-left overflow-hidden group">
          {/* Tekstur Halus di Dalam Kartu Tetap Dipertahankan untuk Detail */}
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
              className="inline-flex items-center gap-2 bg-stone-800/80 hover:bg-stone-700 text-stone-200 text-xs tracking-wider uppercase px-4 py-2.5 rounded-xl border border-stone-700/50 transition-all shadow-md group-hover:border-zinc-600 cursor-pointer active:scale-95"
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

        {/* FOOTER UCAPAN TERIMA KASIH */}
        <div className="pt-4 w-full">
          <div className="w-1/3 h-px bg-gradient-to-r from-transparent via-zinc-700 to-transparent mx-auto mb-6"></div>
          <p className="font-light text-sm italic text-zinc-400 tracking-wide">
            Terima kasih atas doa restu & hadiah Anda
          </p>
        </div>
      </div>
    </section>
  );
};

export default DigitalEnvelope;
