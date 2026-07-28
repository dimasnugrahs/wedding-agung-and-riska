import { motion } from "motion/react";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.2,
      staggerChildren: 0.2,
    },
  },
};

const fadeInVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      ease: [0.25, 1, 0.5, 1],
    },
  },
};

const WishComponent = () => {
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={containerVariants}
      className="relative bg-black text-center py-20 md:py-28 px-6 overflow-hidden select-none"
    >
      {/* Subtle Background Glow Aksen Emas */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-2xl mx-auto space-y-8">
        {/* Icon Kutipan Sloka */}
        <motion.div variants={fadeInVariant} className="flex justify-center">
          <svg
            className="w-8 h-8 text-amber-400/70"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M13 14.725c0-5.141 3.892-10.519 10-11.725l.944 2c-3.089 1.116-4.944 3.421-4.944 5.725h4v6h-10v-2zm-13 0c0-5.141 3.892-10.519 10-11.725l.944 2c-3.089 1.116-4.944 3.421-4.944 5.725h4v6h-10v-2z" />
          </svg>
        </motion.div>

        {/* Sloka Sanskrit */}
        <motion.p
          variants={fadeInVariant}
          className="text-amber-100 font-serif italic text-lg sm:text-xl md:text-2xl leading-relaxed tracking-wide px-2"
        >
          "Ihaiva stam ma vi yaustam, visvam ayur vyasnutam. Krindantau putrair
          naptrbhih, Modamanau sve grhe."
        </motion.p>

        {/* Garis Pembatas Tipis */}
        <motion.div variants={fadeInVariant} className="flex justify-center">
          <div className="w-12 h-px bg-gradient-to-r from-transparent via-amber-500/50 to-transparent" />
        </motion.div>

        {/* Terjemahan Sloka */}
        <motion.p
          variants={fadeInVariant}
          className="text-zinc-300 font-light text-xs sm:text-sm md:text-base max-w-xl mx-auto leading-relaxed"
        >
          Wahai pasangan suami-istri, semoga kalian tetap bersatu dan tidak
          pernah terpisahkan. Semoga kalian mencapai hidup penuh kebahagiaan,
          tinggal di rumah yang penuh kegembiraan bersama seluruh keturunanmu.
        </motion.p>

        {/* Sumber Kitab Suci */}
        <motion.p
          variants={fadeInVariant}
          className="text-amber-400/90 font-medium tracking-[0.3em] text-[10px] sm:text-xs uppercase pt-2"
        >
          — Rigweda X. 85. 42 —
        </motion.p>
      </div>
    </motion.section>
  );
};

export default WishComponent;
