import React, { useState } from 'react'

import styles from './index.module.scss'

import { Student } from './student'
import { Professor } from './professor'
import { Teacher } from './teacher'

export const Dash = () => {
  const [navCont, setNavCont] = useState(false)

  let student = {
    name: {
      first: 'Abdullokh',
      middle: 'Abduaziz o\'gli',
      last: 'Tolipov'
    },
    age: 23,
    gender: 'Male',
    role: 'student',
    department: 'Mobile Systems',
    departmentGroup: '830-18',
    weekDays: [
      [null, null, null],
      ['CAE-002-18', 'CAE-002-L4-18', 'CAE-002-L4-18'],
      ['CAO-003-1-18', 'CAO-003-18', 'CAO-003-18'],
      ['WEB-004-L1-18', 'WEB-004-18', 'WEB-004-18'],
      ['CAL-011-L1-18', 'CAL-011-18', 'CAL-011-L1-18'],
      ['OEL-012-1-18', 'ENG-024-18', 'OEL-012-18'],
    ],
  }

  const toggleDrawer = (open) => event => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setNavCont(open)
  }

  const renderRole = role => {
    switch(role){
      case 'student':
        return (<Student
          navCont={navCont}
          toggleDrawer={toggleDrawer}
        />)
      case 'professor':
        return (<Professor toggleDrawer={toggleDrawer}/>)
      case 'teacher':
        return (<Teacher toggleDrawer={toggleDrawer}/>)
      default: break
    }
  }

  return (
    <>
      {renderRole(student.role)}
    </>
  )
}
