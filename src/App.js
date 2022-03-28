import './Styles/Navbar.scss';
import './Styles/Main.scss';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Error, Dashboard, Login, AuthWrapper, PrivateRoute } from './pages';

function App() {
  return (
    <AuthWrapper>
      <BrowserRouter>
        <Routes>
          <Route
            path='/'
            element={
              <PrivateRoute>
                <Dashboard />
              </PrivateRoute>
            }
          />
          <Route path='/login' element={<Login />} />
          <Route path='*' element={<Error />} />
        </Routes>
      </BrowserRouter>
    </AuthWrapper>
  );
}

export default App;
