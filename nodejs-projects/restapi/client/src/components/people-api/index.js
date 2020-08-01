import React from 'react'
import styles from './index.module.scss'

export const PeopleApi = props => {
  return(
    <div className={styles.cont}>
      <div className={styles.title}>
        <p className={styles.row1}>Guide</p>
        <p className={styles.row2}>
          You can use JSONPlaceholder with any type of project that
          needs to get JSON data (React, Vue, Angular, Node, Rails, 
          Swift, Android, …).
        </p>
        <p className={styles.row3}>
          Below you'll find examples using Fetch API. You can copy
          paste them in your browser Console to quickly test JSONPlaceholder.
        </p>
      </div>
      <div className={styles.geta}>
        <p>List all resources</p>
        <div>
          <span className={styles.lyellow}>fetch</span><span className={styles.dyellow}>{`(`}</span>
          <span className={styles.orange}>'https://hafidiy-restapi.herokuapp.com/api/people'</span>
          <span className={styles.dyellow}>{`)`}</span><br/>
          <span className={`${styles.lyellow} ${styles.ml10}`}>.then</span><span className={styles.dyellow}>{`(`}</span>
          <span className={styles.lblue}>res</span><span className={styles.blue}> => </span>
          <span className={styles.lblue}>res</span><span className={styles.lyellow}>.json</span>
          <span className={styles.dpink}>{`()`}</span><span className={styles.dyellow}>{`)`}</span><br/>
          <span className={`${styles.lyellow} ${styles.ml10}`}>.then</span><span className={styles.dyellow}>{`(`}</span>
          <span className={styles.lblue}>data</span><span className={styles.blue}> => </span>
          <span className={styles.green}>console</span><span className={styles.lyellow}>.log</span>
          <span className={styles.dpink}>{`(`}</span><span className={styles.lblue}>data</span>
          <span className={styles.dpink}>{`)`}</span><span className={styles.dyellow}>{`)`}</span><br/>
          <span className={`${styles.lyellow} ${styles.ml10}`}>.catch</span><span className={styles.dyellow}>{`(`}</span>
          <span className={styles.lblue}>err</span><span className={styles.blue}> => </span>
          <span className={styles.green}>console</span><span className={styles.lyellow}>.log</span>
          <span className={styles.dpink}>{`(`}</span><span className={styles.lblue}>err</span>
          <span className={styles.dpink}>{`)`}</span><span className={styles.dyellow}>{`)`}</span><br/>
          <br/>
          <span className={styles.grey}>// Output</span><br/>
          <span className={styles.grey}>{`[`}</span><br/>
          <span className={`${styles.grey} ${styles.ml10}`}>{`  { _id: 5e4bba501c9d44000083e4d6, name: '[...]' /* ... */ },`}</span><br/>
          <span className={`${styles.grey} ${styles.ml10}`}>{`  /* ... */ `}</span><br/>
          <span className={`${styles.grey} ${styles.ml10}`}>{`  { _id: 5e4c642e89e3f509b48873cc, name: '[...]' /* ... */ }`}</span><br/>
          <span className={styles.grey}>{`]`}</span>
        </div>
      </div>
      <div className={styles.getb}>
        <p>Get a resource</p>
        <div>
          <span className={styles.lyellow}>fetch</span><span className={styles.dyellow}>{`(`}</span>
          <span className={styles.orange}>
            'https://hafidiy-restapi.herokuapp.com/api/people/5e4bba501c9d44000083e4d6'</span>
          <span className={styles.dyellow}>{`)`}</span><br/>
          <span className={`${styles.lyellow} ${styles.ml10}`}>.then</span><span className={styles.dyellow}>{`(`}</span>
          <span className={styles.lblue}>res</span><span className={styles.blue}> => </span>
          <span className={styles.lblue}>res</span><span className={styles.lyellow}>.json</span>
          <span className={styles.dpink}>{`()`}</span><span className={styles.dyellow}>{`)`}</span><br/>
          <span className={`${styles.lyellow} ${styles.ml10}`}>.then</span><span className={styles.dyellow}>{`(`}</span>
          <span className={styles.lblue}>data</span><span className={styles.blue}> => </span>
          <span className={styles.green}>console</span><span className={styles.lyellow}>.log</span>
          <span className={styles.dpink}>{`(`}</span><span className={styles.lblue}>data</span>
          <span className={styles.dpink}>{`)`}</span><span className={styles.dyellow}>{`)`}</span><br/>
          <span className={`${styles.lyellow} ${styles.ml10}`}>.catch</span><span className={styles.dyellow}>{`(`}</span>
          <span className={styles.lblue}>err</span><span className={styles.blue}> => </span>
          <span className={styles.green}>console</span><span className={styles.lyellow}>.log</span>
          <span className={styles.dpink}>{`(`}</span><span className={styles.lblue}>err</span>
          <span className={styles.dpink}>{`)`}</span><span className={styles.dyellow}>{`)`}</span><br/>
          <br/>
          <span className={styles.grey}>{`// Output`}</span><br/>
          <span className={styles.grey}>{`{`}</span><br/>
          <span className={`${styles.grey} ${styles.ml10}`}>{`_id: 5e4bba501c9d44000083e4d6,`}</span><br/>
          <span className={`${styles.grey} ${styles.ml10}`}>{`name: {`}</span><br/>
          <span className={`${styles.grey} ${styles.ml20}`}>first: Abdullokh</span><br/>
          <span className={`${styles.grey} ${styles.ml20}`}>last: Tolipov</span><br/>
          <span className={`${styles.grey} ${styles.ml10}`}>{`}`}</span><br/>
          <span className={`${styles.grey} ${styles.ml10}`}>{`gender: Male,`}</span><br/>
          <span className={`${styles.grey} ${styles.ml10}`}>
            {`avatar: https://hafidiy-restapi.herokuapp.com/avatars/male/avatar38.jpeg,`}</span><br/>
          <span className={`${styles.grey} ${styles.ml10}`}>{`age: 23,`}</span><br/>
          <span className={`${styles.grey} ${styles.ml10}`}>{`cell: +998999713258,`}</span><br/>
          <span className={styles.grey}>{`}`}</span><br/>
        </div>
      </div>
      <div className={styles.getf}>
        <p>Filtering resources</p>
        <div>
          <span className={styles.lyellow}>fetch</span><span className={styles.dyellow}>{`(`}</span>
          <span className={styles.orange}>
            'https://hafidiy-restapi.herokuapp.com/api/people/?limit=5'</span>
          <span className={styles.dyellow}>{`)`}</span><br/>
          <span className={`${styles.lyellow} ${styles.ml10}`}>.then</span><span className={styles.dyellow}>{`(`}</span>
          <span className={styles.lblue}>res</span><span className={styles.blue}> => </span>
          <span className={styles.lblue}>res</span><span className={styles.lyellow}>.json</span>
          <span className={styles.dpink}>{`()`}</span><span className={styles.dyellow}>{`)`}</span><br/>
          <span className={`${styles.lyellow} ${styles.ml10}`}>.then</span><span className={styles.dyellow}>{`(`}</span>
          <span className={styles.lblue}>data</span><span className={styles.blue}> => </span>
          <span className={styles.green}>console</span><span className={styles.lyellow}>.log</span>
          <span className={styles.dpink}>{`(`}</span><span className={styles.lblue}>data</span>
          <span className={styles.dpink}>{`)`}</span><span className={styles.dyellow}>{`)`}</span><br/>
          <span className={`${styles.lyellow} ${styles.ml10}`}>.catch</span><span className={styles.dyellow}>{`(`}</span>
          <span className={styles.lblue}>err</span><span className={styles.blue}> => </span>
          <span className={styles.green}>console</span><span className={styles.lyellow}>.log</span>
          <span className={styles.dpink}>{`(`}</span><span className={styles.lblue}>err</span>
          <span className={styles.dpink}>{`)`}</span><span className={styles.dyellow}>{`)`}</span><br/>
          <br/>
          <span className={styles.grey}>// Output</span><br/>
          <span className={styles.grey}>{`[`}</span><br/>
          <span className={`${styles.grey} ${styles.ml10}`}>{`1 - { _id: 5e4ad0975fca9921d4aa4122, gender: 'Male' /* ... */ },`}</span><br/>
          <span className={`${styles.grey} ${styles.ml10}`}>{`2 - { _id: 5e4bbc771c9d44000083e4d7, gender: 'Female' /* ... */ },`}</span><br/>
          <span className={`${styles.grey} ${styles.ml30}`}>{`  /* ... */ `}</span><br/>
          <span className={`${styles.grey} ${styles.ml10}`}>{`5 - { _id: 5e4ae150ecce4a0cb0346396, gender: 'Male' /* ... */ }`}</span><br/>
          <span className={styles.grey}>{`]`}</span>
        </div>
        <div>
          <span className={styles.lyellow}>fetch</span><span className={styles.dyellow}>{`(`}</span>
          <span className={styles.orange}>
            'https://hafidiy-restapi.herokuapp.com/api/people/?limit=5{`&`}page=2'</span>
          <span className={styles.dyellow}>{`)`}</span><br/>
          <span className={`${styles.lyellow} ${styles.ml10}`}>.then</span><span className={styles.dyellow}>{`(`}</span>
          <span className={styles.lblue}>res</span><span className={styles.blue}> => </span>
          <span className={styles.lblue}>res</span><span className={styles.lyellow}>.json</span>
          <span className={styles.dpink}>{`()`}</span><span className={styles.dyellow}>{`)`}</span><br/>
          <span className={`${styles.lyellow} ${styles.ml10}`}>.then</span><span className={styles.dyellow}>{`(`}</span>
          <span className={styles.lblue}>data</span><span className={styles.blue}> => </span>
          <span className={styles.green}>console</span><span className={styles.lyellow}>.log</span>
          <span className={styles.dpink}>{`(`}</span><span className={styles.lblue}>data</span>
          <span className={styles.dpink}>{`)`}</span><span className={styles.dyellow}>{`)`}</span><br/>
          <span className={`${styles.lyellow} ${styles.ml10}`}>.catch</span><span className={styles.dyellow}>{`(`}</span>
          <span className={styles.lblue}>err</span><span className={styles.blue}> => </span>
          <span className={styles.green}>console</span><span className={styles.lyellow}>.log</span>
          <span className={styles.dpink}>{`(`}</span><span className={styles.lblue}>err</span>
          <span className={styles.dpink}>{`)`}</span><span className={styles.dyellow}>{`)`}</span><br/>
          <br/>
          <span className={styles.grey}>// Output</span><br/>
          <span className={styles.grey}>{`[`}</span><br/>
          <span className={`${styles.grey} ${styles.ml10}`}>{`6 - { _id: 5e4c639589e3f509b488735e, gender: 'Male' /* ... */ },`}</span><br/>
          <span className={`${styles.grey} ${styles.ml30}`}>{`  /* ... */ `}</span><br/>
          <span className={`${styles.grey} ${styles.ml10}`}>{`10 - { _id: 5e4c63d589e3f509b4887362, gender: 'Female' /* ... */ }`}</span><br/>
          <span className={styles.grey}>{`]`}</span>
        </div>
        <div>
          <span className={styles.lyellow}>fetch</span><span className={styles.dyellow}>{`(`}</span>
          <span className={styles.orange}>
            'https://hafidiy-restapi.herokuapp.com/api/people/?limit=5{`&`}gender=male'</span>
          <span className={styles.dyellow}>{`)`}</span><br/>
          <span className={`${styles.lyellow} ${styles.ml10}`}>.then</span><span className={styles.dyellow}>{`(`}</span>
          <span className={styles.lblue}>res</span><span className={styles.blue}> => </span>
          <span className={styles.lblue}>res</span><span className={styles.lyellow}>.json</span>
          <span className={styles.dpink}>{`()`}</span><span className={styles.dyellow}>{`)`}</span><br/>
          <span className={`${styles.lyellow} ${styles.ml10}`}>.then</span><span className={styles.dyellow}>{`(`}</span>
          <span className={styles.lblue}>data</span><span className={styles.blue}> => </span>
          <span className={styles.green}>console</span><span className={styles.lyellow}>.log</span>
          <span className={styles.dpink}>{`(`}</span><span className={styles.lblue}>data</span>
          <span className={styles.dpink}>{`)`}</span><span className={styles.dyellow}>{`)`}</span><br/>
          <span className={`${styles.lyellow} ${styles.ml10}`}>.catch</span><span className={styles.dyellow}>{`(`}</span>
          <span className={styles.lblue}>err</span><span className={styles.blue}> => </span>
          <span className={styles.green}>console</span><span className={styles.lyellow}>.log</span>
          <span className={styles.dpink}>{`(`}</span><span className={styles.lblue}>err</span>
          <span className={styles.dpink}>{`)`}</span><span className={styles.dyellow}>{`)`}</span><br/>
          <br/>
          <span className={styles.grey}>// Output</span><br/>
          <span className={styles.grey}>{`[`}</span><br/>
          <span className={`${styles.grey} ${styles.ml10}`}>{`1 - { _id: 5e4bba501c9d44000083e4d6, gender: 'Male' /* ... */ },`}</span><br/>
          <span className={`${styles.grey} ${styles.ml10}`}>{`3 - { _id: 5e4c639589e3f509b488735b, gender: 'Male' /* ... */ },`}</span><br/>
          <span className={`${styles.grey} ${styles.ml10}`}>{`4 - { _id: 5e4c639589e3f509b488735c, gender: 'Male' /* ... */ },`}</span><br/>
          <span className={`${styles.grey} ${styles.ml10}`}>{`5 - { _id: 5e4c639589e3f509b488735d, gender: 'Male' /* ... */ },`}</span><br/>
          <span className={`${styles.grey} ${styles.ml10}`}>{`6 - { _id: 5e4c639589e3f509b488735e, gender: 'Male' /* ... */ },`}</span><br/>
          <span className={styles.grey}>{`]`}</span>
        </div>
        <div>
          <span className={styles.lyellow}>fetch</span><span className={styles.dyellow}>{`(`}</span>
          <span className={styles.orange}>
            'https://hafidiy-restapi.herokuapp.com/api/people/?limit=5{`&`}gender=female'</span>
          <span className={styles.dyellow}>{`)`}</span><br/>
          <span className={`${styles.lyellow} ${styles.ml10}`}>.then</span><span className={styles.dyellow}>{`(`}</span>
          <span className={styles.lblue}>res</span><span className={styles.blue}> => </span>
          <span className={styles.lblue}>res</span><span className={styles.lyellow}>.json</span>
          <span className={styles.dpink}>{`()`}</span><span className={styles.dyellow}>{`)`}</span><br/>
          <span className={`${styles.lyellow} ${styles.ml10}`}>.then</span><span className={styles.dyellow}>{`(`}</span>
          <span className={styles.lblue}>data</span><span className={styles.blue}> => </span>
          <span className={styles.green}>console</span><span className={styles.lyellow}>.log</span>
          <span className={styles.dpink}>{`(`}</span><span className={styles.lblue}>data</span>
          <span className={styles.dpink}>{`)`}</span><span className={styles.dyellow}>{`)`}</span><br/>
          <span className={`${styles.lyellow} ${styles.ml10}`}>.catch</span><span className={styles.dyellow}>{`(`}</span>
          <span className={styles.lblue}>err</span><span className={styles.blue}> => </span>
          <span className={styles.green}>console</span><span className={styles.lyellow}>.log</span>
          <span className={styles.dpink}>{`(`}</span><span className={styles.lblue}>err</span>
          <span className={styles.dpink}>{`)`}</span><span className={styles.dyellow}>{`)`}</span><br/>
          <br/>
          <span className={styles.grey}>// Output</span><br/>
          <span className={styles.grey}>{`[`}</span><br/>
          <span className={`${styles.grey} ${styles.ml10}`}>{`2 - { _id: 5e4bbc771c9d44000083e4d7, gender: 'Female' /* ... */ },`}</span><br/>
          <span className={`${styles.grey} ${styles.ml10}`}>{`8 - { _id: 5e4c63d589e3f509b4887360, gender: 'Female' /* ... */ },`}</span><br/>
          <span className={`${styles.grey} ${styles.ml10}`}>{`9 - { _id: 5e4c63d589e3f509b4887361, gender: 'Female' /* ... */ },`}</span><br/>
          <span className={`${styles.grey} ${styles.ml10}`}>{`10 - { _id: 5e4c63d589e3f509b4887362, gender: 'Female' /* ... */ },`}</span><br/>
          <span className={`${styles.grey} ${styles.ml10}`}>{`11 - { _id: 5e4c63d589e3f509b4887363, gender: 'Female' /* ... */ },`}</span><br/>
          <span className={styles.grey}>{`]`}</span>
        </div>
      </div>
      <div className={styles.bottom}>
        {/* <p>Something....</p> */}
      </div>
    </div>
  )
}