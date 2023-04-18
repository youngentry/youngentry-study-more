import { useState } from "react";
import TabContent02 from '../backup/App_api'

const TabContent01 = () => {
    return (
        <ul>
            <li>Lorem ipsum dolor sit.</li>
            <li>Lorem ipsum dolor sit.</li>
            <li>Lorem ipsum dolor sit.</li>
            <li>Lorem ipsum dolor sit.</li>
            <li>Lorem ipsum dolor sit.</li>
        </ul>
    )
}

const TabData = [
    { id: 1, title: "menu01", content: <TabContent02 st={0} ed={10} /> },
    { id: 2, title: "menu02", content: <TabContent02 st={10} ed={20} /> },
    { id: 3, title: "menu03", content: <TabContent02 st={20} ed={30} /> },
]
const Tab = () => {
    const [num, setNum] = useState(0)
    return (
        <>
            <ul>
                {
                    TabData.map((el, idx) => (
                        <li key={el.id}
                            onClick={() => setNum(idx)}
                            className={num == idx ? 'on' : ''}
                        >
                            {el.title}
                        </li>
                    ))
                }
            </ul>
            <div className="content">
                {TabData[num].content}
            </div>
        </>
    )
}

export default Tab;