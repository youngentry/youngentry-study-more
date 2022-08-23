import Some from "./some";

const Test = ({ list, age, name, onClick }) => {
    console.log(onClick);
    return (
        <div>
            <button onClick={onClick}>click</button>
            <h2>
                my {list} {age} 친구 {name} list
                <button onClick={() => alert(list)}>click</button>
            </h2>
            <Some list={list} />
            <ul>
                <li>my name</li>
                <li>my name</li>
            </ul>
        </div>
    );
};

export default Test;
