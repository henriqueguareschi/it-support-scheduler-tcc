import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 40rem;
    overflow-y: auto;
`;

export const CardArea = styled.div`
    display: flex;
    flex-wrap: wrap;
`;

export const ButtonsDiv = styled.div`
    display: flex;
    justify-content: space-between;

    > svg {
        margin-top: 6px;
        cursor: pointer;
    }

    > svg:hover {
        transition: ease .5s;
        color: #0FCFCF;
    }
`;