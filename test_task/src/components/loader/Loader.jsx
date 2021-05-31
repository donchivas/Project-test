import CssClasses from "./Loader.module.scss";

export const Loader = ({isLoading = false}) => {
    return <div className={CssClasses.Wrapper}>
        <div className={CssClasses.LoaderRing}>

        </div>
        <div className={CssClasses.LoadingText}>
            Loading...
        </div>
    </div>
}

