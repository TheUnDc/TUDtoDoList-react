import Container from "./Container";
import Header from "./Header";
import Form from "./Form";
import Tasks from "./Tasks";
import Buttons from "./Buttons";
import Section from "./Section";

const tasks = [
  { id: 1, content: "suoer smart", done: false },
  { id: 2, content: "note surtttt", done: true }
];

const hideDone = false;

function App() {
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
        headerAddons={<Buttons tasks={tasks} hideDone={hideDone} />}
      />
    </Container>
  )
};

export default App;