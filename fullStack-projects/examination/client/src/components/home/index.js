import React, { useState } from 'react'
import styles from './index.module.scss'
import { Link } from 'react-router-dom'

export const Home = props => {
  const [subject, handleSubject] = useState('')



  return(
    <div className={styles.cont}>
      <select
        className={styles.select}
        onChange={(e) => handleSubject(e.target.value)}
      >
        <option selected disabled>Select Subject</option>
        <option value='electronics'>Electronics</option>
        <option value='cybersecurity'>Cybersecurity</option>
        <option value='database'>Database</option>
        <option value='english'>English</option>
      </select>
      <Link to={{
        pathname: '/exam',
        state: {
          subject
        }
      }}>
        <button className={styles.button}>
          Start exam
        </button>
      </Link>
    </div>
  )
}