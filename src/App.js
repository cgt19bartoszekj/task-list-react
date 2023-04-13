import { useTasks } from "./useTasks";
import { Container } from "./Container/styled";
import { Header } from "./Header";
import { Section } from "./Section";
import { Form } from "./Form";
import { Buttons } from "./Buttons";
import { Tasks } from "./Tasks";

function App() {

  const {
    tasks,
    hideDone,
    removeTask,
    toggleTaskDone,
    toggleAllDone,
    addNewTask,
    toggleHideDone
  } = useTasks();

  return (
    <Container>
      <Header title="Lista zadań" />
      <Section
        title="Dodaj nowe zadanie"
        body={<Form addNewTask={addNewTask} />}
      />
      <Section
        title="Lista zadań"
        body={
          <Tasks
            tasks={tasks}
            hideDone={hideDone}
            removeTask={removeTask}
            toggleTaskDone={toggleTaskDone}
          />
        }
        extraHeaderContent={
          <Buttons
            tasks={tasks}
            hideDone={hideDone}
            toggleHideDone={toggleHideDone}
            toggleAllDone={toggleAllDone}
          />
        }
      />
    </Container>
  );
}

export default App;
