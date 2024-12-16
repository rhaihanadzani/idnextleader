import LayoutNavigation from "@/Components/layouts/Navigation/LayoutNavigation";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import { Pagination, Autoplay } from "swiper/modules";
import { GrFormNextLink } from "react-icons/gr";

const DetailEvent = ({ event, otherEvents }) => {
    // console.log(event.images);
    // console.log(event.images);
    const url = import.meta.env.VITE_CMS_URL;

    return (
        <LayoutNavigation tittle={event.title} description={event.description}>
            <div className="w-full px-4 lg:flex ">
                {/* First article */}
                <div className="w-[100%] lg:w-[65%] mb-10 lg:mb-0">
                    <div>
                        <div>
                            {event.images.length > 1 ? (
                                <>
                                    <Swiper
                                        spaceBetween={30}
                                        slidesPerView={1}
                                        pagination={{ clickable: true }}
                                        loop={true}
                                        modules={[Pagination, Autoplay]}
                                        autoplay={{ delay: 3000 }}
                                        className="w-full max-w-6xl mx-auto  flex"
                                        style={{
                                            "--swiper-navigation-color":
                                                "#ed1c24",
                                            "--swiper-pagination-color":
                                                "#ffff",
                                        }}
                                    >
                                        {event.images.map((image, i) => (
                                            <SwiperSlide key={i}>
                                                <img
                                                    src={`${url}storage/${image.image}`}
                                                    alt="..."
                                                    className="rounded-[20px] object-cover w-full h-full"
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
                                        className="rounded-[20px] max-h-[500px] object-cover w-full"
                                    />
                                </>
                            )}
                        </div>
                        <h1 className="text-2xl font-semibold text-black my-2">
                            {event.title}
                        </h1>
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
                <div className="w-[100%] lg:w-[35%] lg:space-y-5 lg:pl-2 space-y-8">
                    <p className="text-xl text-darkRed font-semibold">
                        Event Lainnya :
                    </p>
                    {otherEvents.map((event) => (
                        <div
                            key={event.id}
                            className="bg-gradient-to-tr from-darkRed to-dark rounded-lg shadow-lg overflow-hidden transition-all transform hover:scale-105 hover:shadow-xl flex flex-col justify-between relative"
                        >
                            {/* Gambar Artikel */}
                            <div className="flex">
                                <div className="w-[25%] h-[100px] overflow-hidden relative">
                                    <img
                                        src={`${url}storage/${event.images[0].image}`}
                                        alt={event.title}
                                        className="w-[100%] h-[100%] object-cover object-center rounded-t-lg"
                                    />
                                </div>
                                <div className="w-[75%]">
                                    {/* Judul Artikel */}
                                    <h2 className="text-[1rem] pl-2 pt-2 font-semibold text-gray-200 mb-2">
                                        {event.title}
                                    </h2>
                                    {/* Deskripsi Artikel */}
                                    <p className="text-gray-300 mb-4 text-[0.8rem] pl-2">
                                        {event.description}{" "}
                                        <a
                                            href={`/event/${event.id}`}
                                            className="text-blue-200 hover:underline font-medium"
                                        >
                                            Read more...
                                        </a>
                                    </p>
                                    {/* Tanggal Pembuatan Artikel */}
                                    <div className="text-[0.7rem] text-gray-200 pr-2 text-left absolute bottom-0 right-0">
                                        <span>
                                            Created on:{" "}
                                            {new Date(
                                                event.created_at
                                            ).toLocaleDateString()}
                                        </span>
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
        </LayoutNavigation>
    );
};
export default DetailEvent;
