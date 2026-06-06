import { useEffect, useState, useCallback } from "react";
import { motion, AnimatePresence } from "motion/react";

// Import semua sub-komponen rapi yang baru dibuat
import Cover from "./components/CoverComponent";
import Hero from "./components/HeroComponent";
import WishSection from "./components/WishComponent";
import Gallery from "./components/GalleryComponent";
import Footer from "./components/FooterComponent";
import BigPhotoComponent from "./components/BigPhotoComponent";
import AccountNumber from "./components/AccountNumberComponent";
import Profile from "./components/ProfileComponent";
import CountdownComponent from "./components/CountdownComponent";
import LocationComponent from "./components/LocationComponent";

const App = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [guestName, setGuestName] = useState("Tamu Undangan");

  // Menggunakan useCallback agar fungsi tidak dibuat ulang di setiap render
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
    // Jalankan langsung saat komponen pertama kali dimuat di browser
    updateGuestName();

    // Dengarkan perubahan histori URL jika ada navigasi internal
    window.addEventListener("popstate", updateGuestName);

    return () => {
      window.removeEventListener("popstate", updateGuestName);
    };
  }, [updateGuestName]);

  const handleOpenInvitation = () => {
    setIsOpen(true);
  };

  return (
    <div className="min-h-screen bg-white font-inter text-zinc-900 overflow-x-hidden">
      {/* Layar Cover Depan */}
      <AnimatePresence>
        {!isOpen && (
          <Cover
            guestName={guestName}
            handleOpenInvitation={handleOpenInvitation}
          />
        )}
      </AnimatePresence>

      {/* Konten Utama Undangan */}
      <div className={isOpen ? "min-h-screen" : "h-screen overflow-hidden"}>
        <motion.main
          initial={{ opacity: 0, y: 40 }}
          animate={isOpen ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5, duration: 1 }}
          className="mx-auto space-y-0"
        >
          <Hero />


          <WishSection />

          <Profile />

          <LocationComponent />

          <Gallery />

          <BigPhotoComponent />

          <AccountNumber />

          <Footer />
        </motion.main>
      </div>
    </div>
  );
};

export default App;
