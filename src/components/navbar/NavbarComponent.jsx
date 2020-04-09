import React from "react";
import "./NavbarComponent.css";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "gatsby";

function NavbarComponent() {
    const navbarLogo = useStaticQuery(graphql`
        {
            logo: allFile(filter: { relativeDirectory: { eq: "logos" } }) {
                edges {
                    node {
                        id
                        childImageSharp {
                            fixed(height: 100) {
                                ...GatsbyImageSharpFixed
                            }
                            fluid(maxWidth: 1300, quality: 80) {
                                ...GatsbyImageSharpFluid
                            }
                        }
                    }
                }
            }
        }
    `);
    return (
        <Navbar
            collapseOnSelect
            expand="lg"
            variant="light"
            className="sticky-top"
            id="navbar"
        >
            <Navbar.Brand href="#Inicio" className="p-0">
                <Img
                    fixed={navbarLogo.logo.edges[0].node.childImageSharp.fixed}
                />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav" className="pr-5">
                <Nav className="ml-auto">
                    <Link to="/Inicio/" activeClassName="active">
                        Inicio
                    </Link>
                    <Link to="/Blog/" activeClassName="active">
                        Blog
                    </Link>
                    <Link to="/Obras/" activeClassName="active">
                        Obras
                    </Link>
                    <Link to="/Contacto/" activeClassName="active">
                        Contacto
                    </Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default NavbarComponent;
