import Button from 'react-bootstrap/Button';
import {useState} from 'react'
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';



const ItemCount = ({stock, initial, onAdd}) => {
    const [count, setCount] = useState(initial)
    const [cambiodeBoton, setcambiodeBoton] = useState(true)

    function Suma () {
        if (count<stock){
            setCount(count +1 )
        }
        
    }

    function resta (){
        if (count>1){
            setCount(count -1 )
        }
        
    }

    const agregarBolsa=()=>{
        onAdd(count)
        setcambiodeBoton(false)
    }

    return (
        
        <div>
           
            <Card variant="outlined" style={{ width: '18rem', background: "transparent", borderWidth: 0, borderColor: 'transparent', elevation: 0 }}>            
            <Card.Body>
                <Card.Title>Bolsa</Card.Title>
                
                <Button id='boton' onClick={Suma}>+</Button>
                <label>{count }</label>
                <Button id='boton' onClick={resta}>-</Button><br/>

                
                
                { cambiodeBoton ?
                    <Button id='boton' onClick={agregarBolsa}>Agregar a la bolsa</Button>
                    :
                    <>
                    <Link to={`/cart`} >
                        <Button id='boton' >Ir a la bolsa</Button>
                        
                    </Link>

                    <Link exact to = "/">
                        <Button id='boton' >Agregar mas libros</Button>
                    </Link>
                        
                    </>
                }
                
                
            </Card.Body>
            </Card>


        </div> 
        
    )

}

export default ItemCount;
