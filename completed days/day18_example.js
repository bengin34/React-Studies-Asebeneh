import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import axios from 'axios'

const Cat = ({
  cat: {life_span,weight,averageWeight,averageLifeSpan }
}) => {
  return (
    <div className='cat'>
      <p>On average a cat can weight about {averageWeight} KG and live {averageLifeSpan} years.</p>
    </div> 
  )
}

class App extends Component {
  state = {
    data: [],
  }

  componentDidMount() {
    const url = 'https://api.thecatapi.com/v1/breeds'
    axios
      .get(url)
      .then((response) => {
        this.setState({
          data: response.data,
        })
      })
      .catch((error) => {
        console.log(error)
      })
  }

  render() {
   
    const dataWithAverageWeightAndSpan = this.state.data.map(cat => {
        const totalWeight = cat.weight.metric[0];
        const totalLifeSpan = (cat.life_span).split(" ")[0];
        const averageLifeSpan = Math.trunc(totalLifeSpan / cat.life_span.length);
        const averageWeight = totalWeight / cat.weight.metric.length;
        return { ...cat, averageWeight, averageLifeSpan };
      });

    return (
      <div className='App'>
        <h1>30 Days Of React</h1>
        <h1>Cats Paradise</h1>
        <div>
          <p>There are {this.state.data.length} cat breeds</p>
          <div className='cat-wrapper'>
          {dataWithAverageWeightAndSpan.map((cat) => (
              <Cat cat={cat} />
            ))}
          </div>
        </div>
      </div>
    )
  }
}

const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)