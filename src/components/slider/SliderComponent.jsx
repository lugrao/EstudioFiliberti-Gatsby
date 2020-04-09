import React from "react";
import "./SliderComponent.css";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";
import { Carousel } from "react-bootstrap";

function SliderComponent() {
    const imagenesSlider = useStaticQuery(graphql`
        {
            slider: allFile(filter: { relativeDirectory: { eq: "slider" } }) {
                edges {
                    node {
                        id
                        childImageSharp {
                            fixed {
                                ...GatsbyImageSharpFixed
                            }
                            fluid(maxWidth: 1300, quality: 80 ) {
                                ...GatsbyImageSharpFluid
                            }
                        }
                    }
                }
            }
        }
    `);

    return (
        <Carousel controls={false} indicators={false}>{imagenesSlider.slider.edges.map(slide =>
            <Carousel.Item key={slide.node.id}>
                <Img fluid={slide.node.childImageSharp.fluid} />
            </Carousel.Item>
        )}</Carousel>
    );
}

export default SliderComponent;
