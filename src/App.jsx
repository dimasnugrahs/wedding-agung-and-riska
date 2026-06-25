import { useEffect, useState, useCallback } from "react";
import { motion, AnimatePresence } from "motion/react";

import Cover from "./components/CoverComponent";
import Hero from "./components/HeroComponent";
import WishSection from "./components/WishComponent";
import Gallery from "./components/GalleryComponent";
import Footer from "./components/FooterComponent";
import BigPhotoComponent from "./components/BigPhotoComponent";
import AccountNumber from "./components/AccountNumberComponent";
import Profile from "./components/ProfileComponent";
import LocationComponent from "./components/LocationComponent";

const App = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [startHeroAnim, setStartHeroAnim] = useState(false); // Trigger khusus untuk teks Hero
  const [guestName, setGuestName] = useState("Tamu Undangan");

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
    setIsOpen(true);
  };

  return (
    <div className="min-h-screen bg-black font-inter text-zinc-100 overflow-x-hidden relative">
      {/* Konten Utama Undangan (Selalu stand-by di background belakang tirai) */}
      <main
        className={`w-full space-y-0 ${isOpen ? "min-h-screen" : "h-screen overflow-hidden"}`}
      >
        <Hero triggerAnimation={startHeroAnim} />
        {isOpen && (
          <>
            <Profile />
            <LocationComponent />
            <Gallery />
            <WishSection />
            <AccountNumber />
            <BigPhotoComponent />
            <Footer />
          </>
        )}
      </main>

      {/* Tirai Cover (Berada di lapisan atas / z-index tinggi) */}
      <AnimatePresence>
        {!isOpen && (
          <Cover
            guestName={guestName}
            handleOpenInvitation={handleOpenInvitation}
            onTiraiRemaining={(remainingPercent) => {
              // Jika sisa tirai di layar sudah mencapai 25% atau kurang, pemicu teks Hero diaktifkan!
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
