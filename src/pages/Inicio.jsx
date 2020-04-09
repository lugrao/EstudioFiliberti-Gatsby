import React from "react";
import NavbarComponent from "../components/navbar/NavbarComponent";
import SliderComponent from "../components/slider/SliderComponent";
import About from "../components/about/About";
import Footer from "../components/footer/Footer";

function Inicio() {
    return (
        <>
            <NavbarComponent />
            <SliderComponent />
            <About />
            <Footer />
        </>
    );
}

export default Inicio;
