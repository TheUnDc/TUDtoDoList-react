import {ButtonsWrapper, ButtonsStyled} from "./styled";

const Buttons = ({ tasks, hideDone, toggleHideDone, setAllDone}) => (
    <ButtonsWrapper>
        {tasks.length > 0 && (
            <>
                <ButtonsStyled onClick={toggleHideDone}>
                    {hideDone ? "Pokaż " : "Ukryj "} 
                    ukończone
                </ButtonsStyled>
                <ButtonsStyled onClick={setAllDone}
                    disabled={tasks.every(({ done }) => done)}>
                    Ukończ wszystkie
                </ButtonsStyled>
            </>
        )}
    </ButtonsWrapper>
);
export default Buttons;