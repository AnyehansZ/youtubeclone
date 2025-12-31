import './App.css';
import Home from '@features/home/Home';
import { Routes, Route } from 'react-router-dom';
import SignUp from '@features/authentication/signup/sign_up';
import Login from '@features/authentication/login/login';
import NotFound from '@features/notfound/NotFound';
function App() {
  return (
    <div className="app_container">
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/login' element={<Login />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
