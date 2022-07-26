const Main = ({ lee, word }) => {
  return (
    <main>
      {lee}는 {word}
    </main>
  );
};

// 전달받은 값이 없을 때 기본으로 전해주는 값
Main.defaultProps = {
  word: "사과",
};
export default Main;
