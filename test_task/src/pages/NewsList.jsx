import {SmallNewsPanel} from "../components/panels/SmallNewsPanel";
import CssClasses from "./NewsList.module.scss";
import {useSelector} from "react-redux";
import {BigNewsPanel} from "../components/panels/BigNewsPanel";
import {parseDate} from "../utils/parseDate";
import {ScrollTop} from "../components/scroll-top/ScrollTop";

export const NewsList = () => {
    const news = useSelector(state => state.news.newsList);
    return <div className={CssClasses.NewsList}>
        {news.map((news, i) => {
            if(i === 0) {
                return <BigNewsPanel
                    key={news.id}
                    title={news.title}
                    id={news.id}
                    image={news.image}
                    description={news.description}
                    date={parseDate(news.date)}
                />
            }
            return <SmallNewsPanel
                key={news.id}
                id={news.id}
                title={news.title}
                image={news.image}
                description={news.description}
                date={parseDate(news.date)}
            />
        })}
        <ScrollTop />
    </div>
}