import React, { FC } from "react";
import { useLocalStorage } from "./utils/useLocalStorage";
import "./App.css";

const App: FC<{}> = () => {
  const [localStorage, setLocalStorage] = useLocalStorage("IdToken", 1234);
  return (
    <div className="App">
      <h1>Value: {localStorage} </h1>
      <button onClick={() => setLocalStorage(Math.random() * 10)}>
        Change State
      </button>
    </div>
  );
};

export default App;
