import React from 'react'

import styles from './index.module.scss'


export const MyCourses = () => {
  const subjects = [
    {
      subjectName: 'Algoritmlarni loyihalash',
      groups: [
        {
          groupName: 'CAL-011-18',
          groupTeacher: 'Ganixodjaeva Dilfuza Ziyavuddinnovna'
        },
        {
          groupName: 'CAL-011-L1-18',
          groupTeacher: 'Axmedov Oybek Kamarbekovich'
        },
      ],
      attendence: 1
    },
    {
      subjectName: 'Ingliz tili',
      groups: [
        {
          groupName: 'ENG-024-18',
          groupTeacher: 'Sagdullayev Laura Xakimjanovna'
        },
      ],
      attendence: 1
    },
    {
      subjectName: 'Zamonaviy iqtisodiyot',
      groups: [
        {
          groupName: 'OEL-012-18',
          groupTeacher: 'Babaxanova Dildora Rustamovna'
        },
        {
          groupName: 'OEL-012-1-18',
          groupTeacher: 'Aripov Ilxom Ma\'mirovich'
        },
      ],
      attendence: 1
    },
    {
      subjectName: 'Elektronika va sxemalar 2',
      groups: [
        {
          groupName: 'CAE-002-18',
          groupTeacher: 'Tulyaganov Abduxalil Abdujalilovich'
        },
        {
          groupName: 'CAE-002-L4-18',
          groupTeacher: 'Ulashev Sobir Rustamovich'
        },
      ],
      attendence: 0
    },

    {
      subjectName: 'Kompyuterni tashkillashtirish',
      groups: [
        {
          groupName: 'CAO-003-18',
          groupTeacher: 'Akbarxodjaev Shamsuddin Nadjimovich'
        },
        {
          groupName: 'CAO-003-1-18',
          groupTeacher: 'Ochilov Mannon Musinovich'
        },
      ],
      attendence: 0
    },

    {
      subjectName: 'Veb dasturlashga kirish',
      groups: [
        {
          groupName: 'WEB-004-18',
          groupTeacher: 'Normatov Otaxon Masharipovich'
        },
        {
          groupName: 'WEB-004-L1-18',
          groupTeacher: 'Sadullaev Sarvar Azimbaevich'
        },
      ],
      attendence: 0
    },
  ]

  return(
    <div className={styles.cont}>
      <div className={styles.header}>
        <p>Subject</p>
        <p>Groups</p>
        <p>Attendence</p>
        <p></p>
      </div>
      {subjects.length ? subjects.map((subject, index) => (
        <div className={styles.box} key={index}>
          <p className={styles.subj}>{subject.subjectName}</p>
          <p className={styles.subj}>
            {subject.groups.map((group, ind) => (
              <>
                <span>{group.groupName}</span>
                {group.groupTeacher} <br/>
              </>
            ))}
          </p>
          <p>
            <button>{subject.attendence}</button>
          </p>
          <p>
            <button>Assignments</button>
          </p>
        </div>
      )) : null}
    </div>
  )
}
