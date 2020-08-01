import React from 'react'

import styles from './index.module.scss'

import { FaComments } from 'react-icons/fa';

export const Groups = () => {
  const groups = [
    {
      groupName: 'OEL-012-18',
      subject: 'Zamonaviy iqtisodiyot',
      type: 'lecture',
      teacher: 'Babaxanova Dildora Rustamovna',
      students: [
        {id: '1', name: {
          first: 'Abdulloh',
          last: 'Tolipov'
        }},
        {id: '2', name: {
          first: 'Komron',
          last: 'Yuldashev'
        }}
      ]
    },
    {
      groupName: 'OEL-012-1-18',
      subject: 'Zamonaviy iqtisodiyot',
      type: 'practise',
      teacher: 'Aripov Ilxom Ma\'mirovich',
      students: [
        {id: '1', name: {
          first: 'Abdulloh',
          last: 'Tolipov'
        }},
      ]
    },
    {
      groupName: 'ENG-024-18',
      subject: 'Ingliz tili',
      type: 'lecture',
      teacher: 'Sagdullayev Laura Xakimjanovna',
      students: [
        {id: '1', name: {
          first: 'Abdulloh',
          last: 'Tolipov'
        }},
      ]
    },
    {
      groupName: 'CAL-011-18',
      subject: 'Algoritmlarni loyihalash',
      type: 'lecture',
      teacher: 'Ganixodjaeva Dilfuza Ziyavuddinnovna',
      students: [
        {id: '1', name: {
          first: 'Abdulloh',
          last: 'Tolipov'
        }},
      ]
    },
    {
      groupName: 'CAL-011-L1-18',
      subject: 'Algoritmlarni loyihalash',
      type: 'laboratory',
      teacher: 'Axmedov Oybek Kamarbekovich',
      students: [
        {id: '1', name: {
          first: 'Abdulloh',
          last: 'Tolipov'
        }},
      ]
    },
    {
      groupName: 'CAE-002-18',
      subject: 'Elektronika va sxemalar 2',
      type: 'lecture',
      teacher: 'Tulyaganov Abduxalil Abdujalilovich',
      students: [
        {id: '1', name: {
          first: 'Abdulloh',
          last: 'Tolipov'
        }},
      ]
    },
    {
      groupName: 'CAE-002-L4-18',
      subject: 'Elektronika va sxemalar 2',
      type: 'laboratory',
      teacher: 'Ulashev Sobir Rustamovich',
      students: [
        {id: '1', name: {
          first: 'Abdulloh',
          last: 'Tolipov'
        }},
      ]
    },
    {
      groupName: 'CAO-003-18',
      subject: 'Kompyuterni tashkillashtirish',
      type: 'lecture',
      teacher: 'Akbarxodjaev Shamsuddin Nadjimovich',
      students: [
        {id: '1', name: {
          first: 'Abdulloh',
          last: 'Tolipov'
        }},
      ]
    },
    {
      groupName: 'CAO-003-1-18',
      subject: 'Kompyuterni tashkillashtirish',
      type: 'practise',
      teacher: 'Ochilov Mannon Musinovich',
      students: [
        {id: '1', name: {
          first: 'Abdulloh',
          last: 'Tolipov'
        }},
      ]
    },
    {
      groupName: 'WEB-004-18',
      subject: 'Veb dasturlashga kirish',
      type: 'lecture',
      teacher: 'Normatov Otaxon Masharipovich',
      students: [
        {id: '1', name: {
          first: 'Abdulloh',
          last: 'Tolipov'
        }},
      ]
    },
    {
      groupName: 'WEB-004-L1-18',
      subject: 'Veb dasturlashga kirish',
      type: 'laboratory',
      teacher: 'Sadullaev Sarvar Azimbaevich',
      students: [
        {id: '1', name: {
          first: 'Abdulloh',
          last: 'Tolipov'
        }},
      ]
    },
  ]

  return(
    <div className={styles.cont}>
      <div className={styles.headBox}>
        <p>Group</p>
        <p>Subject</p>
        <p>Type</p>
        <p>Teacher</p>
        <p>Chat group</p>
        <p></p>
      </div>
      
      {groups.length ? groups.map((group, index) => (
        <div className={styles.box} key={index}>
          <p className={styles.leftText}>
            {group.groupName}
          </p>
          <p>{group.subject}</p>
          <p>{group.type}</p>
          <p>{group.teacher}</p>
          <p><FaComments className={styles.iconChat} /></p>
          <p>
            <button>Students</button>
          </p>
        </div>
      )) : null}
    </div>
  )
}