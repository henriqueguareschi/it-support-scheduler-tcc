import styled, { css } from "styled-components";

export const Container = styled.div`
    grid-area: AS;
    background-color: #393E46;
    border-right: 1px solid rgba(255, 255, 255, .12);

    position: relative;

    @media(max-width: 600px) {
        padding-left: 7px;
        position: fixed;
        z-index: 2;
        height: ${props => props.menuIsOpen ? '100vh' : '70px'};
        overflow: hidden;

        ${props => !props.menuIsOpen && css`
            border: none;
            border-bottom: 1px solid rgba(255, 255, 255, .12);
            transition:  .5s;
        `};
    }
`;

export const Header = styled.header`
    padding-left: 20px;
    height: 70px;
    display: flex;
    align-items: center;
    text-align: center;
    margin-left: 15px;

    @media(max-width: 600px) {
        padding-left: 0px;

        > h4 {
            display: none;
        }
    }

`;

export const MenuContainer = styled.nav`
    padding-left: 20px;
    display: flex;
    flex-direction: column;
    margin-top: 50px;
    align-items: center;

    @media(max-width: 600px) {
        padding-left: 0px;
    }

`;

export const LinkLine = styled.li`
    width: 100%;
    text-decoration: none;
    list-style-type: none;
    padding-top: 0.75rem;
    padding-bottom: 0.75rem;

    > a {
        text-decoration: none;
        color: #EEEEEE;
        cursor: pointer;
        margin-left: 15px;
        transition: all 0.2s ease-in-out;
    }

    > a:hover {
        transition: ease .5s;
        color: #0FCFCF;
    }

    @media(max-width: 600px) {
        > a {
            text-decoration: none;
            color: #EEEEEE;
            cursor: pointer;
            margin-left: 10px;
            margin-right: 20px;
            transition: all 0.2s ease-in-out;
        }
    }

`;

export const ToggleMenu = styled.button`
    display: flex;
    height: 40px;
    width: 40px;
    color: #fff;
    background-color: transparent;
    font-size: 22px;
    display: none;
    margin-top: 15px;

    @media(max-width: 600px) {
        display: flex;
        justify-content: center;
        align-items: center;
    }

`;
