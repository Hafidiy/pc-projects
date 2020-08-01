import React, { useState } from 'react'

import styles from './index.module.scss'

export const Dropdown = ({title, items = [], multiSelect = false}) => {
    const [open, setOpen] = useState(false)
    const [selection, setSelection] = useState([])
    const toggle = () => setOpen(!open)

    const handleOnClick = (item) => {
    }

    return(
        <div className={styles.dd_wrapper}>
            <div
                tabIndex={0}
                className={styles.dd_header}
                role='button'
                onKeyPress={() => toggle()}
                onClick={() => toggle()}
            >
                <div className={styles.dd_header__title}>
                    <p className={styles.dd_header__title__bold}>{title}</p>
                </div>
                <div className={styles.dd_header__action}>
                    <span
                        className={`${open ? styles.arrow_top : styles.arrow_bottom}`}
                    ></span>
                </div>
            </div>
            {open && (
                <ul className={styles.dd_list}>
                    {items.map((item, index) => (
                        <li className={styles.dd_list_item} key={index}>
                            {item.value}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    )
}