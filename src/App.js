import { Routes, Route, Navigate } from "react-router-dom";
import TableComponent from "./components/TableComponent";
import FormComponent from "./components/FormComponent";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/kri-domestic" />} />

      <Route path="/kri-domestic" element={<TableComponent />} />
      <Route path="/kri-domestic/add" element={<FormComponent mode="add" />} />
      <Route
        path="/kri-domestic/edit/:id"
        element={<FormComponent mode="edit" />}
      />
      <Route
        path="/kri-domestic/view/:id"
        element={<FormComponent mode="view" />}
      />
    </Routes>
  );
}

export default App;
