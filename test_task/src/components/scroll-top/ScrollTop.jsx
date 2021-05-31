import {useLayoutEffect, useState} from "react";
import CssClasses from "./ScrollTop.module.scss";
import {FaArrowAltCircleUp} from "react-icons/fa";

export const ScrollTop = () => {

    const [isShown, setIsShown] = useState(false);

    useLayoutEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY;
            if(scrollY > 0 && !isShown) {
                setIsShown(true)
            }
            if(scrollY === 0 && isShown) {
                setIsShown(false);
            }
        }

        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);

    }, [setIsShown, isShown]);

    const onClick = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }

    if(!isShown) {
        return null;
    }

    return <div onClick={onClick} className={CssClasses.Wrapper}>
        Scroll To Top
        <FaArrowAltCircleUp />
    </div>
}