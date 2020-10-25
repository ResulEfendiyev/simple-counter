import React, { useState } from "react";
import styles from "./Header.module.css";

function Header(props) {

  console.log(props)
  const [total, setTotal] = useState(0);
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
