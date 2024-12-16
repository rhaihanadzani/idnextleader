const About = () => {
    return (
        <div
            className="flex flex-col md:flex-row items-center gap-8 p-6 max-w-5xl mx-auto"
            id="about"
        >
            {/* Bagian Gambar */}
            <div className="flex-shrink-0 ">
                <img
                    src="/images/partial/logo1.png"
                    alt="About Image"
                    className="w-[300px] h-[150px] md:w-[350px] md:h-48 "
                />
            </div>

            {/* Bagian Keterangan */}
            <div className="text-center md:text-left">
                <h2 className="text-2xl font-bold text-primary mb-4">
                    Indonesia Next Leader: Connecting Impactful Leaders
                </h2>
                <p className="text-dark leading-relaxed text-sm ">
                    Indonesia Next Leader adalah komunitas yang diinisiasi oleh
                    Yayasan Pemimpin Masa Depan sebagai wadah bagi generasi muda
                    penuh potensi. Kami hadir untuk mendukung pengembangan diri,
                    membangun koneksi strategis, dan memberdayakan pemimpin masa
                    depan yang inovatif, tangguh, dan visioner. Dengan semangat
                    menciptakan perubahan yang bermakna, Indonesia Next Leader
                    menjadi ruang kolaborasi dan inspirasi bagi mereka yang
                    ingin membawa dampak positif di berbagai bidang.
                    Bergabunglah dengan kami dan jadilah bagian dari komunitas
                    yang siap mencetak sejarah untuk masa depan Indonesia yang
                    lebih cerah.
                </p>
            </div>
        </div>
    );
};
export default About;
