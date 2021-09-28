//import { useState, useEffect} from 'react'
import React from 'react'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import ItemCount from '../ItemListContainer/ItemCount';

const Item = ({libro}) => {
    return(
        <>

            <div key={libro.Titulo} >
                    <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={libro.foto} />
                    <Card.Body>
                        <Card.Title>{libro.Titulo}</Card.Title>
                        <Card.Text>
                        Precio: ${libro.Precio}
                        </Card.Text>
                        <Button variant="dark">Detalle</Button>
                        <ItemCount/>
                    </Card.Body>
                    </Card>
                    
            </div>

        </>
    )
}

export default Item;