import { Route, Routes } from 'react-router-dom';
import './App.css';
import Dashboard from './Components/Dashboard/Dashboard';
import SignIn from './Components/Login/SignIn';
import SignUp from './Components/Login/SingUp';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<SignIn/>} />
        <Route path='/signin' element={<SignIn/>} />
        <Route path='/signup' element={<SignUp/>} />
        <Route path='/dashboard' element={<Dashboard/>} />
      </Routes>
    </div>
  );
}

export default App;
