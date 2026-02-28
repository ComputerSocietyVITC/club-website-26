import React from "react";

interface MissionItem {
  number: string | number;
  text: string;
}

interface MissionProps {
  items?: MissionItem[];
  className?: string;
}

import { CUBE } from "@/app/assets/cube";

export default function Mission({ 
  items = [
    { number: "1", text: "mission1" },
    { number: "2", text: "mission2" },

  ],
  className = ""
}: MissionProps) {
  return (
    <div className={`relative mx-auto flex md:w-full w-[90vw] max-w-269.25 h-auto flex-col justify-center text-white ${className}`}>
      {/* Background Layer with Backdrop Blur */}
      <div
        className="absolute -top-px w-full h-full rounded-xl border border-white/15 bg-[#1f1f1f]/40 backdrop-blur-md transition-all duration-100 hover:border-white/30"
        style={{ boxShadow: "0px 4px 4px 0 rgba(0,0,0,0.25)" }}
      />

      {/* Content Container */}
      <div className="relative z-10 flex h-auto items-start md:items-center justify-start gap-6 md:gap-10 px-7 py-9 sm:px-6 sm:py-7 md:px-9 md:py-11 font-mono">
        
        {/* ASCII Art - Using font-mono for strict alignment */}
        <div className="hidden md:block grow-0 shrink-0 select-none whitespace-pre bg-linear-to-tr from-[#02E53F] to-[#95D500] bg-clip-text text-center text-sm leading-tight font-medium font-mono text-transparent">
{CUBE}
        </div>

        {/* Vertical Divider Line */}
        <svg
          width={1}
          height={356}
          viewBox="0 0 1 356"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="self-stretch grow-0 shrink-0 hidden md:block"
          preserveAspectRatio="none"
        >
          <path d="M0.5 0V356" stroke="white" strokeOpacity="0.15" />
        </svg>

        {/* Text Column */}
        <div className="flex w-full md:w-134.75 shrink grow flex-col items-start justify-start gap-2.5 font-mono min-w-0">
          <div className="font-mono relative flex items-center justify-center gap-2.5 p-1.5 md:p-2.5 pl-0">
            <h2 className="font-mono text-3xl md:text-4xl font-bold text-left text-white tracking-wide">
              OUR MISSION
            </h2>
          </div>
          
          <div className="font-mono flex flex-col items-start justify-start self-stretch gap-2">
            {items.map((item, index) => (
              <div
                key={index}
                className="font-mono relative flex items-start justify-start gap-4 self-stretch pb-1.5"
              >
                <p className="w-6 md:w-7.25 shrink-0 text-center text-base text-white opacity-25 font-mono">
                  {item.number}
                </p>
                <p className="grow min-w-0 text-left text-sm md:text-base leading-relaxed text-white/80 font-mono wrap-break-word">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}