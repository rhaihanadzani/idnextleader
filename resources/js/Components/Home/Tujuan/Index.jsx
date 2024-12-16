import { FaUserCircle, FaUsers, FaHandsHelping } from "react-icons/fa";

const TujuanSection = () => {
    const tujuanItems = [
        {
            icon: <FaUserCircle className="text-primary text-4xl mb-4" />,
            title: "Kesadaran Diri",
            description: `
        Mendorong setiap pemimpin dibentuk dari dalam diri dahulu yakni dengan mengenali potensi diri, membangun karakter autentik, dan memimpin dengan integritas.
      `,
        },
        {
            icon: <FaUsers className="text-primary text-4xl mb-4" />,
            title: "Kemampuan Memimpin",
            description: `
      Menciptakan pemimpin yang mampu menginspirasi, memberdayakan, dan memotivasi orang lain untuk bergerak bersama menuju perubahan.
      `,
        },
        {
            icon: <FaHandsHelping className="text-primary text-4xl mb-4" />,
            title: "Berdampak Berkelanjutan",
            description: `
       Mendorong terciptanya pemimpin dengan inisiatif yang berkelanjutan untuk menghasilkan dampak positif jangka panjang bagi komunitas dan lingkungan.

      `,
        },
    ];

    return (
        <section className="p-6 max-w-6xl mx-auto">
            <h2 className="md:text-3xl text-2xl font-bold text-primary mb-12 text-center">
                Tujuan ID Next Leader
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {tujuanItems.map((item, index) => (
                    <div
                        key={index}
                        className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
                    >
                        <div className="flex flex-col items-center">
                            {item.icon}
                            <h3 className="text-xl md:text-[14px] lg:text-xl font-semibold text-primary mb-2 text-center">
                                {item.title}
                            </h3>
                            <p className="text-dark leading-relaxed text-center text-sm lg:text-base">
                                {item.description}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default TujuanSection;
