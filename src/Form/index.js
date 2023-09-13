import { useState, useRef } from "react";
import { FormWrapper, Input, Button } from "./styled";

const Form = ({ addNewTask }) => {

    const [newTaskContent, setNewTaskContent] = useState("");
    const inputRef = useRef();

    const focusInput = () => { inputRef.current.focus() }

    const onFormSubmit = (event) => {
        event.preventDefault();
        if (newTaskContent.trim() === "") {
            return;
        }

        addNewTask(newTaskContent.trim());
        setNewTaskContent("");
        focusInput();
    }

    return (
        <FormWrapper onSubmit={onFormSubmit}>
            <Input
                value={newTaskContent}
                ref={inputRef}
                autoFocus
                placeholder="Co jest do zrobienia?"
                onChange={(event) => setNewTaskContent(event.target.value)}
            />
            <Button>
                Dodaj zadanie
            </Button>
        </FormWrapper>
    );
};

export default Form;