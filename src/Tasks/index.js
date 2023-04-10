import { List, Task, Button, Content } from "./styled";

const Tasks = ({ tasks, hideDone, removeTask, toggleTaskDone }) => (
	<List>
		{tasks.map(task => (
			<Task
				key={task.id}
				hidden={task.done && hideDone}
			>
				<Button
					onClick={() => toggleTaskDone(task.id)}
					toggleDone
				>
					{task.done ? "✔" : ""}
				</Button>
				<Content
					done={task.done}
				>
					{task.name}
				</Content>
				<Button
					onClick={() => removeTask(task.id)}
					remove
				>
					🗑
				</Button>
			</Task>
		))}
	</List>
);

export default Tasks;