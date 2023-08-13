import "./style.css"

const Tasks = ({tasks, hideDone}) => (
    <ul className="tasks">
        {tasks.map(task => (
            <li key={task.id} className ={`task__rendered ${task.done && hideDone ? 'task__rendered--hide' : ''}`}>
                <button className={`task__checkButton`}>
                        {task.done ? "✔" : ""}
                </button>
                <span className={`task__content ${task.done ? "task__done" : ""}`}>
                        {task.content}
                </span>
                <button className={`task__checkButton task__checkButton--deleteMark`}>
                    🗑
                </button>
            </li>
        ))}
    </ul>
);

export default Tasks;