"use client";

import { useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";

export default function Gallery() {
    const images = [
        "/img/1.jpg",
        "/img/2.jpg",
        "/img/3.jpg",
        "/img/4.jpg",
        "/img/5.jpg",
        "/img/6.jpg",
    ];

    const controls = useAnimation();
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const startRotation = () => {
            controls.start({
                rotateY: 360,
                transition: {
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear"
                }
            });
        };

        startRotation();
    }, [controls]);

    return (
        <section id="gallery" className="relative mx-auto max-w-6xl px-6 py-20 reveal">
            <h2 className="text-center text-2xl sm:text-3xl font-semibold">Bộ sưu tập</h2>
            <div className="mt-16 flex justify-center">
                <div
                    ref={containerRef}
                    className="relative w-96 h-96 sm:w-[500px] sm:h-[500px] lg:w-[600px] lg:h-[600px]"
                    style={{ perspective: "1200px" }}
                >
                    <motion.div
                        animate={controls}
                        className="relative w-full h-full"
                        style={{ transformStyle: "preserve-3d" }}
                    >
                        {images.map((src, idx) => {
                            const angle = (360 / images.length) * idx;
                            return (
                                <motion.div
                                    key={idx}
                                    className="absolute w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96"
                                    style={{
                                        transform: `rotateY(${angle}deg) translateZ(300px)`,
                                        transformOrigin: "center center",
                                        transformStyle: "preserve-3d"
                                    }}
                                    whileHover={{ scale: 1.15, z: 100 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <img
                                        src={src}
                                        alt={`Gallery ${idx + 1}`}
                                        className="w-full h-full rounded-xl object-cover shadow-2xl border-4 border-white"
                                    />
                                </motion.div>
                            );
                        })}
                    </motion.div>
                </div>
            </div>
        </section>
    );
}


