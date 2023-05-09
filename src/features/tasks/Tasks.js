
import { Container } from "../../common/Container/styled";
import { Header } from "../../common/Header";
import { Section } from "../../common/Section";
import { Form } from "./Form";
import { Buttons } from "./Buttons";
import { TaskList } from "./TaskList";
import { Button } from "../../common/Button/styled";

function Tasks() {

  return (
    <Container>
      <Header title="Lista zadań" />
      <Section
        title="Dodaj nowe zadanie"
        body={<Form />}
        extraHeaderContent={
          <Button>
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
