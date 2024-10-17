import { Route, Routes } from 'react-router-dom';
import { useState } from 'react';

import './App.css';

import Header from './components/Header';
import Inicio from './pages/Inicio';
import Rutinas from './pages/Rutinas';
import Suplementos from './pages/Suplementos';
import Contacto from './pages/Contacto';
import Footer from './components/Footer';
import IniciarSesion from './components/IniciarSesion';
import Suscripcion from './pages/Suscripcion';

function App() { const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
      console.log();
      setIsModalOpen(true);
  };

  const closeModal = () => {
      console.log(); 
      setIsModalOpen(false);
  };

  return (
    <div className="App">
      <Header openModal={openModal}/>
      <Routes>
        <Route path='/' element={<Inicio/>}/>
        <Route path='/rutinas' element={<Rutinas/>}/>
        <Route path='/suplementos' element={<Suplementos/>}/>
        <Route path='/contacto' element={<Contacto/>}/>
        <Route path='/suscripcion' element={<Suscripcion/>}/>
      </Routes>
      <Footer/>
      <IniciarSesion isOpen={isModalOpen} onClose={closeModal}/> 
    </div>
  );
}

export default App;
