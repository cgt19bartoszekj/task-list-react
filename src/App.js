import { Routes, Route, HashRouter, Navigate } from "react-router-dom";
import TasksPage from "./features/tasks/TasksPage";
import TaskPage from "./features/tasks/TaskPage";
import AuthorPage from "./features/author/AuthorPage";
import { Navigation } from "./common/Navigation";

const App = () => (
  <HashRouter>
    <Navigation />
    <Routes>
      <Route
        path="/zadania/:id"
        element={<TaskPage />}>
      </Route>
      <Route
        path="/zadania"
        element={<TasksPage />}>
      </Route>
      <Route
        path="/autor"
        element={<AuthorPage />}>
      </Route>
      <Route
        path="/"
        element={<Navigate to="/zadania"></Navigate>}
      >
      </Route>
    </Routes>
  </HashRouter>
);

export default App;