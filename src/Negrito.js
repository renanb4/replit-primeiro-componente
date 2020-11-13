import React from 'react'

function Negrito (propriedades) {
  const valorRecebido = propriedades.texto;

  return <b>{valorRecebido}</b>
}

function Resultado() {
  return <Negrito texto="Renan Michel" />
}

export default Resultado;
