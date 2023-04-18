import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import Wrapper from "./Wrapper";

const App = () => {
  return (
    <Wrapper>
      <Header />
      <Main lee="a" word="apple" />
      <Main lee="b" word="banana" />
      <Main lee="c" word="carrot" />
      <Main lee="d" />
      <Footer />
    </Wrapper>
  );
};

export default App;
