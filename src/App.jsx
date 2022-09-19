import { Route, Routes } from 'react-router-dom';
import './App.css';
import Dashboard from './Components/Dashboard/Dashboard';
import SignIn from './Components/Login/SignIn';
import SignUp from './Components/Login/SingUp';
import RequireAuth from './Components/Others/RequireAuth';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<SignIn/>} />
        <Route path='/signin' element={<SignIn/>} />
        <Route path='/signup' element={<SignUp/>} />
        <Route path='/dashboard' element={<RequireAuth><Dashboard/></RequireAuth>} />
      </Routes>
    </div>
  );
}

export default App;
