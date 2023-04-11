import styled, { css } from "styled-components";

export const List = styled.ul`
  margin: 0;
  list-style: none;
  padding: 0;
`;

export const Task = styled.li`
  display: grid;
  grid-gap: 10px;
  align-items: center;
  grid-template-columns: auto 1fr auto;
  border-bottom: 1px solid #dddddd;
  padding: 10px;

  ${({ hidden }) =>
    hidden &&
    css`
      display: none;
    `}
`;

export const Button = styled.button`
  border: none;
  color: #ffffff;
  width: 30px;
  height: 30px;
  padding: 0;
  transition: background 0.5s;
  cursor: pointer;

  ${({ toggleDone }) =>
    toggleDone &&
    css`
      background-color: #008800;

      &:hover {
        background-color: #00ff00;
      }
    `}

  ${({ remove }) =>
    remove &&
    css`
      background-color: #900000;

      &:hover {
        background: #ff0000;
      }
    `}
`;

export const Content = styled.span`
  ${({ done }) =>
    done &&
    css`
      color: #323232;
      text-decoration: line-through;
    `}
`;
