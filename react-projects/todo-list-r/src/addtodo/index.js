import React, {useState} from 'react'
import { addTodo } from '../store'
import styles from './index.module.scss'

export const Addtodo = props => {
  const [title, setTitle] = useState('')

  const handleChange = e => {
    setTitle(e.target.value)
  }

  return(
    <div className={styles.cont}>
      <input
        type='text'
        onChange={handleChange}
        className={styles.input}
      />
      <button
        className={styles.button}
        onClick={() => addTodo(title)}
      >
        Add Todo
      </button>
    </div>
  )
}