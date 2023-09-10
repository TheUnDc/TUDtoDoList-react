import Container from "./Container";
import Header from "./Header";
import Form from "./Form";
import Tasks from "./Tasks";
import Buttons from "./Buttons";
import Section from "./Section";
import { useState, useEffect } from "react";

function App() {

  const tasksStorageCheck = () => {
    return (localStorage.getItem("tasks")
      ? JSON.parse(localStorage.getItem("tasks"))
      : []
    )
  };

  const hideStorageCheck = () => {
    return (localStorage.getItem("hide")
      ? JSON.parse(localStorage.getItem("hide"))
      : false
    )
  };

  const [hideDone, setHideDone] = useState(hideStorageCheck);
  const [tasks, setTasks] = useState(tasksStorageCheck);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks))
    localStorage.setItem("hide", JSON.stringify(hideDone))
  }, [tasks, hideDone]);

  const toggleHideDone = () => {
    setHideDone(hideDone => !hideDone);
  };

  const removeTask = (id) => {
    setTasks(tasks => tasks.filter(task => task.id !== id));
  };

  const toggleTaskDone = (id) => {
    setTasks(tasks => tasks.map(task => task.id === id ? { ...task, done: !task.done } : task));
  };

  const setAllDone = () => {
    setTasks(tasks => tasks.map(task => ({ ...task, done: true })));
  };

  const addNewTask = (newTaskContent) => {
    setTasks(tasks => [...tasks, {
      content: newTaskContent,
      done: false,
      id: tasks.length === 0 ? 1 : tasks[tasks.length - 1].id + 1,
    },
    ])
  };

  return (
    <Container>
      <Header
        title={`Lista zadań`}
      />
      <Section
        title={`Dodaj nowe zadanie`}
        specialAddons={<Form addNewTask={addNewTask} />}
      />
      <Section
        title={`Lista zadań`}
        specialAddons={
          <Tasks
            tasks={tasks}
            hideDone={hideDone}
            removeTask={removeTask}
            toggleTaskDone={toggleTaskDone}
          />
        }
        headerAddons={
          <Buttons
            tasks={tasks}
            hideDone={hideDone}
            toggleHideDone={toggleHideDone}
            setAllDone={setAllDone}
          />
        }
      />
    </Container>
  )
};

export default App;