import Some from './some';
const Test = ({ list, age, name, onClick }) => {
    console.log(onClick)
    return (
        <div>
            <button onClick={onClick}>^^*</button>
            <h2>
                my {list} {age} 친구 {name} list
                <button onClick={
                    () => (
                        alert(list)
                    )
                }>click</button>
            </h2>
            <Some list={list} />
            <ul>
                <li>Lorem, ipsum dolor sit amet.</li>
                <li>Lorem, ipsum dolor sit amet.</li>
                <li>Lorem, ipsum dolor sit amet.</li>
                <li>Lorem, ipsum dolor sit amet.</li>
                <li>Lorem, ipsum dolor sit amet.</li>
                <li>Lorem, ipsum dolor sit amet.</li>
            </ul>
        </div>
    )
}

export default Test;