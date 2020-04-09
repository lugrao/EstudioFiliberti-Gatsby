import React from "react";
import "./Footer.css";

function Footer() {
    return (
        <footer>
            <div className="d-flex container">
                <div className="align-items-center mr-auto">
                    <p>
                        © 2015 LUCAS FILIBERTI - Arquitecto <br></br> Todos los
                        derechos reservados.
                    </p>
                </div>
                <div className="align-items-center ml-auto">
                    <p>
                        Desarrollado por{" "}
                        <span style={{ fontWeight: 700 }}>IPACAA</span>
                    </p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
