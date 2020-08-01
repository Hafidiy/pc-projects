import React from 'react'

class Search extends React.Component{

  state = {
    people: [],
    name: ''
  }

  handleChange = async ({ target }) => {
    this.setState({[target.name]: target.value})
    try {
      let res = await fetch(`/api/people/${this.state.name}`)
      if(res.status >= 400){
        res = await res.json()
        alert(res.msg)
        return 0
      }
      res = await res.json()

      this.setState({ people: [...res] })
    } catch(err){
      alert(err)
    }
  }

  handleJunmp = (e, id) => {
    const { people } = this.props.state
    e.preventDefault()

    let tmp = [...people]
    let tmpIndex = tmp.findIndex(item => item._id === id)

    tmp = [...tmp.splice(tmpIndex, tmp.length - tmpIndex), ...tmp.splice(0, tmpIndex)]

    this.props.tmpFoo('people', [...tmp])

    this.setState({ name: '' })
  }

  render(){
    const { people, name } = this.state
    return(
      <div className='searchBar'>
        <input
          type="text"
          name='name'
          value={name}
          placeholder='Search...'
          onChange={this.handleChange}
        />
        {name ? (
          <div className='absoluteBox'>
            {people.map((person, index) => (
              <p
                key={index}
                className='abcp'
                onClick={(e) => this.handleJunmp(e, person._id)}
              >
                {person.name}
              </p>
            ))}
          </div>
        ) : null}
      </div>
    )
  }
}

export default Search