import React from "react";
import "./InfoContacto.css";
import logoContacto from "../../img/contacto/logo-contacto.png";

function InfoContacto() {
    return (
        <div id="info-contacto" className="container">
            <h2 className="pt-5 pb-2">TELÉFONO</h2>
            <p>(011) 15 64404714</p>

            <h2 className="pt-3 pb-2"> E-MAIL</h2>
            <p>lucas@estudiofiliberti.com.ar</p>
            <img
                className="pt-2 pb-1"
                src={logoContacto}
                alt="Logo estudio Filiberti"
            />
            <p className="direccion pb-2">Pilar, Buenos Aires, Argentina</p>
        </div>
    );
}

export default InfoContacto;
