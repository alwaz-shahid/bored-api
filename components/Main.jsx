import React from 'react'
import Emoji from './Emoji'

export default function Main({children}) {
  return (
    <main className='h-screen min-w-full'>
      <h1 className='text-4xl font bored'>Bored af</h1>

      <Emoji/>
      {children}
    </main>
  )
}
