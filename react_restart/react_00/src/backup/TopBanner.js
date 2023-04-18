import { useState } from 'react';
import { BsArrowUpSquare } from 'react-icons/bs'

const TopBanner = () => {
    const [toggle, setToggle] = useState(false)
    return (
        <>
            <div className={`TopBanner ${toggle ? 'on' : ''}`}>
                my name is TopBanner
            </div>
            <div className="btn" onClick={() => { setToggle(!toggle) }}>
                <BsArrowUpSquare />
            </div>

        </>
    )
}

export default TopBanner;