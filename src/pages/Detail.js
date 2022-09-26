import React from "react";
import { useParams } from "react-router-dom";

const Detail = ({ list }) => {
    const { num } = useParams();
    const match = list.find((it) => it.id === Number(num));

    return (
        <ul>
            <img src={process.env.PUBLIC_URL + match.img} alt="" />
            <div>{match.price}</div>
        </ul>
    );
};
export default Detail;
