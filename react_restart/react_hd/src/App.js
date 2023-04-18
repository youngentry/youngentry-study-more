import { useRef, useState } from "react";
import { CookiesProvider } from 'react-cookie';

import Popup from "./pages/Popup";





const App = () => {
  const [openpop, setOpenpop] = useState(true);



  const onClose = () => {
    setOpenpop(false)
  }

  return (
    <CookiesProvider>
      <div>
        {openpop && <Popup onClose={onClose} />}
      </div>
    </CookiesProvider>
  )
}

export default App;
