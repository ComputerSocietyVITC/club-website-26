"use client";

import { useState } from "react";

type FaqItem = {
    question: string;
    answer: string;
};

type FaqProps = {
    items?: FaqItem[];
};

const defaultFaqs: FaqItem[] = [
    {
        question: "Who can join the club?",
        answer:
            "Anyone interested in computing, programming, and tech community activities can join, regardless of prior experience.",
    },
    {
        question: "Do I need coding experience to attend events?",
        answer:
            "No. Many sessions are beginner-friendly, and we also run advanced tracks for members who already have experience.",
    },
    {
        question: "How do I stay updated with announcements?",
        answer:
            "Follow our social channels and subscribe to the newsletter section on this page to receive event and workshop updates.",
    },
    {
        question: "Is there any membership fee?",
        answer:
            "Most activities are free for students. If an event has limited seats or external costs, it will be mentioned in the registration details.",
    },
];

export default function Faq({ items = defaultFaqs }: FaqProps) {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    function toggleFaq(index: number) {
        setOpenIndex((current) => (current === index ? null : index));
    }

    return (
        <section className="mx-auto w-full max-w-7xl px-6">
            <div
                className="relative overflow-hidden rounded-2xl border border-white/15 p-6 md:p-10"
                style={{
                    backgroundColor: "rgba(0, 0, 0, 0.25)",
                    backdropFilter: "blur(24px)",
                    WebkitBackdropFilter: "blur(24px)",
                }}
            >
                <div className="pointer-events-none absolute inset-0 bg-linear-to-br from-white/5 via-transparent to-black/40" />

                <div className="relative font-mono">
                    <h3 className="text-3xl md:text-4xl font-bold tracking-wider text-white">FAQ</h3>

                    <div className="mt-8 divide-y divide-white/10 rounded-xl border border-white/10 bg-black/20">
                        {items.map((item, index) => {
                            const isOpen = openIndex === index;

                            return (
                                <div key={item.question}>
                                    <button
                                        type="button"
                                        onClick={() => toggleFaq(index)}
                                        className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left transition-colors duration-200 hover:bg-white/5 cursor-pointer"
                                        aria-expanded={isOpen}
                                        aria-controls={`faq-answer-${index}`}
                                    >
                                        <span className="text-base md:text-lg text-zinc-100">{item.question}</span>
                                        <span className="text-[#34DF29] text-xl leading-none">{isOpen ? "−" : "+"}</span>
                                    </button>

                                    {isOpen && (
                                        <div
                                            id={`faq-answer-${index}`}
                                            className="px-5 pb-5 text-sm md:text-base leading-relaxed text-zinc-300"
                                        >
                                            {item.answer}
                                        </div>
                                    )}
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
}