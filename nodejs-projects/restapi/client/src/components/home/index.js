import React from 'react'
import styles from './index.module.scss'

export const Home = props => {
  return(
    <div className={styles.cont}>
      <div className={styles.row1}>
        JSON simple placeholder
      </div>
      <div className={styles.row2}>
        Welcome to my typical <span>REST API</span>
      </div>
      <div className={styles.row3}>
        Fake Online REST API for Testing and Prototyping
      </div>
    </div>
  )
}