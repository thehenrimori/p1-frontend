import React from 'react';
import { Link } from 'react-router-dom';
import Headers from '../Headers';


function Landing(){
    return (
       <div>
              <div>
                <Headers />
            </div>
        <div className="home-page">
 	 
         <div className="conteudo">
         <div className="preco">
             <b> Baixe e ouça Músicas a partir de 5 Reais!!!</b>
            </div>
            <h1 className="slogan">MYFY: A MUSICA MOVE O MUNDO</h1>
            
            <Link to="/artistas" className="botao"> Ver artistas 
            </Link>

            <Link to="/albuns" className="botao1"> Ver Albuns
            </Link>


    
         </div>
        </div>
        </div>  
      );
}
export default Landing;
