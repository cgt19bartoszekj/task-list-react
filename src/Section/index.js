import { Wrapper, Header, Title, Body } from "./styled";

export const Section = ({ title, body, extraHeaderContent }) => (
  <Wrapper>
    <Header>
      <Title>
        {title}
      </Title>
      {extraHeaderContent}
    </Header>
    <Body>
      {body}
    </Body>
  </Wrapper>
);
