
import './App.css'

function App() {
  

  return (
    <>
    <Player name = 'Tamim Iqbal' runs= '5000'></Player>
    <Player name = 'Shakib Al-Hasan' runs= '6000'></Player>
    <PlayerOne name={'Rimo'} runs={'98456986'}></PlayerOne>
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

export default App
