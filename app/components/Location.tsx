import { eventConfig } from "../config/event";

export default function Location() {
    return (
        <section id="location" className="relative mx-auto max-w-5xl px-6 py-20 reveal">
            <h2 className="text-center text-2xl sm:text-3xl font-semibold">Địa điểm</h2>
            <p className="mt-2 text-center opacity-80">{eventConfig.location.venue}</p>
            <div className="mt-6 overflow-hidden rounded-2xl ring-1 ring-foreground/10">
                <iframe
                    title="map"
                    src={eventConfig.location.mapEmbed}
                    width="100%"
                    height="360"
                    style={{ border: 0 }}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                />
            </div>
        </section>
    );
}


