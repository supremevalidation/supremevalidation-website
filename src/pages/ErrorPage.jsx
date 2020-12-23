import { visibilityAction } from "../redux/actions"
import { Link } from "react-router-dom"
import { useEffect } from "react";
import { Logo } from "../components/svg";
import { FormattedMessage } from "react-intl";

import Button from "../components/form/button";

const ErrorPage = props => {
    useEffect(() => {
        visibilityAction.changeHeaderVisibility(false);
        visibilityAction.changeFooterVisibility(false);

        return () => {
            visibilityAction.changeHeaderVisibility(true);
            visibilityAction.changeFooterVisibility(true);
        }
    }, [])

    return (
        <div className="error-section">
            <Logo />
            <h1 className="blue xlarge">404</h1>
            <h2 className="small">
                <FormattedMessage id="404.message" defaultMessage="Page not found." />
            </h2>
            <Link to="/" className="logo">
                <Button icon="home" color="algaegreen" title={<FormattedMessage id="button.home" defaultMessage="Home" />} />
            </Link>
        </div>
    )
}

export default ErrorPage;