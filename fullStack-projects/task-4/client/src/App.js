import './App.css'

import React from 'react'

import Person from './components/person'
import Search from './components/search'

class App extends React.Component{

  state = {
    people: [],
    file: '',
    newPerson: '',
  }

  componentDidMount() {
    this.firstFoo()
  }
  
  firstFoo = async () => {
    try{
      let res = await fetch('/api/people')
      if(res.status >= 400){
        res = await res.json()
        alert(res.msg)
        return 0
      }
      res = await res.json()

      res.map(person => {
        ['passport', 'degree', 'soldier'].map(item => {
          if(person[item]){
            person[item] = person[item].slice(8)
          }
        })
      })

      this.setState({ people: [...res] })
    } catch(err){
      alert(err)
    }
  }

  tmpFoo = (key, value, opts = null) => this.setState({[key]: value }, () => {
    if (opts !== null){
      opts()
    }
  })

  handlePersonAdd = async () => {
    const { newPerson, people } = this.state
    if(newPerson !== ''){
      try {
        let res = await fetch('/api/people', {
          method: 'POST',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify({ name: newPerson })
        })
        if(res.status >= 400){
          res = await res.json()
          alert(res.msg)
          return 0
        }
        res = await res.json()

        this.setState({ newPerson: '' })
          
        let tmp = [...people, res]
        this.setState({ people: [...tmp] })
      } catch(err){
        alert(err)
      }
    } else {
      alert('Please enter the name!')
    }
  }

  handleChange = ({ target }) => this.setState({[target.name]: target.value })

  render(){
    const { people, newPerson } = this.state
    return (
      <div className="container">
        <Search
          state={this.state}
          tmpFoo={this.tmpFoo}
        />
  
        <div className="infoTable">
          <div className='inputName'>
            <input
              type="text"
              name='newPerson'
              value={newPerson}
              onChange={this.handleChange}
              placeholder='Enter a new person...'
            />
            <button
              onClick={this.handlePersonAdd}
              className="addPersonButton"
            >
              Add Person
            </button>
          </div>
          <table>
            <tr>
              <th>No.</th>
              <th>Name</th>
              <th>Passport</th>
              <th>Degree</th>
              <th>Soldier</th>
              <th></th>
            </tr>
            {people.length ? people.map((person, index) => (
              <Person
                index={index}
                person={person}
                state={this.state}
                tmpFoo={this.tmpFoo}
              />
            )): null}
          </table>
        </div>
      </div>
    )
  }
}

export default App;
