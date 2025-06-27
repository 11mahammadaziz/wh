import { useEffect, useState } from "react";
import { ClickerCount } from "./components/clickerCount/ClickerCount";
import { LiveTimer } from "./components/liveTimer/LiveTimer";

function App() {
  const [count, setCount] = useState(0);
  const [time, setTime] = useState(0);

  const handleClick = () => {
    setCount((prev) => prev + 1);
  };

  useEffect(() => {
    let interval = setInterval(() => {
      setTime((prev) => prev + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="App">
      <ClickerCount count={count} onClick={() => handleClick()} />
      <LiveTimer time={time} />
    </div>
  );
}

export default App;
