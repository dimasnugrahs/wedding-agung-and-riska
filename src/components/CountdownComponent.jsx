import { useState, useEffect } from "react";

const CountdownComponent = ({ targetDate = "2026-10-20T13:00:00" }) => {
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
    <div className="border-b border-zinc-100">
      <div className="grow flex flex-col items-center bg-white text-black py-18 border-t border-zinc-200 z-10">
        <p className="font-angele text-[10px] md:text-xs uppercase tracking-[0.25em] text-zinc-400 font-semibold mb-5">
          Counting Down to Our Special Day.
        </p>

        <div className="grid grid-cols-4 gap-4 md:gap-8 max-w-sm w-full px-6">
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
  );
};

export default CountdownComponent;
