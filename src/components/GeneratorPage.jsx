import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";

const BASE_URL = "https://wedding-agung-and-riska.my.id";

const GeneratorPage = () => {
  const [guestName, setGuestName] = useState("");
  const [copied, setCopied] = useState(false);

  // Mengubah spasi menjadi + untuk query parameter URL
  const formattedParam = encodeURIComponent(guestName.trim()).replace(
    /%20/g,
    "+",
  );
  const invitationLink = guestName.trim()
    ? `${BASE_URL}/?to=${formattedParam}`
    : BASE_URL;

  // Template Kalimat Undangan WhatsApp
  const messageTemplate = `Om Swastyastu

Atas Asung Kertha Wara Nugraha Ida Sang Hyang Widhi Wasa, kami bermaksud mengundang Bapak/Ibu/Saudara/i untuk hadir serta memberikan doa restu pada acara pernikahan kami.
  
Tanpa mengurangi rasa hormat, perkenankan kami mengundang Bapak/Ibu/Saudara/i:
*${guestName.trim() || "[Nama Tamu]"}*
  
Untuk melihat informasi lengkap mengenai rangkaian acara melalui undangan digital berikut:
${invitationLink}
  
Merupakan suatu kehormatan dan kebahagiaan bagi kami apabila Bapak/Ibu/Saudara/i berkenan hadir dan memberikan doa restu.
  
Atas perhatian, kehadiran, serta doa restunya, kami ucapkan terima kasih.
  
Om Shanti, Shanti, Shanti Om`;

  const handleCopy = async () => {
    if (!guestName.trim()) return;

    try {
      await navigator.clipboard.writeText(messageTemplate);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch (err) {
      console.error("Gagal menyalin teks: ", err);
    }
  };

  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center p-4 md:p-8 font-sans selection:bg-amber-500 selection:text-black">
      <div className="w-full max-w-2xl bg-zinc-950 border border-zinc-800 rounded-2xl p-6 md:p-8 shadow-2xl space-y-6">
        {/* Header */}
        <div className="text-center space-y-2 pt-4 md:pt-0">
          <h1 className="text-2xl md:text-3xl font-serif text-amber-200">
            Generator Link Undangan
          </h1>
          <p className="text-xs text-zinc-400 tracking-wider">
            Buat pesan pengantar WhatsApp & link khusus tamu dengan mudah
          </p>
        </div>

        {/* Input Form */}
        <div className="space-y-2">
          <label className="text-xs uppercase tracking-widest text-amber-400/90 font-medium block">
            Nama Tamu / Keluarga
          </label>
          <input
            type="text"
            value={guestName}
            onChange={(e) => setGuestName(e.target.value)}
            placeholder="Contoh: Keluarga Sang Jawara / Bpk. Wayan"
            className="w-full bg-zinc-900 border border-zinc-800 rounded-xl px-4 py-3 text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-amber-500/60 transition-all"
          />
        </div>

        {/* Box Preview Hasil Teks */}
        <div className="space-y-2">
          <label className="text-xs uppercase tracking-widest text-zinc-400 font-medium block">
            Hasil Template Pesan WA
          </label>
          <div className="relative w-full bg-zinc-900/80 border border-zinc-800/80 rounded-xl p-4 text-xs md:text-sm font-mono text-zinc-300 leading-relaxed whitespace-pre-wrap max-h-60 overflow-y-auto">
            {messageTemplate}
          </div>
        </div>

        {/* Tombol Copy dengan Animasi */}
        <motion.button
          onClick={handleCopy}
          disabled={!guestName.trim()}
          whileHover={guestName.trim() ? { scale: 1.01 } : {}}
          whileTap={guestName.trim() ? { scale: 0.98 } : {}}
          className={`relative w-full py-3.5 px-6 rounded-xl text-xs md:text-sm uppercase tracking-widest font-semibold transition-all duration-300 flex items-center justify-center gap-2 overflow-hidden cursor-pointer ${
            !guestName.trim()
              ? "bg-zinc-800 text-zinc-500 cursor-not-allowed"
              : copied
                ? "bg-emerald-600 text-white shadow-[0_0_20px_rgba(16,185,129,0.3)]"
                : "bg-linear-to-r from-amber-500 to-amber-600 text-black hover:brightness-110 shadow-[0_0_20px_rgba(245,158,11,0.2)]"
          }`}
        >
          <AnimatePresence mode="wait">
            {copied ? (
              <motion.span
                key="copied"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="flex items-center gap-2 font-bold"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2.5}
                  stroke="currentColor"
                  className="w-4 h-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m4.5 12.75 6 6 9-13.5"
                  />
                </svg>
                Berhasil Disalin!
              </motion.span>
            ) : (
              <motion.span
                key="copy"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="flex items-center gap-2"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.8}
                  stroke="currentColor"
                  className="w-4 h-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 17.25v3.375c0 .621-.504 1.125-1.125 1.125h-9.75a1.125 1.125 0 0 1-1.125-1.125V7.875c0-.621.504-1.125 1.125-1.125H6.75a9.06 9.06 0 0 1 1.5.124m7.5 10.376h3.375c.621 0 1.125-.504 1.125-1.125V11.25c0-4.46-3.243-8.161-7.5-8.876a9.06 9.06 0 0 0-1.5-.124H9.375c-.621 0-1.125.504-1.125 1.125v3.5m7.5 10.375H9.375a1.125 1.125 0 0 1-1.125-1.125v-9.25m12 6.625v-1.875a3.375 3.375 0 0 0-3.375-3.375h-1.5"
                  />
                </svg>
                Salin Pesan Undangan
              </motion.span>
            )}
          </AnimatePresence>
        </motion.button>
      </div>
    </div>
  );
};

export default GeneratorPage;
