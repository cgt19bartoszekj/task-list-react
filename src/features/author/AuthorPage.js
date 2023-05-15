import { Container } from "../../common/Container/styled";
import { Header } from "../../common/Header";
import { Section } from "../../common/Section";

const AuthorPage = () => (
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

export default AuthorPage;
