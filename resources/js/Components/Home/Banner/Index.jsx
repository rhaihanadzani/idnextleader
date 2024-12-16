const Banner = () => {
    return (
        <div className="bg-white">
            {/* Bagian Hero */}
            <div
                className="relative text-white text-center px-5 h-[70vh] flex flex-col items-center justify-center"
                style={{
                    backgroundImage: "url('/images/home/bannerBOD1.png')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundAttachment: "fixed",
                    backgroundRepeat: "no-repeat",
                }}
            >
                {/* Overlay Gelap */}
                <div className="absolute inset-0 bg-black opacity-50"></div>

                <div className="relative z-10 text-center md:text-left w-full h-full  md:items-start flex flex-col  items-center lg:justify-end justify-center  ">
                    <h1 className="text-4xl font-bold">ID Next Leader</h1>
                    <p className="mt-2 md:w-[70%] lg:w-1/2 ">
                        Platform software kami menciptakan pengalaman mulus bagi
                        pengguna Anda.Platform software kami menciptakan
                        pengalaman mulus bagi pengguna Anda.
                    </p>
                    <a
                        href="/article"
                        className="mt-4 bg-white text-red-800 font-semibold px-4 py-2 rounded-full"
                    >
                        lihat Artikel Kami
                    </a>
                </div>
            </div>

            {/* Gambar dengan Masking Wave */}
            <div
                className="relative h-60 bg-cover bg-center w-full"
                style={{
                    backgroundImage: "url('/images/home/bannerBOD1.png')",
                    WebkitMaskImage: "url('/images/home/test.svg')",
                    maskImage: "url('/images/home/test.svg')",
                    maskSize: "cover",
                    WebkitMaskSize: "cover",
                    backgroundPosition: "center",
                    backgroundAttachment: "fixed",
                }}
            >
                {/* Overlay Gelap di Wave */}
                <div className="absolute inset-0 bg-black opacity-50 w-full"></div>
            </div>
        </div>
    );
};
export default Banner;
