"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function AudioPlayer() {
    const [isPlaying, setIsPlaying] = useState(true);
    const [isLoading, setIsLoading] = useState(true);
    const audioRef = useRef<HTMLAudioElement | null>(null);

    useEffect(() => {
        if (audioRef.current) {
            audioRef.current.volume = 0.3; // Âm lượng 30%

            const handleCanPlay = () => {
                setIsLoading(false);
                if (isPlaying) {
                    audioRef.current?.play().catch(console.error);
                }
            };

            const handleError = () => {
                setIsLoading(false);
                console.log("Audio file not found, using silent mode");
            };

            audioRef.current.addEventListener('canplay', handleCanPlay);
            audioRef.current.addEventListener('error', handleError);

            return () => {
                audioRef.current?.removeEventListener('canplay', handleCanPlay);
                audioRef.current?.removeEventListener('error', handleError);
            };
        }
    }, [isPlaying]);

    const togglePlay = () => {
        if (audioRef.current) {
            if (isPlaying) {
                audioRef.current.pause();
            } else {
                audioRef.current.play().catch(console.error);
            }
            setIsPlaying(!isPlaying);
        }
    };

    return (
        <>
            {/* Hidden audio element */}
            <audio
                ref={audioRef}
                loop
                preload="auto"
                className="hidden"
            >
                <source src="/audio/Beautiful In White.mp3" type="audio/mpeg" />
                <source src="/audio/wedding-bg.ogg" type="audio/ogg" />
                Your browser does not support the audio element.
            </audio>

            {/* Audio control button */}
            <AnimatePresence>
                <motion.button
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0, opacity: 0 }}
                    transition={{ delay: 3, duration: 0.5 }}
                    onClick={togglePlay}
                    className="fixed bottom-6 left-6 z-40 w-14 h-14 bg-white/90 hover:bg-white rounded-full shadow-lg flex items-center justify-center transition-colors backdrop-blur-sm"
                    aria-label={isPlaying ? "Tắt nhạc" : "Bật nhạc"}
                >
                    {isLoading ? (
                        <div className="w-6 h-6 border-2 border-[#7e0c0c] border-t-transparent rounded-full animate-spin" />
                    ) : (
                        <motion.div
                            animate={{ scale: isPlaying ? 1 : 0.8 }}
                            transition={{ duration: 0.2 }}
                        >
                            {isPlaying ? (
                                <svg className="w-6 h-6 text-[#7e0c0c]" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z" />
                                </svg>
                            ) : (
                                <svg className="w-6 h-6 text-[#7e0c0c]" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M8 5v14l11-7z" />
                                </svg>
                            )}
                        </motion.div>
                    )}
                </motion.button>
            </AnimatePresence>
        </>
    );
}
