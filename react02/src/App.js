import Header from "./Header";

function App() {
  // jsx 밖의 주석은 //
  return (
    <header>
      {/* jsx 안의 주석 */}
      <Header style={{ color: "red" }} name="yh" age={3} />
      {/* component 자체에서는 style을 줄 수 없습니다. */}
      <nav>
        <ul>
          <li>
            <a href="" style={{ color: "red", fontSize: "40px" }}>
              menu01
            </a>
          </li>
          <li>
            <a href="">menu02</a>
          </li>
          <li>
            <a href="">menu03</a>
          </li>
          <li>
            <a href="">menu04</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default App;
