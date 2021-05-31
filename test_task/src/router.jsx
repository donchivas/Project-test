import { Switch, Route } from "react-router-dom";
import {NewsList} from "./pages/NewsList";
import {DetailedNews} from "./pages/DetailedNews";

export const Router = () => {
    return <Switch>
        <Route exact path="/">
            <NewsList />
        </Route>
        <Route path="/:id">
            <DetailedNews />
        </Route>
    </Switch>
}