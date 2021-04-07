import React from 'react';
import {Link} from 'gatsby';
import styled from '@emotion/styled';

const Navegacion = styled.nav`
    display: flex;
    justify-content: center;
    padding-bottom: 3rem;

    @media (min-width: 769px) {
        padding-bottom: 0;
    }
`;

const NavLink = styled(Link)`
    color: #fff;
    font-size: 1.6rem;
    font-weight: bold;
    line-height: 1;
    font-family: 'PT Sans', sans-serif;
    text-decoration: none;
    padding: 1rem;
    margin-right: 1rem;

    &::last-of-type {
        margin-right: 0;
    }
    
    &.pagina-actual {
        border-bottom: 2px solid #fff;
    }
`;

const Nav = () => {
    return (
        <Navegacion>
            <NavLink 
                to={'/'}
                activeClassName="pagina-actual"//Detecta si está es la página actual y si lo es, agrega el className
            >Inicio</NavLink>
            <NavLink 
                to={'/nosotros'}
                activeClassName="pagina-actual"
            >Nosotros</NavLink>
        </Navegacion>
      );
}
 
export default Nav;