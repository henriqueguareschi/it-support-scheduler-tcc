import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    
    html, body, #root {
        height: 100%;
        background-color: #222222;
        color: #E4E4E4;
    }
    
    *, button, input {
        border: 0;
        outline: 0;
        font-family: 'Montserrat', sans-serif;
    }

    button {
        cursor: pointer;
    }
`;