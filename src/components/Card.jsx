import React from 'react'
import './Card.css'

function Card({name, abilities}) {
  return (
    <div className='card'>
      <h1 className='name'>{name}</h1>
      <h3>Abilities:</h3>
      <ul className='ability-container'>
        {abilities.map((ability, index) => (
            <li key={index}>{ability}</li>
        ))}
      </ul>
    </div>
  )
}

export default Card