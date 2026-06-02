import { motion } from "motion/react";
import imageCover from "../assets/images/agung-cover-compressed.webp";

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
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.55), rgba(0, 0, 0, 0.55)), url(${imageCover})`,
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.8 }}
        className="mt-12"
      >
        <div className="text-xs md:text-sm tracking-[0.3em] uppercase text-zinc-300 font-light flex items-center justify-center gap-2 mt-4">
          THE WEDDING
        </div>
        <h1 className="font-angele font-light text-5xl md:text-7xl bg-linear-to-r from-wedding-700 via-wedding-300 to-wedding-700 bg-clip-text text-transparent tracking-wide">
          {/* <h1 className="font-angele font-light text-5xl md:text-7xl text-white tracking-wide"> */}
          AGUNG & RISKA
        </h1>
      </motion.div>

      <div className="w-full max-w-md flex flex-col items-center gap-2 mb-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="w-full rounded-2xl px-4 py-4"
        >
          <p className="text-zinc-300 font-light text-xs md:text-sm uppercase tracking-wider">
            Kepada Yth. Bapak/Ibu/Saudara/i:
          </p>
          <h2 className="font-angele font-bold text-2xl md:text-3xl text-white tracking-wide">
            {guestName}
          </h2>
        </motion.div>

        {/* Tombol Buka Undangan */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="w-full flex justify-center"
        >
          <button
            onClick={handleOpenInvitation}
            className="flex items-center gap-2.5  border hover:border-0 border-wedding-600 md:bg-none hover:bg-linear-to-r hover:from-wedding-700 hover:via-wedding-500 hover:to-wedding-700 text-white font-medium px-8 py-3.5 rounded-full shadow hover:scale-105 active:scale-95 transition-all text-sm group"
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
      </div>
    </motion.div>
  );
};

export default Cover;
