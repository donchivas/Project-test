import CssClasses from "./BigNewsPanel.module.scss";
import {Link} from "react-router-dom";

export const BigNewsPanel = ({title, description, image, date, id}) => {
    const link = `/${id}`;
    return <div className={CssClasses.Panel}>
        <div className={CssClasses.PanelLeft}>
            <div className={CssClasses.PanelTitle}>
                {title}
            </div>
            <div className={CssClasses.PanelDescription}>
                {description}
            </div>
            <div className={CssClasses.PanelBottom}>
                <span>{date}</span>
                <Link className={CssClasses.PanelReadMore} to={link}>Read More</Link>
            </div>
        </div>
        <div className={CssClasses.PanelRight}>
            <img src={image} width="100%" alt=""/>
        </div>
    </div>
}