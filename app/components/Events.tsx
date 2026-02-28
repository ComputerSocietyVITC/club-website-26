type EventItem = {
    date: string;
    month: string;
    title: string;
    description: string;
    cta: string;
};

const events: EventItem[] = [
    {
        date: "1st",
        month: "MARCH",
        title: "Computer Vision",
        description: "Learn about models and computer vision patterns",
        cta: "!! register here !!",
    },
    {
        date: "1st",
        month: "MARCH",
        title: "Computer Vision",
        description: "Learn about models and computer vision patterns",
        cta: "!! register here !!",
    },
    {
        date: "1st",
        month: "MARCH",
        title: "Computer Vision",
        description: "Learn about models and computer vision patterns",
        cta: "!! register here !!",
    },
    {
        date: "1st",
        month: "MARCH",
        title: "Computer Vision",
        description: "Learn about models and computer vision patterns",
        cta: "!! register here !!",
    },
];

function EventCard({ item }: { item: EventItem }) {
    return (
        <article
            className={`
                group relative overflow-hidden rounded-2xl border border-white/15
                bg-black/35 p-7 md:p-8 backdrop-blur-sm transition-all duration-300
                hover:border-white/30
            `}
        >
            <div className="pointer-events-none absolute" />

            <div className="relative grid grid-cols-[92px_1px_1fr] items-start gap-6">
                <div className="pt-1 text-center font-mono">
                    <p className="text-3xl leading-none font-bold text-white transition-colors duration-300 group-hover:text-[#34DF29]">
                        {item.date}
                    </p>
                    <p className="mt-2 text-xs tracking-widest text-white/90 transition-colors duration-300 group-hover:text-[#34DF29]">
                        {item.month}
                    </p>
                </div>

                <div className="h-full w-px bg-white/15" />

                <div className="font-mono">
                    <h4 className="text-[1.9rem] font-bold tracking-tight text-white transition-colors duration-300 group-hover:text-[#34DF29]">
                        {item.title}
                    </h4>

                    <div className="mt-4 space-y-2 text-sm leading-relaxed text-zinc-200">
                        <p className="flex gap-3">
                            <span className="w-4 shrink-0 text-zinc-500">1</span>
                            <span>{item.description}</span>
                        </p>

                        <p className="flex gap-3">
                            <span className="w-4 shrink-0 text-zinc-500">↗</span>
                            <a
                                href="#"
                                className="underline underline-offset-4 transition-colors duration-200 hover:text-[#34DF29]"
                            >
                                {item.cta}
                            </a>
                        </p>
                    </div>
                </div>
            </div>
        </article>
    );
}

export default function Events() {
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
                <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-linear-to-r from-[#34DF29]/30 via-[#34DF29]/15 to-transparent blur-2xl" />

                <div className="relative">
                    <h3 className="font-mono text-3xl md:text-4xl font-bold tracking-wider text-white">
                        UPCOMING EVENTS
                    </h3>

                    <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2">
                        {events.map((item, index) => (
                            <EventCard key={`${item.title}-${index}`} item={item} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}