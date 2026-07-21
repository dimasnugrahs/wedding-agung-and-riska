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
      delayChildren: 0.3, // Menunggu box muncul sebelum menganimasi anak-anaknya
      staggerChildren: 0.2, // Jeda antar nama yang muncul berurutan
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

const Mesangih = ({
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
    <section className="relative w-full bg-black text-white py-20 px-6 flex flex-col items-center justify-center overflow-hidden select-none font-inter">
      {/* Background Lighting/Glow Aksen Emas Bernapas (Pulse Animation) */}
      <motion.div
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none"
      />

      {/* Kontainer Utama */}
      <div className="relative z-10 w-full max-w-2xl flex flex-col items-center text-center space-y-10">
        {/* ================= HEADER / JUDUL ================= */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col items-center space-y-3"
        >
          {/* Sub-judul Adat (Opsional jika ingin diaktifkan kembali) */}
          {/* 
          <span className="text-xs uppercase tracking-[0.4em] font-light text-amber-400/90">
            Upacara Manusa Yadnya
          </span> 
          */}

          {/* Judul Utama */}
          <h2 className="text-3xl md:text-4xl text-white tracking-wide font-normal pt-1">
            Upacara Mesangih / Potong Gigi
          </h2>

          {/* Aksentuasi Garis Tipis Emas */}
          <div className="w-12 h-[1px] bg-gradient-to-r from-transparent via-amber-500/50 to-transparent mt-2" />
        </motion.div>

        {/* ================= SINGLE BOX UNTUK SEMUA NAMA (STAGGERED ANIMATION) ================= */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="w-full max-w-md bg-zinc-950/80 border border-zinc-800/80 hover:border-amber-500/30 rounded-2xl p-6 md:p-8 flex flex-col items-center divide-y divide-zinc-800/60 backdrop-blur-sm transition-colors duration-500 shadow-2xl"
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
              {/* Role (jika ada) */}
              {person.role && (
                <span className="text-[10px] md:text-xs uppercase tracking-[0.3em] text-amber-300/80 font-medium mb-2">
                  {person.role}
                </span>
              )}

              {/* Nama Peserta */}
              <h3 className="text-xl font-lobster md:text-2xl text-zinc-100 font-medium tracking-wide leading-relaxed">
                {person.name}
              </h3>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Mesangih;
