import React, {useEffect} from 'react';
import { useCookies } from 'react-cookie'
import './css/App.css'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  useParams,
} from "react-router-dom";
import Home from './Pages/Home';
import Student from './Pages/Student';
import Admin from './Pages/Admin';
import UserLogin from './Pages/UserLogin';
import AdminLogin from './Pages/AdminLogin';
import Tasks from './Pages/Tasks';


function App() {


  return (
    <>
      <Router>

        <Routes>

          <Route path='/' element={<Home/>} />

          <Route path='/user/login' element={<UserLogin/>} />
          <Route path='/user/:id' element={ <Student/> } />

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
