import './App.css'
import MovieCard from "./components/MovieCard"

function App() {
  const movieNumber = 1;
  return (
<>
  {movieNumber ===1 && <MovieCard movie={{title: "Venom", release_date: "2025"}}/>
  </>
  )
}

export default App
