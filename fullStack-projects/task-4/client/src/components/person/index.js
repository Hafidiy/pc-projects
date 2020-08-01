import React from 'react'

class Person extends React.Component{

  handleFileAdd = (e, i, index) => {
    const { people, file } = this.props.state
    let fileD = e.nativeEvent.target.files[0]
    let formData = new FormData()
    formData.append('file', fileD)
    this.props.tmpFoo('file', formData)
    const reader = new FileReader()
    reader.readAsDataURL(fileD)
    reader.addEventListener(
      'load',
      e => this.props.tmpFoo('file', e.target.result, async () => {
        try{
          let res = await fetch('/api/files', {
            method: 'post',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
              id: people[index]._id,
              which: i,
              file: this.props.state.file
            })
          })
          if(res.status >= 400){
            res = await res.json()
            alert(res.msg)
            return 0
          }
          res = await res.json()

          let tmpArr = ['passport', 'degree', 'soldier']
          tmpArr.map(item => {
            if(res[item]){
              res[item] = res[item].slice(8)
            }
          })

          let tmp = [...people]
          tmp[index] = res
          this.props.tmpFoo('people', [...tmp])
          this.props.tmpFoo('file', '') 
        } catch(err){
          alert(err)
        }
      })
    )
  }

  handleFileChange = async (e, i, index) => {
    const { people, file } = this.props.state
    let fileD = e.nativeEvent.target.files[0]
    let formData = new FormData()
    formData.append('file', fileD)
    this.props.tmpFoo('file', formData)
    const readerNew = new FileReader()
    readerNew.readAsDataURL(fileD)
    readerNew.addEventListener(
      'load',
      e => this.props.tmpFoo('file', e.target.result, async () => {
          try{
            let res = await fetch('/api/files', {
              method: 'PATCH',
              headers: {'Content-Type': 'application/json'},
              body: JSON.stringify({
                which: i,
                id: people[index]._id,
                file: this.props.state.file
              })
            })
            if (res.status >= 400){
              res = await res.json()
              alert(res.msg)
              return 0
            }
            res = await res.json()

            let tmpArr = ['passport', 'degree', 'soldier']
            tmpArr.map(item => {
              if(res[item]){
                res[item] = res[item].slice(8)
              }
            })

            let tmp = [...people]
            tmp[index] = res
            this.props.tmpFoo('people', [...tmp])
          } catch(err){
            alert(err)
          }
      })
    )
  }

  handleFileDelete = async (e, i, index) => {
    const { people } = this.props.state

    try{
      let res = await fetch('/api/files', {
        method: 'DELETE',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
          id: people[index]._id,
          which: i
        })
      })
      if(res.status >= 400){
        res = await res.json()
        alert(res.msg)
        return 0
      }
      res = await res.json()

      let tmp = [...people]
      tmp[index] = res
      this.props.tmpFoo('people', [...tmp])
    } catch(err) {
      alert(err)
    }
  }

  handlePersonDelete = async (e, person, index) => {
    e.preventDefault()

    try{
      let res = await fetch('/api/people', {
        method: 'DELETE',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({ id: person._id })
      })
      if(res.status >= 400){
        res = await res.json()
        alert(res.msg)
        return 0
      }
      res = await res.json()

      let tmp = [...this.props.state.people]
      tmp.splice(index, 1)
      this.props.tmpFoo('people', tmp)
    } catch(err){
      alert(err)
    }
  }

  render(){
    const { person, index } = this.props
    return (
      <>
        <tr>
          <td>{index + 1}</td>
          <td>{person.name}</td>
          <td>{person.passport ? person.passport : 'null'}</td>
          <td>{person.degree ? person.degree : 'null'}</td>
          <td>{person.soldier ? person.soldier : 'null'}</td>
          <td></td>
        </tr>
        <tr>
          <td></td>
          <td></td>
          {['passport', 'degree', 'soldier'].map((i, ind) => (
            <td>
              {person[i] ? (
                <>
                  <a
                    download
                    className='downloadButton'
                    href={`/api/files/${person._id}/${i}/download`}
                  >
                    Download
                  </a>
                  <input
                    type="file"
                    className='dn'
                    id={`${person._id}-${ind}`}
                    onChange={e => this.handleFileChange(e, i, index)}
                  />
                  <label
                    className='changeButton'
                    htmlFor={`${person._id}-${ind}`}
                  >
                    Change
                  </label>
                  <button
                    className='deleteButton'
                    onClick={e => this.handleFileDelete(e, i, index)}
                  >
                    Delete
                  </button>
                </>
              ) : (
                <>
                  <input
                    type="file"
                    className='dn'
                    id={`${person._id}/${ind}`}
                    onChange={e => this.handleFileAdd(e, i, index)}
                  />
                  <label
                    className='addButton'
                    htmlFor={`${person._id}/${ind}`}
                  >
                      Add
                  </label>
                </>
              )}
            </td>
          ))}
          <td>
            <button
              className='deletePersonButton'
              onClick={e => this.handlePersonDelete(e, person, index)}
            >
              Delete person
            </button>
          </td>
        </tr>
      </>
    )
  }
}

export default Person