import { useState } from "react";
import imageCover from "../assets/images/agung-cover-compressed.webp";
import imageCover2 from "../assets/images/agung-hero-2.jpg";
import { motion, AnimatePresence } from "motion/react";

const Gallery = () => {
  const [currentIndex, setCurrentIndex] = useState(null);

  const weddingPhotos = [
    imageCover,
    imageCover2,
    imageCover,
    imageCover2,
    imageCover,
    imageCover2,
    imageCover,
    imageCover2,
    imageCover,
    imageCover2,
  ];

  const nextSlide = (e) => {
    e.stopPropagation();
    if (currentIndex < weddingPhotos.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      setCurrentIndex(0);
    }
  };

  const prevSlide = (e) => {
    e.stopPropagation();
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    } else {
      setCurrentIndex(weddingPhotos.length - 1);
    }
  };

  const getLayoutClass = (index) => {
    const mobilePos = index % 4;
    let mobileClass = "";
    if (mobilePos === 0 || mobilePos === 1) {
      mobileClass = "col-span-3 aspect-[3/4]";
    } else {
      mobileClass = "col-span-6 aspect-[16/10]";
    }

    const desktopPos = index % 5;
    let desktopClass = "";
    if (desktopPos === 0 || desktopPos === 1 || desktopPos === 2) {
      desktopClass = "md:col-span-2 md:aspect-[3/4]";
    } else {
      desktopClass = "md:col-span-3 md:aspect-[4/3]";
    }

    return `${mobileClass} ${desktopClass}`;
  };

  return (
    <section className="bg-black py-16 text-center space-y-10 w-full overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ type: "spring", stiffness: 50, damping: 20 }}
        className="space-y-2 px-4 mx-6 md:mx-20"
      >
        <h3 className="text-2xl md:text-3xl text-white tracking-wide font-normal font-serif">
          Galeri Kebahagiaan
        </h3>
        <p className="text-[10px] uppercase tracking-[0.3em] text-zinc-400 font-medium">
          Momen Perjalanan Kami
        </p>
      </motion.div>

      {/* GRID FOTO DENGAN ANIMASI PREMIUM SPRING & SMOOTH HOVER */}
      <div className="grid grid-cols-6 gap-3 md:gap-4 mx-4 md:mx-32 max-w-7xl md:auto-rows-auto">
        {weddingPhotos.map((srcPath, i) => (
          <motion.div
            key={i}
            onClick={() => setCurrentIndex(i)}
            initial={{ opacity: 0, y: 50, scale: 0.96 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: "-30px" }}
            transition={{
              type: "spring",
              stiffness: 45,
              damping: 14,
              delay: (i % 5) * 0.06,
            }}
            whileHover={{ scale: 1.025 }}
            whileTap={{ scale: 0.98 }}
            className={`overflow-hidden bg-zinc-950 border border-zinc-900/80 group cursor-pointer rounded-sm ${getLayoutClass(i)}`}
          >
            <motion.img
              src={srcPath}
              alt={`Wedding moment ${i + 1}`}
              initial={{ opacity: 0.65 }}
              whileHover={{ opacity: 1 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </motion.div>
        ))}
      </div>

      {/* ANIMASI FOOTER */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.4 }}
        className="pt-2 px-4 mx-6 md:mx-20"
      >
        <p className="text-zinc-400 italic text-xs font-light tracking-wide">
          "Meniti waktu, mengukir cerita abadi bersama."
        </p>
      </motion.div>

      <AnimatePresence>
        {currentIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setCurrentIndex(null)}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-4 cursor-zoom-out select-none"
          >
            {/* Tombol Close */}
            <button
              onClick={() => setCurrentIndex(null)}
              className="absolute top-6 right-6 text-white/60 hover:text-white transition-colors p-2 z-50 cursor-pointer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-8 h-8"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18 18 6M6 6l12 12"
                />
              </svg>
            </button>

            {/* Tombol Prev */}
            <button
              onClick={prevSlide}
              className="absolute left-4 md:left-8 text-white/80 hover:text-white md:bg-zinc-900/40 hover:bg-zinc-800/60 p-3 rounded-full transition-all z-50 cursor-pointer md:backdrop-blur-xs"
              aria-label="Previous photo"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 19.5L8.25 12l7.5-7.5"
                />
              </svg>
            </button>

            {/* Gambar Besar */}
            <motion.div
              key={currentIndex}
              initial={{ scale: 0.97, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.97, opacity: 0 }}
              transition={{ type: "spring", stiffness: 100, damping: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-4xl max-h-[80vh] overflow-hidden rounded-lg shadow-2xl px-2"
            >
              <img
                src={weddingPhotos[currentIndex]}
                alt={`Expanded moment ${currentIndex + 1}`}
                className="w-full h-full object-contain max-h-[80vh]"
              />

              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/60 px-3 py-1 rounded-full text-xs text-zinc-300 tracking-wider">
                {currentIndex + 1} / {weddingPhotos.length}
              </div>
            </motion.div>

            {/* Tombol Next */}
            <button
              onClick={nextSlide}
              className="absolute right-4 md:right-8 text-white/80 hover:text-white md:bg-zinc-900/40 hover:bg-zinc-800/60 p-3 rounded-full transition-all z-50 cursor-pointer md:backdrop-blur-xs"
              aria-label="Next photo"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8.25 4.5l7.5 7.5-7.5 7.5"
                />
              </svg>
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Gallery;
