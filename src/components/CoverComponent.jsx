import { motion } from "motion/react";

const Cover = ({ guestName, handleOpenInvitation }) => {
  return (
    <motion.div
      initial={{ translateY: 0, opacity: 1 }}
      exit={{
        translateY: "-100%",
        opacity: 0,
        transition: { duration: 1.2, ease: [0.77, 0, 0.175, 1] },
      }}
      className="fixed inset-0 z-999 flex flex-col justify-between items-center text-center p-6 bg-cover bg-center"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=2070')`,
      }}
    >
      {/* Bagian Atas: Nama Pengantin */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.8 }}
        className="mt-12"
      >
        <h1 className="font-display font-light text-5xl md:text-7xl text-white mt-8">
          Agung & Riska
        </h1>
      </motion.div>

      {/* Bagian Tengah: Box Nama Tamu */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.5, duration: 0.8 }}
        className="my-auto max-w-md md:bg-black/2 md:backdrop-blur-sm rounded-2xl md:border md:border-white/10 md:mx-4 md:px-10 md:py-10"
      >
        <p className="text-white text-xs md:text-sm uppercase tracking-wider mb-2">
          Kepada Yth. Bapak/Ibu/Saudara/i:
        </p>
        <h2 className="text-2xl md:text-3xl font-medium text-white tracking-wide capitalize px-4">
          {guestName}
        </h2>
        <p className="text-slate-300 text-xs mt-3 italic">
          *Tanpa Mengurangi Rasa Hormat, Kami Mengundang Anda.
        </p>
      </motion.div>

      {/* Bagian Bawah: Tombol Buka */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.8 }}
        className="mb-12"
      >
        <button
          onClick={handleOpenInvitation}
          className="flex items-center gap-2.5 bg-amber-600 hover:bg-amber-700 text-white font-medium px-6 py-3 rounded-full shadow-xl shadow-amber-900/30 hover:scale-105 active:scale-95 transition-all text-sm group"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-5 h-5 group-hover:animate-bounce"
          >
            <path d="M21.2 8.4c.5.3.8.8.8 1.4v10c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V9.8c0-.6.3-1.1.8-1.4l8-4.8c.7-.4 1.5-.4 2.2 0l8 4.8z" />
            <path d="m22 10-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 10" />
          </svg>
          Buka Undangan
        </button>
      </motion.div>
    </motion.div>
  );
};

export default Cover;
