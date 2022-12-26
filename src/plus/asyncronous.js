import { useState } from "react";

function App() {
    let [state, setState] = useState("ㄱ");
    let word = "ㄴ";

    setState(state + word);
    word = "ㄷ";
    setState(state + word);
}
