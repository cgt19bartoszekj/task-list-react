import { Link, Routes, Route, HashRouter } from "react-router-dom";
import Tasks from "./features/tasks/Tasks";
import Author from "./features/author/Author";

const App = () => (
  <HashRouter>
    <nav>
      <ul>
        <li>
          <Link to="/zadania">Zadania</Link>
          <Link to="/autor">O autorze</Link>
        </li>
      </ul>
    </nav>
    <Routes>
      <Route
        path="/zadania"
        element={<Tasks />}>
      </Route>
      <Route
        path="/autor"
        element={<Author />}>
      </Route>
    </Routes>
  </HashRouter>
);

export default App;