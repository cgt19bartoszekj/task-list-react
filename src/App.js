import Form from "./Form"
import Tasks from "./Tasks"
import Buttons from "./Buttons"
import Section from "./Section"
import Header from "./Header"
import Container from "./Container"

const tasks = [
  { id: 1, name: "Zrobić zakupy", done: true },
  { id: 2, name: "Wyjść z psem na spacer", done: false }
]

let hideDone = false;

function App() {
  return (
    <Container>
      <Header title="Lista zadań" />
      <Section
        title="Dodaj nowe zadanie"
        body={<Form />}
      />
      <Section
        title="Lista zadań"
        body={
          <Tasks tasks={tasks} hideDone={hideDone} />}
        extraHeaderContent={
          <Buttons tasks={tasks} hideDone={hideDone} />}
      />
    </Container>
  )
}

export default App;
