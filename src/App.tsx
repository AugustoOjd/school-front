import React from 'react';
import Navbar from './components/layout/navbar/Navbar';
import './css/App.css'
import Rank from './components/rank/Rank';
import Intro from './components/intro/Intro';
import Form from './components/form/Form';
import Footer from './components/layout/footer/Footer';

function App() {
  return (
    <>
      <Navbar/>
      <Rank/>
      <Intro/>
      <Form/>
      <Footer/>
    </>
  );
}

export default App;
