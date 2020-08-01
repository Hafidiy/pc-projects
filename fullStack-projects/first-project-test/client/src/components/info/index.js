import React from 'react'

import styles from './index.module.scss'

export const Info = () => {

  const imageAddress = 'https://img.favpng.com/9/8/21/computer-icons-avatar-user-profile-computer-software-png-favpng-paLBzxmg0NvBbr1HYTB3LwpyE_t.jpg'

  const student = {
    fullName: 'Tolipov Abdulla Abduaziz o\'gli',
    dateOfBirth: '15-09-1999',
    gender: 'Male',
    studentNumber: '83025-18',
    department: 'Mobile systems',
    studyLanguage: 'Uzbek',
    degree: 'Bachelor',
    typeOfStudy: 'Full-time',
    studyYear: 2,
    departmentGroup: '830-18',
    tutor: 'Badalov Jasur',
    stipend: 'Not',
    tuitonFee: '6 627 840 UZS',
    paid: '6 628 000 UZS' + ' (100%)'
  }

  return(
    <div className={styles.cont}>
      <div className={styles.shortInfo}>
        <img
          alt="alt"
          src={imageAddress}
        />
        <p>
          Full Name: <span>{student.fullName}</span>
        </p>
        <p>
          Birth date: <span>{student.dateOfBirth}</span>
        </p>
        <p>
          Gender: <span>{student.gender}</span>
        </p>
        <p>
          Student Number: <span>{student.studentNumber}</span>
        </p>
      </div>
      <div className={styles.longInfo}>
        <p>
          Specialization: <span>{student.department}</span>
        </p>
        <p>
          Study language: <span>{student.studyLanguage}</span>
        </p>
        <p>
          Degree: <span>{student.degree}</span>
        </p>
        <p>
          Type of study: <span>{student.typeOfStudy}</span>
        </p>
        <p>
          Year: <span>{student.studyYear}</span>
        </p>
        <p>
          Group: <span>{student.departmentGroup}</span>
        </p>
        <p>
          Tutor: <span>{student.tutor}</span>
        </p>
        <p>
          Stipend: <span>{student.stipend}</span>
        </p>
        <p>
          Tuiton Fee: <span>{student.tuitonFee}</span>
        </p>
        <p>
          Paid: <span>{student.paid}</span>
        </p>
      </div>
    </div>
  )
}