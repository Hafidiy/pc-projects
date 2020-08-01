import { action, observable } from 'mobx'

export let todos = observable([])

export const getTodos = action(async () => {
  try{
    let res = await fetch('https://hafidiy-restapi.herokuapp.com/api/todos')
    res = await res.json()

    res.map(todo => todos.push(todo))
  } catch(err) {
    alert(err)
  }
})

export const handleByLimit = action(async limit => {
  try{
    let res = await fetch(`https://hafidiy-restapi.herokuapp.com/api/todos?limit=${limit}`)
    res = await res.json()

    todos.splice(0, todos.length)
    res.map(todo => todos.push(todo))
  } catch(err) {
    alert(err)
  }
})

export const handleByPagination = action(async (limit, page = 1) => {
  try{
    let res = await fetch(`https://hafidiy-restapi.herokuapp.com/api/todos?limit=${limit}&page=${page}`)
    res = await res.json()

    todos.splice(0, todos.length)
    res.map(todo => todos.push(todo))
  } catch(err) {
    alert(err)
  }
})

export const addTodo = action(async title => {
  if(title){
    try {
      let res = await fetch(`https://hafidiy-restapi.herokuapp.com/todos`, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
          name: title
        })
      })
      res = await res.json()
  
      todos.unshift(res)
    } catch(err) {
      alert(err)
    }
  }
})

export const handleDone = action(async index => {
  todos[index].completed = !todos[index].completed
})