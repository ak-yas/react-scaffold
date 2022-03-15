import { Component } from 'react'
import { useParams } from 'react-router-dom'
import Carousel from './components/carousel'
import ErrorBoundary from './components/errorBoundary'

class Details extends Component {
  state = { loading: true }

  async componentDidMount() {
    const res = await fetch(
      `http://pets-v2.dev-apis.com/pets?id=${this.props.params.id}`
    )
    const data = await res.json()
    this.setState({ loading: false, ...data.pets[0] })
  }

  render() {
    if (this.state.loading) {
      return <h1>loading...</h1>
    }

    const { name, animal, breed, city, state, description, images } = this.state

    return (
      <div className="details">
        <Carousel images={images} />
        <div>
          <h1>{name}</h1>
          <h2>
            {animal} — {breed} —{city}, {state}
          </h2>
          <button>Adopt {name}</button>
          <p>{description}</p>
        </div>
      </div>
    )
  }
}

const WrapperDetails = () => {
  const params = useParams()
  return (
    <ErrorBoundary>
      <Details params={params} />
    </ErrorBoundary>
  )
}

export default WrapperDetails
