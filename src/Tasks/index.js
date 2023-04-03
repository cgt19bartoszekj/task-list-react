import "./style.css";

const Tasks = ({ tasks, hideDone, removeTask, toggleTaskDone }) => (
	<ul className="tasks">
		{tasks.map(task => (
			<li
				key={task.id}
				className={`tasks__task ${task.done && hideDone ? "tasks__task--hidden" : ""}`}
			>
				<button
					onClick={() => toggleTaskDone(task.id)}
					className={`tasks__button ${task.done ? "tasks__button--checked" : ""}`}
				>
					&#10004;
				</button>
				<span
					className={`tasks__taskName ${task.done ? "tasks__taskName--done" : ""}`}
				>
					{task.name}
				</span>
				<button
					onClick={() => removeTask(task.id)}
					className="tasks__button tasks__button--remove"
				>
					&#128465;
				</button>
			</li>
		))}
	</ul>
);

export default Tasks;