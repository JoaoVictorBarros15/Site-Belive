import React from 'react';
import './Projetos.css';

function Projeto() {
  return (
    <section className="galeria-projetos">
    <h2 className="titulo-galeria">Galeria de Projetos Realizados</h2>
    <div className="container">
      <div className="projeto">
          <img src={require('../img/casa.jfif')} alt="Imagem da Casa" />
          <br></br>
          <h3>Casa em Ibiuna</h3>
          <p>Casa de dia com muito sol</p>
      </div>
      <div className="projeto">
        <img src={require('../img/piscina.jfif')} alt="Imagem da Casa 2" />
        <h3>Piscina da Casa</h3>
        <p>visão da sua piscina maravilhosa</p>
      </div>
      <div className="projeto">
        <img src={require('../img/casa 3.jfif')} alt="Imagem da Casa 3" />
        <h3>Casa em Ibiuna</h3>
        <p>Casa com Visual de Noite</p>
      </div>
    </div>
  </section>
  );
}
export default Projeto;