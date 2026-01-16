'use client';

import { useState } from 'react';

type LineProps = {
    n: string | number;
    children?: React.ReactNode;
    color?: string;
};

const Line = ({ n, children, color = 'text-zinc-700' }: LineProps) => (
    <div className="flex gap-6 text-sm leading-relaxed font-mono">
        <span className="text-zinc-500 select-none w-4 shrink-0">{n}</span>
        <div className={`${color} flex-1`}>{children}</div>
    </div>
);

export default function NewsLetter() {
    const [email, setEmail] = useState('');
    const [error, setError] = useState('');

    function handleSubmit(e: React.FormEvent) {
        e.preventDefault();

        if (!email.trim()) {
            setError('Enter the email first!');
            return;
        }

        console.log({ email });
        setEmail('');
        setError('');
    }

    return (
        <section className="mx-auto max-w-2xl px-6 py-24">
      
        <div
          className="
            relative overflow-hidden rounded-2xl
            border border-white/10 shadow-2xl
            transition-all duration-500
            hover:border-white/20
          "
          style={{
            backgroundColor: 'rgba(0, 0, 0, 0.25)',
            backdropFilter: 'blur(24px)',
            WebkitBackdropFilter: 'blur(24px)',
          }}
        >
          <div className="pointer-events-none absolute inset-0 bg-linear-to-br from-white/5 via-transparent to-black/20" />
  
          <div className="relative p-5 md:p-10 space-y-6">
            <h3 className="font-mono text-2xl md:text-3xl font-bold tracking-widest uppercase text-white">
              JOIN US
            </h3>
  
            <div className="space-y-2">
              <Line n={1}>
                <span className="text-zinc-300">
                  Hello there! How’s it going?
                </span>
              </Line>
  
              <Line n={2}>
                <span className="text-zinc-300">
                  Want updates about HackHub?
                </span>
              </Line>
  
              <Line n={3} />
  
              <Line n={4} color="text-green-500/40">
                <span >
                  Subscribe to our mailing list and stay in the loop.
                </span>
              </Line>
            </div>
  
            <form onSubmit={handleSubmit} className="flex items-center gap-4 pt-8">
              <span className="select-none font-mono text-xl text-zinc-500 animate-pulse">
                ~~&gt;
              </span>
  
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="enter your email here"
                className="
                  w-full bg-transparent font-mono
                  text-sm md:text-base text-zinc-300
                  placeholder-zinc-800 outline-none
                  focus:text-green-400
                  selection:bg-green-500 selection:text-black
                "
              />
  
              <button
                type="submit"
                className="
                  shrink-0 rounded
                  bg-[#22c55e] px-3 py-1.5
                  text-[11px] font-bold text-black
                  shadow-[0_0_15px_rgba(34,197,94,0.3)]
                  transition-all duration-200
                  hover:bg-[#4ade80]
                  hover:shadow-[0_0_20px_rgba(34,197,94,0.5)]
                  active:scale-95
                "
              >
                ↵ ENTER
              </button>
            </form>
  
            {error && (
              <p className="text-red-400 font-mono text-xs">{error}</p>
            )}
  
          
          
          </div>
        </div>
      </section>
    );
}