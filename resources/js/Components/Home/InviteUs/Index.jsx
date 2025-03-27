const InviteUs = () => {
    const handleEmailClick = (useGmailWeb = false) => {
        const email = "sekretariat@idnextleader.com";
        const subject = "Permohonan Kolaborasi dengan IDNEXT Leader";
        const body =
            "Halo Tim IDNEXT Leader,\n\nSaya tertarik untuk berkolaborasi dengan Anda. Bisakah kita berdiskusi lebih lanjut tentang kemungkinan kerjasama ini?\n\nHormat saya,\n[Nama Anda]";

        if (useGmailWeb) {
            // Buka Gmail web version
            const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${email}&su=${encodeURIComponent(
                subject
            )}&body=${encodeURIComponent(body)}`;
            window.open(gmailUrl, "_blank", "noopener,noreferrer");
        } else {
            // Coba mailto default
            const mailtoUrl = `mailto:${email}?subject=${encodeURIComponent(
                subject
            )}&body=${encodeURIComponent(body)}`;

            // Coba buka di tab baru
            const newWindow = window.open(mailtoUrl, "_blank");

            // Fallback jika gagal
            if (!newWindow) {
                window.location.href = mailtoUrl;
            }
        }
    };
    return (
        <section id="contact">
            <div className="py-12 flex justify-center flex-col px-4 w-full">
                <h3 className="text-center text-2xl md:text-4xl font-bold">
                    Tertarik untuk membangun{" "}
                    <span className="bg-gradient-to-b from-dark to-primary text-transparent bg-clip-text">
                        kolaborasi{" "}
                    </span>
                    dengan kami?
                </h3>
                <p className="text-sm md:text-xl text-muted-foreground text-center mt-4 mb-8 text-darkRed">
                    Dapatkan banyak manfaat dari menyelenggarakan acara bersama!
                </p>
                <div className="flex justify-center">
                    <button onClick={() => handleEmailClick(true)}>
                        <div className="bg-gradient-to-br from-dark to bg-darkRed text-white border border-white px-4 py-2 rounded-full">
                            Hubungi Kami
                        </div>
                    </button>
                </div>
            </div>

            <hr className="w-11/12 mx-auto" />
        </section>
    );
};
export default InviteUs;
