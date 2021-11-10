import React, { useEffect, useState } from "react"
import api from "../servicos/api"
import Headers from "../Headers";

function PadraoArtista(){

    const [artistas, setArtistas] = useState([])
    useEffect(()=> {
            api.get('artistas/retornaTodos').then(resposta => {
                setArtistas(resposta.data)
            });

    },[]);
    console.log(artistas);
    return(
     <div>  
         <div>
         <Headers />
         </div>
        <div className="home-page">
            <div className="conteudo"></div>
            <div className="row"> {
                 artistas.map(artista=>  {
                    return (
                    <div className="card text-white bg-success mb-3" key={artista.id}>
                    <div className="card-header">{artista.nome}</div>
                    <div className="card-body">
                      <h5 className="card-title">{artista.nacionalidade}</h5>
                      <p className="card-text">{artista.tipo}</p>
                    </div>
                    </div>

                )
            })
            
        }
        </div> 
        </div>
    </div>
        
    )
};

export default PadraoArtista;