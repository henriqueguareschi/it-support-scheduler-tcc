import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    
    html, body, #root {
        height: 100%;
        background-color: #222831;
        color: #EEEEEE;
    }
    
    *, button, input {
        border: 0;
        outline: 0;
        font-family: 'Montserrat', sans-serif;
    }

    button {
        cursor: pointer;
    }

    .form-control {
        background-color: #EEEEEE;
    }

    .form-control:focus {
        background-color: #EEEEEE;
    }

    .btn-primary {
        background-color: #088080;
        border-color: #088080;
        transition: all 0.2s ease-in-out;
    }

    .btn-primary:hover {
        background-color: #EEEEEE;
        border-color: #EEEEEE;
        color: #010606;
    }

    .btn-primary:focus {
        background-color: #088080;
        border-color: #088080;
    }
    
    .table-dark {
        --bs-table-bg: #222831;
        border-radius: 5px;
    }

    .table-bordered>:not(caption)>* {
    border-width: 2px 0;
    }

    ol, ul {
    padding-left: 0rem;
}
`;