import React from 'react'


//CSS importing
import "../Contact-CSS/Buttons.css"

export default function Buttons({ Name, Link }) {
  return (
    // <div className='Contact-button'>
    //     <a className='Link-tag' href={Link} target="_blank">{Name}</a>
    // </div>

    <a className='Contact-button' href={Link}  rel="noopener noreferrer" target="_blank">
      {Name}
    </a>
  )
}
