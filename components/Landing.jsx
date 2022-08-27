import React from 'react'
import Image from 'next/image'
import Btn from './Btn'

export default function Landing() {
  return (
    <section className="min-h-[50%] h-52 mx-auto p-4 min-w-[90%] max-w-[90%] ">
    <h1 className="text-yellow-400 xl:text-5xl md:text-2xl font-semibold underline-offset-3">Bored ?</h1>
    <p className="xl:text-3xl text-red-400 py-4">Don't worry, we got you covered!</p>
    <p className="text-2xl ">
      How about <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" className="text-yellow-400">this.</a>
    </p>
    <span className="font-semibold opacity-50 text-xs">ps: you didn't see this one coming :p</span>
    <Btn/>
  </section>
  )
}
