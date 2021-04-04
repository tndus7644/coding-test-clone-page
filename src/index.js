import ReactDom from 'react-dom';
import App from "./App";
import {Router} from "react-router";
import {HISTORY} from './lib/History';
import {ThemeProvider} from "styled-components";
import theme from "./styled/Theme";
import {Provider} from "react-redux";
import {PersistGate} from 'redux-persist/integration/react';
import configureStore from "./redux/store";

const {store, persistor} = configureStore();

ReactDom.render(
    <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
            <ThemeProvider theme={theme}>
                <Router history={HISTORY}>
                    <App/>
                </Router>
            </ThemeProvider>
        </PersistGate>
    </Provider>, document.getElementById('root'));