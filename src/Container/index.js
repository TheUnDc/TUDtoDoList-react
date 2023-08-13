import "./style.css";

const Container = (props) => (
    <main className="container__main">
        {props.children}
    </main>
);

export default Container;
