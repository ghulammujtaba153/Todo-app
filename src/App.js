
import './App.css';
import {Routes} from 'react-router-dom'
import { Route } from 'react-router-dom';

import Registeration from './components/auth1/Registeration.jsx';
import Login from './components/auth1/Login';
import Home from './pages/Home';
import ProtectedRoute from './components/ProtectedRoute';
import AccountPage from './pages/AccountPage';



function App() {
  return (
    <div>
        <Routes>
          
          <Route path="/" element={<Login/>}/>
          <Route path="/register" element={<Registeration/>}/>
          <Route path='/home' element={<ProtectedRoute><Home/></ProtectedRoute>} /> 
          <Route path="/account" element={<AccountPage/>} />
          
        </Routes>
    </div>
  );
}

export default App;
