
import { Container } from "../../../common/Container/styled";
import { Header } from "../../../common/Header";
import { Section } from "../../../common/Section";
import { Form } from "./Form";
import { Buttons } from "./Buttons";
import { TaskList } from "./TaskList";
import { Button } from "../../../common/Button/styled";
import { useDispatch, useSelector } from "react-redux";
import { fetchExampleTasks, selectIsLoading } from "../tasksSlice";
import { Search } from "./Search";

function TaskPage() {
  const dispatch = useDispatch();
  const loading = useSelector(selectIsLoading);

  return (
    <Container>
      <Header title="Lista zadań" />
      <Section
        title="Dodaj nowe zadanie"
        body={<Form />}
        extraHeaderContent={
          <Button onClick={() => dispatch(fetchExampleTasks())}>
            {loading ? "Ładowanie..." : "Pobierz przykładowe zadania"}
          </Button>
        }
      />
      <Section
        title="Wyszukiwarka"
        body={<Search />}
      />
      <Section
        title="Lista zadań"
        body={<TaskList />}
        extraHeaderContent={<Buttons />}
      />
    </Container>
  );
}

export default TaskPage;
