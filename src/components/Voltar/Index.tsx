import { useNavigate } from 'react-router-dom';
import { Title } from '../Title';

export const Voltar = () => {
    const navigate = useNavigate();
    const handleClick = () => {
        navigate('/');
    };
  return (
    <div onClick={handleClick} style={{width: '100%', paddingLeft:"60px", cursor: 'pointer'}}>
         <Title name={'←'}/>
    </div>
  )
}
