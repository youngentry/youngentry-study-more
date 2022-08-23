import { useEffect, useState } from "react";

const Loading = () => {
    const [load, setLoad] = useState(false);
    useEffect(() => {
        const loadDelay = setTimeout(() => {
            setLoad(true)
        }, 2000)
        return () => {
            clearTimeout(loadDelay)
        }
    }, [])
    return (

        <section>
            {!load ? '로딩 중입니다.' : '완료'}
        </section>


    )
}

export default Loading;