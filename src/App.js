import React from 'react';
import './App.css';
import { Quote } from './components/quote/quote.component'

class App extends React.Component {
  constructor() {
    super();
    this.state= {
        info: {},
        loaded: false, 
        color: ''
    }
}

handleChange = () => {
    let arr = new Array(9).fill(9).map((a,i) => (a-i).toString()).concat(['a', 'b', 'c', 'd', 'e', 'f']);
    arr = '#'+new Array(6).fill('').map(a => arr[Math.floor(Math.random()*15)].toString()).join('')
    return fetch('http://quotes.stormconsultancy.co.uk/random.json')
        .then(resp => resp.json())
        .then(data => {
            this.setState({
                info: data,
                color: arr
            })
        })
        .then(() => {
            this.setState({
                loaded: true
            })
        })
      }

      handleClick = (e) => {
        e.preventDefault()
        this.handleChange()
    }

  render() {
    return (
      <div className="App" style={{backgroundColor: this.state.color}}>
          <Quote 
            {...this.state.info} 
            loaded={this.state.loaded}
            color={this.state.color} 
            handleChange={this.handleChange}
            handleClick={this.handleClick} 
          />
      </div>
    );
  }
}

export default App;
