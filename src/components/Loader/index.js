import ReactDOM from 'react-dom'
import { Overlay } from './styles'

export const Loader = ({isLoading}) => {
  if(!isLoading) {
    return null;
  }
  
  return ReactDOM.createPortal(
    <Overlay >
      <div className='loader'></div>
    </Overlay>  ,
    document.getElementById('loader-root')

  )
  
}