import LayoutNavigation from "@/Components/layouts/Navigation/LayoutNavigation";

const Index = ({ articles }) => {
    const sortArticle = articles[0].content.slice(0, 400);
    const url = import.meta.env.VITE_CMS_URL;

    return (
        <LayoutNavigation
            tittle={"Article"}
            description={
                "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas maxime libero inventore quibusdam enim illum, vel dicta rerum perspiciatis incidunt."
            }
        >
            <div className="w-full px-4 lg:flex ">
                {/* First article */}
                <div className="w-[100%] lg:w-[65%] mb-10 lg:mb-0">
                    <div>
                        <div className="relative">
                            <img
                                src={`${url}storage/${articles[0].images[0].image}`}
                                alt="..."
                                className="rounded-[20px]"
                            />
                            <div class="inline-block px-4 py-2 text-sm font-bold text-white bg-primary rounded-full shadow-md uppercase tracking-wide hover:bg-primary/90 hover:scale-105 transition-all duration-300 absolute -top-5 -right-5 z-10">
                                ANNOUNCEMENT
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
                                className="text-darkRed hover:underline font-medium"
                            >
                                Read more...
                            </a>
                        </div>
                    </div>
                </div>

                {/* Articles 2-4 */}
                <div className="w-[100%] lg:w-[35%] lg:space-y-5 lg:pl-2 space-y-8  ">
                    {articles.slice(1, 4).map((article) => (
                        <div
                            key={article.id}
                            className="bg-gradient-to-tr from-darkRed to-dark rounded-lg shadow-lg overflow-hidden transition-all transform hover:scale-105 hover:shadow-xl flex flex-col justify-between relative"
                        >
                            <div className="flex">
                                <div className="relative">
                                    <img
                                        src={`${url}storage/${article.images[0].image}`}
                                        alt="articles-image"
                                        className="w-full h-32 object-cover rounded-t-lg bg-blue-500"
                                    />
                                </div>
                                <div>
                                    <h2 className="text-[1rem] pl-2 pt-2 font-semibold text-gray-200 mb-2">
                                        {article.title}
                                    </h2>
                                    <p className="text-gray-300 mb-4 text-[0.8rem] pl-2">
                                        {article.description}{" "}
                                        <a
                                            href={`/article/${article.id}`}
                                            className="text-blue-200 hover:underline font-medium"
                                        >
                                            Read more...
                                        </a>
                                    </p>
                                    <div className="text-[0.7rem] text-gray-200 pr-2 text-left absolute bottom-0 right-0">
                                        <span>
                                            Created on:{" "}
                                            {new Date(
                                                article.created_at
                                            ).toLocaleDateString()}
                                        </span>
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
    );
};

const ArticleItem = ({ article }) => {
    const url = import.meta.env.VITE_CMS_URL;

    return (
        <div className="bg-gradient-to-tr from-darkRed to-dark rounded-lg shadow-lg overflow-hidden transition-all transform hover:scale-105 hover:shadow-xl flex flex-col justify-between relative">
            {/* Gambar Artikel */}
            <div className="flex">
                <div className="relative">
                    <img
                        src={`${url}storage/${article.images[0].image}`}
                        alt="article-image"
                        className="w-full h-[9rem] object-cover rounded-t-lg bg-blue-500"
                    />
                </div>
                <div>
                    {/* Judul Artikel */}
                    <h2 className="text-[1rem] px-2 pt-2 font-semibold text-gray-200 mb-2">
                        {article.title}
                    </h2>
                    {/* Deskripsi Artikel */}
                    <p className="text-gray-300 mb-4 text-[0.8rem] pl-2">
                        {article.description}{" "}
                        <a
                            href={`/article/${article.id}`}
                            className="text-blue-200 hover:underline font-medium"
                        >
                            Read more...
                        </a>
                    </p>
                    {/* Tanggal Pembuatan Artikel */}
                    <div className="text-[0.7rem] text-gray-200 pr-2 text-left absolute bottom-1 right-0">
                        <span>
                            Created on:{" "}
                            {new Date(article.created_at).toLocaleDateString()}
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Index;
