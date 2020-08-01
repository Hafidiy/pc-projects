import React from 'react'

import styles from './index.module.scss'

export const Finally = () => {

  const finallyExams = [
    {
      subjectName: 'Elektronika va sxemalar 2',
      group: 'FCAE002',
      finallyDate: '06-02-2020',
      finallyTIme: '12-00-00',
      room: 'A-207',
      result: '-',
    }
  ]

  return(
    <div className={styles.cont}>
      <div className={styles.head}>
        <p>Group</p>
        <p>Subject</p>
        <p>Date</p>
        <p>Time</p>
        <p>Room</p>
        <p>Result</p>
      </div>
      {finallyExams.length ? finallyExams.map((item, index) => (
        <div
          key={index}
          className={styles.box}
        >
          <p>{item.group}</p>
          <p>{item.subjectName}</p>
          <p>{item.finallyDate}</p>
          <p>{item.finallyTIme}</p>
          <p>{item.room}</p>
          <p>{item.result}</p>
          <p>
            <button>Appeal</button>
          </p>
        </div>
      )) : null}
    </div>
  )
}