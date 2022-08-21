import React from 'react';
import ReactDom from 'react-dom';
import App from "./components/App";
import  {BrowserRouter} from "react-router-dom";
import {Provider as ReduxProvider} from "react-redux";
import {createStore} from "redux";
import {rootReducer} from "./redux";

/**
 * Pre-state.
 *
 *@var __usdx96
 */

const run = () => {
    const store = createStore(rootReducer, window.__usdx96);
    delete window.__usdx96;

    ReactDom.hydrate(
        <ReduxProvider store={store}>
            <BrowserRouter>
                <App/>
            </BrowserRouter>
        </ReduxProvider> ,
        document.getElementById('root'));
}


//This configuration for @mui
//
// import React from 'react';
// import ReactDom from 'react-dom';
// import CssBaseline from '@mui/material/CssBaseline'
// import { ThemeProvider } from '@mui/material/styles';
// import { CacheProvider } from '@emotion/react';
// import createEmotionCache from "./components/createEmotionCache";
// import MuiTheme from "./components/MuiTheme";
// import App from "./components/App";
//
// const  run = () => {
//     const cache = createEmotionCache();
//
//     ReactDom.hydrate(
//         <CacheProvider value={cache}>
//             <ThemeProvider theme={MuiTheme}>
//                 <CssBaseline/>
//                 <App/>
//             </ThemeProvider>
//         </CacheProvider>,
//         document.getElementById('root')
//     );
// }

run();