"use client";

export default function Petals() {
    const petals = Array.from({ length: 14 });
    return (
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
            {petals.map((_, i) => {
                const left = Math.random() * 100;
                const delay = Math.random() * 6;
                const duration = 10 + Math.random() * 10;
                const size = 14 + Math.random() * 10;
                return (
                    <span
                        key={i}
                        style={{
                            left: `${left}%`,
                            animationDelay: `${delay}s`,
                            animationDuration: `${duration}s`,
                            width: size,
                            height: size * 0.7,
                        }}
                        className="petal absolute -top-10 rounded-full bg-[#f1b5c8]/80 shadow-[0_0_0_1px_rgba(90,75,65,0.06)]"
                    />
                );
            })}
        </div>
    );
}


