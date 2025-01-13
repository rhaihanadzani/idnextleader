import React from "react";

const HomeFooter = () => {
    return (
        <div className="bg-white">
            {/* Gambar dengan Masking Wave */}
            <div
                className="relative h-60 bg-cover bg-center w-full bg-darkRed"
                style={{
                    WebkitMaskImage: "url('/images/home/footer.svg')",
                    maskImage: "url('/images/home/footer.svg')",
                    maskSize: "cover",
                    WebkitMaskSize: "cover",
                    backgroundPosition: "center",
                    backgroundAttachment: "fixed",
                }}
            >
                {/* Overlay Gelap di Wave */}
                <div className="absolute inset-0 bg-black opacity-[0.5] w-full"></div>
            </div>

            {/* Bagian Hero Konten */}
            <div className="relative bg-darkRed text-white text-center px-5 py-5 flex flex-col items-center">
                {/* Overlay Gelap */}
                <div className="absolute inset-0 bg-black opacity-[0.5]"></div>

                <div className="container mx-auto px-6  relative z-10">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {/* Logo & Tagline */}
                        <div>
                            <h2 className="text-2xl font-bold mb-4">
                                ID Next Leader
                            </h2>
                            <p className="text-sm text-gray-200">
                                Kami membangun generasi pemimpin masa depan
                                dengan memberdayakan individu melalui pelatihan,
                                jejaring, dan peluang kepemimpinan.
                            </p>
                        </div>

                        {/* Navigation Links */}
                        <div>
                            <h3 className="text-xl font-bold mb-4">
                                Tautan Cepat
                            </h3>
                            <ul className="space-y-2">
                                <li>
                                    <a
                                        href="#about"
                                        className="text-gray-200 hover:text-white transition-colors"
                                    >
                                        Tentang Kami
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="/article"
                                        className="text-gray-200 hover:text-white transition-colors"
                                    >
                                        Artikel
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#event"
                                        className="text-gray-200 hover:text-white transition-colors"
                                    >
                                        Acara Terselenggara
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#contact"
                                        className="text-gray-200 hover:text-white transition-colors"
                                    >
                                        Hubungi Kami
                                    </a>
                                </li>
                            </ul>
                        </div>

                        {/* Contact Information */}
                        <div className="flex flex-col">
                            <h3 className="text-xl font-bold mb-4">Kontak</h3>
                            <a
                                href="mailto:info@idnextleader.com"
                                className="text-sm text-gray-200"
                            >
                                Email: info@idnextleader.com
                            </a>

                            {/* <a
                                href="https://wa.me/6281908044668"
                                className="text-sm text-gray-200"
                            >
                                Whats App : +62 819-0804-4668
                            </a> */}
                            <a
                                href="https://maps.app.goo.gl/HMadPRcgf7vFiF47A"
                                className="text-sm text-gray-200"
                            >
                                Alamat : ITS Tower Lt. 3, Jakarta Selatan
                            </a>
                        </div>
                    </div>

                    {/* Footer Bottom */}
                    <div className="mt-12 text-center border-t border-gray-400 pt-6">
                        <p className="text-sm text-gray-200">
                            © {new Date().getFullYear()} ID Next Leader. All
                            Rights Reserved.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomeFooter;
