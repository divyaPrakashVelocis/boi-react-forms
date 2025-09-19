import { Routes, Route, Navigate } from "react-router-dom";
import TableComponent from "./components/TableComponent";
import FormComponent from "./components/FormComponent";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/advocate-empanelled" />} />

      <Route path="/advocate-empanelled" element={<TableComponent />} />
      <Route
        path="/advocate-empanelled/add"
        element={<FormComponent mode="add" />}
      />
      <Route
        path="/advocate-empanelled/edit/:id"
        element={<FormComponent mode="edit" />}
      />
      <Route
        path="/advocate-empanelled/view/:id"
        element={<FormComponent mode="view" />}
      />
    </Routes>
  );
}

export default App;
