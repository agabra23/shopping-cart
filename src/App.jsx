import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <header>
        <h1>Finley's Cheese</h1>
        <nav>
          <ul>
            <li>Home</li>
            <li>Shop</li>
            <li>Cart</li>
          </ul>
        </nav>
      </header>
    </>
  );
}

export default App;
