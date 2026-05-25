const Wish = () => {
  return (
    <section className="bg-gradient-to-b from-zinc-50 to-white text-center py-20 px-4 border-t border-zinc-100">
      <div className="max-w-xl mx-auto space-y-10">
        {/* 1. KUTIPAN DOA PAWIWAHAN (ADAT BALI) */}
        <div className="space-y-4 px-4">
          {/* Ikon Tanda Petik Minimalis */}
          <svg
            className="w-7 h-7 mx-auto text-zinc-300"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M13 14.725c0-5.141 3.892-10.519 10-11.725l.944 2c-3.089 1.116-4.944 3.421-4.944 5.725h4v6h-10v-2zm-13 0c0-5.141 3.892-10.519 10-11.725l.944 2c-3.089 1.116-4.944 3.421-4.944 5.725h4v6h-10v-2z" />
          </svg>

          <p className="text-zinc-700 italic font-serif text-sm md:text-base leading-relaxed tracking-wide">
            "Ihaiva stam ma vi yaustam, visvam ayur vyasnutam, kridantau putrair
            naptrbhih, modamanau sve grhe."
          </p>

          <p className="text-zinc-600 font-light text-xs md:text-sm max-w-md mx-auto leading-relaxed">
            Moga-moga kedua mempelai ini tetap bersatu dan tidak pernah
            terpisahkan. Semoga mereka mencapai hidup penuh kebahagiaan, tinggal
            di rumah yang harmonis bersama anak cucunya.
          </p>

          <p className="text-zinc-900 font-medium tracking-[0.2em] text-[10px] uppercase pt-2">
            — Rigweda X. 85. 42 —
          </p>
        </div>

        {/* 2. PEMBATAS / DIVIDER MONOKROM */}
        <div className="flex items-center justify-center gap-3 my-4">
          <div className="h-[1px] w-16 bg-zinc-200"></div>
          <span className="text-zinc-400 text-xs tracking-widest font-light">
            PAWIWAHAN
          </span>
          <div className="h-[1px] w-16 bg-zinc-200"></div>
        </div>

        {/* 3. INFORMASI TEMPAT (BALE/WIDHI WIDANA) */}
        <div className="bg-white p-8 rounded-xl border border-zinc-200/60 shadow-sm space-y-6">
          <h3 className="text-xs uppercase tracking-[0.25em] text-zinc-400 font-semibold">
            Griya / Tempat Upacara
          </h3>

          <div className="space-y-3">
            <h4 className="text-zinc-900 font-serif text-xl md:text-2xl font-normal tracking-wide">
              Griya Gede Batuan
            </h4>
            <p className="text-zinc-500 text-xs md:text-sm max-w-sm mx-auto leading-relaxed font-light">
              Jl. Raya Batuan, Sukawati, Kec. Gianyar, Kabupaten Gianyar, Bali
            </p>
          </div>

          {/* Tombol Peta Jalan */}
          <div className="pt-2">
            <a
              href="https://maps.google.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-zinc-900 hover:bg-black text-white text-[11px] tracking-widest uppercase font-medium px-6 py-3 rounded-none transition-all shadow-sm group"
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
          </div>
        </div>
      </div>
    </section>
  );
};

export default Wish;
