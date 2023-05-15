import { List, Task, Content, RemoveButton, ToggleDoneButton, StyledLink } from "./styled.js";
import { useDispatch, useSelector } from "react-redux";
import { toggleTaskDone, removeTask, selectHideDone, selectTasksByQuery } from "../../tasksSlice";
import { useLocation } from "react-router-dom";
import { searchQueryParamName } from "../searchQueryParamName.js";

export const TaskList = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const name = searchParams.get(searchQueryParamName);

  const tasks = useSelector(state => selectTasksByQuery(state, name));
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
            <StyledLink to={`/zadania/${task.id}`}>
              {task.name}
            </StyledLink>
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
