import CssClasses from "./SmallNewsPanel.module.scss";
import {Link} from "react-router-dom";

export const SmallNewsPanel = ({ image, title, date, id, description }) => {
    const link = `/${id}`;
    return <div className={CssClasses.Wrapper}>
        <Link to={link} className={CssClasses.ImgWrapper}>
            <img src={image} className={CssClasses.PanelImage} />
        </Link>
        <div className={CssClasses.BottomWrapper}>
            <div className={CssClasses.PanelTitle}>
                {title}
            </div>
            <div className={CssClasses.PanelDescription}>
                {description}
            </div>
            <div className={CssClasses.PanelBottom}>
                <span>
                    {date}
                </span>
                <Link to={link} className={CssClasses.PanelReadMore}>
                    Read More
                </Link>
            </div>

        </div>
    </div>
}