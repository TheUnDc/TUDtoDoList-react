import "./style.css";

const Form = () => (
    <form className="js-form form">
        <input
            autoFocus
            placeholder="Co jest do zrobienia?"
            className="js-addTask form__input"
        />
        <button className="js-button form__button">Dodaj zadanie</button>
    </form>
)

export default Form;