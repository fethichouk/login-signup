

import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate, Route, Routes } from 'react-router-dom';
import './App.css'
import Login from './components/Auth/Login';
import UserProfile from './components/UserProfile';
import {current} from './redux/action'
function App() {
  
  const token = localStorage.getItem('token')
	const navigate = useNavigate()

  

  return (
    <div className="App">
      <Routes>
        <Route index element={<Login />}/>
        <Route path='/User' element={<UserProfile />} />
      </Routes>
     
    </div>
  );
}

export default App;
