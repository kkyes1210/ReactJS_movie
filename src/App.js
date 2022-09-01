import { useState, useEffect } from "react";
//useEffect는 두개의 argument를 가지는 function
//첫번째 argument: 딱 한번만 실행할 코드

function App() {
  const [counter, setValue] = useState(0);
  const onClick = () => setValue((prev) => prev + 1);
  console.log("I run all the time");
  /*const iRunOnlyOnce = () => {
    console.log("i run only once.");
  };
  useEffect(iRunOnlyOnce, []);*/
  useEffect(() => {
    console.log("call the api...");
  }, []);
  return (
    <div>
      <h1>{counter}</h1>
      <button onClick={onClick}>click me</button>
    </div>
  );
}

export default App;
