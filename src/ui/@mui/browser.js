//.......................................................................................//
//This file will create in root directory when developer run command croxo:@mui scaffold//
//.....................................................................................//

import React from 'react';
import ReactDom from 'react-dom';
import CssBaseline from '@mui/material/CssBaseline'
import { ThemeProvider } from '@mui/material/styles';
import { CacheProvider } from '@emotion/react';
import createEmotionCache from "./components/createEmotionCache";
import MuiTheme from "./components/MuiTheme";
import App from "./components/App";

const run = () => {
    const cache = createEmotionCache();

    ReactDom.hydrate(
        <CacheProvider value={cache}>
            <ThemeProvider theme={MuiTheme}>
                <CssBaseline/>
                <App/>
            </ThemeProvider>
        </CacheProvider>,
        document.getElementById('root')
    );
}

run();