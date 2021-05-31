import {Container} from "../grids/Container";
import CssClasses from "./Header.module.scss";
import {Link} from "react-router-dom";
import {Input} from "../input/Input";
import {useDispatch, useSelector} from "react-redux";
import {NewsActionTypes} from "../../store/news/actionTypes";
import {useCallback, useEffect, useState} from "react";
import {Api} from "../../api/api";
import {debounce} from "lodash";
import {FaBars, FaBolt, FaTimes} from "react-icons/fa";

const categories = ["technology", "world", "covid", "business", "politics", "science", "religion", "health"];

export const Header = () => {
    const searchQ = useSelector(state => state.news.searchQ);
    const selectedCategory = useSelector(state => state.news.selectedCategory);
    const dispatch = useDispatch();
    const [isMenuOpened, setIsMenuOpened] = useState(false);


    const searchFn =  useCallback(async (q) => {
        dispatch({
            type: NewsActionTypes.START_NEWS_FETCHING,
        });
        let data;
        if (q) {
            data = await Api.search(q, selectedCategory);
        } else {
            data = await Api.fetchNews(selectedCategory);
        }
        dispatch({
            type: NewsActionTypes.FINISHED_NEWS_FETCHING,
            payload: data.data.results
        });
    }, [dispatch, selectedCategory]);


    const debouncedRequest = useCallback(
        debounce((q) => searchFn(q), 500),
        []
    );

    // run search when the component is mounted
    useEffect(() => {
        searchFn("");
    }, []);

    useEffect(() => {
        if(selectedCategory !== "trending") {
            searchFn("");
        }
    }, [selectedCategory]);

    const changeSearchQ = (e) => {
        dispatch({
            type: NewsActionTypes.CHANGE_SEARCH_Q,
            payload: e.target.value,
        });
        debouncedRequest(e.target.value);
    }

    const onReset = () => {
        dispatch({
            type: NewsActionTypes.RESET_SEARCH
        });
        searchFn("");
    }

    const changeCategory = (category) => {
        dispatch({
            type: NewsActionTypes.CHANGE_CATEGORY,
            payload: category,
        });
    }

    const toggleMenuOpened = () => setIsMenuOpened(!isMenuOpened);


    return <Container>
        <header className={CssClasses.Header}>
            <div className={CssClasses.Left}>
                <Link style={{marginRight: 60}} to="/" className={CssClasses.Logo}>news app</Link>
                <Input onReset={onReset} value={searchQ} onChange={changeSearchQ}/>
            </div>
            <div className={CssClasses.Right}>
                {isMenuOpened && <div className={CssClasses.Categories}>
                    <div className={CssClasses.CategoryItemHoverable}>
                        Categories
                        <div className={CssClasses.Dropdown}>
                            <div className={CssClasses.DropdownColumn}>
                                {categories.slice(0, 4).map(category => <div
                                    key={category}
                                    className={CssClasses.DropdownItem}
                                    onClick={() => changeCategory(category)}
                                >
                                    {category}
                                </div>)}
                            </div>
                            <div className={CssClasses.DropdownColumn}>
                                {categories.slice(4).map(category => <div
                                    key={category}
                                    className={CssClasses.DropdownItem}
                                    onClick={() => changeCategory(category)}
                                >
                                    {category}
                                </div>)}
                            </div>
                        </div>
                    </div>

                    <div className={CssClasses.CategoryItem}>
                        Trending News <FaBolt style={{color: "orange"}} />
                    </div>
                </div>}
                <span onClick={toggleMenuOpened}>
                    {isMenuOpened ? <FaTimes className={CssClasses.Icon} /> : <FaBars className={CssClasses.Icon} />}
                </span>
            </div>
        </header>
    </Container>
}