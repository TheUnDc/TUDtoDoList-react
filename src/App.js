import Container from "./Container";
import Header from "./Header";
import Form from "./Form";
import Tasks from "./Tasks";
import Buttons from "./Buttons";
import Section from "./Section";
import { useState } from "react";

const tasks = [
  { id: 1, content: "suoer smart", done: false },
  { id: 2, content: "note surtttt", done: true }
];

function App() {

  const [hideDone, setHideDone] = useState(false);

  const toggleHideDone = () => {
    setHideDone(hideDone => !hideDone);
  };
  return (
    <Container>
      <Header
        title={`Lista zadań`}
      />
      <Section
        title={`Dodaj nowe zadanie`}
        specialAddons={<Form />}
      />
      <Section
        title={`Lista zadań`}
        specialAddons={<Tasks tasks={tasks} hideDone={hideDone} />}
        headerAddons={<Buttons tasks={tasks} hideDone={hideDone} toggleHideDone={toggleHideDone} />}
      />
    </Container>
  )
};

export default App;