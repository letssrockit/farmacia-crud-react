import React from 'react';
import './App.css';
import Home from './pages/home/Home';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import Catalogo from './pages/catalogo/Catalogo';

function App() {
  return (
    <>
    <Navbar/>
    <Catalogo/>
    <Footer/>
    </>
);
}
export default App;