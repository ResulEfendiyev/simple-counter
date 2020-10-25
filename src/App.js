
import './App.css';
import Header from './components/Header/Header';
import Management from './components/Management/Management';
// import Item from './components/Item/Item';
import ItemList from './components/ItemList/ItemList';

function App() {
  return (
    <div className="App">
        <Header />
        
        <ItemList/>
      
    </div>
  );
}

export default App;
