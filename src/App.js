import { render } from 'react-dom'
import { StrictMode } from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import SearchParams from './searchParams'
import Details from './details'

const App = () => {
  return (
    <StrictMode>
      <BrowserRouter>
        <header>
          <Link to="/">Adopt me pls!</Link>
        </header>
        <Routes>
          <Route path="/" element={<SearchParams />} />
          <Route path="/details/:id" element={<Details />} />
        </Routes>
      </BrowserRouter>
    </StrictMode>
  )
}

render(<App />, document.querySelector('#root'))
