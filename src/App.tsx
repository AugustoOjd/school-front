import React from 'react';
import Navbar from './components/layout/navbar/Navbar';
import './css/App.css'
import Rank from './components/rank/BaseRank';
import Intro from './components/intro/BaseIntro';
import Form from './components/form/BaseForm';
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
