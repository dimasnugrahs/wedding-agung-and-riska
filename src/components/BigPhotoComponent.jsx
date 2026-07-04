import imageCover from "../assets/images/wedding-agung-and-riska-cover.webp";

const BigPhotoComponent = () => {
  return (
    <section className="w-full bg-transparent py-6 my-10">
      <div className="mx-8 md:mx-20 relative group overflow-hidden rounded-3xl aspect-4/5 md:aspect-16/9 shadow-xl border border-zinc-200/50">
        {/* 1. FOTO UTAMA BESAR */}
        <img
          src={imageCover}
          alt="Bramasta & Riska Wedding"
          className="w-full h-full object-cover filter grayscale contrast-115 transition-transform duration-1000 ease-out group-hover:scale-105"
          loading="lazy"
        />

        {/* 2. OVERLAY GRADASI GELAP (Agar teks di bawahnya menyala tajam) */}
        <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent"></div>

        {/* 3. KONTEN TEKS DI ATAS FOTO */}
        <div className="absolute bottom-0 left-0 right-0 p-6 md:p-12 text-center md:text-left flex flex-col md:flex-row md:items-end md:justify-between gap-4 text-white">
          {/* Sisi Kiri: Kutipan Adat Bali */}
          <div className="space-y-1 md:max-w-xl">
            <p className="font-serif text-lg md:text-2xl font-light italic text-zinc-100 tracking-wide">
              "Kelak titiang sareng kalih nunggilang raga, ngwangun kulawarga
              sane sukerta lan harmonis."
            </p>
            <p className="text-[10px] md:text-xs uppercase tracking-[0.25em] text-zinc-400 font-light pt-1">
              — Menyatukan Langkah Menuju Kehidupan Baru —
            </p>
          </div>

          {/* Sisi Kanan: Inisial atau Penegas Tema */}
          <div className="hidden md:block text-right">
            <span className="font-sacramento text-4xl text-white/90 block">
              Agung & Riska
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BigPhotoComponent;
