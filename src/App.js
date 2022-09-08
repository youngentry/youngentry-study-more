import { useState } from "react";
import "./App.css";
import MainSlider from "./component/MainSlider";

const DB = [
    {
        id: 1,
        content: "menu01",
        link: "/",
        submenu: [
            { content: "submenu01", link: "/1" },
            { content: "submenu02", link: "/2" },
            { content: "submenu03", link: "/3" },
        ],
    },
    {
        id: 2,
        content: "menu02",
        link: "/",
        submenu: [
            { content: "submenu01", link: "/1" },
            { content: "submenu02", link: "/2" },
            { content: "submenu03", link: "/3" },
        ],
    },
    {
        id: 3,
        content: "menu03",
        link: "/",
        submenu: [
            { content: "submenu01", link: "/1" },
            { content: "submenu02", link: "/2" },
            { content: "submenu03", link: "/3" },
        ],
    },
];

function App() {
    const [CB, setCB] = useState("");
    const [TG, setTG] = useState(false);
    return (
        <div className="Wrap">
            <header>
                <h1 className={CB} onClick={() => setCB("on")}>
                    LOGO
                </h1>
                <h2 className={`abc ${TG ? "on" : ""}`}>Toggle Class</h2>
                <button onClick={() => setTG(!TG)}>Class 토글</button>
                <nav className="GNB">
                    <ul>
                        {DB.map((it, idx) => (
                            <li key={idx}>
                                <a href={it.link}>{it.content}</a>
                                <ul className="smenu">
                                    {it.submenu.map((smenu, idx) => (
                                        <li key={idx}>
                                            <a href={smenu.link}>
                                                {smenu.content}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </li>
                        ))}
                    </ul>
                </nav>
            </header>
            <main>
                <MainSlider />
            </main>
        </div>
    );
}

export default App;
