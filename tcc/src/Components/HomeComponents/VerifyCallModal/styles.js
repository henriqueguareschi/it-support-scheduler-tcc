import styled from "styled-components";
import { Modal } from "react-bootstrap";

export const CustomModal = styled(Modal)`
    .modal-content {
        background: #4B5D67;
        border-radius: 10px;
        border: 0;
        color: #EEEEEE;
        height: 80%;
    }
    
    .modal-header{
        border-color: rgba(0, 0, 0, 0.125);
        font-size: 18px;
        font-weight: 600;
    }

    .modal-footer{
        border-color: rgba(0, 0, 0, 0.125);
        display: flex;
        justify-content: right;
    }

    .modal-lg {
        max-width: 70%;
    }

    .form-control {
        resize: none;
    }

`;