import React from 'react';
import Header from './header';
import Footer from './footer';
import Helmet from 'react-helmet';
import useSeo from '../hooks/use-seo';
import {Global, css} from '@emotion/core';

const Layout = (props) => {

    const seo = useSeo();

    const {siteName, fallbackSeo: {description, title}} = seo;

    return ( 
        <>
            <Global
                styles={css`
                    html {
                        font-size: 62.5%;
                        box-sizing: border-box;
                    }
                    *, *::before, *::after {
                        box-sizing: inherit;
                    } 
                    body {
                        font-size: 18px;
                        font-size: 1.8rem;
                        line-height: 1.5;
                        font-family: 'PT Sans', sans-serif;
                    }
                    h1, h2, h3 {
                        margin: 0;
                        line-height: 1.5;
                    }
                    h1, h2 {
                        font-family: 'Roboto', serif;
                    }
                    h3 {
                        font-family: 'PT Sans', sans-serif;
                    }
                    ul {
                        list-style: none;
                        margin: 0;
                        padding: 0;
                    }
                `}
            />
            <Helmet>
                {/*Helmet es una herramienta instalable que nos permite editar o agregar contenido al head del html*/}
                <title>{title}</title>
                <meta name="description" content={description} />
                <link href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css" rel="stylesheet"/>
                <link href="https://fonts.googleapis.com/css2?family=PT+Sans:wght@400;700&family=Roboto:wght@400;700&display=swap" rel="stylesheet"/>
            </Helmet>

            <Header />
            {props.children}

            <Footer 
                title={title}
            />
        </>
    );
}
 
export default Layout;