
import './App.css';
// react router
import { BrowserRouter,Routes,Route } from 'react-router-dom';
// css tosttify
import 'react-toastify/dist/ReactToastify.css';
// context
import { CarritoProvider } from '../Context/CarritoContex';
// firebase
import { getProductos } from '../utils/firebase';
// componentes
import Navbar from './Navbar/Navbar';
import {ItemListContainer} from './ItemListContainer/ItemListContainer';
import { ItemDetailContainer } from './ItemDetailContainer/ItemDetailContainer.jsx';
import { Inicio } from './Inicio/Inicio.jsx';
import { Checkout } from './Checkout/Checkout';
import { Cart } from './Cart/Cart';
// toastify
import { ToastContainer} from 'react-toastify';
function App() {
  // cargarBDD()
  // getProductos()
  return (
    <div className="App">
      <BrowserRouter>
          <CarritoProvider>
            <Navbar />
            <Routes>
              <Route path='/' element={<Inicio />}/>
              <Route path='/home' element={<ItemListContainer />}/>
              <Route path='/category/:idCategoria' element={<ItemListContainer />}/>
              <Route path='/item/:id'  element={<ItemDetailContainer />}/>
              <Route path='/Checkout'  element={<Checkout />}/>
              <Route path='/Cart'  element={<Cart />}/>
            </Routes>
          </CarritoProvider>
          <ToastContainer/>
      </BrowserRouter>

    </div>
  );
}

export default App;


