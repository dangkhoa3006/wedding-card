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
        <section id="countdown" className="relative mx-auto max-w-6xl px-6 py-20 reveal">
            <div className="bg-white rounded-3xl shadow-2xl p-8 lg:p-12">
                <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                    {/* Left side - Countdown */}
                    <div className="text-center lg:text-left">
                        <h2 className="text-4xl lg:text-5xl font-bold text-[#7e0c0c] mb-6">
                            SẮP ĐẾN
                        </h2>
                        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                            {items.map((item) => (
                                <div key={item.label} className="text-center">
                                    <div className="text-2xl lg:text-3xl font-bold text-gray-800 mb-1">
                                        {item.value.toString().padStart(2, "0")}
                                    </div>
                                    <div className="text-sm lg:text-base text-gray-600 font-medium">
                                        {item.label}
                                    </div>
                                </div>
                            ))}
                        </div>
                        <p className="text-lg text-gray-700">
                            Đếm ngược đến ngày cưới của chúng tôi
                        </p>
                    </div>

                    {/* Right side - Wedding Image */}
                    <div className="flex justify-center lg:justify-end">
                        <div className="relative">
                            <img
                                src="/pexels-wendelmoretti-1730877.jpg"
                                alt="Wedding preparation"
                                className="w-full max-w-md lg:max-w-lg rounded-2xl shadow-lg object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}


