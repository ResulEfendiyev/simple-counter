import React, { useState } from "react";
import Item from "../Item/Item";
import styles from "./ItemList.module.css";


function ItemList() {
  const initialState = [
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
  ];
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



  const incrementHandler = (id) => {
    const index = items.findIndex((item) => item.id === id);
    const newItems = [...items];
    const newItem = {
      id: index,
      value: newItems[index].value + 1,
    };

    newItems[index] = newItem;

    setItems(newItems);
  };

  const decrementHandler = (id) => {
    const index = items.findIndex((item) => item.id === id);
    const newItems = [...items];
    const newItem = {
      id: newItems[index].id,
      value: newItems[index].value - 1,
    };

    newItems[index] = newItem;

    setItems(newItems);
  };

  const deleteHandler = (id) => {
    // const index = items.findIndex((item) => item.id === id);
    let newItems = [...items];
    newItems = newItems.filter((item) => item.id !== id);
    setItems(newItems);
  };

  const refreshHandler = () => {
    let newItems = [...items];
    for (let i = 0; i < newItems.length; i++) {
      newItems[i].id = i;
      newItems[i].value = 0;
    }
    setItems(newItems);
  };

  const recycleHandler = () => {
    setItems(initialState);
  };

  

  return (
    <div>
      <button onClick={refreshHandler} className={styles.Refresh}>
        <i className="fas fa-sync-alt"></i>
      </button>
      <button
        disabled={items.length ? true : false}
        onClick={recycleHandler}
        className={styles.Recycle}
      >
        <i className="fas fa-recycle"></i>
      </button>
      
      {items.map((item) => (
        
          <Item
            items={items}
            key={item.id}
            increment={() => incrementHandler(item.id)}
            decrement={() => decrementHandler(item.id)}
            delete={() => deleteHandler(item.id)}
            val={item.value ? item.value : "Zero"}
          />
      ))}
    </div>
  );
}
 
export default ItemList;
