"use client";

export default function RSVP() {
    return (
        <section id="rsvp" className="relative mx-auto max-w-xl px-6 py-20 reveal">
            <h2 className="text-center text-2xl sm:text-3xl font-semibold">Xác nhận tham dự</h2>
            <form
                className="mt-8 grid gap-4"
                onSubmit={(e) => {
                    e.preventDefault();
                    const form = e.currentTarget as HTMLFormElement;
                    const data = Object.fromEntries(new FormData(form).entries());
                    console.log("RSVP:", data);
                    alert("Cảm ơn bạn đã xác nhận! (Dữ liệu demo, sẽ kết nối sau)");
                    form.reset();
                }}
            >
                <input name="name" required placeholder="Họ và tên" className="h-11 rounded-xl border border-foreground/15 bg-background px-4 outline-none focus:ring-2 focus:ring-foreground/20" />
                <input name="phone" placeholder="Số điện thoại" className="h-11 rounded-xl border border-foreground/15 bg-background px-4 outline-none focus:ring-2 focus:ring-foreground/20" />
                <select name="attend" className="h-11 rounded-xl border border-foreground/15 bg-background px-4 outline-none focus:ring-2 focus:ring-foreground/20">
                    <option value="yes">Tham dự</option>
                    <option value="no">Không tham dự</option>
                    <option value="maybe">Có thể</option>
                </select>
                <textarea name="note" placeholder="Lời chúc / Ghi chú" rows={4} className="rounded-xl border border-foreground/15 bg-background px-4 py-3 outline-none focus:ring-2 focus:ring-foreground/20" />
                <button type="submit" className="h-11 rounded-xl bg-foreground text-background font-medium hover:opacity-90">Gửi xác nhận</button>
            </form>
        </section>
    );
}


