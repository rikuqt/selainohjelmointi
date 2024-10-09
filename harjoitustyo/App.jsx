import { useState, useEffect } from "react"
import axios from 'axios'

const Button = ({ onClick, buttonnimi}) => {
  return (
    <button onClick={onClick}>
    {buttonnimi}
    </button>
  )
}

const Filtteri = ({handleFilter, newFilter}) => {
  return (
    <form>
      <h1>Filtteri</h1>
      <div>Hae: <input value={newFilter}
      onChange={handleFilter}/>
      </div>
    </form>
  )
}

const JobForm = ({addJob, newJob, handleNewJob, newDifficulty, handleNewDifficlty}) => {
  return (
    <form onSubmit={addJob}>                                    
    <div>Anna uusi Jobi: <input value={newJob} string={newJob}    // Formi jossa on submit nappi menee functioon addjob ja tekee sen asiat
    onChange={handleNewJob}/>                                     
    </div>                                                        
                                                                
    <div>Vaikeustaso (1-10): <input value={newDifficulty} string={newDifficulty} // nämä viittaa handlereihin jotka käsittelee tekstikenttiä
    onChange={handleNewDifficlty}/>               
    </div>

    <button type="submit">add</button>
    </form>
  )
}





const App = () => {
  const [newJob, SetNewJob] = useState('')
  const [newDifficulty, setNewDifficulty] = useState('')
  const [newFilter, setNewFilter] = useState('')
  const [jobs ,SetJobs] = useState([])
 
  const hook = () => {
    console.log('effect')
    axios
      .get('http://localhost:3001/api/jobit')
      .then(response => {
        console.log('promise fulfilled')
        SetJobs(response.data)
      })
  }
  
  useEffect(hook, [])
  
  const addJob = (event) => {
    event.preventDefault()
    if (newJob === '' || newDifficulty==='') {
      alert('Täytä kaikki kentät')
    } else if (jobs.find((job) => job.nimi === newJob)){
      alert(`${newJob} löytyy jobeista jo`)
    } else {
    event.preventDefault()
    const jobObject = {         // Luodaan uusio olio kun tähän päästään (nappia painetaan)
      nimi: newJob,             
      vaikeustaso: newDifficulty,
      id: String(jobs.length + 1)
    }
    axios
    .post('http://localhost:3001/api/jobit', jobObject)
    .then(response => {
      console.log(response)
      console.log('jee')
    })
    
    console.log('nappi')
      SetJobs(jobs.concat(jobObject))  // luodaan kopio listasta ja lisätään kopioituun listaan uusi olio
      SetNewJob('')
      setNewDifficulty('')
      console.log(jobs)
  }
}
  
  const handleNewDifficlty = (event) => {
      console.log(event.target.value)
      setNewDifficulty(event.target.value)
  }

  const handleNewJob = (event) => {         // Handlerit formin teksti kentille
    console.log(event.target.value)
    SetNewJob(event.target.value)
  }

  const handleFilter = (event) => {
    console.log(event.target.value)
    setNewFilter(event.target.value)
}

  const jobsToShow = newFilter
  ? jobs.filter((job) =>
      job.nimi.toLowerCase().includes(newFilter.toLowerCase())
    )
  : jobs
  
  return (
    <div> 
    <JobForm addJob={addJob} newJob={newJob} handleNewJob={handleNewJob} newDifficulty={newDifficulty} handleNewDifficlty={handleNewDifficlty}/>                                                     
    <Filtteri newFilter={newFilter} handleFilter={handleFilter}/>
    <h2>Jobi lista:</h2>
    {jobsToShow.map((job)=>                       // tällä käydään jokainen listan alkio läpi ja otetaan vain nimi
    <li key={job.id}> {job.nimi} {job.vaikeustaso} </li>
    )}
    </div>
  )
}

export default App