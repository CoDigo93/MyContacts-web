import { Overlay, Dialog, Footer } from "./styles";
import  Button  from '../button';
import ReactDOM from "react-dom";

export const Modal = ({Danger}) => {
  return ReactDOM.createPortal(
    <Overlay>
      <Dialog Danger={Danger}>
        <h1>Título do modal</h1>
        <p>Corpo do modal</p>

        <Footer>
          <button type="button" className="cancelButton">
            Cancelar
          </button>
          <Button Danger={Danger}>
            Deletar
          </Button>
        </Footer>
      </Dialog>
    </Overlay>,
    document.getElementById('modal-root'),
  );
}