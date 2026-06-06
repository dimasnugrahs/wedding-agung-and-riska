import imageCover from "../assets/images/agung-hero-1.jpg";
import { motion } from "motion/react";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      // Jeda kemunculan teks agar fokus ke background terlebih dahulu
      delayChildren: 0.6,
      staggerChildren: 0.2,
    },
  },
};

const slideInFromLeft = {
  hidden: { opacity: 0, x: -50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 2,
      ease: [0.25, 1, 0.5, 1],
    },
  },
};

const slideInFromRight = {
  hidden: { opacity: 0, x: 50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 2,
      ease: [0.25, 1, 0.5, 1],
    },
  },
};

const viewportConfig = {
  once: true,
  amount: 0.5, // Disesuaikan agar trigger animasi berjalan lebih pas di perangkat mobile
};

const Profile = () => {
  return (
    <div className="">
      {/* ========================== MOBILE SCREEN ========================== */}
      <div className="block md:hidden">
        {/* SEKSI 1: PROFIL PRIA (AGUNG) */}
        <div className="relative min-h-screen flex flex-col justify-end items-end px-6 py-16 text-white overflow-hidden">
          {/* AREA BACKGROUND DENGAN ANIMASI ZOOM-IN */}
          <div className="absolute inset-0 z-0">
            <motion.img
              src={imageCover}
              alt="Groom"
              className="w-full h-full object-cover"
              initial={{ scale: 1.15, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={viewportConfig}
              transition={{ duration: 1.5, ease: [0.25, 1, 0.5, 1] }}
            />
            <div className="absolute inset-0 bg-linear-to-b from-black/60 via-black/40 to-black/70"></div>
          </div>

          {/* AREA KONTEN TEKS */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            variants={containerVariants}
            className="relative z-10 space-y-0 w-full"
          >
            <motion.div
              variants={slideInFromLeft}
              className="font-angele text-3xl"
            >
              I Gusti Agung Putu Widiana Putra
            </motion.div>
            <motion.p
              variants={slideInFromLeft}
              className="text-[11px] uppercase tracking-[0.2em] text-zinc-400 font-light"
            >
              (Agung)
            </motion.p>
            <motion.div
              variants={slideInFromLeft}
              className="text-xs font-light leading-relaxed pt-3"
            >
              <p className="text-zinc-300 text-[10px] uppercase tracking-wider mb-0">
                Putra Pertama dari Pasangan:
              </p>
              <p className="font-angele text-xl">I Gusti Agung Winaya</p>
              <p className="font-angele text-xl">Luh Sumerasih</p>
            </motion.div>
            <motion.div
              variants={slideInFromLeft}
              className="pt-2 flex text-sm"
            >
              <a
                href="#"
                className="inline-flex items-center gap-2 border border-amber-300/20 bg-amber-300/10 px-6 py-2 rounded-full text-white backdrop-blur-sm group"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-4 h-4 text-zinc-300 group-hover:text-zinc-100 transition-colors"
                >
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                </svg>
                <span>Agung Widiana</span>
              </a>
            </motion.div>
          </motion.div>
        </div>

        {/* SEKSI 2: PROFIL WANITA (RISKA) */}
        <div className="relative min-h-screen flex flex-col justify-end items-end text-end px-6 py-16 text-white overflow-hidden">
          {/* AREA BACKGROUND DENGAN ANIMASI ZOOM-IN */}
          <div className="absolute inset-0 z-0">
            <motion.img
              src={imageCover}
              alt="Bride"
              className="w-full h-full object-cover"
              initial={{ scale: 1.15, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={viewportConfig}
              transition={{ duration: 1.5, ease: [0.25, 1, 0.5, 1] }}
            />
            <div className="absolute inset-0 bg-linear-to-b from-black/70 via-black/40 to-black/80"></div>
          </div>

          {/* AREA KONTEN TEKS */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            variants={containerVariants}
            className="relative z-10 space-y-0 w-full"
          >
            <motion.div
              variants={slideInFromRight}
              className="font-angele text-3xl"
            >
              Ni Wayan Riska Riyani
            </motion.div>
            <motion.p
              variants={slideInFromRight}
              className="text-[11px] uppercase tracking-[0.2em] text-zinc-300 font-light"
            >
              (Riska)
            </motion.p>
            <motion.div
              variants={slideInFromRight}
              className="text-xs font-light leading-relaxed pt-3"
            >
              <p className="text-zinc-300 text-[10px] uppercase tracking-wider mb-0">
                Putri Pertama dari Pasangan:
              </p>
              <p className="font-angele text-xl">I Made Mastra</p>
              <p className="font-angele text-xl">Ni Nyoman Manis</p>
            </motion.div>
            <motion.div variants={slideInFromRight} className="pt-2 text-sm">
              <a
                href="#"
                className="inline-flex items-center gap-2 border border-amber-300/20 bg-amber-300/10 px-6 py-2 rounded-full text-white backdrop-blur-sm group"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-4 h-4 text-zinc-300 group-hover:text-zinc-100 transition-colors"
                >
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                </svg>
                <span>Riska Riyani</span>
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* ========================== DESKTOP SCREEN ========================== */}
      <section className="hidden md:block text-center py-20 px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 mx-6 md:mx-20">
          {/* Sisi Agung (Desktop) */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ staggerChildren: 0.15 }}
            className="my-10 md:my-0"
          >
            <motion.div
              transition={{ duration: 2, ease: [0.25, 1, 0.5, 1] }}
              variants={{
                hidden: { opacity: 0, scale: 0.85 },
                visible: { opacity: 1, scale: 1 },
              }}
              className="font-angele text-4xl"
            >
              I Gusti Agung Putu Widiana Putra
            </motion.div>
            <motion.p
              transition={{ duration: 2, ease: [0.25, 1, 0.5, 1] }}
              variants={{
                hidden: { opacity: 0, scale: 0.85 },
                visible: { opacity: 1, scale: 1 },
              }}
              className="text-[11px] uppercase tracking-[0.2em] text-zinc-400 font-light"
            >
              (Agung)
            </motion.p>
            <motion.div
              transition={{ duration: 2, ease: [0.25, 1, 0.5, 1] }}
              variants={{
                hidden: { opacity: 0, scale: 0.85 },
                visible: { opacity: 1, scale: 1 },
              }}
              className="text-xs font-light leading-relaxed mt-10"
            >
              <p className="text-zinc-500 text-[10px] uppercase tracking-wider mb-1">
                Putra Pertama dari Pasangan:
              </p>
              <p className="font-angele text-3xl">I Gusti Agung Winaya</p>
              <p className="text-zinc-400 font-angele text-xl">&</p>
              <p className="font-angele text-3xl">Luh Sumerasih</p>
            </motion.div>
            <div className="pt-4 flex justify-center gap-4 text-sm">
              <motion.a
                transition={{ duration: 2, ease: [0.25, 1, 0.5, 1] }}
                variants={{
                  hidden: { opacity: 0, scale: 0.85 },
                  visible: { opacity: 1, scale: 1 },
                }}
                href="#"
                className="inline-flex items-center gap-2 border border-black/20 px-6 py-2 rounded-full text-zinc-800 hover:bg-zinc-800 hover:border-white hover:text-zinc-100 transition-all group"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-4 h-4 text-zinc-800 group-hover:text-zinc-100 transition-colors"
                >
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                </svg>
                Agung Widiana
              </motion.a>
            </div>
          </motion.div>

          {/* Sisi Riska (Desktop) */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ staggerChildren: 0.15 }}
            className="my-10 md:my-0"
          >
            <motion.div
              transition={{ duration: 2, ease: [0.25, 1, 0.5, 1] }}
              variants={{
                hidden: { opacity: 0, scale: 0.85 },
                visible: { opacity: 1, scale: 1 },
              }}
              className="font-angele text-4xl"
            >
              Ni Wayan Riska Riyani
            </motion.div>
            <motion.p
              transition={{ duration: 2, ease: [0.25, 1, 0.5, 1] }}
              variants={{
                hidden: { opacity: 0, scale: 0.85 },
                visible: { opacity: 1, scale: 1 },
              }}
              className="text-[11px] uppercase tracking-[0.2em] text-zinc-400 font-light"
            >
              (Riska)
            </motion.p>
            <motion.div
              transition={{ duration: 2, ease: [0.25, 1, 0.5, 1] }}
              variants={{
                hidden: { opacity: 0, scale: 0.85 },
                visible: { opacity: 1, scale: 1 },
              }}
              className="text-xs font-light leading-relaxed mt-10"
            >
              <p className="text-zinc-500 text-[10px] uppercase tracking-wider mb-1">
                Putri Pertama dari Pasangan:
              </p>
              <p className="font-angele text-3xl">I Made Mastra</p>
              <p className="text-zinc-400 font-angele text-xl">&</p>
              <p className="font-angele text-3xl">Ni Nyoman Manis</p>
            </motion.div>
            <div className="pt-4 flex justify-center gap-4 text-sm">
              <motion.a
                transition={{ duration: 2, ease: [0.25, 1, 0.5, 1] }}
                variants={{
                  hidden: { opacity: 0, scale: 0.85 },
                  visible: { opacity: 1, scale: 1 },
                }}
                href="#"
                className="inline-flex items-center gap-2 border border-black/20 px-6 py-2 rounded-full text-zinc-800  hover:bg-zinc-800 hover:border-white hover:text-zinc-100 transition-all group"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-4 h-4 text-zinc-800 group-hover:text-zinc-100 transition-colors"
                >
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                </svg>
                Riska Riyani
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Profile;
