import { useParams } from 'react-router-dom'

const Details = () => {
  const { id } = useParams()
  return <div>Details page coming {id}</div>
}

export default Details
