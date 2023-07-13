import { BrowserRouter, Routes, Route } from "react-router-dom"
import axios from "axios"

import ListCharacters from "./pages/list_characters"
import ListPokemons from "./pages/list_pokemons"
import Detail from "./pages/detail"

const App = () => {

  axios.defaults.baseURL = 'https://pokeapi.co/api/v2/'

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<ListCharacters />} path="/" />
        <Route element={<ListPokemons />} path="/pokemon" />
        <Route element={<Detail />} path="/pokemon/detail" />
      </Routes>
    </BrowserRouter>
  )
}

export default App