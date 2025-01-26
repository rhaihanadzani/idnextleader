import LayoutNavigation from "@/Components/layouts/Navigation/LayoutNavigation";
import { Head } from "@inertiajs/react";

const IndexEvent = ({ latestEvent, nextThreeEvents, remainingEvents }) => {
    // console.log(latestEvent.images[0].image);
    // console.log(nextThreeEvents);
    // console.log(remainingEvents);

    const url = import.meta.env.VITE_CMS_URL;

    const sortContent = latestEvent.content.slice(0, 400);
    return (
        <>
            <Head title="Event" />
            <LayoutNavigation
                tittle={"Event"}
                description={
                    "Ikuti berbagai acara inspiratif untuk meningkatkan kepemimpinan, memperluas jaringan, dan mendorong inovasi bersama generasi pemimpin masa depan."
                }
            >
                <div className="w-full px-4 lg:flex justify-between">
                    {/* First article */}
                    <div className="w-[100%] lg:w-[60%] mb-10 lg:mb-0  shadow-md p-5 rounded-xl ">
                        <div>
                            <div className="relative">
                                <img
                                    src={`${url}storage/${latestEvent.images[0].image}`}
                                    alt="..."
                                    className="rounded-[20px] w-full h-[400px] object-cover"
                                />
                                <div class="inline-block px-4 py-2 text-sm font-bold text-white bg-primary rounded-full shadow-md uppercase tracking-wide hover:bg-primary/90 hover:scale-105 transition-all duration-300 absolute -top-5 -right-5 z-10">
                                    New
                                </div>
                            </div>
                            <h1 className="text-2xl font-semibold text-black my-2">
                                {latestEvent.title}
                            </h1>
                            <div>
                                <div
                                    dangerouslySetInnerHTML={{
                                        __html: sortContent,
                                    }}
                                ></div>
                                <a
                                    href={`/event/${latestEvent.id}`}
                                    className="text-darkRed hover:underline font-medium"
                                >
                                    Baca Selengkapnya ...
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Articles 2-4 */}
                    <div className="w-[100%] lg:w-[35%] lg:space-y-5 lg:pl-2 space-y-8  shadow-md p-5 rounded-xl h-fit ">
                        {nextThreeEvents.map((event) => (
                            <div
                                key={event.id}
                                className="h-[8rem] w-[100%] bg-gradient-to-tr from-darkRed to-dark rounded-lg shadow-lg overflow-hidden transition-all transform hover:scale-105 hover:shadow-xl flex flex-col relative pr-1"
                            >
                                {/* Gambar Artikel */}
                                <div className="flex">
                                    <div className="w-[40%]  overflow-hidden relative">
                                        <img
                                            src={`${url}storage/${event.images[0].image}`}
                                            alt="events-image"
                                            className="w-[100%] overflow-hidden h-32 object-cover rounded-t-lg border-r border-yellow-500"
                                            loading="lazy"
                                        />
                                    </div>
                                    <div className="w-[60%] pl-2 ">
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
                    </div>
                </div>

                {/* Event onwards */}
                <div className="px-4">
                    <div className="max-w-7xl mx-auto  py-4 lg:py-10 shadow-md px-5 rounded-xl">
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                            {remainingEvents.map((event) => (
                                <EventItem key={event.id} event={event} />
                            ))}
                        </div>
                    </div>
                </div>
            </LayoutNavigation>
        </>
    );
};

const EventItem = ({ event }) => {
    const url = import.meta.env.VITE_CMS_URL;

    return (
        <div className="h-[8rem] w-[100%] bg-gradient-to-tr from-darkRed to-dark rounded-lg shadow-lg overflow-hidden transition-all transform hover:scale-105 hover:shadow-xl flex flex-col relative pr-1">
            {/* Gambar Artikel */}
            <div className="flex">
                <div className="w-[40%]  overflow-hidden relative">
                    <img
                        src={`${url}storage/${event.images[0].image}`}
                        alt="events-image"
                        className="w-[100%] overflow-hidden h-32 object-cover rounded-t-lg border-r border-yellow-500"
                        loading="lazy"
                    />
                </div>
                <div className="w-[60%] pl-2 ">
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
    );
};
export default IndexEvent;
