import * as C from '../../App.styles';
import { useNavigate } from 'react-router-dom';
import { Title } from '../../components/Title';

export const Final = () => {
    const navigate = useNavigate();

  return (
    <C.Container>
    <C.Box>
      <C.Final>
      <Title name={'Math Challenge'} />
      
       <C.Button style={{fontSize:"26px"}} onClick={() => navigate('/')}>
        Parabens! Clique aqui para voltar ao inicio.
       </C.Button>
      </C.Final>
    </C.Box>
  </C.Container>
  )
}
