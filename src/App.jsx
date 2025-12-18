import './App.css';
import Home from '@features/home/Home';
import SignUp from '@features/authentication/signup/sign_up';
import Login from '@features/authentication/login/login';

function App() {
  return (
    <div className="app_container">
      {/* <Home /> */}
      {/* <Login /> */}
      <SignUp />
    </div>
  );
}

export default App;
