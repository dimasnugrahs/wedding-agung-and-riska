import { motion } from "motion/react";

const Mesangih = ({
  candidates = [
    {
      id: 1,
      name: "I Gede Agung Widiana",
      role: "Putra Pertama",
    },
    {
      id: 2,
      name: "I Gusti Agung Made Widhi Adnyana Putra",
      role: "Putra Kedua",
    },
    // Anda bisa menambah nama peserta mesangih/metatah lainnya di sini
  ],
}) => {
  return (
    <section className="relative w-full bg-black text-white py-20 px-6 flex flex-col items-center justify-center overflow-hidden select-none font-inter">
      {/* Background Lighting/Glow Aksen Emas Lembut */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/2 -translate-x-1/2 translate-y-1/2 w-80 h-80 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />

      {/* Kontainer Utama */}
      <div className="relative z-10 w-full max-w-2xl flex flex-col items-center text-center space-y-12">
        {/* ================= HEADER / JUDUL ================= */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col items-center space-y-3"
        >
          {/* Sub-judul Tradisional */}
          <span className="text-xs md:text-xs uppercase tracking-[0.4em] font-light">
            Upacara Manusa Yadnya
          </span>

          {/* Judul Utama */}
          <h2 className="text-4xl md:text-4xl text-white tracking-wide font-normal pt-1">
            Mepandes / Mesangih
          </h2>

          {/* Deskripsi Singkat */}
          <p className="text-xs md:text-sm text-zinc-400 font-light max-w-md pt-2 leading-relaxed">
            Silahkan diisi dengan deskripsi mesangih ya lengur.
          </p>
        </motion.div>

        {/* ================= SINGLE BOX UNTUK SEMUA NAMA ================= */}
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.98 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="w-full max-w-md bg-zinc-950/80 border border-zinc-800/80 hover:border-amber-500/30 rounded-2xl p-6 md:p-8 flex flex-col items-center divide-y divide-zinc-800/60 backdrop-blur-sm transition-all duration-300 shadow-xl"
        >
          {candidates.map((person, index) => (
            <div
              key={person.id || index}
              className={`w-full flex flex-col items-center justify-center ${
                index === 0
                  ? "pb-6"
                  : index === candidates.length - 1
                    ? "pt-6"
                    : "py-6"
              }`}
            >
              {/* Badge/Peran */}
              {person.role && (
                <span className="text-[10px] md:text-xs uppercase tracking-[0.3em] text-zinc-400 font-medium mb-1.5">
                  {person.role}
                </span>
              )}

              {/* Nama Peserta */}
              <h3 className="text-xl md:text-2xl font-serif text-zinc-100 font-medium tracking-wide">
                {person.name}
              </h3>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Mesangih;
