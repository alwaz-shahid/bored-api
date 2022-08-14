import { useState } from "react";
import Icon from "./components/Icon";
import Container from "./components/Container";

function App() {
  const [count, setCount] = useState(0);

  return (
    <Container>

      <main className="content"></main>

      <Icon />
    </Container>
  );
}

export default App;
