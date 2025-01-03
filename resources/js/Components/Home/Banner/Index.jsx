const Banner = () => {
    return (
        <div className="bg-white">
            {/* Bagian Hero */}
            <div
                className="relative text-white text-center px-5 h-[70vh] flex flex-col items-center justify-center"
                style={{
                    backgroundImage: "url('/images/home/merah1.jpg')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundAttachment: "fixed",
                    backgroundRepeat: "no-repeat",
                }}
            >
                {/* Overlay Gelap */}
                <div className="absolute inset-0 bg-black opacity-40"></div>

                <div className="relative z-10 text-center  w-full h-full  flex flex-col  items-center justify-center">
                    <h1 className="text-4xl font-bold">ID Next Leader</h1>
                    <p className="mt-2 md:w-[70%] lg:w-1/2 ">
                        Jejaring pemimpin masa depan yang didirikan pada 10
                        November 2019 di Jakarta dengan visi "Connecting
                        Impactfull Leaders". Bertujuan mengidentifikasi,
                        memupuk, dan menghubungkan anak muda menjadi ekosistem
                        pemimpin masa depan yang mampu memberikan dampak nyata
                        dalam membangun daerah hingga tingkat nasional.
                    </p>
                    <a
                        href="/article"
                        className="mt-4 border-2 border-white text-white font-semibold px-4 py-2 rounded-full hover:bg-darkRed hover:text-white transition-all duration-300"
                    >
                        Lihat Artikel Kami
                    </a>
                </div>
            </div>

            {/* Gambar dengan Masking Wave */}
            <div
                className="relative h-60 bg-cover bg-center w-full"
                style={{
                    backgroundImage: "url('/images/home/merah1.jpg')",
                    WebkitMaskImage: "url('/images/home/test.svg')",
                    maskImage: "url('/images/home/test.svg')",
                    maskSize: "cover",
                    WebkitMaskSize: "cover",
                    backgroundPosition: "center",
                    backgroundAttachment: "fixed",
                }}
            >
                {/* Overlay Gelap di Wave */}
                <div className="absolute inset-0 bg-black opacity-40 w-full"></div>
            </div>
        </div>
    );
};
export default Banner;
