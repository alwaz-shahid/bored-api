import React from 'react'

export default function Container({children}) {
  return (
    <section className='container'>
          <h3 className="t">But hi (:</h3>
      {children}
    </section>
  )
}
