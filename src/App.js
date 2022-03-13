import { render } from 'react-dom'
import { StrictMode } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import SearchParams from './searchParams'
import Details from './details'

const App = () => {
  return (
    <StrictMode>
      <BrowserRouter>
        <div>
          <h1>Adopt me pls!</h1>
        </div>
        <Routes>
          <Route path="/" element={<SearchParams />} />
          <Route path="/details/:id" element={<Details />} />
        </Routes>
      </BrowserRouter>
    </StrictMode>
  )
}

render(<App />, document.querySelector('#root'))
