import React from 'react'
import './Person.css'

const Person = ({
  photo, name, quote, superlative
}) => (
  <div className="card">
      <img src={photo} alt="yearbook" height="40px" width="30px" />
      <h3>{name}</h3>
      <p>{quote}</p>
      <p>{superlative}</p>
    </div>
)

export default Person
