import { MdMusicOff } from "react-icons/md";
import { MdMusicNote } from "react-icons/md";
import About from "@/Components/Home/About/Index";
import AcaraSection from "@/Components/Home/Acara/Index";
import Agenda from "@/Components/Home/Agenda/Index";
import Banner from "@/Components/Home/Banner/Index";
import EcosystemSection from "@/Components/Home/Ekosistem/Index";
import InviteUs from "@/Components/Home/InviteUs/Index";
import MitraKolaborator from "@/Components/Home/Mitra/Index";
import NilaiSection from "@/Components/Home/NilaiNilai/Index";
import TeamSection from "@/Components/Home/Team/Index";
import Testimonials from "@/Components/Home/Testimonial/Index";
import Tujuan from "@/Components/Home/Tujuan/Index";
import HomeFooter from "@/Components/layouts/Footer/HomeFooter";
import HomeNavbar from "@/Components/layouts/Navbar/HomeNavbar";
import { Link, Head } from "@inertiajs/react";
import { useState } from "react";

export default function Welcome(props) {
    const [audio] = useState(() => {
        const newAudio = new Audio("/audio/audioIDNL.mp3"); // Masukkan path audio
        newAudio.loop = true; // Aktifkan looping audio
        return newAudio;
    });
    const [isPlaying, setIsPlaying] = useState(false);

    const toggleAudio = () => {
        if (isPlaying) {
            audio.pause();
        } else {
            audio.play().catch((error) => {
                console.error("Error while playing audio:", error);
            });
        }
        setIsPlaying(!isPlaying);
    };

    return (
        <>
            <Head title="Home" />
            <HomeNavbar>
                <Banner />
                <button
                    onClick={toggleAudio}
                    className="fixed bottom-4 right-4 bg-white  text-white p-3 rounded-full shadow-lg z-[9999] border border-darkRed"
                >
                    {isPlaying ? (
                        <MdMusicOff size={23} className="text-darkRed" />
                    ) : (
                        <MdMusicNote size={23} className="text-darkRed" />
                    )}
                </button>
                <About />
                <Tujuan />
                <NilaiSection />
                <AcaraSection acaraItems={props.event} />
                <EcosystemSection />
                <TeamSection teamMembers={props.team} />
                <MitraKolaborator mitraList={props.collaboration} />
                <Testimonials testimonials={props.feedback} />
                <InviteUs />
                <HomeFooter />
            </HomeNavbar>
        </>
    );
}
