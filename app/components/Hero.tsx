"use client";

import Petals from "./Petals";
import { eventConfig } from "../config/event";

export default function Hero() {
    return (
        <section id="hero" className="relative min-h-dvh w-full">
            <div className="hero-bg absolute inset-0" />
            <div className="absolute inset-0 bg-white/55" />
            <Petals />
            <div className="relative z-10 mx-auto flex min-h-dvh max-w-5xl flex-col items-center justify-center px-6 text-center text-[#5a4b41]">
                <h1 className="reveal text-4xl sm:text-6xl font-semibold tracking-tight">{eventConfig.couple.bride} & {eventConfig.couple.groom}</h1>
                <p className="reveal mt-3 text-base sm:text-lg opacity-90">Trân trọng kính mời tới dự lễ thành hôn</p>
                <div className="reveal mt-6 inline-flex items-center gap-3 rounded-full bg-white/80 px-5 py-2 backdrop-blur-md ring-1 ring-[#5a4b41]/15">
                    <span className="text-sm">{new Date(eventConfig.dateISO).toLocaleString("vi-VN", { dateStyle: "full", timeStyle: "short" })}</span>
                    <span className="hidden sm:inline text-sm">•</span>
                    <span className="text-sm">{eventConfig.location.city}</span>
                </div>
                <div className="reveal mt-8 flex gap-3">
                    <a href="#countdown" className="rounded-full bg-[#5a4b41] text-white px-6 py-2 text-sm font-medium hover:opacity-90 transition-colors">Xem đếm ngược</a>
                    <a href="#details" className="rounded-full bg-white px-6 py-2 text-sm text-[#5a4b41] ring-1 ring-[#5a4b41]/20 hover:bg-white/90 transition-colors">Chi tiết</a>
                </div>
            </div>
        </section>
    );
}


