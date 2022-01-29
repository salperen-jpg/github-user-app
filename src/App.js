import './Styles/Navbar.scss';
import './Styles/Main.scss';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Error, Dashboard, Login } from './pages';
import Navbar from './components/Navbar';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Dashboard />} />
        <Route path='/login' element={<Login />} />
        <Route path='*' element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
