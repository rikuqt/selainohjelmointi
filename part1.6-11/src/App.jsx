import { useState } from 'react'

const Button = ({onClick, text}) => {
  return (
    <button onClick={onClick}>
      {text}
    </button>
  )
}

const StatisticsLine = ({text, value}) => {
  return (
    <tbody>
      <tr>
        <td>{text}</td>
        <td>{value}</td>
      </tr>
    </tbody>
  )
}

const Statistics = ({good, neutral,bad, all, avarage, positive}) => {
  if (all===0) {
    return(
      <div>
        No feedback given
      </div>
    )
  }
  return (
    <div>
    <h1>Statistics</h1>
    <table>
    <StatisticsLine text={'Good'} value={good} />
    <StatisticsLine text={'Neutral'} value={neutral} />
    <StatisticsLine text={'Bad'} value={bad} />

    <StatisticsLine text={'All'} value={all} />
    <StatisticsLine text={'Avarage'} value={avarage.toFixed(1)} />
    <StatisticsLine text={'Positive'} value={positive.toFixed(1) + " %"} />
    </table>
    </div>
  )
}



const App = () => {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [selected, setSelected] = useState(0)

  const all = good + neutral + bad
  const avarage = (good - bad) / all
  const positive = (good/all) *100
  
  
  const handleGood = () => {
    console.log("Good painettu")
    return (
      setGood(good + 1)
    )
  }
  
  const handleBad = () => {
    console.log("bad painettu")
    return (
      setBad(bad + 1)
    )
  }

  const handleNeutral = () => {
    console.log("neutral painettu")
    return (
      setNeutral(neutral + 1)
    )
  }


  return (
    <div>
      <h1>Give feedback</h1>
      <Button onClick={handleGood} text={"Good"}/>
      <Button onClick={handleNeutral} text={"Neutral"}/>
      <Button onClick={handleBad} text={"Bad"}/>
      <Statistics good={good} neutral={neutral} bad={bad} all={all} avarage={avarage} positive={positive}/>
    </div>
  )
}

export default App