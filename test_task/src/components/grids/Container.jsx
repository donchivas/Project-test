import CssClasses from "./Container.module.scss";

export const Container = ({ children }) => {
    return <div className={CssClasses.Container}>
        {children}
    </div>
}