import "bootstrap/dist/css/bootstrap.min.css";
import HomePage from "./components/Home/HomePage";
import RegisterPage from "./components/Register/RegisterPage";
import LoginPage from "./components/Login/LoginPage";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import AdminPage from "./components/Admin/AdminPage";
import AddBook from "./components/Admin/AddBook";
import AddAuthor from "./components/Admin/AddAuthor";
import ViewBooks from "./components/Admin/ViewBooks";
import ViewBookByName from "./components/Admin/ViewBookByName";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/Admin" element={<AdminPage />} />
        <Route path="/add-book" element={<AddBook />} />
        <Route path="/add-author" element={<AddAuthor />} />
        <Route path="/view-books" element={<ViewBooks />} />
        <Route path="/view-book-by-name" element={<ViewBookByName />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
