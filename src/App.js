import React from "react";
import "./styles.css";
import CardVideo from "./Componentes/CardVideos";

export default function App() {
  const newObj = {
    titulo: `Guardioes da Galaxia`,
    imagem: `https://img.olhardigital.com.br/wp-content/uploads/2023/05/guardioes-da-galaxia-3.jpg`,
     
  }

  const usuario = {
    nome: `Mario`
  }

  return (
    <div>
      <div className="tela-inteira">
        <header>
          <h1>LabeTube</h1>
          <input type="text" placeholder="Busca" id="campoDeBusca" />
        </header>

        <main>
          <nav className="menu-vertical">
            <ul>
              <li className="botoes-meunu-vertical">Início</li>
              <li className="botoes-meunu-vertical">Em alta</li>
              <li className="botoes-meunu-vertical">Inscrições</li>
              <hr />
              <li className="botoes-meunu-vertical">Originais</li>
              <li className="botoes-meunu-vertical">Histórico</li>
            </ul>
          </nav>

          <section className="painel-de-videos">
           <CardVideo newObj = {newObj} usuario = {usuario}/>
           <CardVideo newObj = {newObj} usuario = {usuario}/>
           <CardVideo newObj = {newObj} usuario = {usuario}/>
           <CardVideo newObj = {newObj} usuario = {usuario}/>
           <CardVideo newObj = {newObj} usuario = {usuario}/>
           <CardVideo newObj = {newObj} usuario = {usuario}/>
           <CardVideo newObj = {newObj} usuario = {usuario}/>
           <CardVideo newObj = {newObj} usuario = {usuario}/>
          </section>
        </main>

        <footer>
          <h4>Oi! Eu moro no footer!</h4>
        </footer>
      </div>
    </div>
  );
}