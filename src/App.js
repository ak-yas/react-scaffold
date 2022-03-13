import { render } from 'react-dom'
import SearchParams from './components/searchParams'

const App = () => {
  return (
    <div>
      <h1>Adopt me pls!</h1>
      <SearchParams />
    </div>
  )
}

render(<App />, document.querySelector('#root'))
