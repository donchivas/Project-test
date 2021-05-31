import CssClasses from "./AppLayout.module.scss";
import {Header} from "../header/Header";
import {Container} from "../grids/Container";

export const AppLayout = ({ children }) => {
    return <div className={CssClasses.AppLayout}>
        <Header />
        <Container>
            {children}
        </Container>
    </div>
}