import React from 'react'
import Person from './Person'
import './Cohort.css'

const Cohort = ({ group }) => {
  const personCards = group.map((person) => (
    <Person
      photo={person.photo}
      name={person.name}
      quote={person.quote ? person.quote : 'Give me some more React'}
      superlative={person.superlative ? person.superlative : 'Most likely to like React'}
    />
  ))

  return (
    <div className="people-container">
      {personCards}
    </div>
  )
}

export default Cohort
