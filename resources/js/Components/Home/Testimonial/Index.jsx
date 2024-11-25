import React from "react";

const Testimonials = () => {
    const testimonials = [
        {
            id: 1,
            name: "John Doe React",
            username: "@john_Doe",
            avatar: "https://via.placeholder.com/50",
            text: "This landing page is awesome!",
        },
        {
            id: 2,
            name: "John Doe React",
            username: "@john_Doe2",
            avatar: "https://via.placeholder.com/50",
            text: "Lorem ipsum dolor sit amet, exercitation. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
        },
        {
            id: 3,
            name: "John Doe React",
            username: "@john_Doe3",
            avatar: "https://via.placeholder.com/50",
            text: "Lorem ipsum dolor sit amet, tempor incididunt aliqua. Ut enim ad minim veniam, quis nostrud.",
        },
        {
            id: 4,
            name: "John Doe React",
            username: "@john_Doe4",
            avatar: "https://via.placeholder.com/50",
            text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        },
        {
            id: 5,
            name: "John Doe React",
            username: "@john_Doe5",
            avatar: "https://via.placeholder.com/50",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        },
        {
            id: 6,
            name: "John Doe React",
            username: "@john_Doe5",
            avatar: "https://via.placeholder.com/50",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        },
    ];

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
                <div className="grid md:grid-cols-2 lg:grid-cols-4 sm:block columns-2  lg:columns-3 lg:gap-6 mx-auto space-y-4 lg:space-y-6">
                    {testimonials.map((testimonial) => (
                        <div
                            key={testimonial.id}
                            className="bg-gradient-to-br from-dark to-darkRed rounded-lg shadow-md p-6 flex flex-col gap-4 max-w-md md:break-inside-avoid overflow-hidden"
                        >
                            {/* Header: Avatar dan Nama */}
                            <div className="flex items-center gap-4 pb-2">
                                <img
                                    src={testimonial.avatar}
                                    alt={testimonial.name}
                                    className="w-12 h-12 rounded-full"
                                />
                                <div>
                                    <h4 className="text-lg font-bold text-white">
                                        {testimonial.name}
                                    </h4>
                                    <p className="text-sm text-gray-400">
                                        {testimonial.username}
                                    </p>
                                </div>
                            </div>
                            {/* Isi Testimonial */}
                            <p className="text-gray-300">{testimonial.text}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
