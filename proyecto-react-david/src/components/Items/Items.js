//import { useState, useEffect} from 'react'
import React from 'react'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import ItemCount from '../ItemListContainer/ItemCount';
import { Link } from 'react-router-dom';
import { Col, Row } from 'react-bootstrap';
// import { CardGroup } from 'react-bootstrap';

const Item = ({libro}) => {
    return(
        <>

            {/* <div className="container" key={libro.Titulo}  >

                <div className="row">
                    <div className="col-md-4" > */}
                    <Row xs={1} md={2} className="g-4">
                        <Col>
                        <Card style={{ width: '16rem' }}
                        >
                        <Card.Img variant="top" src={libro.foto} />
                        <Card.Body>
                            <Card.Title>{libro.Titulo}</Card.Title>
                            <Card.Text>
                            Precio: ${libro.Precio}
                            </Card.Text>
                            <Link to={`/detalle/${libro.id}`} >
                                <Button id='boton'>Detalle</Button>
                            </Link>
                        </Card.Body>
                        </Card>
                        </Col>
                        </Row>

                    {/* </div>

                    
                </div>           
                
                        
                    
                    
            </div> */}

        </>
    )
}

export default Item;