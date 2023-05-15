import styled from "styled-components";

export const StyledNav = styled.nav`
display: flex;
align-items: center;
justify-content: center;
height: 50px;
width: 100%;
background-color: ${({ theme }) => theme.colors.teal};
`;