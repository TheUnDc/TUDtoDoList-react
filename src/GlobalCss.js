import { createGlobalStyle } from "styled-components";
import { theme } from "./theme";

export const GlobalStyle = createGlobalStyle`
    html {
        box-sizing: border-box;
    }

    *, ::after, ::before {
        box-sizing: inherit; 
    }

    body {
        max-width: 1000px;
        margin: auto;
        background-color: #ededed;
        font-family: 'Montserrat', sans-serif;
    }

    @media ${theme.breakpoint.mobileMaxi} {
        /*(max-width: 750px) */
        body {
            margin: 5px 35px;
        }
    }

    @media ${theme.breakpoint.mobileMiddle} {
        /*(max-width: 1100px) and (min-width: 751px) */
        body {
            margin: auto 100px;
        }
    }
`;