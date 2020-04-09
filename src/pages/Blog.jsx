import React from "react";
import NavbarComponent from "../components/navbar/NavbarComponent";
import Footer from "../components/footer/Footer";
import imagen1 from "../img/obras/obra1/1A.jpg";
import Titulo from "../components/titulo/Titulo";
import TarjetaObra from "../components/tarjeta/TarjetaObra";

function Blog() {
    return (
        <>
            <NavbarComponent />
            <Titulo nombre="obras" />
            <div className="d-flex container">
                <TarjetaObra titulo="Casa Chacras" imagen={imagen1} />
                <TarjetaObra titulo="Casa Chacras" imagen={imagen1} />
                <TarjetaObra titulo="Casa Chacras" imagen={imagen1} />
            </div>
            <div className="d-flex container">
                <TarjetaObra titulo="Casa Chacras" imagen={imagen1} />
                <TarjetaObra titulo="Casa Chacras" imagen={imagen1} />
                <TarjetaObra titulo="Casa Chacras" imagen={imagen1} />
            </div>
            <Footer />
        </>
    );
}

export default Blog;
