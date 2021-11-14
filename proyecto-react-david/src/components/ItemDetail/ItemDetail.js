import React from 'react'
import { useState, useEffect, useContext} from 'react'
import Item from '../Items/Items';
import Card from 'react-bootstrap/Card';
import ItemCount from '../ItemListContainer/ItemCount';
import { cartContext } from '../../Context/cartContext';



const ItemDetail = ({item}) => {

    const [cantidad, setcantidad] = useState(0)

    const {addToCart} = useContext(cartContext)
    const onAdd = (cant) => {
            setcantidad(cant)
            addToCart({item: item, quantity: cant})
            alert('¡Agregaste ' + cant + ' libros a tu bolsa!')
            
        }

    return(
        <>


            <Card>
                <Card.Img variant="top" src={item.foto} style={{ width: '14rem' }}/>
                <Card.Body>
                <Card.Text>
                {item.descripcion}
                </Card.Text>
                <Card.Text>
                            Unidades disponibles: {item.stock}
                            </Card.Text>
                </Card.Body>
                
            </Card>


            {<ItemCount stock={10} initial={1} onAdd={onAdd}/>}    
        </>
    )
}

export default ItemDetail;