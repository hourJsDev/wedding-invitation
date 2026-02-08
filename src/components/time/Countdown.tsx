import React, { useState, useEffect } from "react";

interface CountdownProps {
  targetDate?: string;
}

interface TimeLeft {
  day: number;
  hour: number;
  minute: number;
  second: number;
}

const Countdown: React.FC<CountdownProps> = ({ targetDate = "2026-03-15" }) => {
  const calculateTimeLeft = (): TimeLeft => {
    // Note: subtracting dates in TS requires Coercing to number
    const difference = new Date(targetDate).getTime() - new Date().getTime();

    if (difference <= 0) {
      return { day: 0, hour: 0, minute: 0, second: 0 };
    }

    return {
      day: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hour: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minute: Math.floor((difference / (1000 * 60)) % 60),
      second: Math.floor((difference / 1000) % 60),
    };
  };

  const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  // Define keys explicitly for type-safe mapping
  const timeKeys = Object.keys(timeLeft) as (keyof TimeLeft)[];
  const localization = {
    day: "ថ្ងៃ",
    hour: "ម៉ោង",
    minute: "នាទី",
    second: "វិនាទី",
  };
  return (
    <ul className="flex gap-[20px] mt-[20px]">
      {timeKeys.map((k) => (
        <li
          className={`flex flex-col  w-[25%] gap-[10px] items-center`}
          key={k}
        >
          <span className="w-full text-2xl rounded-[10px] flex justify-center items-center text-white aspect-square bg-[#b29969]">
            {timeLeft[k]}
          </span>
          <span className="text-[13px] text-[#ebbd46]">{localization[k]}</span>
        </li>
      ))}
    </ul>
  );
};

export default Countdown;
