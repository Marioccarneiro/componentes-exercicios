import React from 'react'

export function InfosUsuario({usuario}) {

  return (
    <>
    {/* <img src="https://picsum.photos/400/400?a=1 " alt="" /> */}
    <h4>Nome: {usuario.nome}</h4>
    </>
  )
}

export default InfosUsuario