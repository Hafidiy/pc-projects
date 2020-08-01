let users = []
let sendFile = ''
let tmpURL = '/'
let newUser = ''
let searchPeople = []
let searchName = ''

const createRows = (row, column) => {
  const table = document.querySelector('table')
  const tbody = table.querySelector('tbody')
  let tr = []
  for (let i = 0; i < row; i++){
    tr[i] = tbody.appendChild(document.createElement('tr'))
    
    for (let j = 0; j < column; j++){
      tr[i].appendChild(document.createElement('td'))
    }
  }

  return tr
}

const enterFirstRow = (user, index, tr) => {
  tr[0].querySelectorAll('td')[0].innerHTML = index + 1
  tr[0].querySelectorAll('td')[1].innerHTML = user.name
  tr[0].querySelectorAll('td')[2].innerHTML = user.passport || 'null'
  tr[0].querySelectorAll('td')[3].innerHTML = user.degree || 'null'
  tr[0].querySelectorAll('td')[4].innerHTML = user.soldier || 'null'
}

const emptyCol = (id, ind) => {
  let addInput = document.createElement('input')
  addInput.type = 'file'
  addInput.className = 'dn'
  addInput.id = `${id}/${ind}`
  
  let addLabel = document.createElement('label')
  addLabel.innerHTML = 'Add'
  addLabel.className = 'addButton'
  addLabel.htmlFor = `${id}/${ind}`

  return { addInput, addLabel }
}

const fullCol = (id, ind) => {
  let downloadBtn =  document.createElement('a')
  downloadBtn.innerHTML = 'Download'
  downloadBtn.download = true
  downloadBtn.className = 'downloadButton'
  downloadBtn.href = `${tmpURL}api/files/${id}/${ind}/download`

  let changeInput = document.createElement('input')
  changeInput.type = 'file'
  changeInput.className = 'dn'
  changeInput.id = `${id}/${ind}`

  let changeLabel = document.createElement('label')
  changeLabel.innerHTML = 'Change'
  changeLabel.className = 'changeButton'
  changeLabel.htmlFor = `${id}/${ind}`

  let deleteFileBtn = document.createElement('button')
  deleteFileBtn.innerHTML = 'Delete'
  deleteFileBtn.className = 'deleteButton'

  return { downloadBtn, changeInput, changeLabel, deleteFileBtn }
}

const handleAddFile = (e, item, userFiles, index) => {
  let fileD = e.target.files[0]
  let formData = new FormData()
  formData.append('file', fileD)
  sendFile = formData
  const reader = new FileReader()
  reader.readAsDataURL(fileD)
  reader.addEventListener(
    'load',
    async e => {
      sendFile = e.target.result

      try{
        let res = await fetch(`${tmpURL}api/files`, {
          method: 'post',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify({
            id: users[index]._id,
            which: item,
            file: sendFile
          })
        })
        if(res.status >= 400){
          res = await res.json()
          alert(res.msg)
          return 0
        }
        res = await res.json()
        userFiles.map(i => {
          if(res[i]){
            res[i] = res[i].slice(8)
          }
        })

        users[index] = res
        sendFile = ''
        removeRows()
        renderInfoCont()
      } catch(err){
        alert(err)
      }
    }
  )
}

const handleChangeFile = (e, item, userFiles, index) => {
  let fileD = e.target.files[0]
  let formData = new FormData()
  formData.append('file', fileD)
  sendFile = formData
  const reader = new FileReader()
  reader.readAsDataURL(fileD)
  reader.addEventListener(
    'load',
    async e => {
      sendFile = e.target.result

      try {
        let res = await fetch(`${tmpURL}api/files`, {
          method: 'PATCH',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify({
            which: item,
            id: users[index]._id,
            file: sendFile
          })
        })
        if (res.status >= 400){
          res = await res.json()
          alert(res.msg)
          return 0
        }
        res = await res.json()
        userFiles.map(i => {
          if(res[i]){
            res[i] = res[i].slice(8)
          }
        })

        users[index] = res
        removeRows()
        renderInfoCont()
      } catch(err){
        alert(err)
      }
    }
  )
}

const handleDeleteFile = async (e, item, index) => {
  try{
    let res = await fetch(`${tmpURL}api/files`, {
      method: 'DELETE',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        id: users[index]._id,
        which: item
      })
    })
    if(res.status >= 400){
      res = await res.json()
      alert(res.msg)
      return 0
    }
    res = await res.json()

    let userFiles = ['passport', 'degree', 'soldier']
    userFiles.map(item => {
      if(res[item]){
        res[item] = res[item].slice(8)
      }
    })

    users[index] = res
    removeRows()
    renderInfoCont()
  } catch(err){
    alert(err)
  }
}

