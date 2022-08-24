import React from "react";
import Image from 'next/image'
export default function TaskSearch() {
  return (
    <section className="min-h-[50%] h-52 mx-auto p-4 min-w-[90%] max-w-[90%] ">
      <h1 className="text-yellow-400 xl:text-5xl md:text-2xl font-semibold underline-offset-3 inline-block top-10 relative -right-12 underline rotate-90">Bored </h1>
      <p className="xl:text-3xl text-red-400 py-4">Don't worry, we got you covered!</p>

      <Image src="/assets/bored1.svg" alt="emoji" width={100} height={100} className="m-4 animate-fade-in-down" />

      {/* <form className="flex flex-col items-center p-2 min-w-full">
        <div className="flex flex-col items-center">
          <label className=" min-w-full text-yellow-400">
            <input
              className="bg-gray-900 border-2 p-1 min-w-full border-yellow-400 rounded-md"
              type="text"
              placeholder="Search"
            />
          </label>
        </div>
      </form> */}
      <p className="text-2xl ">
        How about <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" className="text-yellow-400">this.</a>
      </p>
      <span className="font-semibold opacity-50 text-xs">ps: you didn't see this one coming :p</span>
    </section>
  );
}


let gifs=[]