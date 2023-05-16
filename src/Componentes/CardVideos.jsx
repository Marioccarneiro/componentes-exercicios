// import React from 'react'
// import InfosUsuario from './InfosUsuario'
// function CardVideo() {

//     const titulo = "Título do vídeo";

//     function reproduzVideo () {
//         alert("O video esta sendo reproduzido")
//     }

//   return (
//     <div className="box-pagina-principal" onClick={reproduzVideo}>


//     <InfosUsuario/>

//   </div>
//   )
// }

// export default CardVideo 

import React from "react";

const titulo = "Título do vídeo";

export function reproduzVideo() {
  alert("O vídeo está sendo reproduzido");
}

export function CardVideo({newObj, usuario}) {
  return (
    <div>
      <div className="box-pagina-principal" onClick={reproduzVideo}>
        <img src={newObj.imagem} alt="" />
        <h4>{newObj.titulo}</h4>
        <p>{usuario.nome}</p>
      </div>
    </div>
  );
}

export default CardVideo 