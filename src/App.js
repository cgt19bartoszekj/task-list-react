import { BrowserRouter, Link, Routes, Route } from "react-router-dom";
import Tasks from "./features/tasks/Tasks";

const App = () => (
  <BrowserRouter>
    <nav>
      <ul>
        <li>
          <Link to="/zadania">Zadania</Link>
        </li>
      </ul>
    </nav>
    <Routes>
      <Route
        path="/zadania"
        element={<Tasks />}>
      </Route>
    </Routes>
  </BrowserRouter>
);

export default App;