import { useState, useEffect} from 'react'
import React from 'react'
import ItemCount from './ItemCount'
// import Card from 'react-bootstrap/Card';
// import Button from 'react-bootstrap/Button';
import ItemList from '../Items/ItemsList';
import { useParams } from 'react-router-dom';
import { task } from '../../utils/Mock'
import CartContextProvider from '../../Context/cartContext';
import { Col, Row } from 'react-bootstrap';


function ItemListContainer ({bienvenida}) {
    const [libros, setLibros] = useState([])
    const [loading, setloading] = useState(true)
    const { idCategoria } = useParams()

    useEffect(()=>{

      if (idCategoria) {
        task
        .then(respuesta =>{
          setLibros( respuesta.filter(prod => prod.categoria=== idCategoria ) )
        })
        .catch(error => console.log(error))
        .finally(()=> setloading(false))
      }else{
        task
        .then(respuesta =>{
          setLibros(respuesta)
        })
        .catch(error => console.log(error))
        .finally(()=> setloading(false))
      }

      
    }, [idCategoria] )
    

    // const onAdd = (cant) => {
        
    //     alert('¡Agregaste ' + cant + ' libros a tu bolsa!')
    // }

    return (
      
        <div >
          
            <h2>{bienvenida}</h2>
            { loading ? <h3>Un momento por favor</h3> :
            
            <ItemList libros={libros} />
                     
            }
            
            {/* {<ItemCount stock={10} initial={1} onAdd={onAdd}/>} */}
          
        </div>
    
    )
}

export default ItemListContainer