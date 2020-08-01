import React, {useState} from 'react'
import styles from './index.module.scss'
import { handleByLimit, handleByPagination } from '../store'

export const Pagination = props => {
  const [page, setPage] = useState(1)
  const [limit, setLimit] = useState()

  const increment = () => {
    setPage(page + 1)
    handleByPagination(limit, page)
  }

  const decrement = () => {
    setPage(page - 1)
    handleByPagination(limit, page)
  }

  return(
    <div className={styles.cont}>
      <select
        onChange={e => {
          setLimit(e.target.value)
          handleByLimit(e.target.value)
        }}
      >
        <option disabled selected>Select Count</option>
        <option value='5'>5</option>
        <option value='10'>10</option>
        <option value='20'>20</option>
        <option value='50'>50</option>
        <option value='100'>100</option>
        <option value='200'>200</option>
      </select>
      <div className={styles.pageButton}>
        <button
          onClick={decrement}
          className={styles.button}
          disabled={page > 1 ? false : true}
        >
          ⇦
        </button>
        <button
          onClick={increment}
          className={styles.button}
        >
          ⇨
        </button>
      </div>
    </div>
  )
}