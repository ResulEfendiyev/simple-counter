import React from 'react'
import styles from './Management.module.css'
function Management(props) {

    console.log("Management", props)
    return (
        <div>
            <button className={styles.Refresh}><i className="fas fa-sync-alt"></i></button>
            <button className={styles.Recycle}><i className="fas fa-recycle"></i></button>
        </div>
    )
}

export default Management
