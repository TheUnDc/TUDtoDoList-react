import styled from "styled-components";
import { theme } from "../theme";

export const SectionWrapper = styled.section`
        border-bottom: 10px solid #ededed;
        background-color: white;
        margin: 10px 0;
`;

export const HeaderMain = styled.header`
        display: flex;
        justify-content:space-between;
        border-bottom: 2px solid #ededed;
        font-size: 20px;
        margin: 0;
        padding: 15px;

    @media ${theme.breakpoint.mobileMaxi} {
        display: flex;
        flex-direction: column;
        text-align: center;
    } 
    @media ${theme.breakpoint.mobileMiddle} {
        display: flex;
        flex-direction: row;
        text-align: end;
    }

`;

export const HeaderInner = styled.header`
        text-align: left;
        font-weight: 900;
`;

export const Addon = styled.div`
        margin: 0;
        padding: 12px;
`;