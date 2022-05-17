import styled from "styled-components";
import { Modal } from "react-bootstrap";

export const CustomModal = styled(Modal)`
    .modal-content {
        background: #4B5D67;
        border-radius: 10px;
        border: 0;
        color: #EEEEEE;
        height: 500px;
    }
    
    .modal-title {
        font-size: 18px;
        font-weight: bold;
    }    

    .modal-header{
        border-color: rgba(0, 0, 0, 0.125);
    }

    .modal-footer{
        border-color: rgba(0, 0, 0, 0.125);
        display: flex;
        justify-content: space-between;
    }

    .modal-lg {
        max-width: 70%;
    }

    .form-control {
        resize: none;
    }

`;

export const Content = styled.div`
    display: grid;
    grid-auto-columns: minmax(auto, 1fr);
    grid-template-areas: 'col1 col2';
    
`;

export const Col1 = styled.div`
    margin-top: 10px;
    grid-area: 'col1';
    display: flex;
    flex-direction: column;
`;

export const Col2 = styled.div`
    grid-area: 'col2';
    display: flex;
    flex-direction: column;
`;

export const Line = styled.span`
    padding: 5px;
`;

export const LeftButtons = styled.div`
    align-items: left;
    justify-content: left;

    > svg {
        font-size: 40px;
        cursor: pointer;
        margin-right: 10px;
    }

    > svg:hover {
        color: #088080;
        transition: all 0.2s ease-in-out;
    }
`;

export const RightButtons = styled.div`
    align-items: right;
    justify-content: right;

    > button {
        margin-left: 20px;
    }
`;
