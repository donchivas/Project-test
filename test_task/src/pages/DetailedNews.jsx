import CssClasses from "./DetailedNews.module.scss";
import {useParams} from "react-router-dom";
import {useSelector} from "react-redux";
import {Container} from "../components/grids/Container";
import {parseDate} from "../utils/parseDate";
import {ScrollTop} from "../components/scroll-top/ScrollTop";


export const DetailedNews = () => {
    const {id} = useParams();
    const article = useSelector(state => state.news.newsList.find(article => article.id === id));
    return <Container>
        <div className={CssClasses.DetailedNews}>
            <div className={CssClasses.DetailedNewsImageWrapper}>
                <img className={CssClasses.Image} src={article.image} alt=""/>
            </div>
            <div className={CssClasses.TextWrapper}>
                <div className={CssClasses.TopText}>
                    <h1 className={CssClasses.h1}>
                        {article.title}
                    </h1>
                    <div className={CssClasses.AuthorWrapper}>
                        <div className={CssClasses.WrittenBy}>
                            Written by {article.author}
                        </div>
                        <div className={CssClasses.Date}>
                            {parseDate(article.date)}
                        </div>
                    </div>
                </div>
                <div className={CssClasses.lipsumText}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras non eros sit amet eros bibendum sodales. Vivamus vel venenatis urna. Aenean aliquam vel erat sed mollis. Nullam et efficitur libero. Sed consequat justo vel ante vestibulum vulputate. Donec placerat erat sit amet ullamcorper dignissim. Cras mollis eleifend justo, et pulvinar dui condimentum ut. Donec sem libero, rhoncus ut augue at, tempor faucibus tellus. Etiam orci odio, volutpat in commodo eget, commodo vitae enim. Vestibulum imperdiet ultricies lectus, ac suscipit tortor accumsan quis. Nullam at est dictum, pulvinar tellus sit amet, congue felis.

                    Aenean at iaculis nunc, sed gravida turpis. Sed nec dolor lacinia, pulvinar tortor eu, dictum justo. Nunc gravida nisi enim, ut mattis ex blandit nec. Proin consequat purus dui, vel rutrum ante dapibus eu. Phasellus eget molestie augue. Vivamus euismod dui id pharetra sodales. Duis vel placerat ante, id dictum nisl. Mauris vulputate lectus at quam gravida, in vehicula mi sodales. In vehicula ante ut mattis rhoncus. Praesent dapibus dignissim mauris, sit amet lacinia diam ullamcorper quis. Nulla accumsan, velit nec volutpat vulputate, justo lorem consequat diam, et tincidunt ipsum felis vel nulla. Donec et ante ut neque luctus dictum. Cras aliquam faucibus libero et tincidunt. Aliquam tincidunt, lorem vitae condimentum eleifend, elit felis sollicitudin mauris, sit amet mattis arcu odio a tortor. Sed quis commodo sapien.
                </div>
                <div className={CssClasses.lipsumTitle}>
                    Section 1.10.33
                </div>
                <div className={CssClasses.lipsumText}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras non eros sit amet eros bibendum sodales. Vivamus vel venenatis urna. Aenean aliquam vel erat sed mollis. Nullam et efficitur libero. Sed consequat justo vel ante vestibulum vulputate. Donec placerat erat sit amet ullamcorper dignissim. Cras mollis eleifend justo, et pulvinar dui condimentum ut. Donec sem libero, rhoncus ut augue at, tempor faucibus tellus. Etiam orci odio, volutpat in commodo eget, commodo vitae enim. Vestibulum imperdiet ultricies lectus, ac suscipit tortor accumsan quis. Nullam at est dictum, pulvinar tellus sit amet, congue felis.

                    Aenean at iaculis nunc, sed gravida turpis. Sed nec dolor lacinia, pulvinar tortor eu, dictum justo. Nunc gravida nisi enim, ut mattis ex blandit nec. Proin consequat purus dui, vel rutrum ante dapibus eu. Phasellus eget molestie augue. Vivamus euismod dui id pharetra sodales. Duis vel placerat ante, id dictum nisl. Mauris vulputate lectus at quam gravida, in vehicula mi sodales. In vehicula ante ut mattis rhoncus. Praesent dapibus dignissim mauris, sit amet lacinia diam ullamcorper quis. Nulla accumsan, velit nec volutpat vulputate, justo lorem consequat diam, et tincidunt ipsum felis vel nulla. Donec et ante ut neque luctus dictum. Cras aliquam faucibus libero et tincidunt. Aliquam tincidunt, lorem vitae condimentum eleifend, elit felis sollicitudin mauris, sit amet mattis arcu odio a tortor. Sed quis commodo sapien.
                </div>
                <div className={CssClasses.lipsumTitle}>
                    Section 1.10.33
                </div>
                <div className={CssClasses.lipsumText}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras non eros sit amet eros bibendum sodales. Vivamus vel venenatis urna. Aenean aliquam vel erat sed mollis. Nullam et efficitur libero. Sed consequat justo vel ante vestibulum vulputate. Donec placerat erat sit amet ullamcorper dignissim. Cras mollis eleifend justo, et pulvinar dui condimentum ut. Donec sem libero, rhoncus ut augue at, tempor faucibus tellus. Etiam orci odio, volutpat in commodo eget, commodo vitae enim. Vestibulum imperdiet ultricies lectus, ac suscipit tortor accumsan quis. Nullam at est dictum, pulvinar tellus sit amet, congue felis.

                    Aenean at iaculis nunc, sed gravida turpis. Sed nec dolor lacinia, pulvinar tortor eu, dictum justo. Nunc gravida nisi enim, ut mattis ex blandit nec. Proin consequat purus dui, vel rutrum ante dapibus eu. Phasellus eget molestie augue. Vivamus euismod dui id pharetra sodales. Duis vel placerat ante, id dictum nisl. Mauris vulputate lectus at quam gravida, in vehicula mi sodales. In vehicula ante ut mattis rhoncus. Praesent dapibus dignissim mauris, sit amet lacinia diam ullamcorper quis. Nulla accumsan, velit nec volutpat vulputate, justo lorem consequat diam, et tincidunt ipsum felis vel nulla. Donec et ante ut neque luctus dictum. Cras aliquam faucibus libero et tincidunt. Aliquam tincidunt, lorem vitae condimentum eleifend, elit felis sollicitudin mauris, sit amet mattis arcu odio a tortor. Sed quis commodo sapien.
                </div>
                <div className={CssClasses.lipsumTitle}>
                    Section 1.10.33
                </div>
                <div className={CssClasses.lipsumText}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras non eros sit amet eros bibendum sodales. Vivamus vel venenatis urna. Aenean aliquam vel erat sed mollis. Nullam et efficitur libero. Sed consequat justo vel ante vestibulum vulputate. Donec placerat erat sit amet ullamcorper dignissim. Cras mollis eleifend justo, et pulvinar dui condimentum ut. Donec sem libero, rhoncus ut augue at, tempor faucibus tellus. Etiam orci odio, volutpat in commodo eget, commodo vitae enim. Vestibulum imperdiet ultricies lectus, ac suscipit tortor accumsan quis. Nullam at est dictum, pulvinar tellus sit amet, congue felis.

                    Aenean at iaculis nunc, sed gravida turpis. Sed nec dolor lacinia, pulvinar tortor eu, dictum justo. Nunc gravida nisi enim, ut mattis ex blandit nec. Proin consequat purus dui, vel rutrum ante dapibus eu. Phasellus eget molestie augue. Vivamus euismod dui id pharetra sodales. Duis vel placerat ante, id dictum nisl. Mauris vulputate lectus at quam gravida, in vehicula mi sodales. In vehicula ante ut mattis rhoncus. Praesent dapibus dignissim mauris, sit amet lacinia diam ullamcorper quis. Nulla accumsan, velit nec volutpat vulputate, justo lorem consequat diam, et tincidunt ipsum felis vel nulla. Donec et ante ut neque luctus dictum. Cras aliquam faucibus libero et tincidunt. Aliquam tincidunt, lorem vitae condimentum eleifend, elit felis sollicitudin mauris, sit amet mattis arcu odio a tortor. Sed quis commodo sapien.
                </div>
            </div>
        </div>
    </Container>
}