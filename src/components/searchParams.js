import { useState } from 'react'

const SearchParams = () => {
  const [location, setLocation] = useState('London, GB')

  return (
    <div className="search-params">
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
        <button>Submit</button>
      </form>
    </div>
  )
}

export default SearchParams
