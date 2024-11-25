const AcaraSection = () => {
    const acaraItems = [
        {
            image: "/images/home/acara.png", // Ganti dengan URL gambar acara
            title: "Future Leader Fest 2023",
            description: `
              Menginisiasi Future Leader Fest untuk menghubungkan pemuda dengan para pemimpin, founder, inovator, intelektual, dan influencer dari berbagai bidang. Dengan demikian, festival ini menjadi platform yang efektif untuk membimbing generasi muda menjadi Impactful Leaders masa kini dan masa depan. Melalui berbagai sesi diskusi, pelatihan, dan workshop, peserta tidak hanya mendapatkan pengetahuan dan keterampilan baru, tetapi juga terinspirasi untuk menjadi agen perubahan yang berkontribusi positif bagi masyarakat dan negara.
            `,
        },
        {
            image: "/images/home/acara.png", // Ganti dengan URL gambar acara
            title: "Nobar Debat Capres Bareng Malaka Project x ID Next Leader",
            description: `
               Halo, Malakan! Di debat terakhir nanti, kami mau ngundang kalian buat nobar dan diskusi bareng soal gagasan masing-masing capres.

            Untuk pendaftaran, kita akan informasikan melalui Instagram Stories pada pukul 18:30 WIB. 4 Februari 2024 Pantengin terus media sosial Malaka Project buat informasi selanjutnya!
            `,
        },
        {
            image: "/images/home/acara.png", // Ganti dengan URL gambar acara
            title: "Future Leader Fest 2024",
            description: `
                Menginisiasi Future Leader Fest untuk menghubungkan pemuda dengan para pemimpin, founder, inovator, intelektual, dan influencer dari berbagai bidang. Dengan demikian, festival ini menjadi platform yang efektif untuk membimbing generasi muda menjadi Impactful Leaders masa kini dan masa depan. Melalui berbagai sesi diskusi, pelatihan, dan workshop, peserta tidak hanya mendapatkan pengetahuan dan keterampilan baru, tetapi juga terinspirasi untuk menjadi agen perubahan yang berkontribusi positif bagi masyarakat dan negara.
            `,
        },
    ];

    return (
        <section className="p-6 w-full mx-auto max-w-6xl">
            <h2 className="text-3xl font-bold text-primary mb-12 text-center">
                Acara Terselenggara
            </h2>
            <div className="space-y-12">
                {acaraItems.map((item, index) => (
                    <div
                        key={index}
                        className={`flex flex-col lg:flex-row items-center ${
                            index % 2 !== 0 ? "lg:flex-row-reverse" : ""
                        } gap-6`}
                    >
                        {/* Gambar */}
                        <div className="flex-shrink-0 w-full lg:w-1/2">
                            <img
                                src={item.image}
                                alt={item.title}
                                className="w-full h-96 object-cover rounded-lg shadow-lg"
                            />
                        </div>
                        {/* Konten */}
                        <div className="w-full lg:w-1/2">
                            <h3 className="text-2xl font-bold text-primary mb-4">
                                {item.title}
                            </h3>
                            <p className="text-gray-600 leading-relaxed">
                                {item.description}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default AcaraSection;
