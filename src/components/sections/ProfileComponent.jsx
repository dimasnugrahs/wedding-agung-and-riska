import { motion } from "motion/react";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.1,
      staggerChildren: 0.12,
    },
  },
};

const textFadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.25, 1, 0.5, 1],
    },
  },
};

// Margin memicu animasi lebih awal sebelum elemen benar-benar terlihat penuh
const viewportConfig = {
  once: true,
  amount: 0.1,
  margin: "100px 0px 0px 0px",
};

const profiles = [
  {
    id: "groom",
    name: "I Gusti Agung Putu Widiana Putra",
    nickname: "Agung Widiana",
    role: "Putra Pertama dari Pasangan",
    father: "I Gusti Agung Winaya",
    mother: "Luh Sumerasih",
    instagram: "agung_widiana99",
    instagramUrl:
      "https://www.instagram.com/agung_widiana99?igsh=ZHdqeHQxbm1kZmE5",
    image: "/images/wedding-agung-and-riska-profile-man.webp",
  },
  {
    id: "bride",
    name: "Ni Wayan Riska Riyani",
    nickname: "Riska Riyani",
    role: "Putri Pertama dari Pasangan",
    father: "I Made Mastra",
    mother: "Ni Nyoman Manis",
    instagram: "_riskariyanii",
    instagramUrl:
      "https://www.instagram.com/_riskariyanii?igsh=MXNmOTIycHAwZ3hiMA==",
    image: "/images/wedding-agung-and-riska-profile-woman.webp",
  },
];

const ProfileComponents = () => {
  return (
    <section className="bg-black text-white py-16 md:py-24 px-4 sm:px-6 overflow-hidden select-none">
      <div className="max-w-6xl mx-auto space-y-16 md:space-y-24">
        {profiles.map((person, index) => {
          const isEven = index % 2 === 0;

          return (
            <div
              key={person.id}
              className={`relative min-h-[80vh] md:min-h-500px flex items-end rounded-3xl overflow-hidden border border-zinc-800/80 shadow-2xl bg-zinc-950 ${
                isEven ? "justify-start" : "justify-end"
              }`}
            >
              {/* Background Image & Overlay */}
              <div className="absolute inset-0 z-0">
                <motion.img
                  src={person.image}
                  alt={person.name}
                  loading="eager"
                  fetchPriority="high"
                  decoding="async"
                  className="w-full h-full object-cover object-center will-change-transform"
                  initial={{ scale: 1.08 }}
                  whileInView={{ scale: 1 }}
                  viewport={viewportConfig}
                  transition={{ duration: 1.2, ease: [0.25, 1, 0.5, 1] }}
                />
                <div
                  className={`absolute inset-0 bg-linear-to-t from-black/95 via-black/50 to-transparent md:bg-linear-to-r ${
                    isEven
                      ? "md:from-black/90 md:via-black/60 md:to-transparent"
                      : "md:from-transparent md:via-black/60 md:to-black/90"
                  }`}
                />
              </div>

              {/* Konten Teks Profil */}
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={viewportConfig}
                variants={containerVariants}
                className={`relative z-10 p-6 sm:p-10 md:p-12 w-full md:w-1/2 space-y-4 ${
                  isEven ? "text-left" : "text-right md:text-right"
                }`}
              >
                <motion.div variants={textFadeIn} className="space-y-1">
                  <h3 className="text-xl sm:text-3xl md:text-4xl font-angele text-white font-normal tracking-wide leading-tight">
                    {person.name}
                  </h3>
                  <p className="text-xs uppercase tracking-[0.3em] text-amber-300/90 font-light">
                    ({person.nickname})
                  </p>
                </motion.div>

                <motion.div variants={textFadeIn} className="space-y-1 pt-2">
                  <p className="text-[10px] sm:text-xs uppercase tracking-wider text-zinc-400 font-light">
                    {person.role}:
                  </p>
                  <p className="text-sm sm:text-xl font-angele text-zinc-200">
                    {person.father}
                  </p>
                  <p className="text-xs text-zinc-200 font-angele">&</p>
                  <p className="text-sm sm:text-xl font-angele text-zinc-200">
                    {person.mother}
                  </p>
                </motion.div>

                {/* Tombol Instagram */}
                <motion.div variants={textFadeIn} className="pt-3">
                  <a
                    href={person.instagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 border border-zinc-700/80 bg-zinc-900/70 hover:border-amber-500/40 hover:bg-zinc-800/80 text-white text-[11px] tracking-widest uppercase font-medium px-5 py-2.5 rounded-xl transition-all shadow-sm group backdrop-blur-md"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.75"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="w-4 h-4 text-amber-300 group-hover:scale-110 transition-transform"
                    >
                      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                    </svg>
                    <span>{person.nickname}</span>
                  </a>
                </motion.div>
              </motion.div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default ProfileComponents;
