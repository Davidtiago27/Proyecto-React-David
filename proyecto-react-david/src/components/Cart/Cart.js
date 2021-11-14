
import React from 'react'
import { useContext } from 'react'
import {useState, useEffect} from 'react'
import { Badge, Card, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { cartContext } from '../../Context/cartContext'
import { getFirestore } from '../../servicios/getFirebase';
import firebase from 'firebase';
import 'firebase/firestore';
import ItemCount from '../ItemListContainer/ItemCount'




const Cart = () => {
    const [formData, setFormData] = useState({
        name: '',
        telefono: '',
        email: '',
        email2: ''

    })   


    const {cartList, totalDeCompra, eliminarProducto, borrarCart} = useContext(cartContext)
    



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
    .then(resp => alert('¡Gracias por tu compra!'))
    .catch(err => alert('algo salio mal, por favor carga la pagina nuevamente :('))
    .finally(()=> 
        setFormData({
            name: '',
            telefono: '',
            email: '',
            email2: ''}),
            borrarCart()
    )

    const nuevoStock = db.collection('libros').where(
        firebase.firestore.FieldPath.documentId(), 'in', cartList.map(i => i.item.id)
    )

    const batch = db.batch()

    nuevoStock.get()
    .then( collection=>{
        collection.docs.forEach(docSnapshot => {
            batch.update(docSnapshot.ref, {
                stock: docSnapshot.data().stock - cartList.find(item => item.item.id === docSnapshot.id).quantity
            })
        })

        batch.commit().then(res =>{
            console.log('resultado batch', res);
        })
    })
    
    

    }
    function handleChange(e) {
        setFormData(
                    {
                        ...formData,
                        [e.target.name]: e.target.value
                    }
                )

            
        }
    


       

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
        
                >Comprar</button>  : <Button  id='boton3' disabled>Comprar</Button > }


                
            </form>
            </div>  

        }

            

        <h2>Total: ${totalDeCompra()}</h2>       
        </div>
        
    )

    
}

export default Cart