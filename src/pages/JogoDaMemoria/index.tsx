import * as C from '../../App.styles'
import { Title } from '../../components/Title'
import { Grid } from '../../components/Grid'
import { cards } from '../../data/cards'
import { Voltar } from '../../components/Voltar/Index'

export const JogoDaMemoria = () => {
  return (
    <C.Container>
      <C.Box>
      <Voltar/>
        <Title name={'Jogo da Memoria'} />
        <C.Memoria>
            <Grid cards={cards} />
        </C.Memoria>
      </C.Box>
    </C.Container>
  )
}
