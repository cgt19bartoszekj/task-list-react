import "./style.css"

const Tasks = (props) => (
	<ul className="tasks">
		{props.tasks.map(task => (
			<li className={`tasks__task ${(task.done && props.doneTasksHidden) ? "tasks__task--hidden" : ""}`}>
				<button className={`tasks__button ${task.done ? "tasks__button--checked" : ""}`}>&#10004;
				</button>
				<span className={`tasks__taskName ${task.done ? "tasks__taskName--done" : ""}`}>{task.name}
				</span>
				<button className="tasks__button tasks__button--remove">&#128465;
				</button>
			</li>
		))}
	</ul>
);

export default Tasks;