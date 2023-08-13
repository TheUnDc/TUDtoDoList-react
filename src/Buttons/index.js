import React from "react";
import "./style.css";

const Buttons = ({ tasks, hideDone }) => (
    <div className="buttons__layout">
        {tasks.length > 0 && (
            <React.Fragment>
                <button className={`task__headerButtons`}>
                    {hideDone ? "Pokaż" : "Ukryj"} ukończone
                </button>
                <button className={`task__headerButtons `}
                    disabled={tasks.every(({ done }) => done)}>
                    Ukończ wszystkie
                </button>
            </React.Fragment>
        )}
    </div>
);
export default Buttons;