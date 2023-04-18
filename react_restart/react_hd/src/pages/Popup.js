import { useRef, useState } from "react";
import { useCookies } from "react-cookie";
import { BsCheck2Square } from "react-icons/bs";
import pop from '../css/Popup.module.css';

const Popup = ({ onClose, onCookie }) => {
    console.log(new Date(Date.now()))
    const [cookies, setCookie, removeCookie] = useCookies(['pop']);
    //<img src={process.env.PUBLIC_URL + '/logo192.png'} /> 

    //     import Cookies from 'universal-cookie';

    // const cookies = new Cookies();
    // const current = new Date();
    // const nextYear = new Date();

    // nextYear.setFullYear(current.getFullYear() + 1);

    // cookies.set('cookieName', true, {
    //     path: '/',
    //     expires: nextYear,
    // });

    const checkHandler = (e) => {
        e.target.checked
            ? setCookie('pop', true, { path: '/', expires: new Date((Date.now() + 1000 * 60 * 60)) })
            : removeCookie('pop')
            ;
    }
    return (
        <div className={pop.Popup}>
            <div className={pop.Pop__}>
                <img src="../images/500_650.png" />
                <div className={pop.Pop__tab}>
                    <span>
                        <input type="checkbox" onChange={checkHandler} /> 오늘 하루 열지 않기
                    </span>
                    <button className={pop.Pop__close} data-color='on' onClick={onClose}>
                        <BsCheck2Square />
                    </button>
                </div>
            </div>
        </div>
    )
}
export default Popup;