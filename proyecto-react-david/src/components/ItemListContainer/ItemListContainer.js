import { useState, useEffect} from 'react'
import React from 'react'
import ItemCount from './ItemCount'
// import Card from 'react-bootstrap/Card';
// import Button from 'react-bootstrap/Button';
import ItemList from '../Items/ItemsList';
import { useParams } from 'react-router-dom';

const libros = [
    {id: 1 , categoria: 'realismo' , foto: 'https://imagessl8.casadellibro.com/a/l/t5/08/9788497592208.jpg', Titulo: 'Cien años de soledad', Precio: '2'},
    {id: 2 , categoria: 'ficcion' , foto: 'https://www.plazayjanescolombia.com/wp-content/uploads/1ae530d553804c97ae191adc18696baf.jpg', Titulo: 'La vuelta al mundo en ochenta días', Precio: '2'},
    {id: 3 , categoria: 'ficcion' , foto: 'https://images.cdn2.buscalibre.com/fit-in/360x360/ca/21/ca2172fc190516f831ee04d26910626a.jpg', Titulo: 'Dune', Precio: '3'},
    {id: 4 , categoria: 'clasicos' , foto: 'https://images-na.ssl-images-amazon.com/images/I/81pWlvxmVQL.jpg', Titulo: 'The sun also rises', Precio: '4'},
    {id: 5 , categoria: 'clasicos' , foto: 'http://i2.wp.com/uncorkedcanvas.com/blog/wp-content/uploads/2016/05/Alice-Wonderland.jpg', Titulo: 'Alice in wonderland', Precio: '4'},
    
]

const task = new Promise((res, rej) => {

  setTimeout(() => {
    res(libros);
  }, 3000);
});

// const promesa1 = new Promise ((resolve)=>{

//   setTimeout(()=>{
//       resolve(libros)
//   }, 2000)
// })

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
    
      // task.then((resultado) => {
      //   libros.map((producto) => {
    
        
          
      //   });
      // });
   
    console.log(idCategoria);

    const onAdd = (cant) => {
        
        alert('¡Agregaste ' + cant + ' libros a tu bolsa!')
    }

    // console.log(libros)

    return (
        
        <div>
            <h2>{bienvenida}</h2>
            { loading ? <h3>Un momento por favor</h3> :
            
            <ItemList libros={libros} />
            
            
            }
            
            {<ItemCount stock={10} initial={1} onAdd={onAdd}/>}
        </div>
    )
}


export const promesa1 = new Promise ((resolve)=>{

  setTimeout(()=>{
      resolve(libros)
  }, 2000)
})
export default ItemListContainer