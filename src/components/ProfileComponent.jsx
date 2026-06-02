import imageCover from "../assets/images/agung-hero-1.jpg";

const Profile = () => {
  return (
    <div>
      <div className="block md:hidden">
        <div className="relative min-h-screen flex flex-col justify-end items-end px-6 py-20 text-white overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img
              src={imageCover}
              alt="Groom"
              className="w-full h-full object-cover filter"
            />
            <div className="absolute inset-0 bg-linear-to-b from-black/60 via-black/40 to-black/70"></div>
          </div>

          <div className="relative z-10 space-y-0 w-full">
            <div className="font-angele text-4xl">
              I Gusti Agung Putu Widiana Putra
            </div>
            <p className="text-[11px] uppercase tracking-[0.2em] text-zinc-300 font-light">
              (Agung)
            </p>
            <div className="text-xs font-light leading-relaxed pt-5">
              <p className="text-zinc-300 text-[10px] uppercase tracking-wider mb-0">
                Putra Pertama dari Pasangan:
              </p>
              <p className="font-angele text-2xl">I Gusti Agung Winaya</p>
              {/* <p className="text-zinc-400 font-angele text-xl">&</p> */}
              <p className="font-angele text-2xl">Luh Sumerasih</p>
            </div>
            <p className="font-light pt-5 text-zinc-200 max-w-sm mx-auto">
              Kupang Barat, Kupang, Nusa Tenggara Timur
            </p>
            <div className="pt-3 flex text-sm">
              <a
                href="#"
                className="inline-flex items-center gap-2 border border-amber-300/20 bg-amber-300/10 px-6 py-2 rounded-full text-white backdrop-blur-sm group"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-4 h-4 text-zinc-300 group-hover:text-zinc-100 transition-colors"
                >
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                </svg>
                <span>Agung Widiana</span>
              </a>
            </div>
          </div>
        </div>

        <div className="relative min-h-screen flex flex-col justify-end items-end px-6 py-20 text-white overflow-hidden border-t border-white/10">
          <div className="absolute inset-0 z-0">
            <img
              src={imageCover}
              alt="Bride"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-linear-to-b from-black/70 via-black/40 to-black/80"></div>
          </div>

          <div className="relative z-10 space-y-0 w-full">
            <div className="font-angele text-4xl">Ni Wayan Riska Riyani</div>
            <p className="text-[11px] uppercase tracking-[0.2em] text-zinc-300 font-light">
              (Riska)
            </p>
            <div className="text-xs font-light leading-relaxed pt-5">
              <p className="text-zinc-300 text-[10px] uppercase tracking-wider mb-0">
                Putri Pertama dari Pasangan:
              </p>
              <p className="font-angele text-2xl">I Made Mastra</p>
              {/* <p className="text-zinc-400 font-angele text-xl">&</p> */}
              <p className="font-angele text-2xl">Ni Nyoman Manis</p>
            </div>
            <p className="font-light pt-5 text-zinc-200 max-w-sm mx-auto">
              Victoria Road, London, United Kingdom
            </p>
            <div className="pt-3 flex text-sm">
              <a
                href="#"
                className="inline-flex items-center gap-2 border border-amber-300/20 bg-amber-300/10 px-6 py-2 rounded-full text-white backdrop-blur-sm group"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-4 h-4 text-zinc-300 group-hover:text-zinc-100 transition-colors"
                >
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                </svg>
                <span>Riska Riyani</span>
              </a>
            </div>
          </div>
        </div>
      </div>
      <section className="hidden md:block text-center py-20 px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 mx-6 md:mx-20">
          <div className="my-10 md:my-0">
            <div className="font-angele text-4xl">
              I Gusti Agung Putu Widiana Putra
            </div>
            <p className="text-[11px] uppercase tracking-[0.2em] text-zinc-400 font-light">
              (Agung)
            </p>
            <div className="text-xs font-light leading-relaxed mt-10">
              <p className="text-zinc-500 text-[10px] uppercase tracking-wider mb-1">
                Putra Pertama dari Pasangan:
              </p>
              <p className="font-angele text-3xl">I Gusti Agung Winaya</p>
              <p className="text-zinc-400 font-angele text-xl">&</p>
              <p className="font-angele text-3xl">Luh Sumerasih</p>
            </div>

            <p className="font-light mt-10">
              Kupang Barat, Kupang, Nusa Tenggara Timur
            </p>
            <div className="pt-4 flex justify-center gap-4 text-sm">
              <a
                href="#"
                className="inline-flex items-center gap-2 border border-black/20 px-6 py-2 rounded-full text-zinc-800 hover:bg-zinc-800 hover:border-white hover:text-zinc-100 transition-all group"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-4 h-4 text-zinc-600 group-hover:text-zinc-100 transition-colors"
                >
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                </svg>
                Agung Widiana
              </a>
            </div>
          </div>
          <div className="my-10 md:my-0">
            <div className="font-angele text-4xl">Ni Wayan Riska Riyani</div>
            <p className="text-[11px] uppercase tracking-[0.2em] text-zinc-400 font-light">
              (Riska)
            </p>
            <div className="text-xs font-light leading-relaxed mt-10">
              <p className="text-zinc-500 text-[10px] uppercase tracking-wider mb-1">
                Putri Pertama dari Pasangan:
              </p>
              <p className="font-angele text-3xl">I Made Mastra</p>
              <p className="text-zinc-400 font-angele text-xl">&</p>
              <p className="font-angele text-3xl">Ni Nyoman Manis</p>
            </div>

            <p className="font-light mt-10">
              Victoria Road, London, United Kingdom
            </p>
            <div className="pt-4 flex justify-center gap-4 text-sm">
              <a
                href="#"
                className="inline-flex items-center gap-2 border border-black/20 px-6 py-2 rounded-full text-zinc-800 hover:bg-zinc-800 hover:border-white hover:text-zinc-100 transition-all group"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-4 h-4 text-zinc-600 group-hover:text-zinc-100 transition-colors"
                >
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                </svg>
                Riska Riyani
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Profile;
