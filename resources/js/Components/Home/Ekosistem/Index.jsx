import { useEffect, useState, useRef } from "react";
import { useInView } from "react-intersection-observer";

const EcosystemSection = () => {
    const [count, setCount] = useState({
        members: 0,
        places: 0,
        mentors: 0,
    });

    const current = useRef({ members: 0, places: 0, mentors: 0 });
    const [hasStarted, setHasStarted] = useState(false);
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    useEffect(() => {
        if (inView && !hasStarted) {
            setHasStarted(true);
            const target = { members: 1000, places: 28, mentors: 563 };
            const duration = 3000;
            const steps = 60;
            const interval = duration / steps;
            const step = {
                members: Math.ceil(target.members / steps),
                places: Math.ceil(target.places / steps),
                mentors: Math.ceil(target.mentors / steps),
            };

            const animateCount = () => {
                current.current = {
                    members: Math.min(
                        current.current.members + step.members,
                        target.members
                    ),
                    places: Math.min(
                        current.current.places + step.places,
                        target.places
                    ),
                    mentors: Math.min(
                        current.current.mentors + step.mentors,
                        target.mentors
                    ),
                };

                setCount({ ...current.current });

                if (
                    current.current.members < target.members ||
                    current.current.places < target.places ||
                    current.current.mentors < target.mentors
                ) {
                    setTimeout(animateCount, interval);
                }
            };

            animateCount();
        }
    }, [inView, hasStarted]);

    return (
        <section
            ref={ref}
            className="w-full mx-auto max-w-7xl text-center overflow-hidden"
        >
            <h2 className="md:text-3xl text-2xl font-bold text-primary px-6">
                ID Next Leader Ecosystem
            </h2>
            <div className="relative w-full overflow-hidden">
                {/* Gambar Peta */}
                <img
                    src="/images/home/indonesia.jpg"
                    alt="Peta Indonesia"
                    className="w-full h-auto object-cover rounded-lg"
                />
                {/* Overlay Angka */}
                <div className="absolute inset-0 flex justify-center items-center text-white">
                    <div className="grid grid-cols-3 gap-4 lg:gap-8 text-white max-w-4xl w-full px-4">
                        <div className="text-center bg-gradient-to-br from-dark to-darkRed rounded-lg shadow-lg px-3 py-2 backdrop-blur-md bg-opacity-30 border border-darkRed/20">
                            <p className="text-lg lg:text-4xl font-bold">
                                {count.members}+
                            </p>
                            <p className="text-[12px] lg:text-lg font-semibold">
                                MEMBER
                            </p>
                        </div>
                        <div className="text-center rounded-lg shadow-lg px-3 py-2 backdrop-blur-md bg-gradient-to-br from-dark to-darkRed bg-opacity-30 border border-darkRed/20">
                            <p className="text-lg lg:text-4xl font-bold">
                                {count.places}+
                            </p>
                            <p className="text-[12px] lg:text-lg font-semibold">
                                PLACE
                            </p>
                        </div>
                        <div className="text-center rounded-lg shadow-lg px-3 py-2 backdrop-blur-md bg-gradient-to-br from-dark to-darkRed bg-opacity-30 border border-darkRed/20">
                            <p className="text-lg lg:text-4xl font-bold">
                                {count.mentors}+
                            </p>
                            <p className="text-[12px] lg:text-lg font-semibold">
                                MENTOR
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default EcosystemSection;
