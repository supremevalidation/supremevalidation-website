import { Logo } from '../../svg'
import { Link } from 'react-router-dom'
import { Container } from 'react-bootstrap'
import { FormattedMessage } from 'react-intl'

import Button from '../../form/button'
import Language from './language'

const Header = props => {
    return (
        <Container>
            <header>
                <Link to="/" className="logo">
                    <Logo />
                </Link>
                <nav>
                    <Link to="/installation" className="logo">
                        <Button icon="book" color="algaegreen" title={<FormattedMessage id='header.documentation' defaultMessage="Documentation" />} />
                    </Link>
                    <Language />
                </nav>
            </header>
        </Container>
    )
}

export default Header;