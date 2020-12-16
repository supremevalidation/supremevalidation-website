import Detail from "../components/detail";
import { Row, Col } from "react-bootstrap"
import { Explorer, Edge, Firefox, Opera, Safari, Chrome } from "../components/svg";

const Browser = props => {
    return (
        <Detail {...props}>
            <Row>
                <Col md={6} lg={4}>
                    <div className="browser-card">
                        <Explorer />
                    </div>
                </Col>
                <Col md={6} lg={4}>
                    <div className="browser-card">
                        <Edge />
                    </div>
                </Col>
                <Col md={6} lg={4}>
                    <div className="browser-card">
                        <Firefox />
                    </div>
                </Col>
                <Col md={6} lg={4}>
                    <div className="browser-card">
                        <Opera />
                    </div>
                </Col>
                <Col md={6} lg={4}>
                    <div className="browser-card">
                        <Safari />
                    </div>
                </Col>
                <Col md={6} lg={4}>
                    <div className="browser-card">
                        <Chrome />
                    </div>
                </Col>
            </Row>
        </Detail>
    )
}

export default Browser;