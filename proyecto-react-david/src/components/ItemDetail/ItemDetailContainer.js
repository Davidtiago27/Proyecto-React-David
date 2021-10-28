import { task } from '../../utils/Mock'
import { createContext, useContext } from "react";
import React from 'react'
import {useState, useEffect} from 'react'
import ItemListContainer from '../ItemListContainer/ItemListContainer'
import ItemDetail from './ItemDetail'
import { useParams } from 'react-router-dom';


 const ItemDetailContainer = () => {

  const [item, setItem] = useState ({})
  const { id } = useParams()

  useEffect (() => {
    task
    .then(respuesta =>{
      setItem( respuesta.find(prod => prod.id== id ))
      
    })

  }, {})

  


    

    return(
        <>
        
         <ItemDetail item={item}/>


        </>
    )
}

export default ItemDetailContainer;