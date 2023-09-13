import styled, { css } from "styled-components";

const TasksWrapper = styled.ul`
    padding: 0;
	margin: 0;
`;

const Button = styled.button`
            cursor: pointer;
            height: 30px;
            width: 30px;
            justify-self: center;
            color: white;
            border: none;
            background-color: green;
        
        &:hover {
            background-color: #2d5d2d;
        }

        &:active {
            transform: scale(0.94);
            box-shadow: 3px 2px 50px -16px #2d5d2d;
            background-color: #2d5d2d;
        }
    ${({ deleteMark }) => deleteMark && css`
            background-color: crimson;

        &:hover {
            background-color: #a01934;
        }

        &:active {
            transform: scale(0.94);
	        box-shadow: 3px 2px 50px -16px #a01934;
	        background-color: #a01934;
        }
    `}
`;

const Rendered = styled.li`
    display: grid;
	grid-template-rows: 1fr;
	grid-template-columns: 1fr 10fr 1fr;
	list-style: none;
	word-break: break-word;
	padding: 20px;
	border-bottom: 1px solid #ededed;

    ${({ hide }) => hide && css`
        display: none;
    `}
`;

const Content = styled.span`
        padding: 0px 10px;
        display: flex;
        align-items: center;

    ${({ done }) => done && css`
        text-decoration: line-through; 
    `}
`;

export { TasksWrapper, Button, Rendered, Content}