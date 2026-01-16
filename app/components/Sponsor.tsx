'use client';

import React, { useState } from 'react';

type LineProps = {
  n: string | number;
  children?: React.ReactNode;
  color?: string;
};
const GithubIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
  </svg>
);

const Line = ({ n, children, color = 'text-zinc-700' }: LineProps) => (
  <div className="flex gap-6 text-[12px] md:text-[14px] leading-relaxed font-mono">
    <span className={`${color} select-none w-4 shrink-0`}>
      {n}
    </span>
    <div className="flex-1">{children}</div>
  </div>
);

export default function Sponsor() {
  const [inputValue, setInputValue] = useState('');

  const handleEnter = () => {
    // Placeholder for future terminal command handling
    console.log('Terminal command:', inputValue);
    setInputValue('');
  };

  return (
    <section className="mx-auto max-w-5xl px-6 py-24">
      
      <div
        className="relative overflow-hidden rounded-2xl border border-white/10 shadow-2xl transition-all duration-500 hover:border-white/20"
        style={{
          backgroundColor: 'rgba(0, 0, 0, 0.25)',
          backdropFilter: 'blur(24px)',
          WebkitBackdropFilter: 'blur(24px)',
        }}
      >
        <div className="pointer-events-none absolute inset-0 bg-linear-to-br from-white/5 via-transparent to-black/20" />

        <div className="relative p-8 md:p-14 space-y-10">
          
          <h3 className="font-mono text-2xl md:text-3xl font-bold tracking-widest uppercase text-white">
            SPONSORSHIP
          </h3>

          <div className="space-y-2">
            <Line n={1}>
              <p className="text-zinc-300">
                HackHub has been supported by top tech companies, financial
                institutions, and local startups, all dedicated to fostering
                innovation.
              </p>
            </Line>

            <Line n={2}>
              <p className="text-zinc-300">
                Their resources and mentorship empower participants to create
                impactful solutions, making our event a success year after year.
              </p>
            </Line>

            <Line n={3}>
              <div className="h-2" />
            </Line>

            <Line n={4}>
                <p
                    className="
                    font-medium
                    bg-linear-to-r
                    from-[#95D500]
                    to-[#02E53F]
                    text-transparent
                    bg-clip-text
                    drop-shadow-[0_0_12px_rgba(149,213,0,0.35)]
                    bg-size-[200%_200%] animate-gradient

                    "
                >
                    Empower tomorrow&apos;s tech leaders with your support — become a
                    sponsor and drive innovation forward
                </p>
            </Line>

            <div className="h-4" />

            {/* CTA */}
            <Line n="↗">
              {/* TODO: Replace with actual HackHub sponsorship package link */}
              <a
                href=""
                target="_blank"
                rel="noopener noreferrer"
                className="
                  relative inline-block
                  underline underline-offset-8
                  decoration-white/30
                  transition-all duration-300
                  hover:decoration-green-400
                  hover:text-green-400
                  after:absolute after:left-0 after:-bottom-1
                  after:h-px after:w-0 after:bg-green-400
                  after:transition-all after:duration-300
                  hover:after:w-full
                "
              >
                !! click me to view HackHub sponsorship package !!
              </a>
            </Line>
          </div>

          {/* Terminal Input */}
          <div className="flex items-center justify-between gap-4 pt-8">
            <div className="flex items-center gap-4 flex-1">
              <span className="select-none font-mono text-xl text-zinc-500 animate-pulse">
                ~~&gt;
              </span>
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleEnter()}
                placeholder="type here"
                className="
                  w-full bg-transparent font-mono
                  text-sm md:text-base text-zinc-300
                  placeholder-zinc-800 outline-none
                  focus:text-green-400
                  selection:bg-green-500 selection:text-black
                "
              />
            </div>

            {/* ENTER Button */}
            <button
              onClick={handleEnter}
              className="
                shrink-0 rounded
                bg-[#34DF29] px-3 py-1.5
                text-[11px] font-bold text-black
                shadow-[0_0_15px_rgba(34,197,94,0.3)]
                transition-all duration-200
                hover:bg-[#4ade80]
                hover:shadow-[0_0_20px_rgba(34,197,94,0.5)]
                active:scale-95
              "
            >
              <span className="flex items-center gap-1.5">
                <span className="text-[16px] leading-none translate-y-px">
                  ↵
                </span>
                ENTER
              </span>
            </button>
          </div>

          <div className="pt-6">
            <div className="w-full border-t border-white/5" />
          </div>

          <div className="pt-10">
            <div
              className="
                h-24 w-24 cursor-pointer text-white/80
                transition-all duration-300
                hover:scale-110 hover:text-white
                hover:rotate-3
                hover:drop-shadow-[0_0_20px_rgba(255,255,255,0.4)]
              "
            >
              <GithubIcon />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
