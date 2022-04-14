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
        background-color: #045757;
        border-color: #045757;
        transition: ease-in-out .5s;
    }

    .btn-primary:hover {
        background-color: #088080;
        border-color: #088080;
    }

    .btn-primary:focus {
        background-color: #088080;
        border-color: #088080;
    }
    
`;