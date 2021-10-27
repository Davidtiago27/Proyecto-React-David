import React from 'react'
import { useContext } from 'react'
import { Badge, Card, ListGroup } from 'react-bootstrap'
import { cartContext } from '../../Context/cartContext'

const Cart = () => {

    const {cartList} = useContext(cartContext)
    
    
    return (
        <div>
            {cartList.map(item => <div> 
                

                    
                    <ListGroup as="ol" numbered>
                        <ListGroup.Item
                            as="li"
                            className="d-flex justify-content-between align-items-start"
                        >
                            <div className="ms-2 me-auto">
                            <div className="fw-bold">{item.item.Titulo}</div>
                            
                            </div>
                            <Badge variant="primary" pill>
                            {item.cantidad}
                            </Badge>
                        </ListGroup.Item>
                        
                        
                        </ListGroup>
            
            
            
            
            </div>
            )}
        </div>
    )


}

export default Cart