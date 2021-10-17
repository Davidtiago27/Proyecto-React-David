import React from 'react'
import { useState, useEffect} from 'react'
import Item from '../Items/Items';
import Card from 'react-bootstrap/Card';
import ItemCount from '../ItemListContainer/ItemCount';



const ItemDetail = ({item}) => {
    const [cantidad, setcantidad] = useState(0)
    const onAdd = (cant) => {
        setcantidad(cant)
        alert('¡Agregaste ' + cant + ' libros a tu bolsa!')
    }

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
                 
                {<ItemCount stock={10} initial={1} onAdd={onAdd}/>}
        </>
    )
}

export default ItemDetail;