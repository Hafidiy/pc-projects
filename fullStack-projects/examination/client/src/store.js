import { observable, action } from 'mobx'

export let tasks = observable({data: []})

export const firstFoo = action(async (subject) => {
  try{
    let res = await fetch(`api/tests/${subject}?limit=20`)
    res = await res.json()

    tasks.data = res
    tasks.data.map(item => {
      item.variants = addBool(item.variants)
      item.variants = handleStir(item.variants)
    })
  } catch(err) {
    alert(err)
  }
})

export const changeBool = action((cur, index) => {
  tasks.data[cur].variants.map(item => {
    item[2] = false
  })
  tasks.data[cur].variants[index][2] = true
})

export const someWrongAns = action(() => {
  let sumWrongs = []
  tasks.data.map(item => {
    let bool = false
    item.variants.map(vitem => {
      if(vitem[1] === true && vitem[2] === true){
        bool = true
      }
    })
    if(bool) {
      console.log('topdm!')
    } else {
      sumWrongs.push(item)
    }
  })

  tasks.sumWrongs = sumWrongs
})

const handleStir = arr => {
  for (let i = 0; i < arr.length; i++) {
    let tmp = arr[i]
    let tmpIndex = parseInt(Math.random() * 10) % 4
    arr[i] = arr[tmpIndex]
    arr[tmpIndex] = tmp
  }

  return arr
}

const addBool = arr => {
  arr.map(item => item.push(false))
  return arr
}