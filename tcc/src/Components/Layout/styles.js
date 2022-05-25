import styled from "styled-components";

export const Grid = styled.div`
    display: grid;
    grid-template-columns: 240px auto;
    grid-template-rows: 65px auto;
    grid-template-areas: 
    'AS MH'
    'AS CT';
    height: 100vh;

    @media(max-width: 768px) {
        grid-template-columns: 100%;
        grid-template-rows: 65px auto;
        grid-template-areas: 
        'MH'
        'CT';
    }

`;