import { useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";

const Event = () => {
    return (
        <>
            <h2>오늘의 이벤트</h2>
            <Link to="/event/one">One</Link>
            <Link to="/event/two">Two</Link>
            <Outlet></Outlet>
        </>
    );
};

export default Event;
