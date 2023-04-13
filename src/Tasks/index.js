import { List, Task, Content, RemoveButton, ToggleDoneButton } from "./styled.js";

export const Tasks = ({
  tasks,
  hideDone,
  removeTask,
  toggleTaskDone
}) => (
  <List>
    {tasks.map((task) => (
      <Task
        key={task.id}
        hidden={task.done && hideDone}
      >
        <ToggleDoneButton
          onClick={() => toggleTaskDone(task.id)}
        >
          {task.done ? "✔" : ""}
        </ToggleDoneButton>
        <Content done={task.done}>
          {task.name}
        </Content>
        <RemoveButton
          onClick={() => removeTask(task.id)}
        >
          🗑
        </RemoveButton>
      </Task>
    ))}
  </List>
);
