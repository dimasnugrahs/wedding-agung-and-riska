import { useState } from "react";

const AccountNumber = () => {
  const [copiedIndex, setCopiedIndex] = useState(null);

  const accounts = [
    { bank: "BCA", number: "1234567890", owner: "Agung Pemayun" },
    { bank: "Bank Mandiri", number: "0987654321", owner: "Riska Handayani" },
  ];

  const handleCopy = (number, index) => {
    navigator.clipboard.writeText(number);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  return (
    <section className="bg-black py-24 px-4 text-center border-t border-zinc-900 text-white">
      <div className="max-w-md mx-auto space-y-10">
        {/* Judul Section */}
        <div className="space-y-2">
          <h3 className="font-serif text-2xl text-zinc-100 tracking-wide font-normal">
            Yadnya Digital / Dompet Digital
          </h3>
          <p className="text-[10px] uppercase tracking-[0.3em] text-zinc-500 font-medium">
            Wedding Gift Info
          </p>
        </div>

        {/* List Kartu Rekening Efek Kaca (Glassmorphism) */}
        <div className="space-y-6">
          {accounts.map((acc, index) => (
            /* 1. Pembungkus Luar: Diberi "relative" untuk menampung elemen cahaya di belakang kartu */
            <div key={index} className="relative group">
              {/* 2. ELEMEN CAHAYA BELAKANG (Ini yang membuat efek kaca terlihat nyata saat diblur) */}
              <div className="absolute -inset-1 bg-gradient-to-r from-zinc-600 to-zinc-400 rounded-3xl blur opacity-20 group-hover:opacity-40 transition duration-500 font-light"></div>

              {/* 3. KARTU UTAMA DENGAN EFEK KACA YANG DIPERTANJAM */}
              <div className="relative overflow-hidden bg-white/[0.03] backdrop-blur-xl p-6 border border-white/10 rounded-3xl text-left space-y-4 shadow-[0_8px_32px_0_rgba(0,0,0,0.5)]">
                {/* Pantulan Kilau Internal */}
                <div className="absolute -top-10 -right-10 w-32 h-32 bg-white/[0.05] rounded-full blur-xl pointer-events-none group-hover:bg-white/[0.08] transition-all duration-500"></div>

                <div className="flex justify-between items-center">
                  <span className="font-bold tracking-widest text-xs text-zinc-400 uppercase">
                    {acc.bank}
                  </span>
                  <span className="text-[10px] text-zinc-500 uppercase tracking-wider font-light">
                    Digital Envelope
                  </span>
                </div>

                <div className="space-y-1 py-2">
                  <p className="font-serif text-2xl tracking-widest text-white font-light">
                    {acc.number}
                  </p>
                  <p className="text-xs text-zinc-400 font-light tracking-wide">
                    a.n. {acc.owner}
                  </p>
                </div>

                {/* Tombol Salin Minimalis Kontras */}
                <button
                  onClick={() => handleCopy(acc.number, index)}
                  className="w-full bg-white text-black hover:bg-zinc-200 text-[11px] tracking-widest uppercase font-medium py-2.5 transition-all shadow-md rounded-xl"
                >
                  {copiedIndex === index ? "Tersalin ✓" : "Salin No. Rekening"}
                </button>
              </div>
            </div>
          ))}
        </div>

        <p className="text-zinc-500 italic text-xs font-light max-w-xs mx-auto leading-relaxed pt-2">
          "Matur suksma atas doa restu serta tanda kasih yang Anda berikan
          kepada kedua mempelai."
        </p>
      </div>
    </section>
  );
};

export default AccountNumber;
