import React from 'react'
import styles from './index.module.scss'

export class Admin extends React.Component{

  state = {
    subjectType: null,
    question: '',
    variants: [ [], [], [], [] ]
  }

  handleFoo = async () => {
    const { subjectType, question, variants } = this.state
    let bool = true
    variants.map(item => {
      if(!(item[0]))
        bool = false
      if(item[1] === undefined)
        bool = false
    })
    if(subjectType && question && bool) {
      try{
        let res = await fetch('http://localhost:8000/api/tests',{
          method: 'POST',
          headers: {'Content-Type': 'apfsafasfplication/json'},
          body: JSON.stringify(this.state)
        })
        res = await res.json()

        console.log(res)
        this.setState({
          question: '',
          subjectType: null,
          variants: [[], [], [], []]
        })
      } catch(err){
        alert(err)
      }
    } else {
      if(!subjectType)
        alert('Please select Subject!')
      if(!question)
        alert('Please enter the question!')
      if(!bool)
        alert('Please enter the variants!')
    }
  }

  render() {
    return(
      <div className={styles.cont}>
        <select
          className={styles.select}
          onChange={e => this.setState({ subjectType: e.target.value })}
        >
          <option selected disabled>Select Subject</option>
          <option value='electronics'>Electronics</option>
          <option value='cybersecurity'>Cybersecurity</option>
          <option value='database'>Database</option>
          <option value='english'>English</option>
        </select>
        <div className={styles.qbox}>
          <input
            type='text'
            placeholder='Enter the question...'
            onChange={e => this.setState({ question: e.target.value })}
          />
          <input type='file' id='question' className={styles.dn}/>
          <label
            htmlFor='question'
            className={styles.labelquestion}
          >
            As a picture...
          </label>
        </div>
        <div className={styles.vbox}>
          <input
            type='text'
            placeholder='enter the first and true variant...'
            onChange={e => {
              let tmp = [...this.state.variants]
              tmp[0][0] = e.target.value
              tmp[0][1] = true
              this.setState({ variants: tmp })
            }}
          />
          <input type='file' id='var1' className={styles.dn}/>
          <label htmlFor='var1' className={styles.labelvariant}>
            As a picture...
          </label>
          <input
            type='text'
            placeholder='enter the second variant...'
            onChange={e => {
              let tmp = [...this.state.variants]
              tmp[1][0] = e.target.value
              tmp[1][1] = false
              this.setState({ variants: tmp })
            }}
          />
          <input type='file' id='var2' className={styles.dn}/>
          <label htmlFor='var2' className={styles.labelvariant}>
            As a picture...
          </label>
          <input
            type='text'
            placeholder='enter the third variant...'
            onChange={e => {
              let tmp = [...this.state.variants]
              tmp[2][0] = e.target.value
              tmp[2][1] = false
              this.setState({ variants: tmp })
            }}
          />
          <input type='file' id='var3' className={styles.dn}/>
          <label htmlFor='var3' className={styles.labelvariant}>
            As a picture...
          </label>
          <input
            type='text'
            placeholder='enter the fourth variant...'
            onChange={e => {
              let tmp = [...this.state.variants]
              tmp[3][0] = e.target.value
              tmp[3][1] = false
              this.setState({ variants: tmp })
            }}
          />
          <input type='file' id='var4' className={styles.dn}/>
          <label htmlFor='var4' className={styles.labelvariant}>
            As a picture...
          </label>
          <button
            onClick={this.handleFoo}
          >
            Add question
          </button>
        </div>
      </div>
    )
  }
}