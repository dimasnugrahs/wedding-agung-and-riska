import { motion } from "motion/react";

// Variants untuk kontainer utama
const containerVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.96 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: [0.25, 1, 0.5, 1],
      delayChildren: 0.3,
      staggerChildren: 0.2,
    },
  },
};

// Variants untuk tiap item nama di dalam box
const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.25, 1, 0.5, 1],
    },
  },
};

const MesangihComponents = ({
  candidates = [
    {
      id: 1,
      name: "I Gusti Agung Putu Widiana Putra",
      role: "Putra Pertama",
    },
    {
      id: 2,
      name: "I Gusti Agung Made Widhi Adnyana Putra",
      role: "Putra Kedua",
    },
  ],
}) => {
  return (
    <section className="relative w-full bg-black text-white py-20 px-6 flex flex-col items-center justify-center overflow-hidden select-none">
      {/* Background Lighting/Glow Aksen Emas Bernapas */}
      <motion.div
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.25, 0.5, 0.25],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 md:w-96 md:h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none will-change-transform"
      />

      {/* Kontainer Utama */}
      <div className="relative z-10 w-full max-w-2xl flex flex-col items-center text-center space-y-10">
        {/* HEADER / JUDUL */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col items-center space-y-3"
        >
          <h2 className="text-2xl md:text-3xl text-white tracking-wide font-normal pt-1">
            Upacara Mesangih
          </h2>

          <div className="w-16 h-px bg-linear-to-r from-transparent via-amber-500/50 to-transparent mt-2" />
        </motion.div>
        <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-full max-w-md h-32 pointer-events-none z-0 flex items-center justify-center">
          {/* Layer Inner Glow Emas Terang */}
          <motion.div
            animate={{ opacity: [0.6, 0.9, 0.6], scale: [0.95, 1.05, 0.95] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="w-3/4 h-20 bg-amber-400/40 rounded-full blur-2xl"
          />
          {/* Layer Outer Glow Emas Hangat Luas */}
          <motion.div
            animate={{ opacity: [0.4, 0.7, 0.4] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute w-full h-28 bg-amber-600/15 rounded-full blur-3xl"
          />
        </div>

        {/* SINGLE BOX UNTUK SEMUA NAMA */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="w-full max-w-md bg-zinc-950/80 border border-zinc-800/80 hover:border-amber-500/30 rounded-2xl p-6 md:p-8 flex flex-col items-center divide-y divide-zinc-800/60 backdrop-blur-md transition-all duration-300 shadow-2xl"
        >
          {candidates.map((person, index) => (
            <motion.div
              key={person.id || index}
              variants={itemVariants}
              className={`w-full flex flex-col items-center justify-center ${
                index === 0
                  ? "pb-6"
                  : index === candidates.length - 1
                    ? "pt-6"
                    : "py-6"
              }`}
            >
              {/* Nama Peserta */}
              <h3 className="text-md md:text-xl text-zinc-100 font-normal tracking-wide leading-relaxed">
                {person.name}
              </h3>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default MesangihComponents;
