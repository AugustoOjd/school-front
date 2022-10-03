import React from 'react';
import './css/App.css'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Home from './Pages/Home';
import Student from './Pages/Student';
import Admin from './Pages/Admin';
import UserLogin from './Pages/UserLogin';
import AdminLogin from './Pages/AdminLogin';

// Redux
import { useSelector } from 'react-redux';
import { RootState } from './context';
import Tasks from './Pages/Tasks';



function App() {

  const session = useSelector((state: RootState)=> state.SessionUser.value)
  return (
    <>
      <Router>

        <Routes>

          <Route path='/' element={<Home/>} />

          {/* Login y Dashboard user */}
          <Route path='/user/login' element={<UserLogin/>} />
          <Route path='/user/:id' element={session.length > 0 ? <Student/> : <Home/>} />

          {/* Login y Dashboard admin */}
          <Route path='/admin/:id' element={<Admin/>} />
          <Route path='/admin/login' element={<AdminLogin/>} />

          {/* Rutas de los niveles de los retos */}
          <Route path={`/user/:id/:nivel`} element={<Tasks/>}/>

          <Route path="*" element={<Navigate to="/" />} />
          
        </Routes>

      </Router>
    </>
  );
}

export default App;
