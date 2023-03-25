import "./style.css"

const Tasks = ({ tasks, doneTasksHidden }) => (
	<ul className="tasks">
		{tasks.map(task => (
			<li
				key={task.id}
				className={`tasks__task ${task.done && doneTasksHidden ? "tasks__task--hidden" : ""}`}
			>
				<button className={`tasks__button ${task.done ? "tasks__button--checked" : ""}`}>
					&#10004;
				</button>
				<span className={`tasks__taskName ${task.done ? "tasks__taskName--done" : ""}`}>
					{task.name}
				</span>
				<button className="tasks__button tasks__button--remove">
					&#128465;
				</button>
			</li>
		))}
	</ul>
);

export default Tasks;