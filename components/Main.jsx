import React from "react";
import Nav from "./Nav";

export default function Main({ children }) {
  return (
    <main className="min-h-screen overflow-hidden min-w-full max-w-7xl mx-auto bg-slate-600 scrollbar">


      <Nav />
      {children}
    </main>
  );
}
