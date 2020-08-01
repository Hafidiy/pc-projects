const form = document.getElementById('vote-form')

form.addEventListener('submit', async e => {
  const choice = document.querySelector('input[name=os]:checked').value
  const data = {os: choice}

  try{
    let res = await fetch('http://localhost:5000/api/poll', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(data)
    })
    res = await res.json()

    console.log(res)
  } catch(err){
    alert(err)
  }

  e.preventDefault()
})