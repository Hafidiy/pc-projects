import React from 'react'
import { Link } from 'react-router-dom'
import { 
  FaHome,
  FaGithub,
  FaTelegram,
  FaFacebook,
  FaInstagram
} from 'react-icons/fa'
import styles from './index.module.scss'

export const Header = props => {
  return(
    <div className={styles.cont}>
      <div className={styles.leftbox}>
        <Link to='/'>
          <FaHome
            className={styles.homeIcon}
          />
        </Link>
      </div>
      <div className={styles.midbox}>
        <Link
          to='/todos'
          style={{textDecoration: 'none'}}
        >
          <p className={styles.p}>Todos Api Gui</p>
        </Link>
        <Link
          to='/people'
          style={{textDecoration: 'none'}}
        >
          <p className={styles.p}>People Api Gui</p>
        </Link>
      </div>
      <div className={styles.rightbox}>
        <a href="#"><FaGithub className={styles.icon}/></a>
        <a href="#"><FaTelegram className={styles.icon}/></a>
        <a href="#"><FaInstagram className={styles.icon}/></a>
        <a href="#"><FaFacebook className={styles.icon}/></a>
      </div>
    </div>
  )
}