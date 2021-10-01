import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetail/ItemDetailContainer';
import { Link } from 'react-router-dom';

function App() {
  return (
     
      <BrowserRouter>
        <Navbar />
        <Switch>   
          <Route exact path='/' > 
            <ItemListContainer bienvenida='Hola, bienvenido a tu libreria favorita' />
          </Route> 

          <Route path='/categoria/:idCategoria' component={ItemListContainer}/>

          <Route exact path='/detalle/:id' component={ItemDetailContainer}/> 
            
          
          
        </Switch>
      </BrowserRouter>
  )
  
}

export default App;
