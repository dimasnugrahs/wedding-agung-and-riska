import { useEffect, useState } from "react";
import imageCover from "../assets/images/wedding-agung-and-riska-location.webp";
import { motion } from "motion/react";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.6,
      staggerChildren: 0.2,
    },
  },
};

const textFadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1.2,
      ease: [0.25, 1, 0.5, 1],
    },
  },
};

const viewportConfig = {
  once: true,
  amount: 0.3,
};

// const viewportConfigImg = {
//   once: true,
//   amount: 0.1,
// };

const LocationComponent = ({ targetDate = "2026-10-21T13:00:00" }) => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = +new Date(targetDate) - +new Date();
      let newTimeLeft = { days: 0, hours: 0, minutes: 0, seconds: 0 };

      if (difference > 0) {
        newTimeLeft = {
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        };
      }

      setTimeLeft(newTimeLeft);
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <section>
      <div>
        <div className="relative min-h-screen flex flex-col justify-start items-start md:justify-center md:text-center md:items-center px-6 py-16 text-white overflow-hidden">
          <div className="absolute inset-0 z-0">
            {/* Menggunakan div dengan bg-fixed dan bg-cover agar gambar terkunci di layar saat di-scroll */}
            <div
              className="w-full h-full bg-fixed bg-cover bg-center"
              style={{ backgroundImage: `url(${imageCover})` }}
            />
            {/* Overlay kegelapan */}
            <div className="absolute inset-0 bg-linear-to-b from-black/85 via-black/85 to-black/85"></div>
          </div>

          {/* AREA KONTEN TEKS (KONTAINER INDUK) */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            variants={containerVariants}
            className="relative z-10 space-y-0 w-full md:w-1/2"
          >
            {/* Teks 1: Judul Save The Date */}
            <motion.div variants={textFadeIn} className="text-3xl">
              <div className="block font-display md:hidden">SAVE THE DATE</div>
              <div className="block md:hidden"></div>
              <div className="hidden md:block">SAVE THE DATE</div>
              <div className="border border-b border-zinc-300 my-4 md:my-8"></div>
            </motion.div>

            {/* Teks 2: Pembukaan Undang */}
            <motion.div variants={textFadeIn} className="text-sm">
              <div className="leading-relaxed font-light text-zinc-300">
                Atas Asung Kerta Wara Nugraha Ida Sang Hyang Widi Wasa/Tuhan
                Yang Maha Esa, Kami bermaksud mengundang Bapak/Ibu/Saudara/i
                untuk hadir pada acara Pawiwahan (Pernikahan) putra dan putri
                kami yang akan dilaksanakan pada:
              </div>
              <div className="border md:border-0 border-b border-zinc-300 my-4 md:my-8"></div>
            </motion.div>

            {/* Teks 3: Detail Tanggal & Jam */}
            <motion.div variants={textFadeIn} className="">
              <div className="text-lg">Acara di Rumah Mempelai Wanita</div>
              <div className="font-light text-zinc-300 text-sm">
                Selasa, 20 Oktober 2026
              </div>
              <div className="font-light text-zinc-300 mb-1 text-sm">
                08.00 WITA - Selesai
              </div>
            </motion.div>

            {/* Teks 4: Tempat Pelaksanaan */}
            <motion.div variants={textFadeIn} className="mt-0">
              <div className="text-md">Rumah Mempelai Wanita</div>
              <div className="font-light text-zinc-300">Jembrana, Bali</div>
            </motion.div>

            {/* Teks 5: Tombol Maps */}
            <motion.div variants={textFadeIn} className="pt-2 my-2">
              <a
                href="https://maps.google.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 border border-zinc-500/20 bg-zinc-600/10 hover:border-zinc-500/50 hover:bg-zinc-600/40 text-white text-[11px] tracking-widest uppercase font-medium px-6 py-3 rounded-xl transition-all shadow-sm group"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform"
                >
                  <polygon points="3 11 22 2 13 21 11 13 3 11" />
                </svg>
                Petunjuk Lokasi
              </a>
              <div className="border border-b border-zinc-300 my-4 md:my-8"></div>
            </motion.div>

            <motion.div variants={textFadeIn} className="">
              <div className="text-lg">Acara di Rumah Mempelai Pria</div>
              <div className="font-light text-zinc-300 text-sm">
                Selasa, 20 Oktober 2026
              </div>
              <div className="font-light text-zinc-300 mb-1 text-sm">
                08.00 WITA - Selesai
              </div>
            </motion.div>

            {/* Teks 4: Tempat Pelaksanaan */}
            <motion.div variants={textFadeIn} className="mt-0">
              <div className="text-md">Rumah Mempelai Pria</div>
              <div className="font-light text-zinc-300 text-sm">
                Jembrana, Bali
              </div>
            </motion.div>

            {/* Teks 5: Tombol Maps */}
            <motion.div variants={textFadeIn} className="pt-2 my-2">
              <a
                href="https://maps.google.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 border border-zinc-500/20 bg-zinc-600/10 hover:border-zinc-500/50 hover:bg-zinc-600/40 text-white text-[11px] tracking-widest uppercase font-medium px-6 py-3 rounded-xl transition-all shadow-sm group"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform"
                >
                  <polygon points="3 11 22 2 13 21 11 13 3 11" />
                </svg>
                Petunjuk Lokasi
              </a>
              <div className="border border-b border-zinc-300 my-4 md:my-8"></div>
            </motion.div>

            {/* Teks 6: Penutup Doa Restu */}
            <motion.div variants={textFadeIn} className="">
              <div className="leading-relaxed font-light text-zinc-300 text-sm">
                Merupakan suatu kehormatan dan kebahagiaan bagi kami apabila
                Bapak/Ibu/Saudara/i berkenan hadir serta memberikan doa restu
                kepada kedua mempelai.
              </div>
              <div className="mt-2 font-light text-zinc-300 text-sm">
                Atas kehadiran dan doa restunya, kami ucapkan terima kasih.
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default LocationComponent;
