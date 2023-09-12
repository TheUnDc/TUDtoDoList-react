import Container from "./Container";
import Header from "./Header";
import Form from "./Form";
import Tasks from "./Tasks";
import Buttons from "./Buttons";
import Section from "./Section";
import { useTasks, useHide } from "./useCustomState";

function App() {

  const [
    tasks,
    removeTask,
    toggleTaskDone,
    setAllDone,
    addNewTask,
  ] = useTasks();

  const [hideDone, toggleHideDone] = useHide();

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