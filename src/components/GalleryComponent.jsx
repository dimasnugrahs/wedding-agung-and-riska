import { useState } from "react";
import imageCover from "../assets/images/agung-cover-compressed.webp";
import imageCover2 from "../assets/images/agung-hero-2.jpg";
import { motion, AnimatePresence } from "motion/react";

const Gallery = () => {
  // Sekarang kita menyimpan INDEKS foto (null berarti pop-up tertutup)
  const [currentIndex, setCurrentIndex] = useState(null);

  const weddingPhotos = [
    imageCover, // Foto index 0
    imageCover2, // Foto index 1
    imageCover, // Foto index 2
    imageCover2, // Foto index 3
    imageCover, // Foto index 4
    imageCover2, // Foto index 5
    imageCover, // Foto index 6
    imageCover2, // Foto index 7
    imageCover, // Foto index 8
    imageCover2, // Foto index 9
  ];

  // Fungsi navigasi ke foto berikutnya
  const nextSlide = (e) => {
    e.stopPropagation(); // Mencegah modal tertutup otomatis
    if (currentIndex < weddingPhotos.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      setCurrentIndex(0); // Kembali ke foto pertama jika sudah di ujung akhir
    }
  };

  // Fungsi navigasi ke foto sebelumnya
  const prevSlide = (e) => {
    e.stopPropagation(); // Mencegah modal tertutup otomatis
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    } else {
      setCurrentIndex(weddingPhotos.length - 1); // Lompat ke foto terakhir jika klik prev di foto pertama
    }
  };

  return (
    <section className="bg-black py-16 text-center space-y-10 w-full">
      {/* JUDUL SECTION */}
      <div className="space-y-2 px-4 mx-6 md:mx-20">
        <h3 className="font-serif text-2xl md:text-3xl text-white tracking-wide font-normal">
          Galeri Kebahagiaan
        </h3>
        <p className="text-[10px] uppercase tracking-[0.3em] text-zinc-400 font-medium">
          Moments of Our Journey
        </p>
      </div>

      {/* GRID FOTO */}
      <div className="grid grid-cols-2 md:grid-cols-5 gap-1.5 md:gap-2 mx-4 md:mx-20">
        {weddingPhotos.map((srcPath, i) => (
          <div
            key={i}
            // Klik menyalurkan indeks angka (i) ke state
            onClick={() => setCurrentIndex(i)}
            className="overflow-hidden bg-zinc-900 aspect-square border border-zinc-800 group cursor-pointer"
          >
            <img
              src={srcPath}
              alt={`Wedding moment ${i + 1}`}
              className="w-full h-full object-cover opacity-65 group-hover:opacity-100 transition-transform duration-700 ease-out group-hover:scale-105"
              loading="lazy"
            />
          </div>
        ))}
      </div>

      {/* FOOTER KECIL GALERI */}
      <div className="pt-2 px-4 mx-6 md:mx-20">
        <p className="text-zinc-400 italic text-xs font-light tracking-wide">
          "Meniti waktu, mengukir cerita abadi bersama."
        </p>
      </div>

      <AnimatePresence>
        {currentIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setCurrentIndex(null)}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-4 cursor-zoom-out select-none"
          >
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

            <button
              onClick={prevSlide}
              className="absolute left-4 md:left-8 text-white/80 hover:text-white bg-zinc-900/40 hover:bg-zinc-800/60 p-3 rounded-full transition-all z-50 cursor-pointer md:backdrop-blur-xs"
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

            <motion.div
              key={currentIndex}
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
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
