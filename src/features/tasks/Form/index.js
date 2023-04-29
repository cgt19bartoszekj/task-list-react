import { useState, useRef } from "react";
import { Wrapper, Input, Button } from "./styled";
import { useDispatch } from "react-redux";
import { addTask } from "../TasksSlice";
import { nanoid } from "@reduxjs/toolkit";

export const Form = () => {
  const [newTaskName, setNewtaskName] = useState("");
  const inputRef = useRef(null);

  const dispatch = useDispatch();

  const resetInput = () => {
    inputRef.current.focus();
    inputRef.current.value = "";
  };

  const onFormSubmit = (event) => {
    event.preventDefault();

    if (newTaskName.trim() !== "") {
      dispatch(addTask({
        name: newTaskName,
        done: false,
        id: nanoid()
      }));
      
      setNewtaskName("");
    }
    resetInput();
  };

  return (
    <Wrapper onSubmit={onFormSubmit}>
      <Input
        ref={inputRef}
        onInput={({ target }) => setNewtaskName(target.value)}
        value={newTaskName}
        placeholder="Co jest do zrobienia?"
      />
      <Button>
        Dodaj zadanie
      </Button>
    </Wrapper>
  );
};
