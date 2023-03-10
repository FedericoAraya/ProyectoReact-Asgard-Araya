import React, {  useState } from 'react';
import { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import FormCompra from '../../components/FormCompra';
import { Shop } from '../../context/ShopProvider';


function FormContainer({finalizarCompra}) {
 

 

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const {clienteOk} = useContext(Shop)


  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Finalizar Compra
      </Button>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Formulario de Compra</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <FormCompra />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancelar
          </Button>
          {clienteOk && <button className='btn btn-dark' onClick={()=>finalizarCompra()}>Confirmar Compra</button>     }      
          </Modal.Footer>
      </Modal>
    </>
  );
}



export default FormContainer