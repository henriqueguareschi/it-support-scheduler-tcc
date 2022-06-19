import styled from "styled-components";
import { Modal } from "react-bootstrap";

export const CustomModal = styled(Modal)`
    .modal-content {
        background: #4B5D67;
        border-radius: 10px;
        border: 0;
        color: #EEEEEE;
        height: 80%;

        @media(max-width: 480px) {
            margin-top: 30px;
        }
    }
    
    .modal-title {
        font-size: 18px;
        font-weight: bold;

        @media(max-width: 480px) {
            font-size: 15px;
        }
    }    

    .modal-header{
        border-color: rgba(0, 0, 0, 0.125);

        @media(max-width: 480px) {
            max-height: 20px;
        }        
    }

    .modal-footer{
        border-color: rgba(0, 0, 0, 0.125);
        display: flex;
        justify-content: space-between;

        @media(max-width: 480px) {
            justify-content: center;
            align-items: center;
        }
    }

    .modal-lg {
        max-width: 50%;

        @media(max-width: 780px) {
            max-width: 90%;
        }

        @media(max-width: 1400px) {
            max-width: 60%;
        }

        @media(max-width: 480px) {
            max-width: 100%;
        }
    }

    .form-control {
        resize: none;
    }

`;

export const Content = styled.div`
    display: grid;
    grid-auto-columns: 1fr 1fr;
    grid-template-areas: 'col1 col2';

    @media(max-width: 600px) {
        grid-template-columns: 1fr;
    }

    @media(max-width: 480px) {
    display: flex;
    flex-direction: column;
  }
`;

export const Col = styled.div`
    grid-area: 'col1';
    display: flex;
    flex-direction: column;
`;

export const Line = styled.span`
    padding-bottom: 2px;
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
        color: #1cd6d6;
        transition: all 0.2s ease-in-out;
    }

    @media(max-width: 480px) {
        align-items: center;
        justify-content: center;
    }
`;

export const RightButtons = styled.div`
    align-items: right;
    justify-content: right;

    > button {
        margin-left: 20px;
    }

    @media(max-width: 480px) {
        

        > button {
            margin-left: 5px;
        }
    }
`;
