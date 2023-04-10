import { useState } from "react";
import { useTasks } from "./useTasks";
import Container from "./Container";
import Header from "./Header";
import Section from "./Section";
import Form from "./Form";
import Buttons from "./Buttons";
import Tasks from "./Tasks";

function App() {
	const [hideDone, setHideDone] = useState(false);

	const toggleHideDone = () => {
		setHideDone((hideDone) => !hideDone);
	};

	const {
		tasks,
		removeTask,
		toggleTaskDone,
		toggleAllDone,
		addNewTask
	} = useTasks();

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
