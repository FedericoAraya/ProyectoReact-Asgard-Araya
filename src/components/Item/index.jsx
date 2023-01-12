import React from 'react'
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';


const Item = ({product}) => {
   
  return (    
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={ product.imagenProducto } alt={product.nombreProducto} />
      <Card.Body>
        <Card.Title>{product.nombreProducto }</Card.Title>
        <Card.Text>
          {product.descripcion}
        </Card.Text>
        <Card.Text>
          <span>${product.precio}</span>
        </Card.Text>
        <Card.Text>
          <Link to={`/detail/${product.idProd}`} className='btn btn-primary'>Mas info...</Link>
        </Card.Text>
      </Card.Body>
    </Card>    
  )
}

export default Item