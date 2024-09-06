import React from "react";
import "./style.css";


function Main({ children }) {
    return (
        <div id="main">
            <main>
            <h1 id="tittle">Belive Arquitetura<hr id="linha"></hr></h1>
            <p id="paragrafo">A Believe Arquitetura é uma empresa familiar, composta por pai e filha, 
                <br></br>unidos na missão de transformar lares e <br></br>tornar reais os sonhos dos nossos clientes.</p> 
            <form action="#">
                <input id="Button" type="button" value="Entre em Contato" />
            </form>
            </main>
        </div>
    );

}
export default Main;