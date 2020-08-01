import React from 'react'
import { observer } from 'mobx-react'
import styles from './index.module.scss'
import { tasks, changeBool } from '../../../store'

const MiniBoxComponent = props => {

  const handleReset = () => {
    let tmpStr = styles.selectedVariant
    let resetEl = document.getElementsByClassName(`${tmpStr}`)[0]
    if(resetEl) {
      let startIndex = resetEl.className.indexOf(tmpStr)
      resetEl.className = resetEl.className.slice(0, startIndex) + resetEl.className.slice(startIndex + tmpStr.length)
    }
  }

  const handleClick = (e, index) => {
    handleReset()
    changeBool(props.current, index)
    props.changeCurrent()
  }

  const { current } = props
  return(
    <div className={styles.cont}>
      <div className={styles.question}>
        {tasks.data.length > 0 ? tasks.data[current].question : null}
      </div>
      <ul className={styles.variants}>
        <li
          className={`${styles.li} ${
            tasks.data[current] && tasks.data[current].variants[0][2] ? styles.selectedVariant : ''
          }`}
          onClick={(e) => handleClick(e, 0)}
        >
          <span>A</span>
          {tasks.data.length > 0 ? tasks.data[current].variants[0][0] : null}
        </li>
        <li
          className={`${styles.li} ${
            tasks.data[current] && tasks.data[current].variants[1][2] ? styles.selectedVariant : ''
          }`}
          onClick={(e) => handleClick(e, 1)}
        >
          <span>B</span>
          {tasks.data.length > 0 ? tasks.data[current].variants[1][0] : null}
        </li>
        <li
          className={`${styles.li} ${
            tasks.data[current] && tasks.data[current].variants[2][2] ? styles.selectedVariant : ''
          }`}
          onClick={(e) => handleClick(e, 2)}
        >
          <span>C</span>
          {tasks.data.length > 0 ? tasks.data[current].variants[2][0] : null}
        </li>
        <li
          className={`${styles.li} ${
            tasks.data[current] && tasks.data[current].variants[3][2] ? styles.selectedVariant : ''
          }`}
          onClick={(e) => handleClick(e, 3)}
        >
          <span>D</span>
          {tasks.data.length > 0 ? tasks.data[current].variants[3][0] : null}
        </li>
      </ul>
    </div>
  )
}

export const MiniBox = observer(MiniBoxComponent)