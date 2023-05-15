
import { useParams } from "react-router-dom";
import { Container } from "../../../common/Container/styled";
import { Header } from "../../../common/Header";
import { Section } from "../../../common/Section";
import { useSelector } from "react-redux";
import { getTasksById } from "../tasksSlice";

function TaskPage() {
  const { id } = useParams();
  const task = useSelector(state => getTasksById(state, id));

  return (
    <Container>
      <Header title="Szczegóły zadania" />
      <Section
        title={task ? task.name : "Nie znaleziono zadania"}
        body={task
          ? <><strong>Ukończono: </strong>{task.done ? "Tak" : "Nie"}</>
          : "Przykro nam, takie zadanie nie istnieje."
        }
      />
    </Container>
  );
}

export default TaskPage;
