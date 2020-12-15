import { FormattedMessage } from "react-intl";
import { Link } from "react-router-dom";

import Background from "./background";
import CodeWidget from "../../code-widget";
import Button from "../../form/button";

const Splash = props => {
    return (
        <section className="splash-section">
            <Background />
            <article>
                <h1 className="blue"><FormattedMessage id="home.splash.h1" defaultMessage="Supreme Validation" /></h1>
                <h2><FormattedMessage id="home.splash.h2" defaultMessage="Form validation solution for any developer." /></h2>
                <p className="large"><FormattedMessage id="home.splash.p" defaultMessage="Simple to use, good features and user-friendly interface." /></p>
                <div className="d-flex align-items-center justify-content-center flex-column flex-md-row">
                    <Link to="/installation" className="logo">
                        <Button color="azureradiance" large={true} title={<FormattedMessage id="button.getstarted" defaultMessage="Get Started" />} />
                    </Link>
                    <CodeWidget isLarge={true} code="npm install supreme-validation" />
                </div>
            </article>
        </section>
    )
}

export default Splash;