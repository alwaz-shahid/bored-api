import React from 'react'

export default function Btn() {
  return (
    <button
    type="button"
    data-mdb-ripple="true"
    data-mdb-ripple-color="light"
    className="inline-block px-6 py-2.5 bg-neutral-600 text-white font-medium text-xs 
    leading-tight uppercase rounded shadow-md hover:bg-slate-700 hover:shadow-lg focus:bg-slate-700 focus:shadow-lg
     focus:outline-none focus:ring-0 active:bg-slate-800 active:shadow-lg transition duration-150 ease-in-out"
  >Click me</button>
  )
}
