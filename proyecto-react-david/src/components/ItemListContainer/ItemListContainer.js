import React from 'react'
import ItemCount from './ItemCount'

function ItemListContainer ({bienvenida}) {

    const onAdd = (cant) => {
        // console.log(cant)
        alert('¡Agregaste ' + cant + ' libros a tu bolsa!')
    }

    return (
        
        <div>
            <h2>{bienvenida}</h2>
            <ItemCount stock={10} initial={1} onAdd={onAdd}/>
        </div>
    )
}

export default ItemListContainer