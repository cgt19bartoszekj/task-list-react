import { useState } from "react";
import "./style.css"

const Form = ({ addNewTask }) => {

	const [newTaskName, setNewtaskName] = useState("");

	const onFormSubmit = (event) => {
		event.preventDefault();
		addNewTask(newTaskName);
		setNewtaskName("");
	};

	return (
		<form
			onSubmit={onFormSubmit}
			className="form">
			<input
				onInput={({ target }) => setNewtaskName(target.value)}
				value={newTaskName}
				className="form__input"
				placeholder="Co jest do zrobienia?"
			/>
			<button className="form__addButton">
				Dodaj zadanie
			</button>
		</form>
	);
}

export default Form;