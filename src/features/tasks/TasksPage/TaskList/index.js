import { List, Task, Content, RemoveButton, ToggleDoneButton, EditButton, StyledLink, SaveButton } from "./styled.js";
import { useDispatch, useSelector } from "react-redux";
import { toggleTaskDone, removeTask, toggleEdit, editTask, selectHideDone, selectTasksByQuery, saveAllTasks, selectIsEverySaved } from "../../tasksSlice";
import { useLocation } from "react-router-dom";
import { searchQueryParamName } from "../searchQueryParamName.js";
import { Input } from "../../../../common/Input/styled.js";
import { useState } from "react";
import { useRef } from "react";

export const TaskList = () => {
  const [newEditedName, setNewEditedName] = useState("");
  const inputRef = useRef(null);

  const dispatch = useDispatch();
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const name = searchParams.get(searchQueryParamName);

  const tasks = useSelector(state => selectTasksByQuery(state, name));
  const hideDone = useSelector(selectHideDone);
  const isEverySaved = useSelector(selectIsEverySaved)

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
            {
              task.editable ? (
                <Input
                  ref={inputRef}
                  onChange={({ target }) => { setNewEditedName(target.value); }}
                  value={newEditedName}
                />
              ) : (
                <StyledLink to={`/zadania/${task.id}`}>
                  {task.name}
                </StyledLink>)
            }
          </Content>
          {!task.editable ? (
            <EditButton
              onClick={async () => {
                dispatch(saveAllTasks())
                dispatch(toggleEdit([task.id, newEditedName]));
                setNewEditedName(task.name);
                try {
                  await inputRef.current;
                  inputRef.current.focus();
                }
                catch {

                }
              }}
            >
              🖍
            </EditButton>
          ) : (
            <SaveButton
              onClick={() => {
                newEditedName === ""
                  ? inputRef.current.focus()
                  : dispatch(editTask([task.id, newEditedName]));
              }}
            >
              ✔
            </SaveButton>
          )}

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
