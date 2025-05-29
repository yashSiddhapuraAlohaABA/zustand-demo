import { Link, Route, Router, Routes } from "react-router-dom";
import "./App.css";
import UserList from "./components/UserList";
import UserDetail from "./components/UserDetail";
import TodoList from "./components/TodoList";

function App() {
  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">Zustand + API Demo</h1>
      <nav className="mb-4">
        <Link to="/" className="mr-4 text-blue-600 hover:underline">
          Users
        </Link>
        <br />
        <Link to="/todo" className="text-blue-600 hover:underline">
          Todo
        </Link>
      </nav>
      <Routes>
        <Route path="/" element={<UserList />} />
        <Route path="/user/:id" element={<UserDetail />} />
        <Route path="/todo" element={<TodoList />} />
      </Routes>
    </div>
  );
}

export default App;
