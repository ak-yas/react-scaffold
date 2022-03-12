import React from 'react'
import ReactDOM from 'react-dom'

const Pet = (props) => {
  return React.createElement('div', {}, [
    React.createElement('h1', {}, props.name),
    React.createElement('h1', {}, props.animal),
    React.createElement('h2', {}, props.breed),
  ])
}
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

ReactDOM.render(myApp, document.querySelector('#root'))
