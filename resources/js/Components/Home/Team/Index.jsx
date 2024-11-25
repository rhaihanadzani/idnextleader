import React from "react";
import { FaLinkedin, FaFacebook, FaInstagram } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Pagination, Navigation, Autoplay } from "swiper/modules";

const TeamSection = () => {
    const teamMembers = [
        {
            id: 1,
            name: "Emma Smith",
            position: "Product Manager",
            description:
                "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
            photo: "/images/home/team/1.jpg",
            socials: {
                linkedin: "https://www.linkedin.com",
                facebook: "https://www.facebook.com",
                instagram: "https://www.instagram.com",
            },
        },
        {
            id: 2,
            name: "John Doe",
            position: "Tech Lead",
            description:
                "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
            photo: "https://via.placeholder.com/150",
            socials: {
                linkedin: "https://www.linkedin.com",
                facebook: "https://www.facebook.com",
                instagram: "https://www.instagram.com",
            },
        },
        {
            id: 3,
            name: "Ashley Ross",
            position: "Frontend Developer",
            description:
                "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
            photo: "https://via.placeholder.com/150",
            socials: {
                linkedin: "https://www.linkedin.com",
                facebook: "https://www.facebook.com",
                instagram: "https://www.instagram.com",
            },
        },
        {
            id: 4,
            name: "Bruce Rogers",
            position: "Backend Developer",
            description:
                "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
            photo: "https://via.placeholder.com/150",
            socials: {
                linkedin: "https://www.linkedin.com",
                facebook: "https://www.facebook.com",
            },
        },
    ];

    return (
        <section className="py-16 bg-gradient-to-br from-dark to-darkRed">
            <div className="container mx-auto px-6">
                <h2 className="text-2xl md:text-3xl font-extrabold text-white text-center mb-6">
                    Our Dedicated Team
                </h2>
                <p className="text-center text-sm md:text-base text-white mb-4 max-w-3xl mx-auto">
                    Meet our amazing team of professionals who are passionate
                    about what they do and dedicated to making a positive
                    impact.
                </p>
                <div>
                    <Swiper
                        spaceBetween={30}
                        slidesPerView={1}
                        navigation={true}
                        pagination={{ clickable: true }}
                        loop={true}
                        modules={[Pagination, Navigation, Autoplay]}
                        autoplay={{ delay: 3000 }}
                        breakpoints={{
                            640: { slidesPerView: 1 },
                            768: { slidesPerView: 2 },
                            1024: { slidesPerView: 3 },
                        }}
                        className="w-full max-w-6xl mx-auto  h-[250px] flex"
                        style={{
                            "--swiper-navigation-color": "#ed1c24",
                            "--swiper-pagination-color": "#ed1c24",
                        }}
                    >
                        {teamMembers.map((member) => (
                            <SwiperSlide key={member.id} className="">
                                <div className="flex justify-center flex-row ">
                                    <div className="bg-white/30 backdrop-blur-md border border-white/20 rounded-lg shadow-lg p-6 text-center flex flex-col items-center relative w-[300px] h-auto mt-14">
                                        {/* Foto Anggota */}
                                        <div className="w-24 h-24 rounded-full overflow-hidden border-2 border-darkRed bg-white absolute -top-12">
                                            <img
                                                src={member.photo}
                                                alt={member.name}
                                                className="w-full h-full object-cover"
                                            />
                                        </div>
                                        <div className="mt-8">
                                            {/* Nama */}
                                            <h3 className="text-lg font-bold text-white mb-1">
                                                {member.name}
                                            </h3>
                                            {/* Jabatan */}
                                            <p className="text-white text-sm font-medium mb-3">
                                                {member.position}
                                            </p>

                                            {/* Social Media */}
                                            <div className="flex justify-center gap-4 mt-4">
                                                {member.socials.linkedin && (
                                                    <a
                                                        href={
                                                            member.socials
                                                                .linkedin
                                                        }
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="text-gray-300 hover:text-darkRed transition-colors"
                                                    >
                                                        <FaLinkedin size={20} />
                                                    </a>
                                                )}
                                                {member.socials.facebook && (
                                                    <a
                                                        href={
                                                            member.socials
                                                                .facebook
                                                        }
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="text-gray-300 hover:text-darkRed transition-colors"
                                                    >
                                                        <FaFacebook size={20} />
                                                    </a>
                                                )}
                                                {member.socials.instagram && (
                                                    <a
                                                        href={
                                                            member.socials
                                                                .instagram
                                                        }
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="text-gray-300 hover:text-darkRed transition-colors"
                                                    >
                                                        <FaInstagram
                                                            size={20}
                                                        />
                                                    </a>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </section>
    );
};

export default TeamSection;
