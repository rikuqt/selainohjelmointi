import { useState } from "react"

const Button = ({ onClick, buttonnimi}) => {
  return (
    <button onClick={onClick}>
    {buttonnimi}
    </button>
  )
}


/*
const JobForm = () => {
  return (
    <form onSubmit={addJob}>
    <div>Anna uusi Jobi: <input value={uusiJob} string={uusiJob}
    onChange={handlenimiChange}/>
    </div>

    <button type="submit">add</button>
    </form>
  )
}
  */





const App = () => {
  const [newJob, SetNewJob] = useState('')
  const [newDifficulty, setNewDifficulty] = useState('')
  const [jobs ,SetJobs] = useState([
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
  ])
  
  const addJob = (event) => {
    event.preventDefault()
    console.log('nappi')
      SetNewJob('')
      setNewDifficulty('')
      console.log(jobs)
  }
  
  const handleNewDifficlty = (event) => {
      console.log(event.target.value)
      setNewDifficulty(event.target.value)
  }

  const handleNewJob = (event) => {         // Handlerit formin teksti kentille
    console.log(event.target.value)
    SetNewJob(event.target.value)
  }
  
  return (
    <div>                                                      
      <form onSubmit={addJob}>                                    
    <div>Anna uusi Jobi: <input value={newJob} string={newJob}    // Formi jossa on submit nappi menee functioon addjob ja tekee sen asiat
    onChange={handleNewJob}/>                                     
    </div>                                                        
                                                                
    <div>Vaikeustaso: <input value={newDifficulty} string={newDifficulty} //input ja string käsittelee 
    onChange={handleNewDifficlty}/>               
    </div>

    <button type="submit">add</button>
    </form>
    <h2>Jobi lista:</h2>
    {jobs.map((job)=>                       // tällä käydään jokainen listan alkio läpi ja otetaan vain nimi
    <li key={job.id}> {job.nimi} </li>
    )}
    </div>
  )
}

export default App