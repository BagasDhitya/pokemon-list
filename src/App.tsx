import { BrowserRouter, Routes, Route } from "react-router-dom"
import axios from "axios"

import ListCharacters from "./pages/list_characters"
import Detail from "./pages/detail"

const App = () => {

  axios.defaults.baseURL = 'https://pokeapi.co/api/v2/'

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<ListCharacters />} path="/" />
        <Route element={<Detail />} path="/detail/:url" />
      </Routes>
    </BrowserRouter>
  )
}

export default App