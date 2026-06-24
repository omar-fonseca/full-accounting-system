import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomeInicial from './HomeInicial';
import LoginRegister from './LoginRegister';
import AdminDashboard from './AdminDashboard';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeInicial />} />         
        <Route path="/loginregister" element={<LoginRegister />} />
        <Route path="/admindashboard" element={<AdminDashboard />} />                
      </Routes>
    </BrowserRouter>
  );
}

export default App;
