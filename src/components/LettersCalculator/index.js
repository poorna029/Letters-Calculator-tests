// Write your code here.
import {Component} from 'react'
import './index.css'

class LettersCalculator extends Component {
  state = {count: 0, value: ''}

  countOf = event => {
    const word = event.target.value
    this.setState(a => ({count: a.count + 1, value: word}))

    console.log(word)
  }

  reset = () => {
    this.setState(() => ({count: 0, value: ''}))
  }

  render() {
    const {count, value} = this.state
    return (
      <div className="bg">
        <div className="second">
          <img
            src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
            alt="letters calculator"
            className="mage"
          />
        </div>
        <div className="first">
          <h1>Calculate the letters you enter </h1>
          <label htmlFor="5">Enter the phrase</label>
          <input
            className="input"
            type="text"
            placeholder="Enter the phrase"
            onChange={this.countOf}
            value={value}
            id="5"
          />
          <button className="button" type="button" onClick={this.reset}>
            <p className="countvalue">No.of letters: {count}</p>
          </button>
        </div>
      </div>
    )
  }
}

export default LettersCalculator
