import { Routes, Route, Navigate } from "react-router-dom";
import TableComponent from "./components/TableComponent";
import FormComponent from "./components/FormComponent";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/inward-register" />} />

      <Route path="/inward-register" element={<TableComponent />} />
      <Route
        path="/inward-register/add"
        element={<FormComponent mode="add" />}
      />
      <Route
        path="/inward-register/edit/:id"
        element={<FormComponent mode="edit" />}
      />
      <Route
        path="/inward-register/view/:id"
        element={<FormComponent mode="view" />}
      />
    </Routes>
  );
}

export default App;
