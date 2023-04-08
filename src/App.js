import { useEffect, useState } from "react";
import Container from "./Container";
import Header from "./Header";
import Section from "./Section";
import Form from "./Form";
import Buttons from "./Buttons";
import Tasks from "./Tasks";

const getInitialTasks = () =>
	JSON.parse(localStorage.getItem("tasks")) || [];

function App() {
	const [hideDone, setHideDone] = useState(false);
	const [tasks, setTasks] = useState(getInitialTasks);

	useEffect(() => {
		localStorage.setItem("tasks", JSON.stringify(tasks));
	}, [tasks]);

	const toggleHideDone = () => {
		setHideDone((hideDone) => !hideDone);
	};

	const removeTask = (id) => {
		setTasks((tasks) => tasks.filter((task) => task.id !== id));
	};

	const toggleTaskDone = (id) => {
		setTasks((tasks) =>
			tasks.map((task) =>
				task.id === id
					? {
							...task,
							done: !task.done
					  }
					: task
			)
		);
	};

	const toggleAllDone = () => {
		setTasks((tasks) =>
			tasks.map((task) => ({
				...task,
				done: true
			}))
		);
	};

	const addNewTask = (newTaskName) => {
		setTasks((tasks) => [
			...tasks,
			{
				id: tasks.length ? tasks[tasks.length - 1].id + 1 : 1,
				name: newTaskName,
				done: false
			}
		]);
	};

	return (
		<Container>
			<Header title="Lista zadań" />
			<Section
				title="Dodaj nowe zadanie"
				body={<Form addNewTask={addNewTask} />}
			/>
			<Section
				title="Lista zadań"
				body={
					<Tasks
						tasks={tasks}
						hideDone={hideDone}
						removeTask={removeTask}
						toggleTaskDone={toggleTaskDone}
					/>
				}
				extraHeaderContent={
					<Buttons
						tasks={tasks}
						hideDone={hideDone}
						toggleHideDone={toggleHideDone}
						toggleAllDone={toggleAllDone}
					/>
				}
			/>
		</Container>
	);
}

export default App;
