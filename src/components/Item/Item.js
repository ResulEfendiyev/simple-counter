import React from "react";
import styles from "./Item.module.css";

function Item(props) {
  
  let disabled = "";
  if(props.val === 0 || props.val === "Zero"){
    disabled = true
  } else {
    disabled = false
  }

  
  return (
      <div className={styles.Container}>
        <div className={styles.textContainer}>
          <p className={props.val > 0 ? styles.Positive : styles.Zero}>{props.val}</p>
        </div>
        <div>
          <button onClick={props.increment} className={styles.Plus}>
            <i className="fa fa-plus"></i>
          </button>
          <button disabled={disabled} onClick={props.decrement} className={styles.Minus}>
            <i className="fa fa-minus"></i>
          </button>
          <button onClick={props.delete} className={styles.Trash}>
            <i className="fa fa-trash"></i>
          </button>
        </div>
      </div>
  );
}

export default Item;
