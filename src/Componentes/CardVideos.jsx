import React from 'react'
import InfosUsuario from './InfosUsuario'
function CardVideo() {

    const titulo = "Título do vídeo";

    function reproduzVideo () {
        alert("O video esta sendo reproduzido")
    }

  return (
    <div className="box-pagina-principal" onClick={reproduzVideo}>


    <InfosUsuario/>

  </div>
  )
}

export default CardVideo