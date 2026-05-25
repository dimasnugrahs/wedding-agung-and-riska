import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";

// Import semua sub-komponen rapi yang baru dibuat
import Cover from "./components/CoverComponent";
import Hero from "./components/HeroComponent";
import WishSection from "./components/WishComponent";
import Gallery from "./components/GalleryComponent";
import Footer from "./components/FooterComponent";
import BigPhotoComponent from "./components/BigPhotoComponent";
import AccountNumber from "./components/AccountNumberComponent";

const App = () => {
  const [isOpen, setIsOpen] = useState(false);

  const [guestName] = useState(() => {
    const params = new URLSearchParams(window.location.search);
    const toParam = params.get("to");
    return toParam ? toParam : "Tamu Undangan";
  });

  const handleOpenInvitation = () => {
    setIsOpen(true);
  };

  return (
    <div className="min-h-screen bg-slate-50 font-inter text-slate-800 overflow-x-hidden">
      <AnimatePresence>
        {!isOpen && (
          <Cover
            guestName={guestName}
            handleOpenInvitation={handleOpenInvitation}
          />
        )}
      </AnimatePresence>

      <div className={isOpen ? "min-h-screen" : "h-screen overflow-hidden"}>
        <motion.main
          initial={{ opacity: 0, y: 40 }}
          animate={isOpen ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5, duration: 1 }}
          className="mx-auto space-y-0"
        >
          <Hero />

          <WishSection />

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
