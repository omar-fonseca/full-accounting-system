import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from '../pages/HomePage/HomePage';
import LoginRegisterPage from '../pages/LoginRegisterPage/LoginRegisterPage';
import AdminDashboardPage from '../pages/AdminDashboardPage/AdminDashboardPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/loginregister" element={<LoginRegisterPage />} />
        <Route path="/admindashboard" element={<AdminDashboardPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
