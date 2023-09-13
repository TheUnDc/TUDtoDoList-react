import {TasksWrapper, Button, Rendered, Content} from "./styled"

const Tasks = ({tasks, hideDone, removeTask, toggleTaskDone}) => (
    <TasksWrapper>
        {tasks.map(task => (
            <Rendered 
            key={task.id} 
            $hide={task.done && hideDone}
            >
                <Button
                    onClick={() => toggleTaskDone(task.id)}
                    >
                        {task.done ? "✔" : ""}
                </Button>

                <Content 
                $done={task.done ? 1 : 0}
                className={`task__content ${task.done ? "task__done" : ""}`}>
                    {task.content}
                </Content>

                <Button 
                    $deletemark
                    onClick={() => removeTask(task.id)} 
                >
                        🗑
                </Button>
            </Rendered>
        ))}
    </TasksWrapper>
);

export default Tasks;