import React, { Component } from 'react'
import Cohort from './Cohort'
import people from '../data/yearbook-data'
import './App.css'

class App extends Component {
  constructor() {
    super()
    this.state = {
      staff: people.staff,
      students: people.students
    }
  }

  render() {
    const { staff } = this.state
    const { students } = this.state

    return (
      <div className="App">
        <header className="App-header">
          <h1>Turing Yearbook</h1>
        </header>
        <h2>Staff</h2>
        <Cohort cohort={staff} />
        <h2>Students</h2>
        <Cohort cohort={students} />
      </div>
    )
  }
}

export default App
