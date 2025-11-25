import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'; 
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';

// Importando as páginas
import Home from './pages/Home/Index.js'; 
import Watch from './pages/Watch/Index.js'; 
import Sobre from './pages/Sobre/index.js';      
import Planos from './pages/Planos/index.js';    
import Carreiras from './pages/Carreiras/index.js'; 

function App() {
  const [searchTerm, setSearchTerm] = useState(''); 

  return (
    <BrowserRouter>
      <Header 
        searchTerm={searchTerm} 
        setSearchTerm={setSearchTerm} 
      />
      
      <Routes>
        <Route path="/" element={<Home searchTerm={searchTerm} />} />
        
        {/* Rota dinâmica: captura o ID do vídeo */}
        <Route path="/watch/:id" element={<Watch />} />
        
        <Route path="/sobre" element={<Sobre />} />
        <Route path="/planos" element={<Planos />} />
        <Route path="/carreiras" element={<Carreiras />} />
      </Routes>
      
      <Footer />
    </BrowserRouter>
  );
}

export default App;