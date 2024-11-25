import {
    FaLightbulb,
    FaHandsHelping,
    FaLeaf,
    FaChartLine,
} from "react-icons/fa";

const NilaiSection = () => {
    const nilaiItems = [
        {
            icon: <FaLightbulb className="text-primary text-5xl" />,
            title: "Ideas",
            description: `
                Mendorong pemimpin masa depan menciptakan ide-ide kreatif
                dan inovatif yang berkontribusi pada kemajuan Indonesia,
                serta mewujudkannya menjadi perubahan positif.
            `,
        },
        {
            icon: <FaHandsHelping className="text-primary text-5xl" />,
            title: "Collaboration",
            description: `
                Mengutamakan kolaborasi di atas kompetisi, menciptakan lingkungan
                suportif dan inklusif untuk merealisasikan ide-ide kreatif bersama.
            `,
        },
        {
            icon: <FaLeaf className="text-primary text-5xl" />,
            title: "Sustainability",
            description: `
                Mengedepankan keberlanjutan untuk memastikan kesejahteraan
                jangka panjang bagi lingkungan, yayasan, dan bangsa.
            `,
        },
        {
            icon: <FaChartLine className="text-primary text-5xl" />,
            title: "Impact",
            description: `
                Memberikan dampak nyata bagi masyarakat melalui aksi kolaboratif
                yang menciptakan pengaruh positif bagi individu dan komunitas.
            `,
        },
    ];

    return (
        <section className="p-6 w-full mx-auto bg-gradient-to-tl from-darkRed to-dark">
            <h2 className="text-3xl font-bold text-white mb-12 text-center">
                Nilai-Nilai ID Next Leader
            </h2>
            <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {/* Timeline Garis */}
                <div className="absolute hidden lg:block left-0 right-0 h-1 bg-white top-[50%] -translate-y-1/2"></div>
                {/* Elemen Nilai */}
                {nilaiItems.map((item, index) => (
                    <div
                        key={index}
                        className="relative flex flex-col items-center text-center bg-white bg-opacity-30 backdrop-blur-md border border-white/40 rounded-lg shadow-lg p-6 hover:scale-105 transition-transform duration-300"
                    >
                        {/* Ikon */}
                        <div className="z-10 bg-white text-white rounded-full p-4 shadow-lg mb-4">
                            {item.icon}
                        </div>
                        {/* Judul */}
                        <h3 className="text-lg font-semibold text-white mb-4">
                            {item.title}
                        </h3>
                        {/* Deskripsi */}
                        <p className="text-[11px] text-white mt-2 leading-relaxed">
                            {item.description}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default NilaiSection;
