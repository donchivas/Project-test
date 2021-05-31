import CssClasses from "./Input.module.scss";
import {FaSearch, FaTimes} from "react-icons/fa"

export const Input = ({ onReset, onChange, value, placeholder = "Type something to start search" }) => {
    return <div className={CssClasses.Wrapper}>
        <input value={value} onChange={onChange} placeholder={placeholder} type="text" className={CssClasses.Input} />
        <div className={CssClasses.Icon}>
            <FaSearch />
        </div>
        {(value && value.toString().length > 0) && <div onClick={onReset} className={CssClasses.ResetIcon}>
            <FaTimes />
        </div>}
    </div>
}