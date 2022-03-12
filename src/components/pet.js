const Pet = ({ name, animal, breed }) => (
  //   return React.createElement('div', {}, [
  //     React.createElement('h1', {}, props.name),
  //     React.createElement('h1', {}, props.animal),
  //     React.createElement('h2', {}, props.breed),
  //   ])

  <div>
    <h1>{name}</h1>
    <h1>{animal}</h1>
    <h1>{breed}</h1>
  </div>
)

export default Pet
