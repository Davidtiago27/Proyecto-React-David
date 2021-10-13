import React from 'react'
import Item from '../Items/Items';
import Card from 'react-bootstrap/Card';


const ItemDetail = ({item}) => {
    return(
        <>
            {/* <h2>{item.Titulo}</h2> */}
            <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={item.foto} />
                    <Card.Body>
                        <Card.Title>{item.Titulo}</Card.Title>
                        <Card.Text>
                        Precio: ${item.Precio}
                        </Card.Text>
                        <Card.Text>
                        {item.descripcion}
                        </Card.Text>
                        
                    </Card.Body>
                    </Card>
                 
            
        </>
    )
}

export default ItemDetail;