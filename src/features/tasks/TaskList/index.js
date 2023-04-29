import { selectHideDone, selectTasks } from "../TasksSlice.js";
import { List, Task, Content, RemoveButton, ToggleDoneButton } from "./styled.js";
import { useDispatch, useSelector } from "react-redux";
import { toggleTaskDone, removeTask } from "../TasksSlice.js";

export const TaskList = () => {
  const dispatch = useDispatch();

  const tasks = useSelector(selectTasks);
  const hideDone = useSelector(selectHideDone);

  return (
    <List>
      {tasks.map((task) => (
        <Task
          key={task.id}
          hidden={task.done && hideDone}
        >
          <ToggleDoneButton
            onClick={() => dispatch(toggleTaskDone(task.id))}
          >
            {task.done ? "✔" : ""}
          </ToggleDoneButton>
          <Content done={task.done}>
            {task.name}
          </Content>
          <RemoveButton
            onClick={() => dispatch(removeTask(task.id))}
          >
            🗑
          </RemoveButton>
        </Task>
      ))}
    </List>
  );
};
