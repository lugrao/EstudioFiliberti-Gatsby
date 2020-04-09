import React from "react";
import Card from "react-bootstrap/Card";
import "./TarjetaObra.css";

function TarjetaObra(props) {
    return (
        <Card
            id="tarjeta-obra"
            className="p-3 m-auto"
            style={{ flex: "0 0 30%" }}
        >
            <Card.Img variant="top" src={props.imagen} />
            <Card.Body>
                <Card.Title>{props.titulo.toUpperCase()}</Card.Title>
            </Card.Body>
        </Card>
    );
}

export default TarjetaObra;
