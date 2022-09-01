import Button from "./Button";
import styles from "./App.module.css";
import { useState } from "react";

function App() {
  const [counter, setValue] = useState(0);
  const onClick = () => setValue((prev) => prev + 1);
  //state를 변경할 때 모든 코드들은 항상 다시 실행된다.
  //가끔 component 내부의 몇몇 코드는 처음 한번만 실행되고 다시는 실행되도록 하고 싶지 않을때 --> 6.1내용
  console.log("call an api");
  return (
    <div>
      <h1>{counter}</h1>
      <button onClick={onClick}>click me</button>
    </div>
  );
}

export default App;
