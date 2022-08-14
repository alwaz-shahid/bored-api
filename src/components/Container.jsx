import React from "react";

export default function Container({ children }) {
  return (
    <section className="container">
      {/* <h3 className="bored font-f f5">But hi (:</h3> */}
      <h3 className="bored font-f2 tc fh ">
        Bored
        <span className="bored font-f2 in-bl  f6">af</span>
      </h3>

      {children}
    </section>
  );
}
