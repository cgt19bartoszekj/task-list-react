import { Container } from "../../common/Container/styled";
import { Header } from "../../common/Header";
import { Section } from "../../common/Section";

const Author = () => (
  <Container>
    <Header title="O autorze" />
    <Section
      title="Jakub Bartoszek"
      body={
        <p>O mnie</p>
      }
    />
  </Container>
);

export default Author;
