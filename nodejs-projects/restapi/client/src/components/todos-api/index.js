import React from 'react'
import styles from './index.module.scss'

export const TodosApi = props => {
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
          <span className={styles.orange}>'https://hafidiy-restapi.herokuapp.com/api/todos'</span>
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
          <span className={`${styles.grey} ${styles.ml10}`}>{`  { _id: 5e4ad0975fca9921d4aa4122, title: '[...]' /* ... */ },`}</span><br/>
          <span className={`${styles.grey} ${styles.ml10}`}>{`  /* ... */ `}</span><br/>
          <span className={`${styles.grey} ${styles.ml10}`}>{`  { _id: 5e4ae150ecce4a0cb0346396, title: '[...]' /* ... */ }`}</span><br/>
          <span className={styles.grey}>{`]`}</span>
        </div>
      </div>
      <div className={styles.getb}>
        <p>Get a resource</p>
        <div>
          <span className={styles.lyellow}>fetch</span><span className={styles.dyellow}>{`(`}</span>
          <span className={styles.orange}>'https://hafidiy-restapi.herokuapp.com/api/todos</span>
          <span className={styles.orange}>/5e4ad0975fca9921d4aa4122'</span>
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
          <span className={`${styles.grey} ${styles.ml10}`}>{`_id: 5e4ad0975fca9921d4aa4122,`}</span><br/>
          <span className={`${styles.grey} ${styles.ml10}`}>{`title: '[...]',`}</span><br/>
          <span className={`${styles.grey} ${styles.ml10}`}>{`completed: false,`}</span><br/>
          <span className={styles.grey}>{`}`}</span><br/>
        </div>
      </div>
      <div className={styles.getf}>
        <p>Filtering resources</p>
        <div>
          <span className={styles.lyellow}>fetch</span><span className={styles.dyellow}>{`(`}</span>
          <span className={styles.orange}>
            'https://hafidiy-restapi.herokuapp.com/api/todos/?limit=5'</span>
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
          <span className={`${styles.grey} ${styles.ml10}`}>{`1 - { _id: 5e4ad0975fca9921d4aa4122, title: '[...]' /* ... */ },`}</span><br/>
          <span className={`${styles.grey} ${styles.ml30}`}>{`  /* ... */ `}</span><br/>
          <span className={`${styles.grey} ${styles.ml10}`}>{`5 - { _id: 5e4ae150ecce4a0cb0346396, title: '[...]' /* ... */ }`}</span><br/>
          <span className={styles.grey}>{`]`}</span>
        </div>
        <div>
          <span className={styles.lyellow}>fetch</span><span className={styles.dyellow}>{`(`}</span>
          <span className={styles.orange}>
            'https://hafidiy-restapi.herokuapp.com/api/todos/?limit=5{`&`}page=2'</span>
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
          <span className={`${styles.grey} ${styles.ml10}`}>{`6 - { _id: 5e4ad0b92fca9921d4aa41a9, title: '[...]' /* ... */ },`}</span><br/>
          <span className={`${styles.grey} ${styles.ml30}`}>{`  /* ... */ `}</span><br/>
          <span className={`${styles.grey} ${styles.ml10}`}>{`10 - { _id: 5e4ae150ecce4b3cbf2e3034, title: '[...]' /* ... */ }`}</span><br/>
          <span className={styles.grey}>{`]`}</span>
        </div>
      </div>
      <div className={styles.post}>
        <p>Create resource</p>
        <div>
          <span className={styles.lyellow}>fetch</span><span className={styles.dyellow}>{`(`}</span>
          <span className={styles.orange}>
            'https://hafidiy-restapi.herokuapp.com/api/todos'</span>
          <span className={styles.white}>{`, `}</span><span className={styles.dpink}>{`{`}</span><br/>
          <span className={`${styles.lblue} ${styles.ml10}`}>method:</span>
          <span className={styles.orange}> 'POST'</span><span className={styles.white}>,</span><br/>
          <span className={`${styles.lblue} ${styles.ml10}`}>headers: {`{`}</span>
          <span className={styles.orange}>'Content-Type'</span><span className={styles.lblue}>: </span>
          <span className={styles.orange}>'application/json'</span><span className={styles.lblue}>{`}`}</span>
          <span className={styles.white}>,</span><br/>
          <span className={`${styles.lblue} ${styles.ml10}`}>body: </span>
          <span className={styles.green}>JSON</span><span className={styles.lyellow}>.stringify</span>
          <span className={styles.lblue}>{`(`}</span><span className={styles.dyellow}>{`{`}</span><br/>
          <span className={`${styles.lblue} ${styles.ml20}`}>name: </span>
          <span className={styles.orange}>'Ertalap vaxli oqishga borish kere!'</span><br/>
          <span className={`${styles.dyellow} ${styles.ml10}`}>{`}`}</span><span className={styles.lblue}>{`)`}</span>
          <br/><span className={styles.dpink}>{`}`}</span><span className={styles.dyellow}>{`)`}</span><br/>
          <br/>
          <span className={styles.grey}>// Output</span><br/>
          <span className={styles.grey}>{`{`}</span><br/>
          <span className={`${styles.grey} ${styles.ml10}`}>_id: 5e4ad0975fca9921d4aa412a</span><br/>
          <span className={`${styles.grey} ${styles.ml10}`}>name: 'Ertalap vaxli oqishga borish kere!'</span><br/>
          <span className={`${styles.grey} ${styles.ml10}`}>completed: false</span><br/>
          <span className={styles.grey}>{`}`}</span>
        </div>
        <p className={styles.ps}>
          Important: the resource will not be really created on the server but it will be faked as if.
          In other words, if you try to access a post using 
          <span>  5e4ad0975fca9921d4aa412a </span>
          <span>as an id, you'll get a 404 error.</span>
        </p>
      </div>
      <div className={styles.put}>
        <p>Update resource</p>
        <div>
          <span className={styles.lyellow}>fetch</span><span className={styles.dyellow}>{`(`}</span>
          <span className={styles.orange}>'https://hafidiy-restapi.herokuapp.com/api/todos'</span>
          <span className={styles.orange}>/5e4ad0975fca9921d4aa412a</span>
          <span className={styles.white}>{`, `}</span><span className={styles.dpink}>{`{`}</span><br/>
          <span className={`${styles.lblue} ${styles.ml10}`}>method:</span>
          <span className={styles.orange}> 'POST'</span><span className={styles.white}>,</span><br/>
          <span className={`${styles.lblue} ${styles.ml10}`}>headers: {`{`}</span>
          <span className={styles.orange}>'Content-Type'</span><span className={styles.lblue}>: </span>
          <span className={styles.orange}>'application/json'</span><span className={styles.lblue}>{`}`}</span>
          <span className={styles.white}>,</span><br/>
          <span className={`${styles.lblue} ${styles.ml10}`}>body: </span>
          <span className={styles.green}>JSON</span><span className={styles.lyellow}>.stringify</span>
          <span className={styles.lblue}>{`(`}</span><span className={styles.dyellow}>{`{`}</span><br/>
          <span className={`${styles.lblue} ${styles.ml20}`}>name: </span>
          <span className={styles.orange}>'Oqishdan chiqib ishga borish kere!'</span>
          <span className={styles.white}>,</span><br/>
          <span className={`${styles.lblue} ${styles.ml20}`}>completed: </span><span className={styles.blue}>true</span><br/>
          <span className={`${styles.dyellow} ${styles.ml10}`}>{`}`}</span><span className={styles.lblue}>{`)`}</span><br/>
          <span className={styles.dpink}>{`}`}</span><span className={styles.dyellow}>{`)`}</span><br/>
          <br/>
          <span className={styles.grey}>// Output</span><br/>
          <span className={styles.grey}>{`{`}</span><br/>
          <span className={`${styles.grey} ${styles.ml10}`}>_id: 5e4ad0975fca9921d4aa412a</span><br/>
          <span className={`${styles.grey} ${styles.ml10}`}>name: 'Oqishdan chiqib ishga borish kere!'</span><br/>
          <span className={`${styles.grey} ${styles.ml10}`}>completed: true</span><br/>
          <span className={styles.grey}>{`}`}</span>
        </div>
        <p className={styles.ps}>
          Important: the resource will not be really updated on the server but it will be faked as if.
        </p>
      </div>
      <div className={styles.delete}>
        <p>Delete resource</p>
        <div>
          <span className={styles.lyellow}>fetch</span><span className={styles.dyellow}>{`(`}</span>
          <span className={styles.orange}>'https://hafidiy-restapi.herokuapp.com/api/todos</span>
          <span className={styles.orange}>/5e4ad0975fca9921d4aa412a'</span>
          <span className={styles.white}>{`, `}</span><span className={styles.dpink}>{`{`}</span><br/>
          <span className={`${styles.lblue} ${styles.ml10}`}>method:</span>
          <span className={styles.orange}> 'DELETE'</span><br/>
          <span className={styles.dpink}>{`}`}</span><span className={styles.dyellow}>{`)`}</span><br/>
        </div>
        <p className={styles.ps}>
          Important: the resource will not be really deleted on the server but it will be faked as if.
        </p>
      </div>
      <div className={styles.bottom}>
        {/* <p>Something....</p> */}
      </div>
    </div>
  )
}


fetch('https://hafidiy-restapi.herokuapp.com/api/todos')
  .then(res => res.json())
  .then(data => console.log(data))
  .catch(err => console.log(err))

// Output
