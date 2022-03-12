import React from 'react'
import { render } from 'react-dom'
import Pet from './components/pet'

const App = () => {
  return React.createElement('div', {}, [
    React.createElement('h1', {}, 'Adopt me pls!'),
    React.createElement(Pet, {
      name: 'Luna',
      animal: 'Dog',
      breed: 'Havanese',
    }),
    React.createElement(Pet, {
      name: 'MJ',
      animal: 'Bird',
      breed: 'Cockatiel',
    }),
    React.createElement(Pet, {
      name: 'Doink',
      animal: 'Cat',
      breed: 'Somali',
    }),
  ])
}

let myApp = App()
console.log(myApp)

render(myApp, document.querySelector('#root'))
