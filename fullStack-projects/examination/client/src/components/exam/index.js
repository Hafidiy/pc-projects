import React from 'react'
import { Result } from './result'
import { MiniBox } from './mini-box'
import { observer } from 'mobx-react'
import styles from './index.module.scss'
import { tasks, firstFoo, someWrongAns} from '../../store'

class ExamComponent extends React.Component{

  state = {
    current: 0
  }

  componentDidMount = () => firstFoo(this.props.location.state.subject)

  handleChangeCurrent = () => {
    if(this.state.current < tasks.data.length - 1){
      this.setState({ current: this.state.current + 1 })
    }
  }

  handleLastFoo = () => {
    someWrongAns()
    this.setState({ current: 20 })
  }

  render() {
    const { current } = this.state
    return(
      current < 20 ? <div className={styles.cont}>
        <ul className={styles.wrap}>
          {tasks.data.map((item, index) => 
            <li
              key={index}
              className={`${styles.li} ${
                tasks.data.length > 0 && tasks.data[index].variants.some(item => item[2] === true)
                  ? styles.did : ''
              } ${
                current === index ? styles.current : ''
              }`}
              onClick={() => this.setState({ current: index })}
            >
              {index + 1}
            </li>
          )}
        </ul>
        <div className={styles.np}>
          <button
            disabled={current === 0}
            onClick={() => this.setState({ current: current - 1 })}
          >
            ⬅ Prev
          </button>
          <button
            onClick={this.handleLastFoo}
          >
            Finish
          </button>
          <button
            disabled={current === tasks.data.length - 1}
            onClick={() => this.setState({ current: current + 1 })}
          >
            Next ➡
          </button>
        </div>
        <MiniBox
          current={current}
          changeCurrent={this.handleChangeCurrent}
        />
      </div> : <Result />
    )
  }
}

export const Exam = observer(ExamComponent)