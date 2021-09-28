import React from 'react'
import {useState, useEffect} from 'react'
import ItemListContainer from '../ItemListContainer/ItemListContainer'
import {promesa1} from '../ItemListContainer/ItemListContainer'
import ItemDetail from './ItemDetail'



const ItemDetailContainer = () => {
    const [item, setItem] = useState ({})

    useEffect (() => {
        promesa1
        .then(resp => setItem(resp))
    }, [])

    return(
        <>

         <ItemDetail item={item}/>


        </>
    )
}

export default ItemDetailContainer;