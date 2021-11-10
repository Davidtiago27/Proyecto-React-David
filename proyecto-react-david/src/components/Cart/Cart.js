// import Button from '@restart/ui/esm/Button'
import React from 'react'
import { useContext } from 'react'
import {useState, useEffect} from 'react'
import { Badge, Card, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { cartContext } from '../../Context/cartContext'
import { getFirestore } from '../../servicios/getFirebase';
import firebase from 'firebase';
import 'firebase/firestore';

const Cart = () => {
    const [formData, setFormData] = useState({
        name: '',
        telefono: '',
        email: '',
        email2: ''

    })   


    const {cartList, totalDeCompra, eliminarProducto} = useContext(cartContext)
    



    const crearOrden = (e) => {
        e.preventDefault()

        let orden = {}
        
        orden.date = firebase.firestore.Timestamp.fromDate(new Date())

        orden.buyer = formData

        orden.total = totalDeCompra()

        orden.items = cartList.map (cartItem =>{
            const id = cartItem.item.id;
            const title = cartItem.item.Titulo;
            const price = cartItem.item.Precio * cartItem.quantity;

            return {id, title, price}

        })

    const db = getFirestore()  
    db.collection('orders').add(orden)
    .then(resp => console.log(resp))
    .catch(err => console.log(err))
    





     
    

    }
    function handleChange(e) {
        setFormData(
                    {
                        ...formData,
                        [e.target.name]: e.target.value
                    }
                )

            
        }
    console.log(formData);

    return (
        <div id='contenedor'>
            
            <h3>Esta es tu bolsa de compras</h3>
            {cartList.length === 0 ? <h3>No hay libros en tu bolsa todavia
                <Link exact to = "/">
                        <Button id='boton' >Ver libros disponibles</Button>
                    </Link>
            </h3> : 

            <div>
            {cartList.map(item => <div> 

                
            

               

        
                
                <Card className="text-center">
                    
                    
                    <Card.Body>
                        <Card.Title>{item.item.Titulo}</Card.Title>
                        
                    </Card.Body>
                    <Card.Footer className="text-muted">
                    <Badge id='boton2'>
                        Cantidad: {item.quantity}
                    </Badge>
                    <Badge id='boton'>
                        Precio: ${item.item.Precio}
                    </Badge>
                    <Button id='boton1' onClick={()=>eliminarProducto(item)} >X
                    </Button>
                    
                    </Card.Footer>
                </Card>
                        
            </div>

                

            
            )}
            <form
                onSubmit={crearOrden}
                // onChange={handleChange}
                onChange={handleChange}
                
            >

                

                <input
                type='text'
                placeholder='Ingresa tu nombre'
                name='name'
                value={formData.name}
                id='formulario'
                

                />

                <input
                type='text'
                placeholder='Ingresa tu numero de telefono'
                name='tel'
                value={formData.tel}
                id='formulario'
                />

                <input
                type='text'
                placeholder='Ingresa tu email'
                name='email'
                value={formData.email}
                id='formulario'
                />

                <input
                type='text'
                placeholder='Confirma tu email'
                name='email2'
                value={formData.email2}
                id='formulario'
                />
                {formData.email === formData.email2? <button id='boton'
                // onClick={crearOrden}
                >Comprar</button>  : <Button  id='boton3' disabled>Comprar</Button > }


                
            </form>
            </div>  

        }

            

        <h2>Total: ${totalDeCompra()}</h2>       
        </div>
        
    )

    
}

export default Cart