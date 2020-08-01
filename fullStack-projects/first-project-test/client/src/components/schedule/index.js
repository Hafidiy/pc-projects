import React from 'react'

import { times, weekDays } from '../constants'
import styles from './index.module.scss'

export const Schedule = () => {

  const schedule = [
    [null, null, null, null, null, null, null],
    [
      {
        subjectName: 'Elektronika va sxemalar',
        groupName: 'CAE-002-18',
        room: 'A-320'
      },
      {
        subjectName: 'Elektronika va sxemalar 2',
        groupName: 'CAE-002-L4-18',
        room: 'A-328'
      },
      {
        subjectName: 'Elektronika va sxemalar 2',
        groupName: 'CAE-002-L4-18',
        room: 'A-328'
      },
      null,
      null,
      null,
      null
    ],
    [
      {
        subjectName: 'Kompyuterni tashkillashtirish',
        groupName: 'CAO-003-1-18',
        room: 'D-304'
      },
      {
        subjectName: 'Kompyuterni tashkillashtirish',
        groupName: 'CAO-003-18',
        room: 'D-213'
      },
      {
        subjectName: 'Kompyuterni tashkillashtirish',
        groupName: 'CAO-003-18',
        room: 'D-213'
      },
      null,
      null,
      null,
      null
    ],
    [
      {
        subjectName: 'Veb dasturlashga kirish',
        groupName: 'WEB-004-L1-18',
        room: 'B-319'
      },
      {
        subjectName: 'Veb dasturlashga kirish',
        groupName: 'WEB-004-18',
        room: 'A-222'
      },
      {
        subjectName: 'Veb dasturlashga kirish',
        groupName: 'WEB-004-18',
        room: 'A-222'
      },
      null,
      null,
      null,
      null
    ],
    [
      {
        subjectName: 'Algoritmlarni loyihalash',
        groupName: 'CAL-011-L1-18',
        room: 'D-203'
      },
      {
        subjectName: 'Algoritmlarni loyihalash',
        groupName: 'CAL-011-18',
        room: 'B-03'
      },
      {
        subjectName: 'Algoritmlarni loyihalash',
        groupName: 'CAL-011-L1-18',
        room: 'D-203'
      },
      null,
      null,
      null,
      null
    ],
    [
      {
        subjectName: 'Zamonaviy iqtisodiyot',
        groupName: 'OEL-012-1-18',
        room: 'A-09'
      },
      {
        subjectName: 'Ingliz tili 4',
        groupName: 'ENG-024-18',
        room: 'C-161'
      },
      {
        subjectName: 'Zamonaviy iqtisodiyot',
        groupName: 'OEL-012-18',
        room: 'C-361'
      },
      null,
      null,
      null,
      null
    ],
  ]
  
  return(
    <div className={styles.cont}>
      <div className={styles.header}>
        <div className={styles.headerItem}>{'Time / weekDays'}</div>
        {weekDays.map((day, index) => (
          <div
            key={index}
            className={styles.headerItem}
          >
            {day}
          </div>
        ))}
        </div>
        {times.map((time, ind) => (
          <div key={ind} className={styles.box}>
            <p className={styles.boxHeadItem}>{time}</p>
            {weekDays.map((day, index) => (
              <div
                key={index}
              >
                {schedule[index][ind] ? (
                  <div className={styles.boxItem}>
                    <div className={styles.boxSubjectName}>
                      {schedule[index][ind].subjectName}
                    </div>
                    <div className={styles.boxRG}>
                      <span className={styles.boxGroupName}>
                        {schedule[index][ind].groupName}
                      </span>
                      <span className={styles.boxRoom}>
                        {schedule[index][ind].room}
                      </span>
                    </div>
                  </div>
                  ): ''}
              </div>
            ))}
          </div>
        ))}
    </div>
  )
}