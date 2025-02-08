import { useEffect, useState, useRef } from "react";
import { useInView } from "react-intersection-observer";

const EcosystemSection = () => {
    const [count, setCount] = useState({
        places: 0,
        mentors: 0,
        regional: 0,
        pengurus: 0,
        goverment: 0,
        community: 0,
        media: 0,
        pengikutMedia: 0,
        jejaring: 0,
        aksi: 0,
    });

    const current = useRef({
        places: 0,
        mentors: 0,
        regional: 0,
        pengurus: 0,
        goverment: 0,
        community: 0,
        media: 0,
        pengikutMedia: 0,
        jejaring: 0,
        aksi: 0,
    });
    const [hasStarted, setHasStarted] = useState(false);
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    useEffect(() => {
        if (inView && !hasStarted) {
            setHasStarted(true);
            const target = {
                places: 28,
                mentors: 30,
                regional: 27,
                pengurus: 400,
                goverment: 10,
                community: 100,
                media: 100,
                pengikutMedia: 20,
                jejaring: 75,
                aksi: 20,
            };
            const duration = 3000;
            const steps = 60;
            const interval = duration / steps;
            const step = {
                places: Math.ceil(target.places / steps),
                mentors: Math.ceil(target.mentors / steps),
                regional: Math.ceil(target.regional / steps),
                pengurus: Math.ceil(target.pengurus / steps),
                goverment: Math.ceil(target.goverment / steps),
                community: Math.ceil(target.community / steps),
                media: Math.ceil(target.media / steps),
                pengikutMedia: Math.ceil(target.pengikutMedia / steps),
                jejaring: Math.ceil(target.jejaring / steps),
                aksi: Math.ceil(target.aksi / steps),
            };

            const animateCount = () => {
                current.current = {
                    places: Math.min(
                        current.current.places + step.places,
                        target.places
                    ),
                    mentors: Math.min(
                        current.current.mentors + step.mentors,
                        target.mentors
                    ),

                    regional: Math.min(
                        current.current.regional + step.regional,
                        target.regional
                    ),
                    pengurus: Math.min(
                        current.current.pengurus + step.pengurus,
                        target.pengurus
                    ),
                    goverment: Math.min(
                        current.current.goverment + step.goverment,
                        target.goverment
                    ),
                    community: Math.min(
                        current.current.community + step.community,
                        target.community
                    ),
                    media: Math.min(
                        current.current.media + step.media,
                        target.media
                    ),
                    pengikutMedia: Math.min(
                        current.current.pengikutMedia + step.pengikutMedia,
                        target.pengikutMedia
                    ),
                    jejaring: Math.min(
                        current.current.jejaring + step.jejaring,
                        target.jejaring
                    ),
                    aksi: Math.min(
                        current.current.aksi + step.aksi,
                        target.aksi
                    ),
                };

                setCount({ ...current.current });

                if (
                    current.current.places < target.places ||
                    current.current.mentors < target.mentors ||
                    current.current.regional < target.regional ||
                    current.current.pengurus < target.pengurus ||
                    current.current.goverment < target.goverment ||
                    current.current.community < target.community ||
                    current.current.media < target.media ||
                    current.current.pengikutMedia < target.pengikutMedia ||
                    current.current.jejaring < target.jejaring ||
                    current.current.aksi < target.aksi
                ) {
                    setTimeout(animateCount, interval);
                }
            };

            animateCount();
        }
    }, [inView, hasStarted]);

    return (
        <section ref={ref} className="w-full text-center">
            <h2 className="md:text-3xl text-2xl font-bold text-primary px-6">
                ID Next Leader Ecosystem
            </h2>
            <div
                className="w-full my-5"
                style={{
                    backgroundImage: "url('/images/home/indonesia.jpg')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundAttachment: "fixed",
                    backgroundRepeat: "no-repeat",
                    WebkitMaskImage: "url('/images/home/indonesia.jpg')",
                    maskImage: "url('/images/home/indonesia.jpg')",
                    maskSize: "cover",
                    WebkitMaskSize: "cover",
                }}
            >
                {/* Gambar Peta */}
                {/* <img
                    src="/images/home/indonesia.jpg"
                    alt="Peta Indonesia"
                    className="w-full h-full bg-cover bg-center object-cover rounded-lg"
                /> */}
                {/* Overlay Angka */}
                <div className=" flex justify-center items-center text-white">
                    <div className="grid grid-cols-3 gap-4 lg:grid-cols-5 lg:gap-8 text-white max-w-[90%] mx-auto my-5 w-full px-4 ">
                        {[
                            { label: "REGIONAL", value: count.regional },
                            { label: "MENTOR", value: count.mentors },
                            { label: "PENGURUS", value: count.pengurus },
                            {
                                label: "GOVERMENT PARTNER",
                                value: count.goverment,
                            },
                            { label: "MEDIA PARTNER", value: count.media },
                            {
                                label: "COMMUNITY PARTNER",
                                value: count.community,
                            },
                            {
                                label: "PENGIKUT MEDIA SOCIAL",
                                value: `${count.pengikutMedia}k`,
                            },
                            {
                                label: "JEJARING PEMIMPIN MASA DEPAN",
                                value: `${count.jejaring}k`,
                            },
                            { label: "AKSI KOLABORASI", value: count.aksi },
                        ].map((item, index) => (
                            <div key={index} className=" flex justify-center">
                                <div className="text-center rounded-lg shadow-lg px-3 py-2 backdrop-blur-md bg-gradient-to-br from-dark to-darkRed bg-opacity-30 flex flex-col justify-center items-center border-2 border-yellow-500 w-[100px] lg:w-[200px]">
                                    <p className="text-lg lg:text-4xl font-bold">
                                        {item.value}+
                                    </p>
                                    <p className="text-[7px] lg:text-[16px] font-semibold">
                                        {item.label}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default EcosystemSection;
