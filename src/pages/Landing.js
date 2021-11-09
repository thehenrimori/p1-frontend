import React from 'react';
import { Link } from 'react-router-dom';


function Landing(){
    return (
        <div className="home-page">
         <div className="conteudo">
         <div className="preco">
             <b> Baixe Músicas a partir de 5 Reais!!!</b>
            </div>
            <h1 className="slogan">A MUSICA MOVE O MUNDO</h1>
            
            <Link to="/artistas" className="botao"> Ver artistas 
            </Link>

            <Link to="/albuns" className="botao1"> Ver Albuns
            </Link>


    
         </div>
        </div>
      );
}
export default Landing;
