import ReactDom from 'react-dom';
import App from "./App";
import {Router} from "react-router";
import {HISTORY} from './lib/History';
import {ThemeProvider} from "styled-components";
import theme from "./styled/Theme";

ReactDom.render(
    <ThemeProvider theme={theme}>
        <Router history={HISTORY}>
            <App/>
        </Router>
    </ThemeProvider>,
    document.getElementById('root'));