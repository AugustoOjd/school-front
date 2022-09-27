import React from 'react';
import './css/App.css'
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Home from './Pages/Home';
import Student from './Pages/Student';
import Admin from './Pages/Admin';
import Nivel1 from './Pages/niveles/Nivel1';
import Nivel2 from './Pages/niveles/Nivel2';
import Nivel4 from './Pages/niveles/Nivel4';
import Nivel3 from './Pages/niveles/Nivel3';
import UserLogin from './Pages/UserLogin';
import AdminLogin from './Pages/AdminLogin';

// Redux
import { useSelector } from 'react-redux';
import { RootState } from './context';



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
          <Route path='/user/:id/nivel1' element={<Nivel1/>}/>
          <Route path='/user/:id/nivel2' element={<Nivel2/>}/>
          <Route path='/user/:id/nivel3' element={<Nivel3/>}/>
          <Route path='/user/:id/nivel4' element={<Nivel4/>}/>
          
        </Routes>

      </Router>
    </>
  );
}

export default App;
