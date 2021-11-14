import { useState, useEffect} from 'react'
import React from 'react'
import ItemCount from './ItemCount'
import ItemList from '../Items/ItemsList';
import { useParams } from 'react-router-dom';
import { task } from '../../utils/Mock'
import CartContextProvider from '../../Context/cartContext';
import { Col, Row, Spinner } from 'react-bootstrap';
import { getFirestore } from '../../servicios/getFirebase';


function ItemListContainer ({bienvenida}) {
    const [libros, setLibros] = useState([])
    const [loading, setloading] = useState(true)
    const { idCategoria } = useParams()

    useEffect(()=>{

      if (idCategoria) {
        const dbquery = getFirestore()
      dbquery.collection('libros').where('categoria', '==', idCategoria ).get()
      .then(resp =>
        setLibros( resp.docs.map(libro => ( {id: libro.id, ...libro.data()} )) )
        )
      .catch(error => alert('algo salio mal, por favor carga la pagina nuevamente :('))
      .finally(()=> setloading(false))
      } else {
        const dbquery = getFirestore()
      dbquery.collection('libros').get()
      .then(resp =>
        setLibros( resp.docs.map(libro => ( {id: libro.id, ...libro.data()} )) )
        )
      .catch(error => alert('algo salio mal, por favor carga la pagina nuevamente :('))
      .finally(()=> setloading(false))
      }

      
    }, [idCategoria] )
 
    return (
      
        <div id='contenedor'>
          
            <h2>{bienvenida}</h2>
            { loading ?  <h3> <Spinner animation="border" /> Un momento por favor <Spinner animation="border" /> </h3>  :
            
            <ItemList libros={libros} />
                     
            }
 
          
        </div>
    
    )
}

export default ItemListContainer