import {
  useEffect,
  useState,
  useCallback,
  useRef,
  lazy,
  Suspense,
} from "react";
import { AnimatePresence } from "motion/react";

// 1. Core Components (Eager Load / Langsung Dimuat di Layar Pertama)
import Cover from "./components/core/CoverComponent";
import Hero from "./components/core/HeroComponent";

// 2. Section Components (Lazy Load / Dimuat Asinkron Berdasarkan Path Baru)
const WishSection = lazy(
  () => import("./components/sections/WishComponent.jsx"),
);
const Profile = lazy(
  () => import("./components/sections/ProfileComponent.jsx"),
);
const Mesangih = lazy(
  () => import("./components/sections/MesangihComponent.jsx"),
);
const LocationComponent = lazy(
  () => import("./components/sections/LocationComponent.jsx"),
);
const CountdownComponent = lazy(
  () => import("./components/sections/CountdownComponent.jsx"),
);
const Gallery = lazy(
  () => import("./components/sections/GalleryComponent.jsx"),
);
const AccountNumber = lazy(
  () => import("./components/sections/AccountNumberComponent.jsx"),
);
const Footer = lazy(() => import("./components/sections/FooterComponent.jsx"));

// Fallback loader saat komponen section sedang diunduh di background
const SectionLoader = () => (
  <div className="w-full py-16 flex items-center justify-center text-zinc-600 text-xs tracking-[0.3em] uppercase">
    Loading Content...
  </div>
);

const App = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [startHeroAnim, setStartHeroAnim] = useState(false);
  const [guestName, setGuestName] = useState("Tamu Undangan");
  const [isPlaying, setIsPlaying] = useState(false);

  const audioRef = useRef(null);

  // Ambil parameter nama tamu dari URL (?to=NamaTamu)
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

  // Clean-up audio instance saat unmount untuk mencegah memory leak
  useEffect(() => {
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, []);

  const handleOpenInvitation = () => {
    // Memuat musik dari folder public/music/ secara streaming (tanpa membebani bundle JS)
    if (!audioRef.current) {
      audioRef.current = new Audio("/music/wedding-agung-and-riska.mp3");
      audioRef.current.loop = true;
    }

    audioRef.current
      .play()
      .then(() => {
        setIsPlaying(true);
      })
      .catch((err) => {
        console.log("Autoplay audio diblokir atau gagal dimuat:", err);
      });

    // Request Mode Fullscreen Browser
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
        className={`w-full space-y-0 ${
          isOpen ? "min-h-screen" : "h-screen overflow-hidden"
        }`}
      >
        <Hero triggerAnimation={startHeroAnim} />

        {/* Suspense mengisolasi proses muat komponen section yang di-lazy load */}
        {isOpen && (
          <Suspense fallback={<SectionLoader />}>
            <WishSection />
            <Profile />
            <Mesangih />
            <LocationComponent />
            <CountdownComponent />
            <Gallery />
            <AccountNumber />
            <Footer />
          </Suspense>
        )}
      </main>

      {/* FLOATING AUDIO CONTROLLER BUTTON */}
      {isOpen && (
        <button
          onClick={toggleMusic}
          className="fixed bottom-6 right-6 z-[99] flex items-center justify-center w-12 h-12 rounded-full bg-amber-300/10 backdrop-blur-md border border-amber-300/30 text-white shadow-lg hover:scale-110 active:scale-95 transition-all cursor-pointer group"
          title={isPlaying ? "Mute Music" : "Play Music"}
        >
          {isPlaying ? (
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
