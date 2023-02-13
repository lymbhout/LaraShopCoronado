
import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
// componentes
import Navbar from './Navbar/Navbar';
import {ItemListContainer} from './ItemListContainer/ItemListContainer';
import { ItemDetailContainer } from './ItemDetailContainer/ItemDetailContainer.jsx';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<ItemListContainer />}/>
          <Route path='/category/:idCategoria' element={<ItemListContainer />}/>
          <Route path='/item/:id'  element={<ItemDetailContainer />}/>
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;


