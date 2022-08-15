import { useState } from "react";
import Icon from "./components/Icon";
import Container from "./components/Container";
import Nav from "./components/Nav";

function App() {
  const [count, setCount] = useState(0);

  return (
    <Container>
{/* <Nav/>
 */}
      <main className="content"></main>
 <div className="bg-gray-200 p-6">
        <h1 className="text-3xl font-bold underline">

          Hello world!
        </h1>
      </div>

      <Icon />
    </Container>
  );
}

export default App;
