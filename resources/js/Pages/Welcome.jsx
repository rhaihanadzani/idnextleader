// import AboutSection from "@/Components/Home/About/Index";
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

export default function Welcome(props) {
    // console.log(props.feedback);
    return (
        <>
            <Head title="Home" />
            <HomeNavbar>
                <Banner />
                {/* <Agenda /> */}
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
