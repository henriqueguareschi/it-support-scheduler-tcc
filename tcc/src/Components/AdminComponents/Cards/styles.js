import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 100%;
`;

export const CardArea = styled.div`
    display: flex;
    flex-wrap: wrap;
`;

export const ButtonsDiv = styled.div`
    display: flex;
    justify-content: space-between;
`;

export const CallType = styled.span`
    width: fit-content;
    background-color: #6e8591;
    padding: 3px;
    border-radius: 3px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
`;

export const CallDesc = styled.div`
    margin-top: 5px;
    height: 30%;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
`;

export const DateDiv = styled.div`
    display: flex;

    > svg {
        font-size: 18px;
        margin-right: 5px;
        margin-top: 1px;
    }
`;