import {Router} from "./router";
import {BrowserRouter} from "react-router-dom";
import {AppLayout} from "./components/app-layout/AppLayout";
import {useSelector} from "react-redux";
import {Loader} from "./components/loader/Loader";


function App() {

    const isLoading = useSelector(state => state.news.isLoading);

    return (
        <BrowserRouter>
            <AppLayout>
                {isLoading ? <Loader isLoading={isLoading} />: <Router />}
            </AppLayout>
        </BrowserRouter>
    );
}

export default App;
