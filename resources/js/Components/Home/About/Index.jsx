const About = () => {
    return (
        <div className="flex flex-col md:flex-row items-center gap-8 p-6 max-w-5xl mx-auto ">
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
                    Indonesian Next Leader
                </h2>
                <p className="text-dark leading-relaxed text-sm md:text-base">
                    Jejaring pemimpin masa depan berbentuk Yayasan Pemimpin Masa
                    Depan. Organisasi ini menjadi wadah bagi generasi muda
                    potensial untuk mengembangkan jejaring, memberdayakan diri,
                    dan membangun ekosistem pemimpin masa depan. ID Next Leader
                    bertujuan mencetak penggerak perubahan yang berdampak nyata
                    pada pembangunan daerah hingga tingkat nasional.
                </p>
            </div>
        </div>
    );
};
export default About;
