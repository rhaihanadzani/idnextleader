import { MdVerified } from "react-icons/md";
import { GoVerified } from "react-icons/go";
import { BiChevronsDown } from "react-icons/bi";
import { MdOutlineArticle } from "react-icons/md";
import LayoutNavigation from "@/Components/layouts/Navigation/LayoutNavigation";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
// import "swiper/css/navigation";

import { Pagination, Autoplay } from "swiper/modules";
import { GrFormNextLink } from "react-icons/gr";
import { Head } from "@inertiajs/react";

const DetailArticle = ({ article, otherArticles }) => {
    // console.log(otherArticles);
    // console.log(article.images.length < 1);
    const url = import.meta.env.VITE_CMS_URL;

    return (
        <>
            <Head title={article.title} />
            <LayoutNavigation
                tittle={article.title}
                description={article.description}
            >
                <div className="w-full px-4 lg:flex ">
                    {/* First article */}
                    <div className="w-[100%] lg:w-[65%] mb-10 lg:mb-0 bg-white shadow-md p-5 rounded-xl">
                        <div className="space-y-4">
                            <h1 className="text-2xl font-semibold capitalize border-b-[0.5px] pb-3 text-black my-2">
                                {article.title}
                            </h1>
                            <div className="flex items-center gap-2">
                                <div className="">
                                    <img
                                        src={`${url}storage/${article.published_image}`}
                                        alt={article.published_by}
                                        className="border-2 h-16 w-16 lg:h-20 lg:w-20 border-darkRed rounded-full"
                                    />
                                </div>
                                <div className="ml-2">
                                    <p className="text-[15px] font-bold capitalize flex items-center gap-2">
                                        {article.published_by}
                                        <span>
                                            {" "}
                                            <MdVerified color="#ed1c24" />
                                        </span>
                                    </p>
                                    <p className="text-[12px] italic text-slate-500 capitalize">
                                        {article.published_position}
                                    </p>
                                    <p className="text-[13px] font-semibold capitalize mt-2 lg:mt-3">
                                        {new Date(
                                            article.created_at
                                        ).toLocaleDateString("id-ID", {
                                            day: "numeric",
                                            month: "long",
                                            year: "numeric",
                                        })}
                                    </p>
                                </div>
                            </div>
                            <div>
                                {article.images.length >= 1 ? (
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
                                            {article.images.map((image, i) => (
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
                                            src={`${url}storage/${article.images[0].image}`}
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
                                        __html: article.content,
                                    }}
                                ></div>
                            </div>
                        </div>
                    </div>

                    {/* Articles 2-4 */}
                    <div className="w-[100%] lg:w-[35%] h-fit sticky top-[90px]">
                        <div className="bg-darkRed text-white text-[1.2rem] lg:ml-5 px-2 py-1.5 text-center rounded-full flex items-center justify-center gap-3 mb-2 shadow-md">
                            <div>
                                <BiChevronsDown className="text-2xl" />
                            </div>
                            <p className="text-[1rem]"> Artikel Lainnya</p>
                        </div>
                        <div className=" lg:space-y-5 lg:pl-2 space-y-8 bg-white shadow-md px-3 lg:ml-5 py-5 rounded-lg ">
                            {otherArticles.map((article) => (
                                <div
                                    key={article.id}
                                    className="h-[8rem] w-[100%] bg-gradient-to-tr from-darkRed to-dark rounded-lg shadow-lg overflow-hidden transition-all transform hover:scale-105 hover:shadow-xl flex flex-col relative pr-1"
                                >
                                    <div className="flex flex-row">
                                        <div className="w-[40%] h-full overflow-hidden">
                                            <img
                                                src={`${url}storage/${article.images[0].image}`}
                                                alt="articles-image"
                                                className="w-[100%] overflow-hidden h-32 object-cover rounded-t-lg border-r border-white"
                                                loading="lazy"
                                            />
                                        </div>
                                        <div className="pl-2 w-[60%]">
                                            <h2 className="text-[1rem]  pt-2 font-semibold text-gray-200 mb-2">
                                                {article.title}
                                            </h2>
                                            <div className="text-gray-300 mb-4 text-[0.7rem] ">
                                                <div
                                                    dangerouslySetInnerHTML={{
                                                        __html: article.content.slice(
                                                            0,
                                                            73
                                                        ),
                                                    }}
                                                ></div>

                                                <a
                                                    href={`/article/${article.id}`}
                                                    className="text-red-200 underline underline-offset-2 font-medium"
                                                >
                                                    Baca selengkapnya...
                                                </a>
                                            </div>
                                            <div className="text-[0.7rem] text-gray-200 pr-2 text-left absolute bottom-0 right-0 italic">
                                                <span>
                                                    Dibuat Pada :{" "}
                                                    {new Date(
                                                        article.created_at
                                                    ).toLocaleDateString()}
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                            <div className=" flex justify-end">
                                <a
                                    href={`/article`}
                                    className="text-darkRed flex items-center w-fit p-2 border-darkRed font-semibold rounded-[35px] border-2 hover:bg-darkRed hover:text-white transition-all duration-500 hover:translate-x-2"
                                >
                                    Semua Artikel <GrFormNextLink size={25} />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </LayoutNavigation>
        </>
    );
};
export default DetailArticle;
