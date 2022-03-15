import { Component } from 'react'
import { Link, Navigate } from 'react-router-dom'

class ErrorBoundary extends Component {
  state = { hasError: false, redirect: false }

  static getDerivedStateFromError() {
    return { hasError: true }
  }

  // componentDidCatch(error, info) {
  //   console.log(error, info)
  // }

  componentDidUpdate() {
    if (this.state.hasError) {
      console.log('yooo change')
      setTimeout(() => this.setState({ redirect: true }), 5000)
      console.log(this.state.redirect)
    }
  }

  render() {
    if (this.state.redirect) {
      return <Navigate to="/" />
    } else if (this.state.hasError) {
      return (
        <h2>
          There was an error. <Link to="/">Click here</Link> to get back to the
          homepage or wait 5 seconds.
        </h2>
      )
    }

    return this.props.children
  }
}

export default ErrorBoundary
