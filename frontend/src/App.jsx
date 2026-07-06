import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './features/home/HomePage';
import LoginRegisterPage from './features/auth/LoginRegisterPage';
import AdminDashboardPage from './features/dashboard/AdminDashboardPage';

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
