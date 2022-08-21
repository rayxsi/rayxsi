//.......................................................................................//
//This file will create in root directory when developer run command croxo:@mui scaffold//
//.....................................................................................//

import React from 'react';
import ReactDomServer from 'react-dom/server.node'
import App from "./components/App";
import CssBaseline from '@mui/material/CssBaseline'
import { ThemeProvider } from '@mui/material/styles';
import { CacheProvider } from '@emotion/react';
import createEmotionServer from '@emotion/server/create-instance';
import createEmotionCache from "./components/createEmotionCache";
import MuiTheme from "./components/MuiTheme";

const run = () => {
    const cache = createEmotionCache();
    const { extractCriticalToChunks, constructStyleTagsFromChunks } =
        createEmotionServer(cache);

    const html = ReactDomServer.renderToString(
        <CacheProvider value={cache}>
            <ThemeProvider theme={MuiTheme}>
                <CssBaseline/>
                <App/>
            </ThemeProvider>
        </CacheProvider>
    );

    // Grab the CSS from emotion
    const emotionChunks = extractCriticalToChunks(html);
    const emotionCss = constructStyleTagsFromChunks(emotionChunks);

    const response = {
        html: html,
        css: emotionCss,
        initialState: store.getState()
    }

   dispatcher(serialize(response));
}

run();