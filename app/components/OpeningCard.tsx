"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { eventConfig } from "../config/event";
import Hero from "./Hero";
import Countdown from "./Countdown";
import Schedule from "./Schedule";
import Gallery from "./Gallery";
import Location from "./Location";
import RSVP from "./RSVP";

export default function OpeningCard({ onFinish }: { onFinish: () => void }) {
    const [showContent, setShowContent] = useState(false);

    useEffect(() => {
        // Hiện nội dung sau 1 giây
        const timer1 = setTimeout(() => {
            setShowContent(true);
        }, 1000);

        // Gọi onFinish sau 2.5 giây
        const timer2 = setTimeout(() => {
            onFinish();
        }, 2500);

        return () => {
            clearTimeout(timer1);
            clearTimeout(timer2);
        };
    }, [onFinish]);

    useEffect(() => {
        document.body.style.overflow = "hidden";
        return () => {
            document.body.style.overflow = "auto";
        };
    }, []);

    return (
        <div className="fixed inset-0 z-50 bg-white">
            {/* Left curtain */}
            <motion.div
                initial={{ x: 0 }}
                animate={showContent ? { x: "-100%" } : { x: 0 }}
                transition={{ duration: 1.2, ease: "easeInOut" }}
                className="absolute top-0 left-0 w-1/2 h-full z-20"
                style={{ backgroundColor: "#FAE9E6" }}
            />

            {/* Right curtain */}
            <motion.div
                initial={{ x: 0 }}
                animate={showContent ? { x: "100%" } : { x: 0 }}
                transition={{ duration: 1.2, ease: "easeInOut" }}
                className="absolute top-0 right-0 w-1/2 h-full z-20"
                style={{ backgroundColor: "#FAE9E6" }}
            />

            {/* Nội dung bên trong - toàn bộ trang */}
            <div className="relative z-10 w-full h-full">
                <div className="font-sans text-foreground bg-background">
                    <Hero />
                    <Countdown />
                    <Schedule />
                    <Gallery />
                    <Location />
                    <RSVP />
                    <footer className="border-t border-foreground/10 py-10 text-center text-sm opacity-70">
                        © {new Date().getFullYear()} By Octotech. Hẹn gặp bạn trong ngày vui!
                    </footer>
                </div>
            </div>
        </div>
    );
}


