
import './App.css'

function App() {
  

  return (
    <>
    <Player name = 'Tamim Iqbal' runs= '5000'></Player>
    <Player name = 'Shakib Al-Hasan' runs= '6000'></Player>
    
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

export default App
