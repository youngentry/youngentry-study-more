import { useState } from "react";


const Tab01 = () => {
    return (

        <ul>
            <li>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</li>
            <li>dolor sit amet consectetur adipisicing elit.</li>
            <li>ipsum, dolor sit amet consectetur adipisicing elit.</li>
        </ul>
    )
}
const Tab02 = () => {
    return (

        <ul>
            <li>dolor sit amet consectetur adipisicing elit.</li>
            <li>adipisicing elit.</li>
            <li>i amet consectetur adipisicing elit.</li>
        </ul>
    )
}
const Tab03 = () => {
    return (

        <ul>
            <li>em ipsum, dolor sit amet consectetur adipisicing elit.</li>
            <li>it amet consectetur adipisicing elit.</li>
            <li>sum, dolor sit amet consectetur adipisicing elit.</li>
        </ul>
    )
}

const TabBasic = () => {
    const tabData = [
        { id: 1, menu: 'menu01', content: <Tab01 /> },
        { id: 2, menu: 'menu02', content: <Tab02 /> },
        { id: 3, menu: 'menu03', content: <Tab03 /> },
    ]
    const [tab, setTab] = useState(0)
    return (
        <>
            <ul>
                {
                    tabData.map((it, itNum) => (<li
                        key={it.id}
                        onClick={
                            () => {
                                setTab(itNum);
                            }

                        }
                        className={tab == itNum ? 'on' : ''}>{it.menu}</li>))
                }
            </ul>
            <div className="box">
                {tabData[tab].content}
            </div>
        </>
    )
}

export default TabBasic;