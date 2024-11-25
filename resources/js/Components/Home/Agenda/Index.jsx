// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Pagination, Navigation, Autoplay } from "swiper/modules";

const Agenda = () => {
    const slides = [
        { id: 1, title: "Lead Class", description: "Description for Agenda 1" },
        {
            id: 2,
            title: "Pekan Raya Pemuda",
            description: "Description for Agenda 2",
        },
        {
            id: 3,
            title: "Future Leader Fest 2024",
            description: "Description for Agenda 3",
        },
        {
            id: 4,
            title: "MSIB Muda Berkrea(k)si",
            description: "Description for Agenda 4",
        },
        {
            id: 5,
            title: "Leaderboard Conference",
            description: "Description for Agenda 5",
        },
    ];

    return (
        <div className="flex justify-center items-center">
            <Swiper
                spaceBetween={50}
                slidesPerView={3}
                navigation={true}
                pagination={{ clickable: true }}
                loop={true}
                modules={[Pagination, Navigation, Autoplay]}
                className="w-[100%]"
                autoplay={{ delay: 3000 }}
                style={{
                    "--swiper-navigation-color": "#ed1c24",
                    "--swiper-pagination-color": "#ed1c24",
                    "--swiper-navigation-sides-offset": "20px",
                    "--swiper-navigation-size": "35px", //
                }}
            >
                {slides.map((slide) => (
                    <SwiperSlide key={slide.id}>
                        <div className="h-[150px] bg-white shadow shadow-darkRed rounded-[15px] p-4 flex flex-col items-center justify-center">
                            <h3 className="text-2xl text-center text-darkRed font-bold">
                                {slide.title}
                            </h3>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default Agenda;
