import React from 'react'

import "./Sections.css"

export default function Sections({ pageTitle, pageInfo }) {
  return (
    <section className='Page-section'>
      <p className='Page-Title'>{pageTitle}</p>

      <li className='Sections-info'>{pageInfo}</li>
    </section>
  )
}
