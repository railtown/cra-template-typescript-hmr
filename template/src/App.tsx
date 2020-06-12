import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { hot } from "react-hot-loader/root";
import Something from "./Something";

function App() {
  const [count, setCount] = useState(0);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <p>This is cool</p>
        <Something />
        <p>
          <button
            onClick={() => {
              setCount(count - 2);
            }}
          >
            -
          </button>
          Count {count}
          <button
            onClick={() => {
              setCount(count + 2);
            }}
          >
            +
          </button>
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default process.env.NODE_ENV === "development" ? hot(App) : App;
