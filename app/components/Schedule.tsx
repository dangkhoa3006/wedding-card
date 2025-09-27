export default function Schedule() {
    const events = [
        { time: "09:30", title: "Đón khách", desc: "Chào đón quan khách và chụp ảnh lưu niệm." },
        { time: "10:30", title: "Làm lễ", desc: "Nghi thức thành hôn diễn ra trang trọng." },
        { time: "11:00", title: "Tiệc mừng", desc: "Dùng bữa và giao lưu cùng gia đình hai họ." },
    ];

    return (
        <section id="details" className="relative mx-auto max-w-5xl px-6 py-20 reveal">
            <h2 className="text-center text-2xl sm:text-3xl font-semibold">Lịch trình</h2>
            <div className="mt-8 space-y-6">
                {events.map((ev) => (
                    <div key={ev.time} className="rounded-2xl border border-[#5a4b41]/10 bg-white p-5 shadow-sm">
                        <div className="flex items-start gap-4">
                            <div className="min-w-[72px] text-lg font-semibold">{ev.time}</div>
                            <div>
                                <div className="text-lg font-medium">{ev.title}</div>
                                <div className="mt-1 text-sm opacity-80">{ev.desc}</div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}


