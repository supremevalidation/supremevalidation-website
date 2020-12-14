import { Route, Switch, HashRouter } from "react-router-dom";
import { Container } from "react-bootstrap";
import { IntlProvider } from "react-intl";
import { useSelector } from "react-redux"

import Turkish from "./language/tr.json";
import English from "./language/en.json";

import Header from "./components/layout/header";
import Footer from "./components/layout/footer";

import Home from "./pages/Home";
import Installation from "./pages/Installation";
import Usage from "./pages/Usage";
import Options from "./pages/Options";
import Classes from "./pages/Classes";
import Attributes from "./pages/Attributes";
import Events from "./pages/Events";
import Browser from "./pages/Browser";
import Contact from "./pages/Contact";
import ErrorPage from "./pages/ErrorPage";

function App() {
    const language = useSelector(state => state.language);

    return (
        <HashRouter>
            <IntlProvider locale={language} messages={language === 'EN' ? English : Turkish}>
                <Header />
                <Container>
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route exact path="/installation" component={Installation} />
                        <Route exact path="/usage" component={Usage} />
                        <Route exact path="/options" component={Options} />
                        <Route exact path="/classes" component={Classes} />
                        <Route exact path="/attributes" component={Attributes} />
                        <Route exact path="/events" component={Events} />
                        <Route exact path="/browser" component={Browser} />
                        <Route exact path="/contact" component={Contact} />
                        <Route component={ErrorPage} />
                    </Switch>
                </Container>
                <Footer />
            </IntlProvider>
        </HashRouter>
    );
}

export default App;