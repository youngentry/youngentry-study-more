import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";

function App() {
  const monga = "ajsrk";
  const DATA = [
    { id: 1, name: "YOUNG1", content: "어렵다", date: 2022 },
    { id: 2, name: "YOUNG2" },
    { id: 3, name: "YOUNG3" },
    { id: 4, name: "YOUNG4" },
  ];
  return (
    <>
      <Header monga={monga} member={DATA} />
      <Main />
      <Footer />
    </>
  );
}

export default App;
