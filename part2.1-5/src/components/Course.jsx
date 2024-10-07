const Header = (props) => {
  console.log("header")
  return (
    <div>
      <h1>{props.course.name}</h1>
    </div>
  )
}

const array1 = [1, 2, 3, 4];

// 0 + 1 + 2 + 3 + 4
const initialValue = 0;
const sumWithInitial = array1.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  initialValue,
);


const Total = (props) => {

  let sum = props.parts.reduce((acc, currentValue) => acc + currentValue.exercises, 0)
  
  /* ^^ listojen läpikäyntiin jossa on olioita*/

  /*
  let sum = 0
  for (let i=0; i < props.parts.length; i++) {  <----- listojen läpikäyntiin jossa on olioita
    sum += props.parts[i].exercises
  }
    */

  console.log(sum)
  return (
    <div>
      <p>Number of exercises {sum}</p>
    </div>
  )
}

const Part = ({part}) => {
  console.log("part")
  console.log(part)
  return (
    <p>
      {part.name} {part.exercises}
    </p>    
  )
}


// Ota mallia: https://fullstackopen.com/osa2/kokoelmien_renderointi_ja_moduulit#refaktorointia-moduulit 
// Part vastaan nyt Notea
const Content = (props) => {
  console.log("content")
  console.log(props)
  return(
    <div>
      {props.parts.map(part =>
        <Part key = {part.id} part={part} />)
      }
    </div>
  )
}

const Course = ({course}) => {
  return (
    <div>
        <Header course={course} />
        <Content parts={course.parts} />
        <Total parts={course.parts} />
    </div>
  )
}

export default Course