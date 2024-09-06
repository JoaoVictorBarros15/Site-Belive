import React from "react";
import { Link } from 'react-router-dom';
import "./Home.css";
function Home() {
    return(
        <div id="cabeçalho">
            <header className="header">
                <div className="logo">
                    <h1><Link to="/">Belive Arquitetura</Link></h1>
                </div>
                <div className="nav">
                    <ul>
                        <li><Link to="/about">Sobre</Link></li> {/* Link para a página "Sobre" */}
                        <li><a href="#projects">Projetos</a></li>
                        <li><a href="#contact">Contato</a></li>
                    </ul>
                </div>
            </header>

            <div className="background">
                {/* Conteúdo da página inicial */}
            </div>
        </div>
    );
}

export default Home;