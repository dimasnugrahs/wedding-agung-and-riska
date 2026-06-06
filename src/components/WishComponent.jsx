import { motion } from "motion/react";

const Wish = () => {
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
      transition={{ staggerChildren: 0.15 }}
      className="bg-white md:bg-linear-to-b md:from-zinc-50 md:to-white text-center py-20 px-4 border-t border-zinc-100"
    >
      <div className="max-w-xl mx-auto space-y-10">
        <div className="space-y-4 px-4">
          <motion.svg
            transition={{ duration: 2, ease: [0.25, 1, 0.5, 1] }}
            variants={{
              hidden: { opacity: 0, scale: 0.85 },
              visible: { opacity: 1, scale: 1 },
            }}
            className="w-7 h-7 mx-auto text-zinc-300"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M13 14.725c0-5.141 3.892-10.519 10-11.725l.944 2c-3.089 1.116-4.944 3.421-4.944 5.725h4v6h-10v-2zm-13 0c0-5.141 3.892-10.519 10-11.725l.944 2c-3.089 1.116-4.944 3.421-4.944 5.725h4v6h-10v-2z" />
          </motion.svg>

          <motion.p
            transition={{ duration: 2, ease: [0.25, 1, 0.5, 1] }}
            variants={{
              hidden: { opacity: 0, scale: 0.85 },
              visible: { opacity: 1, scale: 1 },
            }}
          >
            "Ihaiva stam ma vi yaustam, visvam ayur vyasnutam. Krindantau
            putrair naptrbhih, Modamanau sve grhe."
          </motion.p>

          <motion.p
            transition={{ duration: 2, ease: [0.25, 1, 0.5, 1] }}
            variants={{
              hidden: { opacity: 0, scale: 0.85 },
              visible: { opacity: 1, scale: 1 },
            }}
            className="text-zinc-600 font-light text-xs md:text-sm max-w-md mx-auto leading-relaxed"
          >
            Wahai Pasangan suami-isteri, semoga kalian tetap bersatu dan tidak
            pernah terpisahkan. Semoga kalian mencapai hidup penuh kebahagiaan,
            tinggal di rumah yang kegembiraan bersama seluruh keturunanmu.
          </motion.p>

          <motion.p
            transition={{ duration: 2, ease: [0.25, 1, 0.5, 1] }}
            variants={{
              hidden: { opacity: 0, scale: 0.85 },
              visible: { opacity: 1, scale: 1 },
            }}
            className="text-zinc-900 font-medium tracking-[0.2em] text-[10px] uppercase pt-2"
          >
            — Rigweda X. 85. 42 —
          </motion.p>
        </div>
      </div>
    </motion.section>
  );
};

export default Wish;
