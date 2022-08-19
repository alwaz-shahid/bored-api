import Image from 'next/image'
import React from 'react'

export default function Emoji() {
  return (
    <div className='flex emoji justify-center'>
    <Image src="/assets/bored1.svg" alt="emoji" width={400} height={400} />
  </div>
  )
}
