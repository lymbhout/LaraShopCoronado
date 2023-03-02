
import './App.css';
// react router
import { BrowserRouter,Routes,Route } from 'react-router-dom';

// css tosttify
import 'react-toastify/dist/ReactToastify.css';
// context
import { DarkModeProvider } from '../Context/DarkModeContext';
import { CarritoProvider } from '../Context/CarritoContex';
// firebase
import { getProductos } from '../utils/firebase';
// componentes
import Navbar from './Navbar/Navbar';
import {ItemListContainer} from './ItemListContainer/ItemListContainer';
import { ItemDetailContainer } from './ItemDetailContainer/ItemDetailContainer.jsx';
import { Banner } from './Banner/Banner.jsx';
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
        <DarkModeProvider>
          <CarritoProvider>
            <Navbar />
            <Banner />
            <Routes>
              <Route path='/' element={<ItemListContainer />}/>
              {/* <Route path='/' element={<Banner />}/> */}
              <Route path='/category/:idCategoria' element={<ItemListContainer />}/>
              <Route path='/item/:id'  element={<ItemDetailContainer />}/>
              <Route path='/Checkout'  element={<Checkout />}/>
              <Route path='/Cart'  element={<Cart />}/>
            </Routes>
          </CarritoProvider>
          <ToastContainer/>
        </DarkModeProvider>
      </BrowserRouter>

    </div>
  );
}

export default App;


