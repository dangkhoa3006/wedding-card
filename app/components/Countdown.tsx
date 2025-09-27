"use client";

import useCountdown from "../hooks/useCountdown";
import { eventConfig } from "../config/event";

export default function Countdown() {
    const weddingDate = new Date(eventConfig.dateISO);
    const left = useCountdown(weddingDate);
    const items = [
        { label: "Ngày", value: left.days },
        { label: "Giờ", value: left.hours },
        { label: "Phút", value: left.minutes },
        { label: "Giây", value: left.seconds },
    ];

    return (
        <section id="countdown" className="relative mx-auto max-w-5xl px-6 py-20 reveal">
            <h2 className="text-center text-2xl sm:text-3xl font-semibold">Còn lại</h2>
            <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-4">
                {items.map((item) => (
                    <div key={item.label} className="rounded-2xl border border-[#5a4b41]/10 bg-[#5a4b41]/5 p-6 text-center">
                        <div className="text-3xl font-semibold">{item.value.toString().padStart(2, "0")}</div>
                        <div className="mt-1 text-sm opacity-70">{item.label}</div>
                    </div>
                ))}
            </div>
        </section>
    );
}


