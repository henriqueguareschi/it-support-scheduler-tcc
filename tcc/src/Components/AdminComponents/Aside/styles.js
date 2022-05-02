import styled from "styled-components";

export const Container = styled.div`
    grid-area: AS;
    background-color: #393E46;
    border-right: 1px solid rgba(255, 255, 255, .12);

    position: relative;

    @media(max-width: 600px) {
        padding-left: 7px;
        position: fixed;
        z-index: 2;
    }
`;

export const Header = styled.header`
    height: 70px;
    display: flex;
    align-items: center;
    text-align: center;
    margin-left: 15px;
`;

export const MenuContainer = styled.nav`
    display: flex;
    flex-direction: column;
    margin-top: 50px;
    align-items: center;
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

`;
