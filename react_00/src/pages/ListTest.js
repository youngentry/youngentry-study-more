const DATA = [
    { id: 1, name: '이창훈', age: 31, sleep: false },
    { id: 2, name: '김창훈', age: 41, sleep: true },
    { id: 3, name: '박창훈', age: 51, sleep: true }
]

const List = () => {
    return (
        <ul>
            {
                DATA.map(it =>
                    <li key={it.id}>
                        {it.name} {it.age} {it.sleep ? "sleeping" : "playing"}
                    </li>)
            }
        </ul>
    )
}

export default List;