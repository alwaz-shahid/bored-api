import React from "react";

export default function TaskSearch() {
  return (
    <section className="min-h-[50%] h-52 mx-auto p-4 min-w-[90%] max-w-[90%] ">
      <h1 className="text-yellow-400 xl:text-5xl md:text-2xl font-semibold underline-offset-2 underline py-1 inline-block highl">Bored </h1><span className="text-yellow-400 xl:text-5xl md:text-1xl font-semibold">
        ?
      </span>
      <p className="xl:text-3xl text-red-400">don't worry, we got you covered !</p>
      <p>to kill boredom, do this :</p>

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
    </section>
  );
}
