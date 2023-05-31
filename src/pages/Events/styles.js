import { NavLink } from "react-router-dom/dist";
import styled from "styled-components";

export const ImageContainer = styled.img`
    width: ${(props) => props.sizes};
    height: 70rem;
`

export const Card = styled.div`
    margin: auto;
    margin-top: 10rem;
    text-align: center;
`

export const NavContainer = styled(NavLink)`
    background-color: ${(props) => props.theme.btnFundo};
    color: ${(props) => props.theme.btnCor};
    padding: 0.5rem;
    cursor: pointer;
    height: 3.5rem;
    text-decoration: none;

    &:active {
        background-color: rgb(39, 23, 145);
    }
`