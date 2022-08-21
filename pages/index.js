import Head from 'next/head'
import Image from 'next/image'
import Main from '../components/Main'
import TaskSearch from '../components/TaskSearch'

export default function Home() {
  return (
    <>
{/* 
      <Head>
        <title>Bored af</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/assets/bored2.svg" />
      </Head> */}
      <div className='animate-rev border min-h-screen w-full transition-all'>

<TaskSearch/>
      </div>

    </>
  )
}
