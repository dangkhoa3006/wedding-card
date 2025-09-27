"use client";

import { useEffect, useState } from "react";

export type TimeLeft = {
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
};

export default function useCountdown(target: Date) {
    const getLeft = (): TimeLeft => {
        const diff = +target - +new Date();
        if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };
        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((diff / (1000 * 60)) % 60);
        const seconds = Math.floor((diff / 1000) % 60);
        return { days, hours, minutes, seconds };
    };

    const [left, setLeft] = useState<TimeLeft>(getLeft);
    useEffect(() => {
        const t = setInterval(() => setLeft(getLeft()), 1000);
        return () => clearInterval(t);
    }, []);
    return left;
}


