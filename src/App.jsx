import './App.css'
import data from "../public/data.json"
import ResultsCard from './components/ResultsCard';


function App() {
  const scores = data.map((result) => result.score);

  return (
    <>
    <ResultsCard scores={scores} />
    </>
  )
}

export default App
