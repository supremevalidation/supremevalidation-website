import { FormattedMessage } from "react-intl";
import Detail from "../components/detail";

const Attributes = props => {
    return (
        <Detail {...props}>
            <article className="detail-item">
                <h4>error-message</h4>
                <p className="feature"><strong><FormattedMessage id="sidebar.api.options.type" defaultMessage="Type" />:</strong> String</p>
                <p>
                    <FormattedMessage id="sidebar.api.attributes.errorMessage.detail" defaultMessage="Custom error message after fail validation." />
                </p>
            </article>
            <article className="detail-item">
                <h4>min-check</h4>
                <p className="feature"><strong><FormattedMessage id="sidebar.api.options.type" defaultMessage="Type" />:</strong> Number</p>
                <p>
                    <FormattedMessage id="sidebar.api.attributes.minCheck.detail" defaultMessage="Determines the minimum amount of options to be selected." />
                </p>
            </article>
            <article className="detail-item">
                <h4>min</h4>
                <p className="feature"><strong><FormattedMessage id="sidebar.api.options.type" defaultMessage="Type" />:</strong> Number</p>
                <p>
                    <FormattedMessage id="sidebar.api.attributes.min.detail" defaultMessage="Determines the minimum amount of text to be written." />
                </p>
            </article>
        </Detail>
    )
}

export default Attributes;