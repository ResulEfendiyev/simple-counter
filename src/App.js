import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
// import Management from "./components/Management/Management";
// import Item from './components/Item/Item';
import ItemList from "./components/ItemList/ItemList";

export const StateContext = React.createContext();

function App() {
  const [items, setItems] = useState([
    {
      id: 0,
      value: 0,
    },
    {
      id: 1,
      value: 0,
    },
    {
      id: 2,
      value: 0,
    },
    {
      id: 3,
      value: 0,
    },
  ]);
  return (
    <div className="App">
      <StateContext.Provider value={[items, setItems]}>
        <Header />
        <ItemList />
      </StateContext.Provider>
    </div>
  );
}

export default App;
