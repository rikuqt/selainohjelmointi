const express = require('express')
const app = express()
app.use(express.json())
const cors = require('cors')
app.use(cors())
app.use(express.static('dist'))

let jobit = [
    {
        nimi: 'Selainohjelmointi',
        vaikeustaso: 10,
        id: 1
      },
      {
        nimi: 'Tietoturva',
        vaikeustaso: 7,
        id: 2
      },
      {
        nimi: 'Käyttölittymät',
        vaikeustaso: 2,
        id: 3
      },
      {
        nimi: 'Virtual environments',
        vaikeustaso: 11,
        id: 4
      }
]


app.get('/api/jobit', (request, response) => {
  response.json(jobit)
})

app.delete('/api/jobit/:id', (request, response) => {
    const id = request.params.id
    jobit = jobit.filter(jobi => jobi.id !== id)
  
    response.status(204).end()
  })

  app.post('/api/jobit', (request, response) => {
    const maxId = jobit.length > 0
      ? Math.max(...jobit.map(n => Number(n.id))) 
      : 0
  
    const jobi = request.body
    jobi.id = String(maxId + 1)
  
    jobit = jobit.concat(jobi)
  
    response.json(jobi)
  })

app.get('/api/jobit/:id', (request, response) => {
    const id = request.params.id
    const jobi = jobit.find(jobi => jobi.id === id)
    
  
    if (jobi) {
      response.json(jobi)
    } else {
      response.status(404).end()
    }
  })

  
  const PORT = process.env.PORT || 3001
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
  })