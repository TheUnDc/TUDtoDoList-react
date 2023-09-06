import { useState, useRef } from "react";
import "./style.css";

const Form = ({addNewTask}) => {

    const [newTaskContent, setNewTaskContent] = useState("");
    const inputRef = useRef();

    const focusInput = () => {inputRef.current.focus()} 

    const onFormSubmit = (event) => {
        event.preventDefault();
        if (newTaskContent === "") {
            return;
        }

        addNewTask(newTaskContent.trim());
        setNewTaskContent("");
        focusInput();
    }

    return (
        <form className="form" onSubmit={onFormSubmit}>
            <input
                value={newTaskContent}
                ref={inputRef}
                autoFocus
                placeholder="Co jest do zrobienia?"
                className="form__input"
                onChange={(event) => setNewTaskContent(event.target.value)}
            />
            <button className="form__button">
                Dodaj zadanie
            </button>
        </form>
    );
};

export default Form;