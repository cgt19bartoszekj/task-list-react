import { useState, useRef } from "react";
import { Wrapper, Input, Button } from "./styled";

export const Form = ({ addNewTask }) => {
	const [newTaskName, setNewtaskName] = useState("");
	const inputRef = useRef(null);

	const onFormSubmit = (event) => {
		event.preventDefault();

		if (newTaskName.trim() !== "") {
			addNewTask(newTaskName);
			setNewtaskName("");
		}
		inputRef.current.focus();
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
