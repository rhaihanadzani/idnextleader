import React, { useState, useEffect } from "react";
import HomeFooter from "../Footer/HomeFooter";

const LayoutNavigation = ({ children, tittle, description }) => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        // Add scroll event listener
        window.addEventListener("scroll", handleScroll);

        // Cleanup on component unmount
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <div className={` `}>
            {/* Sidebar */}
            <div
                className={`fixed inset-y-0 left-0 w-64 bg-gradient-to-br from-red-900 to-black text-white transform ${
                    isSidebarOpen ? "translate-x-0" : "-translate-x-full"
                } transition-transform duration-200 ease-in-out z-50 md:hidden`}
            >
                <div className="flex items-center justify-between p-4">
                    <img
                        src={"/images/partial/logo2.png"}
                        alt="logo"
                        width={100}
                        height={100}
                    />
                    <button
                        onClick={toggleSidebar}
                        className="text-white focus:outline-none"
                        aria-label="Close Menu"
                    >
                        {/* Close Icon */}
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="2"
                            stroke="currentColor"
                            className="w-6 h-6"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M6 18L18 6M6 6l12 12"
                            />
                        </svg>
                    </button>
                </div>
                <nav className="mt-4">
                    <a
                        href="/#about"
                        className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700"
                    >
                        Tentang Kami
                    </a>
                    <a
                        href="/#event"
                        className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700"
                    >
                        Acara
                    </a>
                    <a
                        href="/article"
                        className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700"
                    >
                        Artikel
                    </a>
                    <a
                        href="/#contact"
                        className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700"
                    >
                        Kontak
                    </a>
                </nav>
            </div>
            {/* Overlay */}
            {isSidebarOpen && (
                <div
                    className="fixed inset-0 bg-black opacity-50 md:hidden z-30"
                    onClick={toggleSidebar}
                ></div>
            )}
            {/* Main Content */}
            <div className="flex-1">
                {/* Sticky LayoutNavigation */}
                <div
                    className={`${
                        isScrolled ? "bg-white shadow-md" : "bg-transparent "
                    } p-4 flex justify-between items-center md:hidden fixed w-full top-0 z-40 transition-colors duration-300`}
                >
                    <button>
                        <img
                            src={"/images/partial/logo2.png"}
                            alt="logo"
                            width={100}
                            height={100}
                            className={`${isScrolled ? "hidden" : "block"}`}
                        />
                        <img
                            src={"/images/partial/logo1.png"}
                            alt="logo"
                            width={100}
                            height={100}
                            className={`${isScrolled ? "block" : "hidden"}`}
                        />
                    </button>
                    <button
                        onClick={toggleSidebar}
                        className="text-gray-800 focus:outline-none"
                        aria-label="Open Menu"
                    >
                        {/* Hamburger Icon */}
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="2"
                            stroke="currentColor"
                            className={`w-7 h-7   ${
                                isScrolled ? "text-black" : "text-white"
                            }`}
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M4 6h16M4 12h16m-7 6h7"
                            />
                        </svg>
                    </button>
                </div>
                <button
                    className={`${
                        isScrolled ? "bg-white shadow-md" : "bg-transparent"
                    } hidden md:flex justify-between items-center p-4 fixed w-full top-0 z-40 transition-colors duration-300`}
                >
                    <img
                        src={"/images/partial/logo2.png"}
                        alt="logo"
                        width={100}
                        height={100}
                        className={`${isScrolled ? "hidden" : "block"}`}
                    />
                    <img
                        src={"/images/partial/logo1.png"}
                        alt="logo"
                        width={100}
                        height={100}
                        className={`${isScrolled ? "block" : "hidden"}`}
                    />
                    <nav className="space-x-4">
                        <a
                            href="/#about"
                            className={`${
                                isScrolled
                                    ? "text-darkRed hover:text-darkRed/80 font-semibold"
                                    : "text-white hover:text-white/80 font-semibold"
                            }`}
                        >
                            Tentang Kami
                        </a>
                        <a
                            href="/#event"
                            className={`${
                                isScrolled
                                    ? "text-darkRed hover:text-darkRed/80 font-semibold"
                                    : "text-white hover:text-white/80 font-semibold"
                            }`}
                        >
                            Acara
                        </a>
                        <a
                            href="/article"
                            className={`${
                                isScrolled
                                    ? "text-darkRed hover:text-darkRed/80 font-semibold"
                                    : "text-white hover:text-white/80 font-semibold"
                            }`}
                        >
                            Artikel
                        </a>
                        <a
                            href="/#contact"
                            className={`${
                                isScrolled
                                    ? "text-darkRed hover:text-darkRed/80 font-semibold"
                                    : "text-white hover:text-white/80 font-semibold"
                            }`}
                        >
                            Kontak
                        </a>
                    </nav>
                </button>

                {/* Children */}
                <div className="space-y-4">
                    <div className="bg-white">
                        {/* Bagian Hero */}
                        <div
                            className="relative text-white text-center px-5 h-[70vh] flex flex-col items-center justify-center"
                            style={{
                                backgroundImage:
                                    "url('/images/home/pasFLF3.jpg')",
                                backgroundSize: "cover",
                                backgroundPosition: "center",
                                backgroundAttachment: "fixed",
                                backgroundRepeat: "no-repeat",
                            }}
                        >
                            {/* Overlay Gelap */}
                            <div className="absolute inset-0 bg-black opacity-40"></div>

                            <div className="relative z-10 text-center md:text-left w-full h-full  md:items-center flex flex-col  items-center lg:justify-center justify-center space-y-5">
                                <h1 className="text-4xl font-bold uppercase">
                                    {tittle}
                                </h1>
                                <p className="max-w-3xl text-center">
                                    {description}
                                </p>
                            </div>
                        </div>

                        {/* Gambar dengan Masking Wave */}
                        <div
                            className="relative h-60 bg-cover bg-center w-full"
                            style={{
                                backgroundImage:
                                    "url('/images/home/pasFLF3.jpg')",
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
                    {children}
                    <div>
                        <HomeFooter />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LayoutNavigation;
