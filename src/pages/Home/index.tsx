import * as C from '../../App.styles';
import { useNavigate } from 'react-router-dom';
import { Title } from '../../components/Title';

export const Home = () => {
    const navigate = useNavigate();

  return (
    <C.Container>
    <C.Box>
      <C.Home>
      <Title name={'Math Challenge'} />
       <C.Button  onClick={() => navigate('labirinto')}>
        Labirinto
       </C.Button>
       <C.Button onClick={() => navigate('jogo-da-memoria')}>
        Jogo de Memoria
       </C.Button>
      </C.Home>
    </C.Box>
  </C.Container>
  )
}
