import Button from '@restart/ui/esm/Button'
import React from 'react'
import { useContext } from 'react'
import { Badge, Card, ListGroup } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { cartContext } from '../../Context/cartContext'

const Cart = () => {

    const {cartList} = useContext(cartContext)
    const totalDeCompra = cartList.reduce(
        (sum, item) => sum + item.quantity * item.item.Precio,
        0)
    
    
    return (
        <div>
            
            <h3>Esta es tu bolsa de compras</h3>
            {cartList.length === 0 ? <h3>No hay libros en tu bolsa todavia
                <Link exact to = "/">
                        <Button id='boton' >Ver libros disponibles</Button>
                    </Link>
            </h3> : null}
            {cartList.map(item => <div> 

                
            

                {/* <aside>
                    <div className="itemCart">
                        <div>
                        <h3>{item.item.Titulo}</h3>
                        <div className="itemInfo">
                            <p>Precio: ${item.item.Precio}</p>
                            <p>Total: ${(item.quantity * item.item.Precio).toFixed(2)}</p>
                        </div>
                        <div className="buttons">
                            <Button  size="small" disableElevation variant="contained">
                            -
                            </Button>
                            <p> {item.amount} </p>



                            <Button
                            size="small"
                            disableElevation
                            variant="contained"
                            
                            >
                            +
                            </Button>
                        </div>
                        </div>
                        <img src={item.item.foto} />
                    </div>
                    </aside> */}

        
                
                <Card className="text-center">
                    
                    
                    <Card.Body>
                        <Card.Title>{item.item.Titulo}</Card.Title>
                        
                    </Card.Body>
                    <Card.Footer className="text-muted">
                    <Badge variant="primary" pill>
                        Cantidad: {item.quantity}
                    </Badge>
                    <Badge bg="dark" pill>
                        Precio: ${item.item.Precio}
                    </Badge>
                    </Card.Footer>
                </Card>

                


                    
                {/* <ListGroup as="ol" className="d-flex justify-content-between align-items-start">
                        <ListGroup.Item>

                        <div className="ms-2 me-auto">
                            {item.item.Titulo}
    
                        </div>
                            
                            
                            
                        <Badge variant="primary" pill>
                            {item.cantidad}
                            </Badge>
                        </ListGroup.Item>
                        
                        
                    </ListGroup> */}
            
            
            
            
            </div>

            
            )}

        <h2>Total: {totalDeCompra.toFixed(2)}</h2>       
        </div>
        
    )

    
}

export default Cart