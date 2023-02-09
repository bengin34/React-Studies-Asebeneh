import React from 'react'
import ReactDOM from 'react-dom'

// Header Component
const Header = (props) => {
  console.log(props) // {welcome:'Welcome to 30 Days Of React'}
  return (
    <header>
      <div className='header-wrapper'>
        <h1>{props.welcome}</h1>
      </div>
    </header>
  )
}

// The App, or the parent or the container component
// Functional Component
const App = () => {
  return (
    <div className='app'>
      <Header welcome='Welcome to 30 Days Of React' />
    </div>
  )
}

const rootElement = document.getElementById('root')

ReactDOM.render(<App />, rootElement)