import { useEffect, useState, useCallback, useRef } from "react";
import { AnimatePresence } from "motion/react";

import Cover from "./components/CoverComponent";
import Hero from "./components/HeroComponent";
import WishSection from "./components/WishComponent";
import Gallery from "./components/GalleryComponent";
import Footer from "./components/FooterComponent";
import BigPhotoComponent from "./components/BigPhotoComponent";
import AccountNumber from "./components/AccountNumberComponent";
import Profile from "./components/ProfileComponent";
import LocationComponent from "./components/LocationComponent";

// Import file audio pendukung lagu autoplay
import backsoundSong from "./assets/music/wedding-agung-and-riska.mp3";

const App = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [startHeroAnim, setStartHeroAnim] = useState(false);
  const [guestName, setGuestName] = useState("Tamu Undangan");

  // State baru untuk melacak apakah musik sedang berputar atau mati (mute)
  const [isPlaying, setIsPlaying] = useState(false);

  const audioRef = useRef(null);

  const updateGuestName = useCallback(() => {
    if (typeof window !== "undefined") {
      const params = new URLSearchParams(window.location.search);
      const toParam = params.get("to");
      if (toParam) {
        setGuestName(toParam);
      }
    }
  }, []);

  useEffect(() => {
    updateGuestName();
    window.addEventListener("popstate", updateGuestName);
    return () => {
      window.removeEventListener("popstate", updateGuestName);
    };
  }, [updateGuestName]);

  const handleOpenInvitation = () => {
    if (!audioRef.current) {
      audioRef.current = new Audio(backsoundSong);
      audioRef.current.loop = true;
    }

    audioRef.current
      .play()
      .then(() => {
        setIsPlaying(true); // Musik berhasil berputar
      })
      .catch((err) => {
        console.log("Autoplay audio diblokir atau gagal dimuat:", err);
      });

    const element = document.documentElement;
    if (element.requestFullscreen) {
      element.requestFullscreen();
    } else if (element.webkitRequestFullscreen) {
      element.webkitRequestFullscreen();
    } else if (element.msRequestFullscreen) {
      element.msRequestFullscreen();
    }

    setIsOpen(true);
  };

  // Fungsi baru untuk toggle Play / Pause musik lewat tombol controller
  const toggleMusic = () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current.play().catch((err) => console.log(err));
      setIsPlaying(true);
    }
  };

  return (
    <div className="min-h-screen bg-black font-inter text-zinc-100 overflow-x-hidden relative">
      {/* Konten Utama Undangan */}
      <main
        className={`w-full space-y-0 ${isOpen ? "min-h-screen" : "h-screen overflow-hidden"}`}
      >
        <Hero triggerAnimation={startHeroAnim} />
        {isOpen && (
          <>
            <WishSection />
            <Profile />
            <LocationComponent />
            <Gallery />
            <AccountNumber />
            <BigPhotoComponent />
            <Footer />
          </>
        )}
      </main>

      {/* FLOATING AUDIO CONTROLLER BUTTON */}
      {/* Tombol ini akan melayang di kanan bawah layar hanya setelah undangan dibuka */}
      {isOpen && (
        <button
          onClick={toggleMusic}
          className="fixed bottom-6 right-6 z-[99] flex items-center justify-center w-12 h-12 rounded-full bg-amber-300/10 backdrop-blur-md border border-amber-300/30 text-white shadow-lg hover:scale-110 active:scale-95 transition-all cursor-pointer group"
          title={isPlaying ? "Mute Music" : "Play Music"}
        >
          {isPlaying ? (
            // Ikon Speaker Menyala (Sedang Play) + Efek animasi berdenyut halus
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-5 h-5 animate-pulse text-amber-300"
            >
              <path d="M11 5 6 9H2v6h4l5 4V5z" />
              <path d="M15.54 8.46a5 5 0 0 1 0 7.07" />
              <path d="M19.07 4.93a10 10 0 0 1 0 14.14" />
            </svg>
          ) : (
            // Ikon Speaker Dicoret (Sedang Mute / Pause)
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-5 h-5 text-zinc-400"
            >
              <path d="M11 5 6 9H2v6h4l5 4V5z" />
              <line x1="22" y1="9" x2="16" y2="15" />
              <line x1="16" y1="9" x2="22" y2="15" />
            </svg>
          )}
        </button>
      )}

      {/* Tirai Cover */}
      <AnimatePresence>
        {!isOpen && (
          <Cover
            guestName={guestName}
            handleOpenInvitation={handleOpenInvitation}
            onTiraiRemaining={(remainingPercent) => {
              if (remainingPercent <= 25) {
                setStartHeroAnim(true);
              }
            }}
          />
        )}
      </AnimatePresence>
    </div>
  );
};

export default App;
