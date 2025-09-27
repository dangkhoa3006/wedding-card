"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useAnimation, AnimatePresence } from "framer-motion";

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
    const [selectedImage, setSelectedImage] = useState<string | null>(null);

    useEffect(() => {
        const startRotation = () => {
            controls.start({
                rotateY: 360,
                transition: {
                    duration: 25,
                    repeat: Infinity,
                    ease: "linear"
                }
            });
        };

        // Delay start để tránh conflict với opening animation
        const timer = setTimeout(startRotation, 3000);
        return () => clearTimeout(timer);
    }, [controls]);

    return (
        <section id="gallery" className="relative mx-auto max-w-6xl px-6 py-20 reveal">
            <h2 className="text-center text-2xl sm:text-3xl font-semibold">Bộ sưu tập</h2>
            <div className="mt-16 flex justify-center">
                <div
                    ref={containerRef}
                    className="relative w-96 h-96 sm:w-[500px] sm:h-[500px] lg:w-[600px] lg:h-[600px] overflow-hidden"
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
                                <div
                                    key={idx}
                                    className="absolute w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 cursor-pointer overflow-hidden"
                                    style={{
                                        transform: `rotateY(${angle}deg) translateZ(400px)`,
                                        transformOrigin: "50% 50% 0",
                                        transformStyle: "preserve-3d",
                                        willChange: "transform"
                                    }}
                                    onClick={() => {
                                        // Pause rotation when opening modal
                                        controls.stop();
                                        setSelectedImage(src);
                                    }}
                                >
                                    <img
                                        src={src}
                                        alt={`Gallery ${idx + 1}`}
                                        className="w-full h-full rounded-xl object-cover shadow-2xl border-4 border-white transition-transform duration-300 hover:scale-110"
                                    />
                                </div>
                            );
                        })}
                    </motion.div>
                </div>
            </div>

            {/* Modal zoom */}
            <AnimatePresence>
                {selectedImage && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="fixed inset-0 z-50 flex items-center justify-center bg-black/90"
                        onClick={() => {
                            setSelectedImage(null);
                            // Resume rotation after closing modal
                            setTimeout(() => {
                                controls.start({
                                    rotateY: 360,
                                    transition: {
                                        duration: 25,
                                        repeat: Infinity,
                                        ease: "linear"
                                    }
                                });
                            }, 100);
                        }}
                    >
                        <motion.div
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.8, opacity: 0 }}
                            transition={{ duration: 0.2, ease: "easeOut" }}
                            className="relative max-w-5xl max-h-[90vh] mx-4"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <img
                                src={selectedImage}
                                alt="Gallery zoom"
                                className="w-full h-full object-contain rounded-lg shadow-2xl"
                                loading="eager"
                            />
                            <button
                                onClick={() => {
                                    setSelectedImage(null);
                                    // Resume rotation after closing modal
                                    setTimeout(() => {
                                        controls.start({
                                            rotateY: 360,
                                            transition: {
                                                duration: 25,
                                                repeat: Infinity,
                                                ease: "linear"
                                            }
                                        });
                                    }, 100);
                                }}
                                className="absolute top-4 right-4 w-10 h-10 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center text-white text-xl font-bold transition-colors"
                            >
                                ×
                            </button>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
}


