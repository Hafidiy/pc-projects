import React from 'react'
import { Link } from 'react-router-dom'

import styles from './index.module.scss'

import img1 from '../../assets/img/1.jpg'
import img2 from '../../assets/img/2.jpg'

export const Index = () => {

  return(
    <>
      <div className={styles.home}>
		<div className='container'>
		  <div className='row'>
			<div className='col-12'>
			  <div className={styles.home__content}>
				<h1 className={styles.home__title}><b>FlixGo v2.0</b></h1>
				<p className={styles.home__text}>Online Movies, TV Shows & Cinema HTML Template</p>
			  </div>
			</div>
		  </div>
	    </div>
	  </div>

      <section className={styles.section}>
	    <div className='container'>
		  <div className='row'>
		    <div className='col-12'>
			  <h2 className={styles.section__title}>Demo pages</h2>
			</div>

			<div className='col-12 col-sm-10 offset-sm-1 col-xl-6 offset-xl-0' >
			  <Link
			  	to='/main'
			  	className={styles.section__item}
			  >
				<img src={img1} alt='' />
				  <span>Main pages</span>
			  </Link>
			</div>

			<div className='col-12 col-sm-10 offset-sm-1 col-xl-6 offset-xl-0' >
			  <Link
			  	to='/admin'
			  	className={styles.section__item}
			  >
			    <img src={img2} alt='' />
                <span>Admin pages</span>
			  </Link>
			</div>
		  </div>
		</div>
	  </section>
    </>
  )
}