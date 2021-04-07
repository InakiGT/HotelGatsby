import React from 'react';
import {graphql, useStaticQuery} from 'gatsby';
import BackgroundImage from 'gatsby-background-image';
import styled from '@emotion/styled';

const ImageBg = styled(BackgroundImage)`
    height: 700px;
`;

const TextoImagen = styled.div`
    background-image: linear-gradient(to top, rgba(34,49,63,.8), rgba(34,49,63,.8));
    color: #fff;
    height: 100%;
    display: flex;
    flex-direction: column;
    flex: 1;
    align-items: center;
    justify-content: center;

    h1 {
        size: 4rem;
        margin: 0;

        @media (min-width: 768px) {
            font-size: 5.8rem;
        }

    }

    p {
        font-size: 2rem;
        @media (min-width: 768px) {
            font-size: 2.6rem;
        }
    }
`;

const ImagenHotel = () => {

    const {image} = useStaticQuery(graphql`
        query {
            image: file(relativePath: {eq:"8.jpg"}) {
                sharp:childImageSharp {
                    fluid{
                        ...GatsbyImageSharpFluid_withWebp
                    }
                }
            }
        }
    `);

    return ( 
        <ImageBg tag="section" fluid={image.sharp.fluid} fadeIn="soft">
            <TextoImagen>
                <h1>Bienvenido a Hotel Gatsby</h1>

                <p>El mejor hotel para tus vacaciones</p>
            </TextoImagen>
        </ImageBg>
     );
}
 
export default ImagenHotel;