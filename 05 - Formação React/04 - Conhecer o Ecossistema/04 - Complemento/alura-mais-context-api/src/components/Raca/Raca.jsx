import React from 'react'

import RacaSelecionada from '../RacaSelecionada'
import RacaNaoSelecionada from '../RacaNaoSelecionada'
import RacasSelecionadasContext from '../../context/racasSelecionadas'

const Raca = () => {
  return (
    <RacasSelecionadasContext.Consumer>
      {
        ({name}) => {
          const racaFoiSelecionada = Boolean(name);
          
          return (
            racaFoiSelecionada
            ? <RacaSelecionada />
            : <RacaNaoSelecionada />
          )
        }
      }
    </RacasSelecionadasContext.Consumer>
  )
}

export default Raca