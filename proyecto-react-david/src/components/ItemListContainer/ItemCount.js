import Button from 'react-bootstrap/Button';
import {useState} from 'react'
import Card from 'react-bootstrap/Card';



const ItemCount = ({stock, initial, onAdd}) => {
    const [count, setCount] = useState(initial)

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
    }

    return (
        
        <div>
            
            {/* <label>{count}</label><br/>
            <Button variant="dark" onClick={Suma}>+</Button>
            <Button variant="secondary" onClick={agregarBolsa}>Agregar a la bolsa</Button>
            <Button variant="dark" onClick={resta}>-</Button> */}
            <Card style={{ width: '18rem' }}>            
            <Card.Body>
                <Card.Title>Bolsa</Card.Title>
                <Card.Text>{count}</Card.Text>
                <Button variant="dark" onClick={Suma}>+</Button>
                <Button variant="secondary" onClick={agregarBolsa}>Agregar a la bolsa</Button>
                <Button variant="dark" onClick={resta}>-</Button>
            </Card.Body>
            </Card>


        </div> 
        
    )

}

export default ItemCount
