import React from 'react'

function Negrito (propriedades) {
  const valorRecebido = propriedades.children;

  return <b>{valorRecebido}</b>
}

function Resultado() {
  return <Negrito>Gertrudes</Negrito>
}

export default Resultado;
