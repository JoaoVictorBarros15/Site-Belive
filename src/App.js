import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Nav from './componets/Nav/Nav';
import About from './componets/About/About'; // Novo componente para a página Sobre
import Main from './componets/Main/Main';
import './App.css';



function App() {
  return (
    <Router>
      <div className="App">
        {/* Navbar visível em todas as páginas */}
        <Nav />
        <Routes>
          {/* Página inicial com o componente Main */}
          <Route
            path="/"
            element={<Main />} 
          />
          {/* Adicionando a rota "/Site-Belive" */}
          <Route
            path="/Site-Belive"
            element={<Main />}
          />
          {/* Página Sobre sem o Main */}
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
