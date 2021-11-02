import { useState, useEffect} from 'react'
import React from 'react'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import ItemCount from '../ItemListContainer/ItemCount';
import Item from './Items';
import { Row } from 'react-bootstrap';



const ItemList = ({libros}) => {
    return(
        <div >
            
                {libros.map((libro) => <Item libro={libro}/>)}
              
            
        
        </div>
    )
}

export default ItemList;