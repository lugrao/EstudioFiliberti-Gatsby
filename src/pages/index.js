import React from "react";
import { Helmet } from "react-helmet-async";
import Inicio from "./Inicio";
import "bootstrap/dist/css/bootstrap.min.css";

export default () => (
    <>
        <Helmet title="Estudio Filiberti" defer={false}>
            <html lang="es-AR" />
            <meta charSet="utf-8" />
            <meta
                name="description"
                content="La obra terminada es el fin de un extenso proceso de desarrollo, planificación y creatividad. La importancia de concebir un proyecto acorde a las necesidades de cada cliente, que esté guiado por la funcionalidad y el diseño son la base fundamental del estudio. Mi aspiración es que el camino de la obra sea un placentero recorrido por las instancias necesarias para llegar al final y poder apreciar una obra de calidad y excelencia."
            />
        </Helmet>
        <Inicio />
    </>
);
