import { useState, useEffect, useRef } from "react";

const Top = () => {
    const [position, setPosition] = useState(null);
    const subscribe = useRef(false);

    const getScrollPosition = () => {
        window.addEventListener("scroll", () => {
            setPosition(window.scrollY);
        });
    }

    const goTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    useEffect(() => {
        subscribe.current = true;

        if(subscribe.current){
            getScrollPosition();
        }

        return () => subscribe.current = false;
    }, [position]);

    return (
        <div className="top-container">
            { Math.round(position) !== 0 && <button onClick={() => goTop() } className="btn btn-primary"><i className="bi bi-caret-up-fill"></i></button> }
        </div>
    )
}

export default Top
