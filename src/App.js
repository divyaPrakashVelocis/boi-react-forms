import { Routes, Route, Navigate } from 'react-router-dom';
import TableComponent from './components/TableComponent';
import FormComponent from './components/FormComponent';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/online-branch-inspection-report" />} />
      <Route path="/online-branch-inspection-report" element={<TableComponent />} />
      <Route path="/online-branch-inspection-report/add" element={<FormComponent mode="add" />} />
      <Route path="/online-branch-inspection-report/edit/:id" element={<FormComponent mode="edit" />} />
      <Route path="/online-branch-inspection-report/view/:id" element={<FormComponent mode="view" />} />
    </Routes>
  );
}

export default App;
