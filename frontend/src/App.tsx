import "./App.css";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { Error, Librarian, Login, Signup, Student } from "./pages";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/sign-up" element={<Signup />} />
        <Route path="/librarian" element={<Librarian />} />
        <Route path="/student" element={<Student />} />
        <Route path="/" element={<Navigate to={"/login"} />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
