import { Wrapper } from "./styled";
import { Button } from "../../../common/Button/styled";
import { useSelector, useDispatch } from "react-redux";
import { selectAreTasksEmpty, selectHideDone, selectIsEveryDone, toggleAllDone, toggleHideDone } from "../tasksSlice";

export const Buttons = () => {
  const hideDone = useSelector(selectHideDone);
  const isEveryDone = useSelector(selectIsEveryDone);
  const areTasksEmpty = useSelector(selectAreTasksEmpty);

  const dispatch = useDispatch();

  return (
    <Wrapper>
      {!areTasksEmpty && (
        <>
          <Button
            onClick={() => dispatch(toggleHideDone())}
          >
            {hideDone ? "Pokaż" : "Ukryj"} ukończone
          </Button>
          <Button
            onClick={() => dispatch(toggleAllDone())}
            disabled={isEveryDone}
          >
            Ukończ wszystkie
          </Button>
        </>
      )}
    </Wrapper>
  );
};
