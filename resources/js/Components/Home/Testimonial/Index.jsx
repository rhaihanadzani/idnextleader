import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
// import "swiper/css/navigation";

import { Pagination, Autoplay } from "swiper/modules";

const Testimonials = ({ testimonials }) => {
    // const testimonials = [
    //     {
    //         id: 1,
    //         name: "John Doe React",
    //         username: "@john_Doe",
    //         avatar: "https://via.placeholder.com/50",
    //         text: "This landing page is awesome!",
    //     },
    //     {
    //         id: 2,
    //         name: "John Doe React",
    //         username: "@john_Doe2",
    //         avatar: "https://via.placeholder.com/50",
    //         text: "Lorem ipsum dolor sit amet, exercitation. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    //     },
    //     {
    //         id: 3,
    //         name: "John Doe React",
    //         username: "@john_Doe3",
    //         avatar: "https://via.placeholder.com/50",
    //         text: "Lorem ipsum dolor sit amet, tempor incididunt aliqua. Ut enim ad minim veniam, quis nostrud.",
    //     },
    //     {
    //         id: 4,
    //         name: "John Doe React",
    //         username: "@john_Doe4",
    //         avatar: "https://via.placeholder.com/50",
    //         text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    //     },
    //     {
    //         id: 5,
    //         name: "John Doe React",
    //         username: "@john_Doe5",
    //         avatar: "https://via.placeholder.com/50",
    //         text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    //     },
    //     {
    //         id: 6,
    //         name: "John Doe React",
    //         username: "@john_Doe5",
    //         avatar: "https://via.placeholder.com/50",
    //         text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    //     },
    // ];
    const url = import.meta.env.VITE_CMS_URL;
    // console.log(url);

    return (
        <section className="py-16  text-white">
            <div className="container mx-auto px-6">
                {/* Judul Section */}
                <h2 className="text-2xl md:text-3xl font-extrabold text-primary text-center mb-6">
                    Kata mereka untuk ID Next Leader
                </h2>
                <p className="text-center text-dark mb-12 max-w-3xl mx-auto">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Non unde error facere hic reiciendis illo.
                </p>
                {/* Testimonial Grid */}

                <Swiper
                    spaceBetween={30}
                    slidesPerView={1}
                    // navigation={true}
                    pagination={{ clickable: true }}
                    loop={true}
                    modules={[Pagination, Autoplay]}
                    autoplay={{ delay: 3000 }}
                    // breakpoints={{
                    //     640: { slidesPerView: 1 },
                    //     768: { slidesPerView: 2 },
                    //     1024: { slidesPerView: 3 },
                    // }}
                    className="w-full max-w-6xl mx-auto  flex"
                    style={{
                        "--swiper-navigation-color": "#ed1c24",
                        "--swiper-pagination-color": "#ffff",
                    }}
                >
                    {testimonials.map((testimonial) => (
                        <SwiperSlide key={testimonial.id} className="">
                            <div className="bg-gradient-to-br from-dark to-darkRed rounded-lg shadow-md p-6 h-[12rem] overflow-hidden">
                                {/* Header: Avatar dan Nama */}
                                <div className="flex items-center gap-4 pb-2">
                                    <img
                                        src={
                                            `${url}storage/${testimonial.image}` ||
                                            "https://via.placeholder.com/50"
                                        }
                                        alt={testimonial.name}
                                        className="w-12 h-12 rounded-full"
                                    />
                                    <div>
                                        <h4 className="text-lg font-bold text-white">
                                            {testimonial.name}
                                        </h4>
                                        <p className="text-sm text-gray-400">
                                            {testimonial.position}
                                        </p>
                                    </div>
                                </div>
                                {/* Isi Testimonial */}
                                <p className="text-gray-300 text-[0.7rem] xl:text-[0.8rem]">
                                    {testimonial.message}
                                </p>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
};

export default Testimonials;
