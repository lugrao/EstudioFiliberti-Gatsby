import React from "react";
import NavbarComponent from "../components/navbar/NavbarComponent";
import InfoContacto from "../components/infocontacto/InfoContacto";
import Footer from "../components/footer/Footer";
import Titulo from "../components/titulo/Titulo";

function Contacto() {
    return (
        <>
            <NavbarComponent />
            <Titulo nombre="contacto" />
            <InfoContacto />
            <Footer />
        </>
    );
}

export default Contacto;
