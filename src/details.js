import { Component } from 'react'
import { useParams } from 'react-router-dom'

class Details extends Component {
  constructor(props) {
    super(props)

    this.state = { loading: true }
  }

  async componentDidMount() {
    const res = await fetch(
      `http://pets-v2.dev-apis.com/pets?id=${this.props.params.id}`
    )
    const data = await res.json()
    this.setState({ loading: false, ...data.pets[0] })

    setTimeout(function () {
      console.log(this.state)
    }, 5000)
  }

  render() {
    if (this.state.loading) {
      return <h1>loading...</h1>
    }

    const { name, animal, breed, city, state, description, images } = this.state

    return (
      <div className="details">
        <div>
          <h1>{name}</h1>
          <h2>
            {animal} — {breed} —{city}, {state}
          </h2>
          <button>Adopt {name}</button>
          <p>{description}</p>
        </div>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            marginTop: '50px',
          }}
        >
          {images.map((src, i) => (
            <img
              src={src}
              alt={name}
              key={i}
              style={{ width: '30%', height: '30%' }}
            />
          ))}
        </div>
      </div>
    )
  }
}

const WrapperDetails = () => {
  const params = useParams()
  return <Details params={params} />
}

export default WrapperDetails
