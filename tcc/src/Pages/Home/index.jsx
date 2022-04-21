import { } from "./styles"
import HomeNavBar from "../../Components/HomeComponents/HomeNavbar"
import HomeSidebar from "../../Components/HomeComponents/HomeSidebar";
import { useState } from "react";
import HeroSection from "../../Components/HomeComponents/HeroSection";
import InfoSection from "../../Components/HomeComponents/InfoSection";
import { homeInfo1 } from "../../Components/HomeComponents/InfoSection/data";

const Home = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen)
    }

    return (
        <>
            <HomeSidebar isOpen={isOpen} toggle={toggle} />
            <HomeNavBar toggle={toggle} />
            <HeroSection />
            <InfoSection {...homeInfo1} />
        </>
    )
}

export default Home;