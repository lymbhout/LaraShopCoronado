
import './App.css';

// componentes
import Navbar from './Navbar/Navbar';
import ItemListContainer from './ItemListContainer/ItemListContainer';
function App() {
  return (
    <div className="App">
      <Navbar />
      <ItemListContainer 
      greeting={'styling'}/>
    </div>
  );
}

export default App;
