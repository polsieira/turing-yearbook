import React from 'react'
import Person from './Person'
import './Cohort.css'

const Cohort = ({ cohort }) => {
  const personCards = cohort.map((person) => (
    <Person
      photo={person.photo}
      name={person.name}
      quote={person.quote}
      superlative={person.superlative}
    />
  ))

  return (
    <div className="people-container">
      {personCards}
    </div>
  )
}

export default Cohort
