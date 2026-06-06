import { useState, useEffect } from "react";

const LocationComponent = ({ targetDate = "2026-10-20T13:00:00" }) => {
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
    <section className="flex justify-center bg-linear-to-b from-zinc-50 to-white text-center py-20 px-6 border-t border-zinc-100">
      <div className="max-w-xl mx-auto space-y-10">
        <div className="flex items-center justify-center gap-3 my-4">
          <div className="h-[1px] w-16 bg-zinc-200"></div>
          <span className="text-zinc-400 text-xs tracking-widest font-light">
            PAWIWAHAN & RESEPSI
          </span>
          <div className="h-[1px] w-16 bg-zinc-200"></div>
        </div>

        <div className="bg-white md:px-24 p-8 rounded-xl border border-zinc-200/60 shadow-sm space-y-6">
          <h3 className="text-xs uppercase tracking-[0.25em] text-zinc-400 font-semibold">
            Tempat Upacara
          </h3>

          <div className="space-y-3">
            <h4 className="text-zinc-900 font-serif text-xl md:text-2xl font-normal tracking-wide">
              Griya Gede Batuan
            </h4>
            <p className="text-zinc-500 text-xs md:text-sm max-w-sm mx-auto leading-relaxed font-light">
              Jl. Raya Batuan, Sukawati, Kec. Gianyar, Kabupaten Gianyar, Bali
            </p>
          </div>

          <div className="space-y-3">
            <p className="text-zinc-500  max-w-sm mx-auto leading-relaxed font-light">
              Kamis, 20 Oktober 2026 <span className="text-zinc-500">•</span> 09.00 - Selesai
            </p>
          </div>

          <div className="pt-2">
            <a
              href="https://maps.google.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-zinc-800 hover:bg-black text-white text-[11px] tracking-widest uppercase font-medium px-6 py-3 rounded-full transition-all shadow-sm group"
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
          <div className="grid grid-cols-4 gap-4 md:gap-8 max-w-sm w-full px-6 mt-10">
            {/* Hari */}
            <div className="flex flex-col items-center">
              <span className="font-angele text-3xl md:text-4xl font-bold text-zinc-900 tracking-tight">
                {String(timeLeft.days).padStart(2, "0")}
              </span>
              <span className="text-[10px] uppercase tracking-widest text-zinc-400 mt-1">
                Days
              </span>
            </div>

            {/* Jam */}
            <div className="flex flex-col items-center border-zinc-100">
              <span className="font-angele text-3xl md:text-4xl font-bold text-zinc-900 tracking-tight">
                {String(timeLeft.hours).padStart(2, "0")}
              </span>
              <span className="text-[10px] uppercase tracking-widest text-zinc-400 mt-1">
                Hours
              </span>
            </div>

            {/* Menit */}
            <div className="flex flex-col items-center border-zinc-100">
              <span className="font-angele text-3xl md:text-4xl font-bold text-zinc-900 tracking-tight">
                {String(timeLeft.minutes).padStart(2, "0")}
              </span>
              <span className="text-[10px] uppercase tracking-widest text-zinc-400 mt-1">
                Mins
              </span>
            </div>

            {/* Detik */}
            <div className="flex flex-col items-center border-zinc-100">
              <span className="font-angele text-3xl md:text-4xl font-bold text-zinc-900 tracking-tight animate-pulse">
                {String(timeLeft.seconds).padStart(2, "0")}
              </span>
              <span className="text-[10px] uppercase tracking-widest text-zinc-400 mt-1">
                Secs
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationComponent;
