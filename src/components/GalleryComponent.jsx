const Gallery = () => {
  // Array foto dummy Unsplash (total 6 foto untuk mengisi 6 kolom)
  const weddingPhotos = [
    "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=600&auto=format&fit=crop&sat=-100",
    "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?q=80&w=600&auto=format&fit=crop&sat=-100",
    "https://images.unsplash.com/photo-1583939003579-730e3918a45a?q=80&w=600&auto=format&fit=crop&sat=-100",
    "https://images.unsplash.com/photo-1532712938310-34cb3982ef74?q=80&w=600&auto=format&fit=crop&sat=-100",
    "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=600&auto=format&fit=crop&sat=-100",
    "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?q=80&w=600&auto=format&fit=crop&sat=-100",
    "https://images.unsplash.com/photo-1532712938310-34cb3982ef74?q=80&w=600&auto=format&fit=crop&sat=-100",
    "https://images.unsplash.com/photo-1583939003579-730e3918a45a?q=80&w=600&auto=format&fit=crop&sat=-100",
  ];

  return (
    <section className="bg-black py-16 text-center space-y-10 w-full">
      {/* JUDUL SECTION */}
      <div className="space-y-2 px-4 mx-20">
        <h3 className="font-serif text-2xl md:text-3xl text-white tracking-wide font-normal">
          Galeri Kebahagiaan
        </h3>
        <p className="text-[10px] uppercase tracking-[0.3em] text-zinc-400 font-medium">
          Moments of Our Journey
        </p>
      </div>

      {/* GRID FOTO RATA 6 KOLOM PENUH */}
      {/* Menggunakan grid-cols-2 untuk mobile, grid-cols-3 untuk tablet, dan grid-cols-6 untuk desktop */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-1 md:gap-2 mx-6 md:mx-20">
        {weddingPhotos.map((url, i) => (
          <div
            key={i}
            className="overflow-hidden bg-zinc-100 aspect-square border border-zinc-200/30 group"
          >
            <img
              src={url}
              alt={`Wedding moment ${i + 1}`}
              className="w-full h-full object-cover filter grayscale contrast-125 transition-transform duration-700 ease-out group-hover:scale-105"
              loading="lazy"
            />
          </div>
        ))}
      </div>

      {/* FOOTER KECIL GALERI */}
      <div className="pt-2 px-4 mx-20">
        <p className="text-zinc-400 italic text-xs font-light tracking-wide">
          "Meniti waktu, mengukir cerita abadi bersama."
        </p>
      </div>
    </section>
  );
};

export default Gallery;
