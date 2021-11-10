import React, { useEffect, useState } from "react"
import api from "../servicos/api"
import Headers from "../Headers";

function PadraoAlbuns(){

    const [albuns, setAlbuns] = useState([])
    useEffect(()=> {
            api.get('albuns/retornaTodos').then(resposta => {
                setAlbuns(resposta.data)
            });

    },[]);
    console.log(albuns);
    return(
    <div>
        <div>
         <Headers />
         </div>
            <div className="home-page">
                <div className="conteudo">
                <div className="row"> {
                    albuns.map(album=>  {
                    return (
                        <div className="card text-white bg-primary mb-3" key={album.id} >
                        <div className="card-header">{album.nome}</div>
                        <div className="card-body">
                         <h5 className="card-title">{album.nota}</h5>
                        <p className="card-text">{album.tipo}</p>
                     </div>
                    </div>

                )
            })
            
        }
        </div>
        </div>
        </div>
    </div>
    )
};

export default PadraoAlbuns;