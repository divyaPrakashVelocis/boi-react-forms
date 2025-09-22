import { Routes, Route, Navigate } from "react-router-dom";
import TableComponent from "./components/TableComponent";
import FormComponent from "./components/FormComponent";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/hindi-qpr-branch-2-updated" />} />

      <Route path="/hindi-qpr-branch-2-updated" element={<TableComponent />} />
      <Route
        path="/hindi-qpr-branch-2-updated/add"
        element={<FormComponent mode="add" />}
      />
      <Route
        path="/hindi-qpr-branch-2-updated/edit/:id"
        element={<FormComponent mode="edit" />}
      />
      <Route
        path="/hindi-qpr-branch-2-updated/view/:id"
        element={<FormComponent mode="view" />}
      />
    </Routes>
  );
}

export default App;
