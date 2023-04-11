import styled from "styled-components";

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  gap: 20px;

  @media (max-width: 700px) {
    grid-template-columns: 1fr;
    margin: 30px;
  }
`;

export const Button = styled.button`
  cursor: pointer;
  background: none;
  border: none;
  color: #007382;
  transition: 1s;

  &:hover {
    color: #00b4cc;
  }

  &:disabled {
    color: #b3b3b3;
    cursor: default;
  }
`;
