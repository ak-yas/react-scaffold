import { render } from 'react-dom'
import Pet from './components/pet'

const App = () => {
  return (
    <div>
      <h1>Adopt me pls!</h1>
      <Pet name="Luna" animal="Dog" breed="Havanese" />
      <Pet name="MJ" animal="Bird" breed="Cockatiel" />
      <Pet name="Doink" animal="Cat" breed="Somali" />
    </div>
  )
}

render(<App />, document.querySelector('#root'))
