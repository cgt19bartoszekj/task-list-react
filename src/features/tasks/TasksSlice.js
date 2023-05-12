import { createSlice } from "@reduxjs/toolkit";
import { getTasksFromLocalStorage } from "./tasksLocalStorage";

const tasksSlice = createSlice({
  name: "tasks",
  initialState: {
    tasks: getTasksFromLocalStorage(),
    hideDone: false,
  },
  reducers: {
    addTask: ({ tasks }, { payload: task }) => {
      tasks.push(task);
    },
    removeTask: ({ tasks }, { payload: taskId }) => {
      const index = tasks.findIndex(task => task.id === taskId);
      tasks = tasks.splice(index, 1);
    },
    toggleHideDone: state => {
      state.hideDone = !state.hideDone;
    },
    toggleTaskDone: ({ tasks }, { payload: taskId }) => {
      const index = tasks.findIndex(task => task.id === taskId);
      tasks[index].done = !tasks[index].done;
    },
    toggleAllDone: ({ tasks }) => {
      for (const task of tasks) {
        task.done = true;
      };
    },
    fetchExampleTasks: () => { },
    setTasks: (state, { payload: exampleTasks }) => {
      state.tasks = exampleTasks;
    },
  }
});
export const {
  addTask,
  toggleHideDone,
  toggleTaskDone,
  removeTask,
  toggleAllDone,
  fetchExampleTasks,
  setTasks,
} = tasksSlice.actions;

export const selectTasksState = (state) => state.tasks;

export const selectTasks = (state) => selectTasksState(state).tasks;
export const selectHideDone = (state) => selectTasksState(state).hideDone;
export const selectAreTasksEmpty = (state) => selectTasks(state).length === 0;
export const selectIsEveryDone = (state) => selectTasks(state).every(({ done }) => done);

export default tasksSlice.reducer;