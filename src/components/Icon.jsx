import React from "react";
import emj from "../assets/bored1.svg";
const Icon = (h = "400px", w = "400px",img=emj) => (


    <img
      src={img}
      alt="emoji"
      className="emoji hw"
      style={{ width: w, height: h }}
    />
  
  );
  
  export default Icon;