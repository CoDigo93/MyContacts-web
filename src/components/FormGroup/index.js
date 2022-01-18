import { Container } from './styles'

export const FormGroup = ({children, error}) => {
  return (
    <Container>
      {children}
      {error && <small>{error}</small>}
    </Container>
  )
}