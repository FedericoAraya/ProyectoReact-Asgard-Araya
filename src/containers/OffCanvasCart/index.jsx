import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import CartWidget from '../../components/CartWidget';


function OffCanvasCart({ name, ...props }) {
  const [show, mostrar] = useState(false);
   
  const cerrarCart = () => mostrar(false);
  const abrirCart = () => mostrar(true);

  return (
    <>
      <Button variant="ligth" onClick={abrirCart} className="me-2">
        {name}
      </Button>
      <Offcanvas show={show} onHide={cerrarCart} {...props}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Cart</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          Acá se van a renderizar los productos seleccionados.
        </Offcanvas.Body>
      </Offcanvas>
      </>
  );
}

function Cart() {
  return (
    <>
      {['end'].map((placement, idx) => (
        <OffCanvasCart key={idx} placement={placement} name={<CartWidget/>} />
      ))}
      
    </>
  );
  }

export default Cart