
import './App.css'

function App() {
  

  return (
    <>
    <Player name = 'Tamim Iqbal' runs= '5000'></Player>
    <Player name = 'Shakib Al-Hasan' runs= '6000'></Player>
    <PlayerOne name={'Rimo'} runs={'98456986'}></PlayerOne>
    <Salami event="Rujar Eid" amount={"3000"}></Salami>
    <Salami event="Graduation" amount={"6000"}></Salami>
    </>
  )
}

function Player(props) {
  return(
    <div>
      <h3>Player: {props.name}</h3>
      <p>Runs: {props.runs}</p>
    </div>
  )
}

// Destructuring====
// const {name,runs} = {name: "Tamim Hasan", runs: "98598"}
function PlayerOne({name,runs}){
  return(
    <div>
      <h2>Name: {name}</h2>
      <p>Runs: {runs}</p>
    </div>
  )
}

function Salami ({event,amount =0}){
  //amount 0 karon amount er value na dile amra default value dite pari
  return(
    <div>
      <h3>Salami For: {event}</h3>
      <p>Anount: {amount}</p>
    </div>
  )
}

export default App
