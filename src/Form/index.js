import { useState } from "react";
import { Wrapper, Input, Button } from "./styled";

const Form = ({ addNewTask }) => {
	const [newTaskName, setNewtaskName] = useState("");

	const onFormSubmit = (event) => {
		event.preventDefault();

		if (newTaskName.trim() !== "") {
			addNewTask(newTaskName);
			setNewtaskName("");
		}
	};

	return (
		<Wrapper onSubmit={onFormSubmit}>
			<Input
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

export default Form;
