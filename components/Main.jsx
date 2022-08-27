import React, { useState } from "react";
import Nav from "./Nav";

export default function Main({ children }) {
  const [anim, setAnim] = useState(true);
  const handleAnim = () => {
    setAnim(!anim);
  }
  let test=anim ? 'animate-fade-in-down' : 'test-b';
  return (
    <main className="min-h-screen overflow-hidden min-w-full max-w-7xl mx-auto scrollbar">
      <Nav />
      <button
        onClick={handleAnim}
      >
        Click me
      </button>
      <Card
        className={`${test} bg-red-500 p-23 w-56 h-56 m-5`}
        color={"--card-clr-red"}
        delay={"500ms"}
      />
      <Card
       className={`${test} bg-gray-500 p-23 w-56 h-56 m-5`}
        color={"--card-clr-violet"}
        delay={"300ms"}
      />
      {/* <Card /> */}
      {children}
    </main>
  );
}

const Card = ({ color, delay, ...rest }) => {
  return (
    <p style={{ color: `var(${color})`, animationDelay: delay }} {...rest}>
      Some Text
    </p>
  );
};
{
  /* <p style={{ color: `var(${color})`,animationDelay:`var(${delay+'ms'})` }} {...rest}>Some Text</p> */
}
