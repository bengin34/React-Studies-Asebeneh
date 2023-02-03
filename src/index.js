// index.js
import React from 'react'
import ReactDOM from 'react-dom'
import CSS from './images/CSS3.png'
import HTML from './images/HTML5.png'
import JS from './images/JavaScript.png'
import Reactt from './images/React.png'


const textStyle = {
display: 'flex',
justifyContent: 'center',
}

const text = ( <div  style={textStyle}>
  <h1 >Front End Technologies</h1>
</div>)

const techsStyle = {
  margin: '100px 140px',
  display: 'flex',
  width: '800px',
  height: '300px',

}

const techs = (
  <div style={techsStyle}>
    <img src={CSS} alt='CSS image' />
    <img src={HTML} alt='HTML image' />
    <img src={JS} alt='JS image' />
    <img src={Reactt} alt='React image' />
  </div>
)

const page = (
  <div>
  {text},
  {techs}
  </div>
)
const rootElement = document.getElementById('root')
// we render the JSX element using the ReactDOM package
ReactDOM.render(page, rootElement)