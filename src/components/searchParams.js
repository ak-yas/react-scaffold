import { useState, useEffect } from 'react'
import Pet from './pet'
import useBreedList from '../lib/useBreedList'

const ANIMALS = ['bird', 'cat', 'dog', 'rabbit', 'reptile']

const SearchParams = () => {
  const [location, setLocation] = useState('')
  const [animal, setAnimal] = useState('')
  const [breed, setBreed] = useState('')
  const [breeds] = useBreedList(animal)
  const [pets, setPets] = useState([])

  useEffect(() => {
    requestPets()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  async function requestPets() {
    const res = await fetch(
      `http://pets-v2.dev-apis.com/pets?animal=${animal}&location=${location}&breed=${breed}`
    )
    const data = await res.json()
    setPets(data.pets)
  }

  return (
    <div className="search-params">
      <p>{animal}</p>
      <form
        onSubmit={(event) => {
          event.preventDefault()
          console.log(location)
        }}
      >
        <label htmlFor="location">
          Location
          <input
            id="location"
            value={location}
            onChange={(event) => setLocation(event.target.value)}
            placeholder="Location"
          />
        </label>

        {/* Animal */}
        <label htmlFor="animal">
          animal
          <select
            id="animal"
            value={animal}
            onChange={(e) => {
              setAnimal(e.target.value)
              setBreed('')
            }}
            onBlur={(e) => {
              setAnimal(e.target.value)
              setBreed('')
            }}
          >
            <option />
            {ANIMALS.map((animal) => (
              <option key={animal} value={animal}>
                {animal}
              </option>
            ))}
          </select>
        </label>

        {/* Breed */}
        <label htmlFor="breed">
          Breed
          <select
            id="breed"
            value={breed}
            onChange={(e) => {
              setBreed(e.target.value)
            }}
            onBlur={(e) => {
              setBreed(e.target.value)
            }}
          >
            <option />
            {breeds.map((breed) => (
              <option key={breed} value={breed}>
                {breed}
              </option>
            ))}
          </select>
        </label>
        <button>Submit</button>
      </form>

      {/* Pets */}
      {pets.map((p) => (
        <Pet name={p.name} animal={p.animal} breed={p.breed} key={p.id} />
      ))}
    </div>
  )
}

export default SearchParams
