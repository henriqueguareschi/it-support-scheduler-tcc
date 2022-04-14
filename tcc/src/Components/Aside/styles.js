import styled from "styled-components";

export const Container = styled.div`
    grid-area: AS;
    background-color: #393E46;
    box-shadow: 0px 2px 3px 0px #393E46;
`;

export const MenuContainer = styled.nav`
    display: flex;
    flex-direction: column;
    margin-top:  150px;
    margin-left: 30px;

    > a {
        text-decoration: none;
        color: #EEEEEE;
        cursor: pointer;
    }

    > a:hover {
        color: #088080;
        transition: ease .5s;
    }

`;