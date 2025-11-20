import { NavLink as Link } from "react-router-dom";
import styled from "styled-components";

export const Nav = styled.nav`
    width: 100%;
    background-color: #2a2a2a;
    border-bottom: 2px solid #b65d14;
    padding: 0.75rem 0;
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1000;
`;

export const NavMenu = styled.div`
    display: flex;
    gap: 2rem;
`;

export const NavLink = styled(Link)`
    color: #e0e0e0;
    font-family: "Cinzel", serif;
    text-decoration: none;
    font-size: 1.1rem;
    padding: 0.5rem 1rem;
    border: 2px solid transparent;
    border-radius: 6px;
    transition: 0.25s ease;

    &:hover {
        background-color: #3a3a3a;
        border-color: #b65d14;
    }
`;
