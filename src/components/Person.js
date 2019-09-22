import React from 'react'
import './Person.css'

const Person = ({
  photo, name, quote, superlative
}) => (
  <div className="card">
      <img src={photo} alt="yearbook" className="img--yearbook-photo" />
      <h3 className="h3--yearbook-name">{name}</h3>
      <p className="p--yearbook-quote">
"
{quote}
"
</p>
      <p className="p--yearbook-superlative">{superlative}</p>
    </div>
)

export default Person
