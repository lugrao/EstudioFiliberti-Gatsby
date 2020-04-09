import React from "react";
import "./Titulo.css";

function Titulo({ nombre }) {
    return (
        <div id="titulo">
            <h1>{nombre}</h1>
        </div>
    );
}

export default Titulo;
