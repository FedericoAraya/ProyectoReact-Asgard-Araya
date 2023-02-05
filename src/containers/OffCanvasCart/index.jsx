import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import CartWidget from '../../components/CartWidget';
import Cart from '../CartContainer';

function OffCanvasCart({widget}) {
  const mostrarWidget = widget
  
  const [showCart, setShowCart] = useState(false);

  const cerrar = () => setShowCart(false);
  const abrir = () => setShowCart(true);

  return (
    <>
      {mostrarWidget === false  ?<Button border="light"  onClick={abrir} className="btn btn-primary " > Ir al Carrito</Button> : <Button onClick={abrir} className="btn btn-light bg-transparent" hover="false" ><CartWidget/></Button>}
      <Offcanvas show={showCart} onHide={cerrar} placement="end" >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Carrito
      </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Cart/>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default OffCanvasCart
