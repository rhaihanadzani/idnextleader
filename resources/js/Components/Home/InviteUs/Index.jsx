const InviteUs = () => {
    return (
        <section id="contact">
            <div className="py-12 flex justify-center flex-col px-4 w-full">
                <h3 className="text-center text-2xl md:text-4xl font-bold">
                    Tertarik untuk membangun{" "}
                    <span className="bg-gradient-to-b from-dark to-primary text-transparent bg-clip-text">
                        kolaborasi{" "}
                    </span>
                    dengan kami?
                </h3>
                <p className="text-sm md:text-xl text-muted-foreground text-center mt-4 mb-8 text-darkRed">
                    Dapatkan banyak manfaat dari menyelenggarakan acara bersama!
                </p>
                <div className="flex justify-center">
                    <a href="https://wa.me/6282134224947" target="_blank">
                        <div className="bg-gradient-to-br from-dark to bg-darkRed text-white border border-white px-4 py-2 rounded-full">
                            Hubungi Kami
                        </div>
                    </a>
                </div>
            </div>

            <hr className="w-11/12 mx-auto" />
        </section>
    );
};
export default InviteUs;
