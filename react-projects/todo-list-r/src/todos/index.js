import React from 'react'
import { observer } from 'mobx-react'
import styles from './index.module.scss'
import { todos, getTodos, handleDone } from '../store'

export const Todos = observer(
  class Todos extends React.Component{

    componentDidMount = async () => await getTodos()

    render() {
      return(
        <div className={styles.cont}>
          <div className={styles.h1}>Todos</div>
          <div className={styles.box}>
            {todos.length ? todos.map((todo, i) =>
              <div
                key={todo.id}
                className={`${styles.boxItem} ${
                  todo.completed ? styles.done : ''
                }`}
                onDoubleClick={() => handleDone(i)}
              >
                {todo.title}
              </div>
            ) : null}
          </div>
        </div>
      )
    }
  }
)