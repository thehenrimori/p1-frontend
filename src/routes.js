import React from 'react'
import Landing from './pages/Landing'
import { BrowserRouter, Route} from 'react-router-dom'
import PadraoArtista from './pages/PadraoArtista'
import PadraoAlbum from './pages/PadraoAlbum'

function Routes(){
    return(
        <BrowserRouter>
            <Route path="/" exact component={Landing} />
            <Route path="/artistas" component={PadraoArtista} />
            <Route path="/albuns" component={PadraoAlbum} />
        </BrowserRouter>
    )

};
export default Routes;