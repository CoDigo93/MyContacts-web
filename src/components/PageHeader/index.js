import { Link } from 'react-router-dom';
import arrow from '../../assets/icons/arrow.svg';

import { Container } from './styles';

export const PageHeader = ({title}) => {
  return (
    <Container>
      <Link to='/' >
        <img src={arrow} alt='back' />
        <span>Voltar</span>
      </Link>
      <h1>{title}</h1>
    </Container>
  )
}