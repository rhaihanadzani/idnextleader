import { GrFormNextLink } from "react-icons/gr";
const AcaraSection = ({ acaraItems }) => {
    const url = import.meta.env.VITE_CMS_URL;

    // console.log(acaraItems);

    return (
        <section className="p-6 w-full mx-auto max-w-6xl" id="event">
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
                        {/* Gambar - Menampilkan Semua Gambar */}
                        <div className="flex-shrink-0 w-full lg:w-1/2 relative">
                            {/* Menampilkan gambar pertama */}
                            {item.images && (
                                <img
                                    src={`${url}storage/${item.images[0].image}`} // Menggunakan URL gambar pertama
                                    alt={item.title}
                                    className="w-full h-96 object-cover rounded-lg shadow-lg"
                                />
                            )}
                            <div className="inline-block px-4 py-2 text-sm font-bold text-white bg-primary rounded-full shadow-md uppercase tracking-wide hover:bg-primary/90 hover:scale-105 transition-all duration-300 absolute -top-5 -right-5">
                                New
                            </div>
                        </div>

                        {/* Konten */}
                        <div className="w-full lg:w-1/2">
                            <h3 className="text-2xl font-bold text-primary mb-4">
                                {item.title}
                            </h3>

                            <div
                                className="text-gray-600 leading-relaxed content"
                                dangerouslySetInnerHTML={{
                                    __html: item.content.slice(0, 400) + "...",
                                }}
                            />
                            <a
                                href={`/event/${item.id}`}
                                className="text-darkRed flex items-center w-fit p-2 border-darkRed font-semibold rounded-[35px] border-2 hover:bg-darkRed hover:text-white transition-all duration-500 hover:translate-x-2"
                            >
                                Read More <GrFormNextLink size={25} />
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default AcaraSection;
