import styled from "styled-components";
import { theme } from "../theme";

export const FormWrapper = styled.form`
        display:flex;
        justify-content: space-between;
    
    @media ${theme.breakpoint.mobileMaxi} {
        display:flex;
        flex-direction: column;
        justify-content: space-between;
    }
    @media ${theme.breakpoint.mobileMiddle} {
        display: flex;
        padding: 10px;
        flex-direction: column;
    }
`;

export const Input = styled.input`
        padding: 10px 5px;
        margin: 4px;
        min-width: 80%;
        border: 2px solid #ededed; 
`;

export const Button = styled.button`
        padding: 10px;
        margin: 4px 0px;
        border: 2px solid #007382;
        background-color: #007382;
        color: white;
        cursor:pointer;
        white-space: nowrap;
        transition: 0.5s;

    &:hover {
        background-color: #1a4d54;
        transform: scale(1.1);
    }
    &:active {
        transform: scale(0.94);
        transition: 0s;
        box-shadow: 3px 2px 50px -16px #1a4d54;
        background-color: #1a4d54;
    }
`;