import { FormattedMessage } from "react-intl";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Logo } from "../../svg";
import Button from "../../form/button";

const Footer = props => {
    return (
        <footer>
            <Logo />
            <Container>
                <div className="d-flex align-items-center align-md-items-end justify-content-between flex-column flex-md-row">
                    <strong><a href={"https://yasinkalkan.com/"} target="blank">Yasin Burak Kalkan</a> © 2020</strong>
                    <Link to="/installation" className="logo">
                        <Button color="white" title={<FormattedMessage id="button.getstarted" defaultMessage="Get Started" />} />
                    </Link>
                </div>
            </Container>
        </footer>
    )
}

export default Footer;