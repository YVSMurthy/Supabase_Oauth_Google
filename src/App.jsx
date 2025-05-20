import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import Admin from './components/Admin';

export default function App() {
  return (
    <div className='w-[100vw] h-[100vh]'>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/admin" element={<Admin />} />
          {/* Add more routes as needed */}
        </Routes>
      </Router>
    </div>
  );
}

