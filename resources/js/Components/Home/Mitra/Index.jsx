import React from "react";

const MitraKolaborator = () => {
    // Daftar mitra (logo dengan URL)
    const mitraList = [
        { id: 1, name: "Mitra 1", logo: "/images/home/mitra/1.png" },
        { id: 2, name: "Mitra 2", logo: "/images/home/mitra/2.webp" },
        { id: 3, name: "Mitra 3", logo: "/images/home/mitra/3.png" },
        { id: 4, name: "Mitra 4", logo: "/images/home/mitra/4.jpg" },
        { id: 5, name: "Mitra 5", logo: "/images/home/mitra/5.png" },
        { id: 6, name: "Mitra 6", logo: "/images/home/mitra/6.png" },
        { id: 6, name: "Mitra 6", logo: "/images/home/mitra/7.png" },
        { id: 6, name: "Mitra 6", logo: "/images/home/mitra/8.png" },
        { id: 6, name: "Mitra 6", logo: "/images/home/mitra/9.png" },
        { id: 6, name: "Mitra 6", logo: "/images/home/mitra/10.png" },
        { id: 6, name: "Mitra 6", logo: "/images/home/mitra/11.png" },
        { id: 6, name: "Mitra 6", logo: "/images/home/mitra/12.png" },
        { id: 6, name: "Mitra 6", logo: "/images/home/mitra/13.png" },
        { id: 6, name: "Mitra 6", logo: "/images/home/mitra/14.png" },
        { id: 6, name: "Mitra 6", logo: "/images/home/mitra/15.png" },
        { id: 6, name: "Mitra 6", logo: "/images/home/mitra/16.png" },
        { id: 6, name: "Mitra 6", logo: "/images/home/mitra/17.png" },
        { id: 6, name: "Mitra 6", logo: "/images/home/mitra/18.png" },
        { id: 6, name: "Mitra 6", logo: "/images/home/mitra/19.png" },
    ];

    return (
        <section className="w-full mx-auto max-w-7xl px-6 py-12 text-center">
            <h2 className="text-3xl font-bold text-primary mb-8">
                Mitra Kolaborator
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
                {mitraList.map((mitra) => (
                    <div
                        key={mitra.id}
                        className="flex items-center justify-center p-4 hover:scale-105 transition-transform duration-300"
                    >
                        <img
                            src={mitra.logo}
                            alt={mitra.name}
                            className="w-full h-auto object-contain max-h-[80px]"
                        />
                    </div>
                ))}
            </div>
        </section>
    );
};

export default MitraKolaborator;
