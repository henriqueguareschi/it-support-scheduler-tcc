import styled from "styled-components";

export const Container = styled.div`
    grid-area: CT;

    height: calc(100vh - 64);

    ::-webkit-scrollbar {
        width: 10px;
    }

    ::-webkit-scrollbar-thumb {
        border-radius: 10px;
        background-color: #EEEEEE;
    }

    ::-webkit-scrollbar-track {
        background-color: #393E46;
    }
`;
