import { useState, useEffect} from 'react'
import React from 'react'
import ItemCount from './ItemCount'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const libros = [
    {id: 1 , foto: 'https://imagessl8.casadellibro.com/a/l/t5/08/9788497592208.jpg', Titulo: 'Cien años de soledad', Precio: '2'},
    {id: 2 , foto: 'https://www.plazayjanescolombia.com/wp-content/uploads/1ae530d553804c97ae191adc18696baf.jpg', Titulo: 'La vuelta al mundo en ochenta días', Precio: '2'},
    {id: 3 , foto: 'https://images.cdn2.buscalibre.com/fit-in/360x360/ca/21/ca2172fc190516f831ee04d26910626a.jpg', Titulo: 'Dune', Precio: '3'},
    {id: 4 , foto: 'https://images-na.ssl-images-amazon.com/images/I/81pWlvxmVQL.jpg', Titulo: 'The sun also rises', Precio: '4'},
    {id: 5 , foto: 'http://i2.wp.com/uncorkedcanvas.com/blog/wp-content/uploads/2016/05/Alice-Wonderland.jpg', Titulo: 'Alice in wonderland', Precio: '4'},
    
]


// const getFetch = new Promise ((res, rej)=>{
//     let miPromesa = new Promise ((res, rej)=> {
//         setTimeout (()=> {
//             res(libros);
//         }, 3000)
    
//         console.log(getFetch)
//     })
// })


function ItemListContainer ({bienvenida}) {

    //const [libros, setLibros] = useState([])

    const task = new Promise((res, rej) => {
        setTimeout(() => {
          res(libros);
        }, 3000);
      });
    
      task.then((resultado) => {
        libros.map((producto) => {
    
            
          
        });
      });
   
    

    const onAdd = (cant) => {
        // console.log(cant)
        alert('¡Agregaste ' + cant + ' libros a tu bolsa!')
    }

    console.log(libros)

    return (
        
        <div>
            <h2>{bienvenida}</h2>
            { libros.map((libro, index) => <div key={index} >{libro.Titulo}
            <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={libro.foto} />
            <Card.Body>
                <Card.Title>{libro.Titulo}</Card.Title>
                <Card.Text>
                Precio:{libro.Precio}
                </Card.Text>
                <Button variant="primary">Detalle</Button>
            </Card.Body>
            </Card>
            
            </div>
            
            
            
            
            
            )}
            <ItemCount stock={10} initial={1} onAdd={onAdd}/>
            
        </div>
    )
}

// task.then((resultado) => {
//     libros.map((producto) => {

        
//       console.log(`ID del libro ${producto.Titulo}`);
//     });
//   });










// const lista = () =>{
//     let miPromesa = new Promise ((res, rej)=> {
//         setTimeout (()=> {
//             res(libros);   
//         }, 3000)
//     })

//     miPromesa.then(() => {
//     libros.map(libros =>
//         console.log('${libros.Titulo}')
        
//         )
// }) 
// }

// console.log(libros)

export default ItemListContainer