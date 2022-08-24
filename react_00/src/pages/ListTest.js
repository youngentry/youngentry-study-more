const DATA = [
    { id: 1, name: "1창훈", age: 11, sleep: false },
    { id: 2, name: "2창훈", age: 21, sleep: true },
    { id: 3, name: "3창훈", age: 31, sleep: true },
];
const detail = () => {
    return <h2>DATA[0].title</h2>;
};
const List = () => {
    return (
        <ul>
            {/* <li>{DATA[0].name}</li>
            <li>{DATA[1].name}</li>
            <li>{DATA[2].name}</li> */}
            {/* {DATA.map((it) => {
                return <li>{it.name}</li>;
            })} */}
            {/* {DATA[0].name}은 {DATA[0].age}살{DATA[0].sleep && "자고있음"}, true && 문자열 이면 문자열을 출력시킨다. 
            {DATA[1].name}은 {DATA[1].age}살{DATA[1].sleep && "자고있음"},
            {DATA[2].name}은 {DATA[2].age}살{DATA[2].sleep && "자고있음"}, */}
            {/* {DATA.map((it, idx) => (
                <li key={it.id}>
                    {idx + 1}번 {it.name}은 {it.age}살{" "}
                    {it.sleep ? "자고 있음" : "놀고 있음"}
                </li>
            ))
                .slice(0, 2)
                .reverse()} */}
            {DATA.map((it) => (
                <li key={it.id}>
                    {it.name} {it.age} {it.sleep ? "sleep" : "play"}
                </li>
            ))}
        </ul>
    );
};

export default List;
