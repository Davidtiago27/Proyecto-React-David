import { useState, useEffect} from 'react'
import React from 'react'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import ItemCount from '../ItemListContainer/ItemCount';
import Item from './Items';

const ItemList = ({libros}) => {
    return(
        <>

            {libros.map((libro) => <Item libro={libro}/>)}

        </>
    )
}

export default ItemList;