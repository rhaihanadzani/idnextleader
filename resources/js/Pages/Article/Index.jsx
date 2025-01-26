import LayoutNavigation from "@/Components/layouts/Navigation/LayoutNavigation";
import { Head } from "@inertiajs/react";

const Index = ({ articles }) => {
    const sortArticle = articles[0].content.slice(0, 400);
    const url = import.meta.env.VITE_CMS_URL;

    return (
        <>
            <Head title="Artikel" />
            <LayoutNavigation
                tittle={"Artikel Kami"}
                description={
                    "Temukan wawasan, inspirasi, dan solusi praktis seputar kepemimpinan dan pengembangan diri untuk membentuk generasi pemimpin masa depan Indonesia."
                }
            >
                <div className="w-full px-4 lg:flex justify-between ">
                    {/* First article */}
                    <div className="w-[100%] lg:w-[60%] mb-10 lg:mb-0 shadow-md p-5 rounded-xl">
                        <div>
                            <div className="relative">
                                <img
                                    src={`${url}storage/${articles[0].images[0].image}`}
                                    alt="..."
                                    className="rounded-[20px]"
                                />
                                <div className="inline-block px-4 py-2 text-sm font-bold text-white bg-primary rounded-full shadow-md uppercase tracking-wide hover:bg-primary/90 hover:scale-105 transition-all duration-300 absolute -top-5 -right-5 z-10">
                                    UTAMA
                                </div>
                            </div>
                            <h1 className="text-2xl font-semibold text-black my-2">
                                {articles[0].title}
                            </h1>
                            <div>
                                <div
                                    dangerouslySetInnerHTML={{
                                        __html: sortArticle,
                                    }}
                                ></div>
                                <a
                                    href={`/article/${articles[0].id}`}
                                    className="text-darkRed hover:underline font-medium underline underline-offset-2"
                                >
                                    Baca selengkapnya...
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Articles 2-4 */}
                    <div className="w-[100%] lg:w-[35%] lg:space-y-5 lg:pl-2 space-y-8 shadow-md p-5 rounded-xl h-fit">
                        {articles.slice(1, 4).map((article) => (
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
                                        <div className=" h-full flex flex-col justify-center items-center">
                                            <h2 className="text-[10px] text-center pt-2 font-semibold text-gray-200 mb-2">
                                                {article.title}
                                            </h2>

                                            <a
                                                href={`/article/${article.id}`}
                                                className="text-white w-fit font-medium text-[7px] text border-2 border-white p-1 px-2 rounded-[35px] hover:bg-darkRed hover:text-white transition-all duration-500 hover:translate-x-2"
                                            >
                                                Baca selengkapnya
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Articles 5 onwards */}
                <div className="max-w-7xl mx-auto px-4 py-4 lg:py-10">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        {articles.slice(4).map((article) => (
                            <ArticleItem key={article.id} article={article} />
                        ))}
                    </div>
                </div>
            </LayoutNavigation>
        </>
    );
};

const ArticleItem = ({ article }) => {
    const url = import.meta.env.VITE_CMS_URL;

    return (
        <div className="h-[8rem] w-[100%] bg-gradient-to-tr from-darkRed to-dark rounded-lg shadow-lg overflow-hidden transition-all transform hover:scale-105 hover:shadow-xl flex flex-col relative pr-1">
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
                    {/* <h2 className="text-[1rem]  pt-2 font-semibold text-gray-200 mb-2">
                        {article.title}
                    </h2>
                    <p className="text-gray-300 mb-4 text-[0.7rem] ">
                        <div
                            dangerouslySetInnerHTML={{
                                __html: article.content.slice(0, 73),
                            }}
                        ></div>

                        <a
                            href={`/article/${article.id}`}
                            className="text-red-200 underline underline-offset-2 font-medium"
                        >
                            Baca selengkapnya...
                        </a>
                    </p>
                    <div className="text-[0.7rem] text-gray-200 pr-2 text-left absolute bottom-0 right-0 italic">
                        <span>
                            Dibuat Pada :{" "}
                            {new Date(article.created_at).toLocaleDateString()}
                        </span>
                    </div> */}
                    <div className=" h-full flex flex-col justify-center items-center">
                        <h2 className="text-[10px] text-center pt-2 font-semibold text-gray-200 mb-2">
                            {article.title}
                        </h2>

                        <a
                            href={`/article/${article.id}`}
                            className="text-white w-fit font-medium text-[7px] text border-2 border-white p-1 px-2 rounded-[35px] hover:bg-darkRed hover:text-white transition-all duration-500 hover:translate-x-2"
                        >
                            Baca selengkapnya
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Index;
