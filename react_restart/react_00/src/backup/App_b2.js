import { useState } from 'react';
import Test from './backup/list';

const App = () => {
  const [num, setNum] = useState(1);
  const numHamdler = () => (setNum(num + 1))
  return (
    <>
      <h1>{num}</h1>

      {/* <button onClick={numHamdler}>num plus</button> */}
      <Test list="우영우" name="동그라미" age={21} onClick={numHamdler} />
      <Test list="스위스" name="동그라미" age={21} onClick={numHamdler} />
      <Test list="토마토" name="동그라미" age={21} />
      <Test list="별똥별" name="동그라미" age={21} />
    </>
  )

}
export default App;