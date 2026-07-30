import { motion } from "motion/react";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.2,
      staggerChildren: 0.15,
    },
  },
};

const textFadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      ease: [0.25, 1, 0.5, 1],
    },
  },
};

const viewportConfig = {
  once: true,
  amount: 0.2,
};

const LocationComponent = () => {
  const events = [
    // {
    //   title: "Acara di Rumah Mempelai Wanita",
    //   date: "Selasa, 20 Oktober 2026",
    //   time: "08.00 WITA - Selesai",
    //   location: "Rumah Mempelai Wanita",
    //   address: "Jembrana, Bali",
    //   mapsUrl: "https://maps.google.com",
    // },
    {
      title: "Acara di Rumah Mempelai Pria",
      date: "Rabu, 21 Oktober 2026",
      time: "08.00 WITA - Selesai",
      location: "Rumah Mempelai Pria",
      address:
        "Jl. Sabda Paling Gg. I,Dangin Tukadaya, Kec. Jembrana, Kabupaten Jembrana, Bali",
      mapsUrl: "https://maps.app.goo.gl/TMq2C8QSXgUx6f618?g_st=aw",
    },
  ];

  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center px-6 py-16 text-white overflow-hidden select-none">
      {/* Background Image Parallax & Overlay */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div
          className="w-full h-full bg-fixed bg-cover bg-center"
          style={{
            backgroundImage: `url('/images/wedding-agung-and-riska-location.webp')`,
          }}
        />
        <div className="absolute inset-0 bg-linear-to-b from-black/90 via-black/85 to-black/90" />
      </div>

      {/* AREA KONTEN UTAMA */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={viewportConfig}
        variants={containerVariants}
        className="relative z-10 w-full max-w-xl md:text-center flex flex-col items-start md:items-center space-y-6"
      >
        {/* Header Section */}
        <motion.div variants={textFadeIn} className="w-full space-y-3">
          <h2 className="text-2xl md:text-3xl tracking-widest text-zinc-100 uppercase">
            Save The Date
          </h2>
          <div className="h-px bg-zinc-700/80 w-full my-4" />
        </motion.div>

        {/* Teks Pembukaan */}
        <motion.div variants={textFadeIn} className="w-full">
          <p className="leading-relaxed font-light text-zinc-300 text-sm md:text-sm">
            Atas Asung Kerta Wara Nugraha Ida Sang Hyang Widhi Wasa/Tuhan Yang
            Maha Esa, kami bermaksud mengundang Bapak/Ibu/Saudara/i untuk
            berkenan hadir serta memberikan doa restu pada acara Pawiwahan
            (Pernikahan) dan Upacara Mepandes (Potong Gigi) yang akan kami
            selenggarakan pada:
          </p>
          <div className="h-px bg-zinc-800/80 w-full my-6" />
        </motion.div>

        {/* Daftar Acara Pernikahan */}
        <div className="w-full space-y-8">
          {events.map((event, index) => (
            <motion.div key={index} variants={textFadeIn} className="space-y-3">
              <h3 className="text-lg md:text-xl font-angele text-amber-200">
                {event.title}
              </h3>

              <div className="space-y-1 text-sm md:text-sm text-zinc-300 font-light">
                <p className="font-medium text-zinc-200">{event.date}</p>
                <p>{event.time}</p>
                <p className="pt-1 text-zinc-400">{event.address}</p>
              </div>

              {/* Tombol Petunjuk Lokasi */}
              <div className="pt-2">
                <a
                  href={event.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 border border-zinc-700/80 bg-zinc-900/60 hover:border-amber-500/40 hover:bg-zinc-800/80 text-white text-[11px] tracking-widest uppercase font-medium px-5 py-2.5 rounded-xl transition-all shadow-sm group backdrop-blur-xs"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform text-amber-300"
                  >
                    <polygon points="3 11 22 2 13 21 11 13 3 11" />
                  </svg>
                  Petunjuk Lokasi
                </a>
              </div>

              {index < events.length - 1 && (
                <div className="h-px bg-zinc-800/80 w-full my-6" />
              )}
            </motion.div>
          ))}
        </div>

        <div className="h-px bg-zinc-800/80 w-full my-2" />

        {/* Teks Penutup */}
        <motion.div variants={textFadeIn} className="w-full space-y-2 pt-2">
          <p className="leading-relaxed font-light text-zinc-300 text-sm md:text-sm">
            Merupakan suatu kehormatan dan kebahagiaan bagi kami apabila
            Bapak/Ibu/Saudara/i berkenan hadir untuk memberikan doa restu serta
            turut berbagi kebahagiaan bersama kami.
          </p>
          <p className="font-light text-zinc-400 italic text-sm md:text-sm">
            Atas kehadiran dan doa restunya, kami ucapkan terima kasih.
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default LocationComponent;
