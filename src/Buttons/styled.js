import styled from "styled-components";

export const ButtonsWrapper = styled.div`

    @media (max-width: 750px) {
        display: flex;
        padding: 30px 0;
        flex-direction: column;
    }   
`;

export const ButtonsStyled = styled.button`
        border: none;
        background-color: #ffffff;
        color: #3c7681;
        cursor: pointer;

    &:hover {
        color: #6c989b;
    }

    &:active {
        color: #6c989b87;
        transform: scale(0.98);
    }

    &:disabled {
        color: #a9a8a8;
        transform: scale(1);
        cursor: default;
    }
    @media (max-width: 750px) {
        padding: 5px 0;
    }
`;