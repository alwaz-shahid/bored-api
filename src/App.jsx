import { useState } from "react";

import "./App.css";
import emj from "./assets/bored1.svg";
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
    <div className="container">
      {/* <h3 className="t">But hi (:</h3> */}
      <main className="content">
      <div className="Iam">

<p className="font-f f5">Bored?</p>
<b>
  <div className="innerIam">
    leggera<br /> 
    a theme in progress<br />
    built on bootstrap<br />
    how I learn stuff<br />
    how we do it
    </div>
</b>

</div>
<h5 className="p"
>
  Testing the <span className="blue">react</span> <span className="red">hooks</span>
</h5>



      </main>


      <Icon/>

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
