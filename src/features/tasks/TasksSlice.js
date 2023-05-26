import { createSlice } from "@reduxjs/toolkit";
import { getTasksFromLocalStorage } from "./tasksLocalStorage";
import { getCurrentDate } from "./getCurrentDate";

const tasksSlice = createSlice({
  name: "tasks",
  initialState: {
    tasks: getTasksFromLocalStorage(),
    hideDone: false,
    loading: false,
    date: getCurrentDate(),
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
    toggleEdit: ({ tasks }, { payload: [taskId, newEditedName] }) => {
      const index = tasks.findIndex(task => task.id === taskId);
      tasks[index].editable = !tasks[index].editable;
    },
    editTask: ({ tasks }, { payload: [taskId, newEditedName] }) => {
      const index = tasks.findIndex(task => task.id === taskId);
      tasks[index].editable = !tasks[index].editable;
      tasks[index].name = newEditedName;
    },
    saveAllTasks: ({ tasks }) => {
      for (const task of tasks) {
        task.editable = false;
      }
    },
    fetchExampleTasks: state => {
      state.loading = true;
    },
    fetchExampleTasksSuccess: (state, { payload: tasks }) => {
      state.tasks = tasks;
      state.loading = false;
    },
    fetchExampleTasksError: (state) => {
      state.loading = false;
    },
  }
});
export const {
  addTask,
  removeTask,
  toggleHideDone,
  toggleTaskDone,
  toggleAllDone,
  toggleEdit,
  editTask,
  saveAllTasks,
  fetchExampleTasks,
  fetchExampleTasksSuccess,
  fetchExampleTasksError,
} = tasksSlice.actions;

export const selectTasksState = (state) => state.tasks;

export const selectTasks = (state) => selectTasksState(state).tasks;
export const selectHideDone = (state) => selectTasksState(state).hideDone;
export const selectIsLoading = (state) => selectTasksState(state).loading;
export const selectAreTasksEmpty = (state) => selectTasks(state).length === 0;
export const selectIsEveryDone = (state) =>
  selectTasks(state).every(({ done }) => done);

export const getTasksById = (state, taskId) =>
  selectTasks(state).find(({ id }) => id === taskId);

export const selectTasksByQuery = (state, query) => {
  const tasks = selectTasks(state);

  if (!query || query.trim() === "") {
    return tasks;
  }

  return tasks.filter(({ name }) =>
    name.toUpperCase().includes(query.toUpperCase().trim()));
};

export default tasksSlice.reducer;