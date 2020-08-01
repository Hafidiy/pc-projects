import React from 'react'
import { tasks } from '../../../store'
import styles from './index.module.scss'

export class Result extends React.Component{

  state = {
    results: [3, 6, 8, 12, 16, 20],
    current: 0
  }

  componentDidMount() {
    // console.log(tasks[])
  }
  

  render(){
    const { results, current } = this.state
    const { sumWrongs } = tasks
    return (
      <div className={styles.cont}>
        <table className={styles.table}>
          <tr>
            <td>
              <span>hozirgi bahosi</span>
              <p>
                {((tasks.data.length - sumWrongs.length) * 100) / tasks.data.length >= 90
                  ? 5 : ((tasks.data.length - sumWrongs.length) * 100) / tasks.data.length >= 70
                    ? 4 : ((tasks.data.length - sumWrongs.length) * 100) / tasks.data.length >= 60
                      ? 3 : 2}
              </p>
            </td>
            <td>
              <span>foizda</span>
              <p>
                {(((tasks.data.length - sumWrongs.length) * 100) / tasks.data.length).toFixed(2)}%
              </p>
            </td>
            <td>
              <span>to'gri javoblar soni</span>
              <p>{tasks.data.length - sumWrongs.length}</p>
            </td>
          </tr>
        </table>
        <ul className={styles.ul}>
          {sumWrongs.length ? sumWrongs.map((item, index) => 
            <li
              key={index}
              onClick={() => this.setState({ current: index })}
            >
              {index + 1}
            </li>
          ) : null}
        </ul>
        <div className={styles.question}>
          {sumWrongs.length > 0 ? sumWrongs[current].question : null}
        </div>
        {!(sumWrongs.length > 0) ? null : <ul className={styles.ulv}>
            <li className={`${
              sumWrongs[current].variants[0][1] && sumWrongs[current].variants[0][2]
                ? styles.correct : sumWrongs[current].variants[0][2]
                  ? styles.incorrect : sumWrongs[current].variants[0][1]
                    ? styles.correct : ''
            }`}>
              <span>A</span>
              {sumWrongs[current].variants[0]}
            </li>
            <li className={`${
              sumWrongs[current].variants[1][1] && sumWrongs[current].variants[1][2]
                ? styles.correct : sumWrongs[current].variants[1][2]
                  ? styles.incorrect : sumWrongs[current].variants[1][1]
                    ? styles.correct : ''
            }`}>
              <span>B</span>
              {sumWrongs[current].variants[1]}
            </li>
            <li className={`${
              sumWrongs[current].variants[2][1] && sumWrongs[current].variants[2][2]
                ? styles.correct : sumWrongs[current].variants[2][2]
                  ? styles.incorrect : sumWrongs[current].variants[2][1]
                    ? styles.correct : ''
            }`}>
              <span>C</span>
              {sumWrongs[current].variants[2]}
            </li>
            <li className={`${
              sumWrongs[current].variants[3][1] && sumWrongs[current].variants[3][2]
                ? styles.correct : sumWrongs[current].variants[3][2]
                  ? styles.incorrect : sumWrongs[current].variants[3][1]
                    ? styles.correct : ''
            }`}>
              <span>D</span>
              {sumWrongs[current].variants[3]}
            </li>
        </ul>}
      </div>
    )
  }
}