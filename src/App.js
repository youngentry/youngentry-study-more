import React, { useRef, useState } from "react";
import ListDiary from "./ListDiary";
import EditDiary from "./EditDiary";

import "./css/reset.css";
import "./css/basic.scss";

const App = () => {
    const [diaryList, setDiaryList] = useState([]);

    return (
        <div>
            <EditDiary diaryList={diaryList} setDiaryList={setDiaryList} />
            <ListDiary diaryList={diaryList} setDiaryList={setDiaryList} />
        </div>
    );
};

export default App;
