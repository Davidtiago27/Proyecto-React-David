import React from 'react'
import { useContext } from 'react'
import { Badge, Card, ListGroup } from 'react-bootstrap'
import { cartContext } from '../../Context/cartContext'

const Cart = () => {

    const {cartList} = useContext(cartContext)
    
    
    return (
        <div>
            
            <h3>Este es tu bolsa de compras</h3>
            {cartList.map(item => <div> 

                
        
                
                <Card className="text-center">
                    
                    <Card.Body>
                        <Card.Title>{item.item.Titulo}</Card.Title>
                        
                    </Card.Body>
                    <Card.Footer className="text-muted">
                    <Badge variant="primary" pill>
                            {item.quantity}
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
        </div>
    )


}

export default Cart