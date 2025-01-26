import LayoutNavigation from "@/Components/layouts/Navigation/LayoutNavigation";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import { Pagination, Autoplay } from "swiper/modules";
import { GrFormNextLink } from "react-icons/gr";
import { BiChevronsDown } from "react-icons/bi";
import { Head } from "@inertiajs/react";

const DetailEvent = ({ event, otherEvents }) => {
    // console.log(event.images);
    // console.log(event.images);
    const url = import.meta.env.VITE_CMS_URL;

    return (
        <>
            <Head title={event.title} />
            <LayoutNavigation
                tittle={event.title}
                description={event.description}
            >
                <div className="w-full px-4 lg:flex ">
                    {/* First event */}

                    <div className="w-[100%] lg:w-[65%] mb-10 lg:mb-0 bg-white shadow-md p-5 rounded-xl">
                        <div className="space-y-4">
                            <h1 className="text-2xl font-semibold capitalize border-b-[0.5px] pb-3 text-black my-2">
                                {event.title}
                            </h1>

                            <div>
                                {event.images.length >= 1 ? (
                                    <>
                                        <Swiper
                                            spaceBetween={30}
                                            slidesPerView={1}
                                            pagination={{ clickable: true }}
                                            loop={true}
                                            modules={[Pagination, Autoplay]}
                                            autoplay={{ delay: 3000 }}
                                            className="w-full max-w-6xl mx-auto flex "
                                            style={{
                                                "--swiper-pagination-color":
                                                    "#ed1c24",
                                            }}
                                        >
                                            {event.images.map((image, i) => (
                                                <SwiperSlide key={i}>
                                                    <img
                                                        src={`${url}storage/${image.image}`}
                                                        alt="..."
                                                        className="rounded-[20px] h-[400px] w-full object-cover object-center"
                                                    />
                                                </SwiperSlide>
                                            ))}
                                        </Swiper>
                                    </>
                                ) : (
                                    <>
                                        <img
                                            src={`${url}storage/${event.images[0].image}`}
                                            alt="..."
                                            className="rounded-[20px] h-[400px] w-full object-cover object-center"
                                        />
                                    </>
                                )}
                            </div>

                            <div>
                                <div
                                    className="content"
                                    dangerouslySetInnerHTML={{
                                        __html: event.content,
                                    }}
                                ></div>
                            </div>
                        </div>
                    </div>

                    {/* Event 2-4 */}

                    {/* ============== */}
                    <div className="w-[100%] lg:w-[35%] h-fit sticky top-[90px]">
                        <div className="bg-darkRed text-white text-[1.2rem] lg:ml-5 px-2 py-1.5 text-center rounded-full flex items-center justify-center gap-3 mb-2 shadow-md">
                            <div>
                                <BiChevronsDown className="text-2xl" />
                            </div>
                            <p className="text-[1rem]"> Event Lainnya</p>
                        </div>
                        <div className=" lg:space-y-5 lg:pl-2 space-y-8 bg-white shadow-md px-3 lg:ml-5 py-5 rounded-lg ">
                            {otherEvents.map((event) => (
                                <div
                                    key={event.id}
                                    className="h-[8rem] w-[100%] bg-gradient-to-tr from-darkRed to-dark rounded-lg shadow-lg overflow-hidden transition-all transform hover:scale-105 hover:shadow-xl flex flex-col relative pr-1"
                                >
                                    <div className="flex flex-row">
                                        <div className="w-[40%] h-full overflow-hidden">
                                            <img
                                                src={`${url}storage/${event.images[0].image}`}
                                                alt={event.title}
                                                className="w-[100%] overflow-hidden h-32 object-cover rounded-t-lg border-r border-white"
                                                loading="lazy"
                                            />
                                        </div>
                                        <div className="pl-2 w-[60%]">
                                            <div className=" h-full flex flex-col justify-center items-center">
                                                <h2 className="text-[10px] text-center pt-2 font-semibold text-gray-200 mb-2">
                                                    {event.title}
                                                </h2>

                                                <a
                                                    href={`/event/${event.id}`}
                                                    className="text-white w-fit font-medium text-[7px] text border-2 border-white p-1 px-2 rounded-[35px] hover:bg-darkRed hover:text-white transition-all duration-500 hover:translate-x-2"
                                                >
                                                    Baca selengkapnya
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                            <div className=" flex justify-end">
                                <a
                                    href={`/event`}
                                    className="text-darkRed flex items-center w-fit p-2 border-darkRed font-semibold rounded-[35px] border-2 hover:bg-darkRed hover:text-white transition-all duration-500 hover:translate-x-2"
                                >
                                    Semua Event <GrFormNextLink size={25} />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </LayoutNavigation>
        </>
    );
};
export default DetailEvent;