const handleDeletePerson = async (e, user, index) => {
  e.preventDefault()

  try{
    let res = await fetch(`${tmpURL}api/people`, {
      method: 'DELETE',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({ id: user._id })
    })
    if(res.status >= 400){
      res = await res.json()
      alert(res.msg)
      return 0
    }
    res = await res.json()

    users.splice(index, 1)

    removeRows()
    renderInfoCont()
  } catch(err){
    alert(err)
  }
}

const handleChange = ({ target }) => newUser = target.value

const handleAddPerson = async e => {
  e.preventDefault()

  if(newUser !== ''){
    try {
      let res = await fetch(`${tmpURL}api/people`, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({ name: newUser })
      })
      if(res.status >= 400){
        res = await res.json()
        alert(res.msg)
        return 0
      }
      res = await res.json()
      newUser = ''  
      users = [...users, res]

      removeRows()
      renderInfoCont()
    } catch(err){
      alert(err)
    }
  } else {
    alert('Please enter the name!')
  }
}

const handleSearchChange = async (e) => {
  searchName = e.target.value

  try {
    let res = await fetch(`${tmpURL}api/people/${searchName}`)
    if(res.status >= 400){
      res = await res.json()
      alert(res.msg)
      return 0
    }
    res = await res.json()

    searchPeople = [...res]

    console.log(document.querySelector('.searchBar'))
    removeSearchBar()
    renderSearchBar()
  } catch(err){
    alert(err)
  }
}

const handleJump = (e, id) => {
  e.preventDefault()

  let tmpIndex = users.findIndex(item => item._id === id)
  users = [
    ...users.splice(tmpIndex, users.length - tmpIndex),
    ...users.splice(0, tmpIndex)
  ]
  searchName = ''

  // console.log(users)

  removeSearchBar()
  renderSearchBar()
  removeRows()
  renderInfoCont()
}

function removeRows () {
  const table = document.querySelector('table')
  const tbody = table.querySelector('tbody')

  while (tbody.querySelectorAll('tr').length !== 1){
    tbody.removeChild(tbody.querySelectorAll('tr')[1])
  }
}

function removeSearchBar () {
  let tmpBox = document.querySelector('.absoluteBox')
  let searchBar = document.querySelector('.searchBar')

  if(tmpBox){
    searchBar.removeChild(tmpBox)
  }
}

function renderInfoCont () {
  users.map((user, index) => {
    let userFiles = ['passport', 'degree', 'soldier']

    let tr = createRows(2, 6)
    enterFirstRow(user, index, tr)

    td = tr[1].querySelectorAll('td')

    userFiles.map((item, ind) => {
      if (user[item]){
        const {
          downloadBtn, changeInput, changeLabel, deleteFileBtn
        } = fullCol(user._id, ind)

        changeInput.onchange = e => handleChangeFile(e, item, userFiles, index)

        deleteFileBtn.onclick = e => handleDeleteFile(e, item, index)

        td[ind + 2].appendChild(downloadBtn)
        td[ind + 2].appendChild(changeInput)
        td[ind + 2].appendChild(changeLabel)
        td[ind + 2].appendChild(deleteFileBtn)
      } else {
        const { addInput, addLabel } = emptyCol(user._id, ind)
        td[ind + 2].appendChild(addInput)
        td[ind + 2].appendChild(addLabel)

        addInput.onchange = e => handleAddFile(e, item, userFiles, index)
      }
    })
    let deletePersonBtn = document.createElement('button')
    deletePersonBtn.innerHTML = 'Delete Person'
    deletePersonBtn.className = 'deletePersonButton'

    deletePersonBtn.onclick = e => handleDeletePerson(e, user, index)

    td[5].appendChild(deletePersonBtn)
  })

  let newUserInput = document.querySelector('.inputName')
                      .querySelector('input')
  newUserInput.name = 'newUser'
  newUserInput.value = newUser

  let addPersonInput = document.querySelector('.inputName')
                        .querySelector('button')

  newUserInput.onchange = e => handleChange(e)

  addPersonInput.onclick = e => handleAddPerson(e)
}

function renderSearchBar () {
  let searchBar = document.querySelector('.searchBar')

  let searchInput = document.querySelector('input')
  searchInput.name = 'searchName'
  searchInput.value = searchName

  if (searchName) {
    let searchBox = document.createElement('div')
    searchBox.className = 'absoluteBox'

    searchBar.appendChild(searchBox)

    searchPeople.map((person, index) => {
      let searchBoxP = document.createElement('p')
      searchBoxP.innerHTML = person.name
      searchBoxP.className = 'abcp'
      
      searchBoxP.onclick = e => handleJump(e, person._id)

      searchBox.appendChild(searchBoxP)
    })
  }

  searchInput.oninput = e => handleSearchChange(e)
}

fetch(`${tmpURL}api/people`)
  .then(res => res.json())
  .then(res => {
    users = [...res]

    users.map(user => {
      ['passport', 'degree', 'soldier'].map(item => {
        if(user[item]){
          user[item] = user[item].slice(8)
        }
      })
    })

    renderInfoCont()
  })
  .catch(err => alert(err))

renderSearchBar()