import { useState } from "react";
import "./style.css";

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
		<form
			className="form"
			onSubmit={onFormSubmit}
		>
			<input
				className="form__input"
				onInput={({ target }) => setNewtaskName(target.value)}
				value={newTaskName}
				placeholder="Co jest do zrobienia?"
			/>
			<button className="form__addButton">
				Dodaj zadanie
			</button>
		</form>
	);
};

export default Form;
