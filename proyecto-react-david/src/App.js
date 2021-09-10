import './App.css';
import Navbar from './components/Navbar/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';


function App() {
  return (
    <>  

    <Navbar />
    <ItemListContainer bienvenida='Hola, bienvenido a tu libreria favorita' /> 

    </>
  )
  
}

export default App;
