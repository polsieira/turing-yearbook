import React, {
  Component
} from 'react'
import Cohort from './Cohort'
import people from '../data/yearbook-data'
import './App.css'

class App extends Component {
  constructor() {
    super()
    this.state = {
      staff: people.staff
    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Turing Yearbook</h1>
        </header>
        <Cohort cohort={this.state.staff} />
      </div>
    )
  }
}

export default App
