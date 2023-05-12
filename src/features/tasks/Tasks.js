
import { Container } from "../../common/Container/styled";
import { Header } from "../../common/Header";
import { Section } from "../../common/Section";
import { Form } from "./Form";
import { Buttons } from "./Buttons";
import { TaskList } from "./TaskList";
import { Button } from "../../common/Button/styled";
import { useDispatch } from "react-redux";
import { fetchExampleTasks } from "./tasksSlice";

function Tasks() {
  const dispatch = useDispatch();

  return (
    <Container>
      <Header title="Lista zadań" />
      <Section
        title="Dodaj nowe zadanie"
        body={<Form />}
        extraHeaderContent={
          <Button onClick={() => dispatch(fetchExampleTasks())}>
            Pobierz przykładowe zadania
          </Button>
        }
      />
      <Section
        title="Lista zadań"
        body={<TaskList />}
        extraHeaderContent={<Buttons />}
      />
    </Container>
  );
}

export default Tasks;
