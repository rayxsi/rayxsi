import React from 'react';
import ReactDomServer from 'react-dom/server.node'
import App from "./components/App";
import  {StaticRouter} from "react-router-dom/server";
import {Provider as ReduxProvider} from "react-redux";
import serialize from 'serialize-javascript';
import store, {StartApiLoader} from "./redux";


/**
 * Dispatch the front end to backend.
 *
 * @var dispatcher
 */

/**
 * Server info.
 *
 * @var  __server
 */

/**
 * Request uri.
 *
 * @var  request_uri
 */

const run = () => {
    const context = {}; //This is for react router

    StartApiLoader().then(() => {
        const html = ReactDomServer.renderToString(
            <ReduxProvider store={store}>
                <StaticRouter location={__server.request_uri} context={context}>
                    <App/>
                </StaticRouter>
            </ReduxProvider>
        );

        const response = {
            html: html,
            initialState: store.getState()
        }

        dispatcher(serialize(response));
    })

}

// //This configuration for @mui.......................
// import CssBaseline from '@mui/material/CssBaseline'
// import { ThemeProvider } from '@mui/material/styles';
// import { CacheProvider } from '@emotion/react';
// import createEmotionServer from '@emotion/runtime/create-instance';
// import createEmotionCache from "./components/createEmotionCache";
// import MuiTheme from "./components/MuiTheme";
//
// const run = () => {
//     const cache = createEmotionCache();
//     const { extractCriticalToChunks, constructStyleTagsFromChunks } =
//         createEmotionServer(cache);
//
//     const html = ReactDomServer.renderToString(
//         <CacheProvider value={cache}>
//             <ThemeProvider theme={MuiTheme}>
//                 <CssBaseline/>
//                 <App/>
//             </ThemeProvider>
//         </CacheProvider>
//     );
//
//     // Grab the CSS from emotion
//     const emotionChunks = extractCriticalToChunks(html);
//     const emotionCss = constructStyleTagsFromChunks(emotionChunks);
//
//     const response = {
//         html: html,
//         css: emotionCss,
//         initialState: store.getState()
//     }
//
//    dispatcher(serialize(response));
// }

run();