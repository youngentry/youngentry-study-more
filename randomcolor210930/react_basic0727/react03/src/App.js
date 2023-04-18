import { useState } from "react";
import "./App.css";

function App() {
  const [num, setNum] = useState(0);
  const [color, setColor] = useState(false);
  return (
    <div>
      <i className="xi-heart" onClick={() => (setNum(num + 1), setColor(!color))} style={{ color: color && "red" }}></i> {num}
    </div>
  );
}

export default App;
