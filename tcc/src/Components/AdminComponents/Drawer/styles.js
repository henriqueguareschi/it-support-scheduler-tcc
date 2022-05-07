import styled from "styled-components";

export const Container = styled.div`
    grid-area: AS;

    .MuiPaper-root {
        background-color: #393E46;
    }

    .MuiButtonBase-root {
        color: #EEEEEE;
    }

    .MuiDivider-root {
        background-color: #EEEEEE;
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

`;

export const TitleHeader = styled.div`
    margin-left: 25px;
    margin-top: 15px;
    width: 80%;

    > h4 {
        font-weight: bold;
        font-size: 22px;
        color: #EEEEEE;
    }
`;