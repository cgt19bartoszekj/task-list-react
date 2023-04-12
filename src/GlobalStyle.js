import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
html {
  box-sizing: border-box;
}

*, ::after, ::before {
  box-sizing: inherit;
}

body {
  max-width: 1000px;
  margin: 0 auto;
  background-color: ${({ theme }) => theme.colors.brightGrey};
  font-family: "Montserrat", sans-serif;
}
`;