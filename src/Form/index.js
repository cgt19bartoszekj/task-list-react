import { useState, useRef } from "react";
import { Wrapper, Input, Button } from "./styled";

export const Form = ({ addNewTask }) => {
  const [newTaskName, setNewtaskName] = useState("");
  const inputRef = useRef(null);

  const resetInput = () => {
    inputRef.current.focus();
    inputRef.current.value = "";
  };

  const onFormSubmit = (event) => {
    event.preventDefault();

    if (newTaskName.trim() !== "") {
      addNewTask(newTaskName);
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
