//.......................................................................................//
//This component file will create in js/components directory when developer run command croxo:@mui scaffold//
//.....................................................................................//

import { createTheme } from '@mui/material/styles';
import { green, grey } from '@mui/material/colors';

const MuiTheme = createTheme({
    palette: {
        primary: {
            main: grey[500],
        },
        secondary: {
            main: green[500],
        },
    },
});

export default MuiTheme;