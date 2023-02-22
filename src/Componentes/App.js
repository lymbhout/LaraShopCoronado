
import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
// componentes
import Navbar from './Navbar/Navbar';
import {ItemListContainer} from './ItemListContainer/ItemListContainer';
import { ItemDetailContainer } from './ItemDetailContainer/ItemDetailContainer.jsx';
import { Banner } from './Banner/Banner.jsx';
import { Checkout } from './Checkout/Checkout';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Banner />
        <Routes>
          <Route path='/' element={<ItemListContainer />}/>
          {/* <Route path='/' element={<Banner />}/> */}
          <Route path='/category/:idCategoria' element={<ItemListContainer />}/>
          <Route path='/item/:id'  element={<ItemDetailContainer />}/>
          <Route path='/Checkout'  element={<Checkout />}/>
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;


