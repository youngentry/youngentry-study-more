import { Link, Outlet } from "react-router-dom";

const About = () => {
    return (
        <>
            <div>어바웃</div>
            <Link to="/about/location">위치</Link>
            <Link to="/about/membership">멤버쉽</Link>
            <Outlet></Outlet>
        </>
    );
};

export default About;
