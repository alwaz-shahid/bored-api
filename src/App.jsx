import { useState } from "react";

import "./App.css";
import emj from "./assets/bored1.svg";
import Wel from "./WEl";
let opt = [
  "education",
  "recreational",
  "social",
  "diy",
  "charity",
  "cooking",
  "relaxation",
  "music",
  "busywork",
];
const url="http://www.boredapi.com/api/activity/"

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="">
<Wel/>
      {/* <h3 className="t">But hi (:</h3> */}
      <main className="content">

      </main>

      {/* <Icon/> */}

    </div>
  );
}

export default App;

const Icon = (h = "400px", w = "400px",img=emj) => (


  <img
    src={img}
    alt="emoji"
    className="emoji hw"
    style={{ width: w, height: h }}
  />

);
