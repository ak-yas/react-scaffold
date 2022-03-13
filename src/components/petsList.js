import Pet from './pet'

const PetsList = ({ pets }) => {
  return (
    <div>
      {pets.length ? (
        pets.map((pet) => (
          <Pet
            images={pet.images}
            name={pet.name}
            animal={pet.animal}
            breed={pet.breed}
            location={`${pet.city}, ${pet.state}`}
            id={pet.id}
            key={pet.id}
          />
        ))
      ) : (
        <div className="info">
          <h1>No Pets Found!</h1>
        </div>
      )}
    </div>
  )
}

export default PetsList
