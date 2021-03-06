import { task } from '../../utils/Mock'
import { createContext, useContext } from "react";
import React from 'react'
import {useState, useEffect} from 'react'
import ItemListContainer from '../ItemListContainer/ItemListContainer'
import ItemDetail from './ItemDetail'
import { useParams } from 'react-router-dom';
import { getFirestore } from '../../servicios/getFirebase';



 const ItemDetailContainer = () => {

  const [item, setItem] = useState ({})
  const { id } = useParams()


  

  useEffect (() => {

    const dbqueryDetail = getFirestore()
          dbqueryDetail.collection('libros').doc(id).get()
          .then(resp => {
            if (resp.exists){
              setItem({id: resp.id, ...resp.data()}) 
            }

          })

  }, {})

  


    

    return(
        <div id='contenedor'>
        
         <ItemDetail item={item}/>


        </div>
    )
}

export default ItemDetailContainer;