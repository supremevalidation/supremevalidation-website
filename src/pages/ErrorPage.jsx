import { visibilityAction } from "../redux/actions"
import { useEffect } from "react";

const ErrorPage = props => {
    useEffect(() => {
        visibilityAction.changeHeaderVisibility(false);
        visibilityAction.changeFooterVisibility(false);

        return () => {
            visibilityAction.changeHeaderVisibility(true);
            visibilityAction.changeFooterVisibility(true);
        }
    })

    return (
        <div>404</div>
    )
}

export default ErrorPage;