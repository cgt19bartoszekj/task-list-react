import styled from "styled-components";

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  gap: 20px;

  @media (max-width: ${({theme}) => theme.breakpoints.mobile}px) {
    grid-template-columns: 1fr;
    margin: 30px;
  }
`;

export const Button = styled.button`
  cursor: pointer;
  background: none;
  border: none;
  color: ${({ theme }) => theme.colors.teal};
  transition: 1s;

  &:hover {
    color: ${({ theme }) => theme.colors.eal};
  }

  &:disabled {
    color: #b3b3b3;
    cursor: default;
  }
`;
