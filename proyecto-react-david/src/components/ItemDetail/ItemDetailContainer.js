import React from 'react'
import {useState, useEffect} from 'react'
import ItemListContainer from '../ItemListContainer/ItemListContainer'
import { task } from '../../utils/Mock'
import ItemDetail from './ItemDetail'
import { useParams } from 'react-router-dom';

// const task2 = new Promise((res, rej) => {

//     setTimeout(() => {
//       res(libros);
//     }, 3000);
//   });

 const ItemDetailContainer = () => {

  const [item, setItem] = useState ([])
  const { id } = useParams()

  useEffect (() => {
    task
    .then(respuesta =>{
      setItem( respuesta.find(prod => prod.id=== id ))
      console.log(respuesta);
    })

  }, [])


    

    return(
        <>
          {/* <div>
            Hola soy detalle
          </div> */}
         <ItemDetail item={item}/>


        </>
    )
}

export default ItemDetailContainer;