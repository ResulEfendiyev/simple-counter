import React, { useState, useContext, useEffect } from "react";
import styles from "./Header.module.css";
import {StateContext} from '../../App'

function Header() {
  const [items] = useContext(StateContext);

  const [total, setTotal] = useState(0);
  useEffect(() => {
    let c = 0;
    for(let i = 0; i < items.length; i++) {
      if(items[i].value > 0) {
        c++;
      }
    }

    setTotal(c)
  }, [items])
  
  return (
    <div className={styles.Header}>
      <div className={styles.childContainer}>
        <div className={[styles.Icon, styles.child].join(" ")}>
          <i className="fas fa-shopping-cart"></i>
        </div>
        <div className={[styles.child, styles.Total].join(' ')}>{total}</div>
        <p className={[styles.child, styles.Text].join(' ')}>Items</p>
      </div>
    </div>
  );
}

export default Header;
