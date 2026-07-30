import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "motion/react";

// Path gambar disesuaikan ke format .webp sesuai standar komponen lainnya
const WEDDING_PHOTOS = Array.from(
  { length: 14 },
  (_, i) => `/images/wedding-agung-and-riska-galeri-${i + 1}.jpg`,
);

const GalleryComponents = () => {
  const [currentIndex, setCurrentIndex] = useState(null);
  const [failedImages, setFailedImages] = useState({});

  const handleImageError = (index) => {
    setFailedImages((prev) => ({ ...prev, [index]: true }));
  };

  const nextSlide = useCallback((e) => {
    if (e) e.stopPropagation();
    setCurrentIndex((prev) =>
      prev === null ? null : prev < WEDDING_PHOTOS.length - 1 ? prev + 1 : 0,
    );
  }, []);

  const prevSlide = useCallback((e) => {
    if (e) e.stopPropagation();
    setCurrentIndex((prev) =>
      prev === null ? null : prev > 0 ? prev - 1 : WEDDING_PHOTOS.length - 1,
    );
  }, []);

  // Listener navigasi keyboard
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (currentIndex === null) return;
      if (e.key === "Escape") setCurrentIndex(null);
      if (e.key === "ArrowRight") nextSlide();
      if (e.key === "ArrowLeft") prevSlide();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [currentIndex, nextSlide, prevSlide]);

  const getLayoutClass = (index) => {
    const mobilePos = index % 4;
    const mobileClass =
      mobilePos === 0 || mobilePos === 1
        ? "col-span-3 aspect-[3/4]"
        : "col-span-6 aspect-[16/10]";

    const desktopPos = index % 5;
    const desktopClass =
      desktopPos === 0 || desktopPos === 1 || desktopPos === 2
        ? "md:col-span-2 md:aspect-[3/4]"
        : "md:col-span-3 md:aspect-[4/3]";

    return `${mobileClass} ${desktopClass}`;
  };

  return (
    <section className="bg-black py-16 md:py-24 text-center space-y-10 w-full overflow-hidden select-none">
      {/* Header Galeri */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.8, ease: [0.25, 1, 0.5, 1] }}
        className="space-y-2 px-4 mx-auto max-w-xl"
      >
        <h3 className="text-2xl md:text-3xl text-white tracking-wide font-normal">
          Galeri Kebahagiaan
        </h3>
        <div className="w-16 h-px bg-linear-to-r my-4 from-transparent via-amber-500/50 to-transparent my-2 mx-auto" />
        <p className="text-[10px] uppercase tracking-[0.3em] text-amber-300/90 font-light">
          Momen Perjalanan Kami
        </p>
      </motion.div>

      {/* Grid Foto */}
      <div className="grid grid-cols-6 gap-3 md:gap-4 mx-4 md:mx-auto max-w-6xl">
        {WEDDING_PHOTOS.map((srcPath, i) => (
          <motion.div
            key={srcPath}
            onClick={() => setCurrentIndex(i)}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-30px" }}
            transition={{
              duration: 0.8,
              delay: (i % 4) * 0.08,
              ease: [0.25, 1, 0.5, 1],
            }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className={`relative overflow-hidden bg-zinc-900 border border-zinc-800/80 group cursor-pointer rounded-xl ${getLayoutClass(
              i,
            )}`}
          >
            {failedImages[i] ? (
              <div className="w-full h-full flex flex-col items-center justify-center p-4 bg-zinc-900/90 text-zinc-500">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-8 h-8 mb-2 opacity-50"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
                  />
                </svg>
                <span className="text-[10px] font-mono">
                  Foto {i + 1} Tidak Ditemukan
                </span>
              </div>
            ) : (
              <img
                src={srcPath}
                alt={`Momen Pernikahan ${i + 1}`}
                loading="lazy"
                decoding="async"
                onError={() => handleImageError(i)}
                className="w-full h-full object-cover opacity-85 group-hover:opacity-100 transition-all duration-500 group-hover:scale-105"
              />
            )}
          </motion.div>
        ))}
      </div>

      {/* Footer Quote */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.2 }}
        className="pt-4 px-4"
      >
        <p className="text-zinc-400 italic text-xs md:text-sm font-light tracking-wide">
          "Meniti waktu, mengukir cerita abadi bersama."
        </p>
      </motion.div>

      {/* Modal Lightbox */}
      <AnimatePresence>
        {currentIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setCurrentIndex(null)}
            className="fixed inset-0 z-1000 flex items-center justify-center bg-black/95 p-4 cursor-zoom-out backdrop-blur-md"
          >
            {/* Tombol Close */}
            <button
              onClick={() => setCurrentIndex(null)}
              className="absolute top-6 right-6 text-zinc-400 hover:text-white transition-colors p-2 z-50 cursor-pointer"
              aria-label="Tutup Galeri"
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
              className="absolute left-4 md:left-8 text-white/80 hover:text-white bg-zinc-900/60 hover:bg-zinc-800 p-3 rounded-full transition-all z-50 cursor-pointer border border-zinc-700/50 backdrop-blur-sm"
              aria-label="Foto Sebelumnya"
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

            {/* Container Gambar Lightbox */}
            <motion.div
              key={currentIndex}
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.3, ease: [0.25, 1, 0.5, 1] }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-5xl max-h-[85vh] overflow-hidden rounded-2xl border border-zinc-800 shadow-2xl p-2 bg-zinc-950"
            >
              {failedImages[currentIndex] ? (
                <div className="w-80 h-80 flex flex-col items-center justify-center text-zinc-500">
                  <p className="text-sm">Gambar tidak dapat dimuat</p>
                </div>
              ) : (
                <img
                  src={WEDDING_PHOTOS[currentIndex]}
                  alt={`Expanded moment ${currentIndex + 1}`}
                  className="w-full h-full object-contain max-h-[80vh] rounded-lg"
                />
              )}

              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/80 border border-zinc-800/80 px-4 py-1 rounded-full text-[11px] text-amber-300/90 tracking-widest font-mono shadow-lg">
                {currentIndex + 1} / {WEDDING_PHOTOS.length}
              </div>
            </motion.div>

            {/* Tombol Next */}
            <button
              onClick={nextSlide}
              className="absolute right-4 md:right-8 text-white/80 hover:text-white bg-zinc-900/60 hover:bg-zinc-800 p-3 rounded-full transition-all z-50 cursor-pointer border border-zinc-700/50 backdrop-blur-sm"
              aria-label="Foto Selanjutnya"
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

export default GalleryComponents;
