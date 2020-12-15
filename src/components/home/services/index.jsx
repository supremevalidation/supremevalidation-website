import { Row, Col } from "react-bootstrap";
import { FormattedMessage } from "react-intl";
import ServicesItem from "./item"

const Services = props => {
    return (
        <div className="services-section">
            <Row>
                <Col md={6} lg={4}>
                    <ServicesItem
                        icon="rocket"
                        color="sunglo"
                        title={<FormattedMessage id="home.services.rocket.title" defaultMessage="As fast as a Ferrari" />}
                        detail={<FormattedMessage id="home.services.rocket.detail" defaultMessage="High performance and quality code." />}
                    />
                </Col>
                <Col md={6} lg={4}>
                    <ServicesItem
                        icon="cogs"
                        color="portage"
                        title={<FormattedMessage id="home.services.cogs.title" defaultMessage="Simple to use" />}
                        detail={<FormattedMessage id="home.services.cogs.detail" defaultMessage="Easy to use and understandable options." />}
                    />
                </Col>
                <Col md={6} lg={4}>
                    <ServicesItem
                        icon="brush"
                        color="tanhide"
                        title={<FormattedMessage id="home.services.brush.title" defaultMessage="UI/UX" />}
                        detail={<FormattedMessage id="home.services.brush.detail" defaultMessage="User friendly interface." />}
                    />
                </Col>
                <Col md={6} lg={4}>
                    <ServicesItem
                        icon="open-source"
                        color="periwinkle"
                        title={<FormattedMessage id="home.services.openSource.title" defaultMessage="Open source" />}
                        detail={<FormattedMessage id="home.services.openSource.detail" defaultMessage="You can review my code and support me." />}
                    />
                </Col>
                <Col md={6} lg={4}>
                    <ServicesItem
                        icon="book"
                        color="algaegreen"
                        title={<FormattedMessage id="home.services.book.title" defaultMessage="Documentation" />}
                        detail={<FormattedMessage id="home.services.book.detail" defaultMessage="Descriptive and easy to read documentation." />}
                    />
                </Col>
                <Col md={6} lg={4}>
                    <ServicesItem
                        icon="design"
                        color="chenin"
                        title={<FormattedMessage id="home.services.design.title" defaultMessage="Design" />}
                        detail={<FormattedMessage id="home.services.design.detail" defaultMessage="You can use our own form theme if you wish." />}
                    />
                </Col>
            </Row>
        </div>
    )
}

export default Services;