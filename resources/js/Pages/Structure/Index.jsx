import LayoutNavigation from "@/Components/layouts/Navigation/LayoutNavigation";
import { Head } from "@inertiajs/react";

const Index = ({
    founders,
    directions,
    directors,
    badan,
    duta,
    manager,
    officer,
}) => {
    // console.log(officer);
    const url = import.meta.env.VITE_CMS_URL;

    return (
        <div>
            <Head title="Struktur Organisasi" />
            <LayoutNavigation
                tittle={"Struktur Organisasi"}
                description={"Tim Kami Yang Berdedikasi"}
            >
                <div className="space-y-10 px-5">
                    <h1 className="text-center text-3xl font-bold uppercase bg-gradient-to-b from-dark to-primary text-transparent bg-clip-text">
                        Founder
                    </h1>
                    <div className="grid lg:grid-cols-2 sm:grid-cols-2 place-items-center gap-5 grid-cols-2">
                        {founders.map((founder, i) => (
                            <div key={i} className="">
                                <div className="flex justify-center">
                                    <img
                                        src={`${url}storage/${founder.image}`}
                                        alt=""
                                        className="lg:w-[250px] lg:h-[250px] w-[120px] h-[120px] sm:w-[170px] sm:h-[170px] rounded-full shadow-lg"
                                    />
                                </div>
                                <div className="text-center mt-5">
                                    <p className=" font-semibold text-[13px] sm:text-[15px] md:text-[16px]">
                                        {founder.name}
                                    </p>
                                    <p className="text-[10px] sm:text-[12px] md:text-[14px] capitalize">
                                        {founder.position}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                    <h1 className="text-center text-3xl font-bold uppercase bg-gradient-to-b from-dark to-primary text-transparent bg-clip-text">
                        Direksi
                    </h1>
                    <div className="grid lg:grid-cols-3 sm:grid-cols-3 place-items-center gap-5 grid-cols-2 ">
                        {directions.map((direction, i) => (
                            <div key={i} className="">
                                <div className="flex justify-center">
                                    <img
                                        src={`${url}storage/${direction.image}`}
                                        alt=""
                                        className="lg:w-[250px] lg:h-[250px] w-[120px] h-[120px] sm:w-[170px] sm:h-[170px] rounded-full shadow-lg"
                                    />
                                </div>
                                <div className="text-center mt-5">
                                    <p className=" font-semibold text-[13px] sm:text-[15px] md:text-[16px]">
                                        {direction.name}
                                    </p>
                                    <p className="text-[10px] sm:text-[12px] md:text-[14px] capitalize">
                                        {direction.position}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>

                    <h1 className="text-center text-3xl font-bold uppercase bg-gradient-to-b from-dark to-primary text-transparent bg-clip-text">
                        Badan
                    </h1>
                    <div
                        // className={`${
                        //     badan.length >= 2
                        //         ? "grid lg:grid-cols-3 sm:grid-cols-3 place-items-center gap-5 grid-cols-2 "
                        //         : "flex justify-center"
                        // } `}
                        className="grid lg:grid-cols-3 sm:grid-cols-3 place-items-center gap-5 grid-cols-2 "
                    >
                        {badan.map((badan, i) => (
                            <div key={i} className="">
                                <div className="flex justify-center">
                                    <img
                                        src={`${url}storage/${badan.image}`}
                                        alt=""
                                        className="lg:w-[250px] lg:h-[250px] w-[120px] h-[120px] sm:w-[170px] sm:h-[170px] rounded-full shadow-lg "
                                    />
                                </div>
                                <div className="text-center mt-5">
                                    <p className=" font-semibold text-[13px] sm:text-[15px] md:text-[16px]">
                                        {badan.name}
                                    </p>
                                    <p className="text-[10px] sm:text-[12px] md:text-[14px] capitalize">
                                        {badan.position}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                    <h1 className="text-center text-3xl font-bold uppercase bg-gradient-to-b from-dark to-primary text-transparent bg-clip-text">
                        Duta
                    </h1>
                    <div
                        // className={`${
                        //     duta.length >= 2
                        //         ? "grid lg:grid-cols-3 sm:grid-cols-3 place-items-center gap-5 grid-cols-2 "
                        //         : "flex justify-center"
                        // } `}
                        className="grid lg:grid-cols-3 sm:grid-cols-3 place-items-center gap-5 grid-cols-2 "
                    >
                        {duta.map((duta, i) => (
                            <div key={i} className="">
                                <div className="flex justify-center">
                                    <img
                                        src={`${url}storage/${duta.image}`}
                                        alt=""
                                        className="lg:w-[250px] lg:h-[250px] w-[120px] h-[120px] sm:w-[170px] sm:h-[170px] rounded-full shadow-lg "
                                    />
                                </div>
                                <div className="text-center mt-5">
                                    <p className=" font-semibold text-[13px] sm:text-[15px] md:text-[16px]">
                                        {duta.name}
                                    </p>
                                    <p className="text-[10px] sm:text-[12px] md:text-[14px] capitalize">
                                        {duta.position}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                    <h1 className="text-center text-3xl font-bold uppercase bg-gradient-to-b from-dark to-primary text-transparent bg-clip-text">
                        Manager
                    </h1>
                    <div
                        className={`${
                            manager.length >= 2
                                ? "grid lg:grid-cols-3 sm:grid-cols-3 place-items-center gap-5 grid-cols-2 "
                                : "flex justify-center"
                        } `}
                    >
                        {manager.map((manager, i) => (
                            <div key={i} className="">
                                <div className="flex justify-center">
                                    <img
                                        src={`${url}storage/${manager.image}`}
                                        alt=""
                                        className="lg:w-[250px] lg:h-[250px] w-[120px] h-[120px] sm:w-[170px] sm:h-[170px] rounded-full shadow-lg "
                                    />
                                </div>
                                <div className="text-center mt-5">
                                    <p className=" font-semibold text-[13px] sm:text-[15px] md:text-[16px]">
                                        {manager.name}
                                    </p>
                                    <p className="text-[10px] sm:text-[12px] md:text-[14px] capitalize">
                                        {manager.position}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </LayoutNavigation>
        </div>
    );
};
export default Index;
