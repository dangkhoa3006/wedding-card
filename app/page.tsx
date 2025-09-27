"use client";
import { useEffect, useState } from "react";
import Hero from "./components/Hero";
import Countdown from "./components/Countdown";
import Schedule from "./components/Schedule";
import Gallery from "./components/Gallery";
import Location from "./components/Location";
import RSVP from "./components/RSVP";
import OpeningCard from "./components/OpeningCard";
import AudioPlayer from "./components/AudioPlayer";

export default function Home() {
  const [opened, setOpened] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
          }
        });
      },
      { threshold: 0.15 }
    );

    const nodes = document.querySelectorAll(".reveal");
    nodes.forEach((n) => observer.observe(n));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="font-sans text-foreground bg-background">
      {!opened && <OpeningCard onFinish={() => setOpened(true)} />}
      <Hero />
      <Countdown />
      <Schedule />
      <Gallery />
      <Location />
      <RSVP />

      {/* Footer */}
      <footer className="border-t border-foreground/10 py-10 text-center text-sm opacity-70">
        © {new Date().getFullYear()} By Octotech. Hẹn gặp bạn trong ngày vui!
      </footer>

      {/* Audio Player */}
      <AudioPlayer />

    </div>
  );
}
